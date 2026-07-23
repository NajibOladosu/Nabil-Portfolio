import type { Metadata } from "next";
import { Caprasimo, Figtree } from "next/font/google";
import { ThemeInitScript } from "@/components/theme-init-script";
import { SiteChrome } from "@/components/site-chrome";
import "./globals.css";

const caprasimo = Caprasimo({
  variable: "--font-heading",
  weight: "400",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nabil Ibrahim-Oladosu — SEO Content Writer | Anime, Manga & Gaming",
    template: "%s — Nabil Ibrahim-Oladosu",
  },
  description:
    "Nabil Ibrahim-Oladosu is an SEO content writer covering anime, manga and gaming — 600+ published articles and 150,000+ organic views across Soap Central, Deltia's Gaming and Game Rant.",
  keywords: ["SEO content writer", "anime writer", "manga writer", "gaming writer", "freelance writer", "Nabil Ibrahim-Oladosu"],
  authors: [{ name: "Nabil Ibrahim-Oladosu" }],
  openGraph: {
    title: "Nabil Ibrahim-Oladosu — SEO Content Writer",
    description: "Words that rank. Stories worth the binge. Anime, manga & gaming coverage across Soap Central, Deltia's Gaming and Game Rant.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${caprasimo.variable} ${figtree.variable}`}>
      <head>
        <ThemeInitScript />
      </head>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
