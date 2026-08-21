export const latestContent = {
  id: "featured-placeholder",
  title: "Das nächste Kapitel beginnt hier.",
  description: "Hier erscheint demnächst das neueste Video von DerSchmentor.",
  category: "Neu auf YouTube",
  href: "#",
  image: "/visuals/featured",
  imageAlt: "Abstraktes Platzhalter-Visual für das neueste DerSchmentor-Video",
};

export const formats = [
  {
    title: "From Zero to Champion",
    eyebrow: "F1-Serie",
    description: "Vom ersten Start bis ganz nach vorn. Vermutlich mit Umwegen.",
    variant: "wide",
  },
  {
    title: "Challenges",
    eyebrow: "Challenges & Experimente",
    description: "Schlechte Ideen, konsequent zu Ende gedacht.",
    variant: "tall",
  },
  {
    title: "Gaming",
    eyebrow: "Games & Multiplayer",
    description: "Kompetitiv. Kooperativ. Kontrolliert eskalierend.",
    variant: "standard",
  },
  {
    title: "IRL",
    eyebrow: "Events, Reisen & Real Life",
    description: "Wenn der Bildschirm zu klein für die Idee wird.",
    variant: "standard",
  },
] as const;

export const socials = [
  { name: "YouTube", handle: "Videos & Premieren", href: "#" },
  { name: "TikTok", handle: "Clips & Chaos", href: "#" },
  { name: "Instagram", handle: "Stories & Einblicke", href: "#" },
  { name: "Twitch", handle: "Live & ungeschnitten", href: "#" },
] as const;
