import { About } from "@/components/sections/about";
import { LatestContent } from "@/components/sections/latest-content";
import { getYouTubeChannelData } from "@/lib/server/youtube";

export async function LatestYouTubeContent() {
  const { latestVideo } = await getYouTubeChannelData();
  return <LatestContent content={latestVideo} />;
}

export async function YouTubeStats() {
  const { subscriberCount, videoCount } = await getYouTubeChannelData();
  return <About subscriberCount={subscriberCount} videoCount={videoCount} />;
}
