export const siteLinks = {
  youtube: "https://www.youtube.com/@DerSchmentor",
  tiktok: "https://www.tiktok.com/@der.schmentor?lang=de-DE",
  instagram: "https://www.instagram.com/derschmentor/",
  twitch: "https://www.twitch.tv/derschmentor",
  discord: "https://discord.gg/Q2ty7ybQ9",
  contactEmail: "business.derschmentor@gmail.com",
} as const;

export const latestContent = {
  id: "BrEWdBKW35Y",
  title: "Wir sind zum Fichtelevent getrampt…",
  description: "Jetzt auf dem DerSchmentor YouTube-Kanal.",
  category: "Neu auf YouTube",
  href: "https://www.youtube.com/watch?v=BrEWdBKW35Y",
  image: "https://i.ytimg.com/vi/BrEWdBKW35Y/maxresdefault.jpg",
  imageAlt: "Thumbnail des Videos „Wir sind zum Fichtelevent getrampt…“",
};

export const formats = [
  {
    title: "From Zero to Champion",
    eyebrow: "F1-Serie",
    description: "Vom ersten Start bis ganz nach vorn. Vermutlich mit Umwegen.",
    variant: "wide",
    href: "https://www.youtube.com/watch?v=d_ANOC3S8Q8&t=19s",
    image: "https://i.ytimg.com/vi/d_ANOC3S8Q8/maxresdefault.jpg",
    imageAlt: "YouTube-Thumbnail von From Zero to Champion",
  },
  {
    title: "Challenge",
    eyebrow: "Challenges & Experimente",
    description: "Schlechte Ideen, konsequent zu Ende gedacht.",
    variant: "tall",
    href: "https://www.youtube.com/watch?v=jVZHOkv7Z1k&t=7s",
    image: "https://i.ytimg.com/vi/jVZHOkv7Z1k/maxresdefault.jpg",
    imageAlt: "YouTube-Thumbnail des Challenge-Formats",
  },
  {
    title: "Gaming",
    eyebrow: "Games & Multiplayer",
    description: "Kompetitiv. Kooperativ. Kontrolliert eskalierend.",
    variant: "standard",
    href: "https://www.youtube.com/watch?v=uP1RGaOXn_4&t=94s",
    image: "https://i.ytimg.com/vi/uP1RGaOXn_4/maxresdefault.jpg",
    imageAlt: "YouTube-Thumbnail des Gaming-Formats",
  },
  {
    title: "IRL",
    eyebrow: "Events, Reisen & Real Life",
    description: "Wenn der Bildschirm zu klein für die Idee wird.",
    variant: "standard",
    href: "https://www.youtube.com/watch?v=lfpz30b_p5s&t=10s",
    image: "https://i.ytimg.com/vi/lfpz30b_p5s/maxresdefault.jpg",
    imageAlt: "YouTube-Thumbnail des IRL-Formats",
  },
] as const;

export const socials = [
  { name: "YouTube", handle: "Videos & Premieren", href: siteLinks.youtube },
  { name: "TikTok", handle: "Clips & Chaos", href: siteLinks.tiktok },
  { name: "Instagram", handle: "Stories & Einblicke", href: siteLinks.instagram },
  { name: "Twitch", handle: "Live & ungeschnitten", href: siteLinks.twitch },
] as const;
