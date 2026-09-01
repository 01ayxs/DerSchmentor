import "server-only";

import { cache } from "react";
import { latestContent, type LatestContentItem } from "@/lib/site-data";

const YOUTUBE_API_BASE_URL = "https://www.googleapis.com/youtube/v3";
const YOUTUBE_HANDLE = "@DerSchmentor";
const YOUTUBE_REVALIDATE_SECONDS = 15 * 60;

const fallbackStats = {
  subscriberCount: 242,
  videoCount: 41,
};

export type YouTubeChannelData = {
  subscriberCount: number;
  videoCount: number;
  latestVideo: LatestContentItem;
};

export const youtubeFallbackData: YouTubeChannelData = {
  ...fallbackStats,
  latestVideo: latestContent,
};

type YouTubeChannelResponse = {
  items?: Array<{
    statistics?: {
      subscriberCount?: string;
      videoCount?: string;
    };
    contentDetails?: {
      relatedPlaylists?: {
        uploads?: string;
      };
    };
  }>;
};

type YouTubeThumbnail = {
  url?: string;
};

type YouTubePlaylistResponse = {
  items?: Array<{
    snippet?: {
      title?: string;
      description?: string;
      resourceId?: {
        videoId?: string;
      };
      thumbnails?: {
        default?: YouTubeThumbnail;
        medium?: YouTubeThumbnail;
        high?: YouTubeThumbnail;
        standard?: YouTubeThumbnail;
        maxres?: YouTubeThumbnail;
      };
    };
    contentDetails?: {
      videoId?: string;
      videoPublishedAt?: string;
    };
  }>;
};

class YouTubeApiError extends Error {}

async function fetchYouTube<T>(
  resource: "channels" | "playlistItems",
  parameters: Record<string, string>,
  apiKey: string,
): Promise<T> {
  const url = new URL(`${YOUTUBE_API_BASE_URL}/${resource}`);

  for (const [key, value] of Object.entries(parameters)) {
    url.searchParams.set(key, value);
  }

  url.searchParams.set("key", apiKey);

  const response = await fetch(url, {
    headers: { Accept: "application/json" },
    next: { revalidate: YOUTUBE_REVALIDATE_SECONDS },
    signal: AbortSignal.timeout(8_000),
  });

  if (!response.ok) {
    throw new YouTubeApiError(`YouTube API returned status ${response.status}.`);
  }

  return (await response.json()) as T;
}

function parseCount(value: string | undefined, fallback: number) {
  const parsedValue = Number.parseInt(value ?? "", 10);
  return Number.isSafeInteger(parsedValue) && parsedValue >= 0 ? parsedValue : fallback;
}

function reportYouTubeError(context: string, error: unknown) {
  const message = error instanceof Error ? error.message : "Unknown server error.";
  console.error(`[YouTube] ${context} ${message}`);
}

function getThumbnailUrl(item: NonNullable<YouTubePlaylistResponse["items"]>[number]) {
  const thumbnails = item.snippet?.thumbnails;

  return (
    thumbnails?.maxres?.url ??
    thumbnails?.standard?.url ??
    thumbnails?.high?.url ??
    thumbnails?.medium?.url ??
    thumbnails?.default?.url
  );
}

export const getYouTubeChannelData = cache(async (): Promise<YouTubeChannelData> => {
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    console.warn("[YouTube] YOUTUBE_API_KEY is not configured. Using fallback content.");
    return youtubeFallbackData;
  }

  let channel: NonNullable<YouTubeChannelResponse["items"]>[number];

  try {
    const response = await fetchYouTube<YouTubeChannelResponse>(
      "channels",
      {
        part: "statistics,contentDetails",
        forHandle: YOUTUBE_HANDLE,
        maxResults: "1",
      },
      apiKey,
    );

    const firstChannel = response.items?.[0];

    if (!firstChannel) {
      throw new YouTubeApiError(`No channel found for ${YOUTUBE_HANDLE}.`);
    }

    channel = firstChannel;
  } catch (error) {
    reportYouTubeError("Channel data could not be loaded.", error);
    return youtubeFallbackData;
  }

  const subscriberCount = parseCount(channel.statistics?.subscriberCount, fallbackStats.subscriberCount);
  const videoCount = parseCount(channel.statistics?.videoCount, fallbackStats.videoCount);
  const uploadsPlaylistId = channel.contentDetails?.relatedPlaylists?.uploads;

  if (!uploadsPlaylistId) {
    console.error("[YouTube] The channel response did not include an uploads playlist.");
    return { subscriberCount, videoCount, latestVideo: latestContent };
  }

  try {
    const response = await fetchYouTube<YouTubePlaylistResponse>(
      "playlistItems",
      {
        part: "snippet,contentDetails",
        playlistId: uploadsPlaylistId,
        maxResults: "1",
      },
      apiKey,
    );

    const latestItem = response.items?.[0];
    const videoId = latestItem?.contentDetails?.videoId ?? latestItem?.snippet?.resourceId?.videoId;
    const title = latestItem?.snippet?.title?.trim();
    const thumbnailUrl = latestItem ? getThumbnailUrl(latestItem) : undefined;

    if (!latestItem || !videoId || !title || !thumbnailUrl) {
      throw new YouTubeApiError("The latest upload response was incomplete.");
    }

    return {
      subscriberCount,
      videoCount,
      latestVideo: {
        id: videoId,
        title,
        description: "Jetzt auf dem DerSchmentor YouTube-Kanal.",
        category: "Neu auf YouTube",
        href: `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`,
        image: thumbnailUrl,
        imageAlt: `Thumbnail des Videos „${title}“`,
      },
    };
  } catch (error) {
    reportYouTubeError("The latest upload could not be loaded.", error);
    return { subscriberCount, videoCount, latestVideo: latestContent };
  }
});
