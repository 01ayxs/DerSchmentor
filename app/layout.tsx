import type { Metadata, Viewport } from "next";
import "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://derschmentor.de"),
  title: "DerSchmentor – Gaming, Challenges & Entertainment",
  description:
    "Gaming, Challenges und Entertainment – Content von DerSchmentor, der selten ganz nach Plan läuft.",
  openGraph: {
    title: "DerSchmentor – Gaming, Challenges & Entertainment",
    description:
      "Gaming, Challenges und Entertainment – Content, der selten ganz nach Plan läuft.",
    type: "website",
    locale: "de_DE",
    siteName: "DerSchmentor",
  },
  twitter: {
    card: "summary_large_image",
    title: "DerSchmentor – Gaming, Challenges & Entertainment",
    description:
      "Gaming, Challenges und Entertainment – Content, der selten ganz nach Plan läuft.",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#050505",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
