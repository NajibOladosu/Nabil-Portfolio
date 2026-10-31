import type { Metadata } from "next";
import { SiteChrome } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: {
    absolute: "Nabil Ibrahim-Oladosu · Full-Stack Software Engineer",
    template: "%s · Nabil Ibrahim-Oladosu",
  },
  description:
    "Nabil Ibrahim-Oladosu is a full-stack software engineer building web apps, mobile apps and APIs in TypeScript, Angular, Node and Go, and shipping them on AWS.",
  keywords: ["software engineer", "full-stack developer", "Angular", "Ionic", "TypeScript", "Go", "AWS", "Nabil Ibrahim-Oladosu"],
  openGraph: {
    title: "Nabil Ibrahim-Oladosu · Full-Stack Software Engineer",
    description: "Full-stack software from the database to the last pixel: Angular, Ionic, Node, Go and AWS.",
    type: "website",
  },
};

const NAV = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteChrome nav={NAV} tagline="Full-stack software engineer: TypeScript, Angular, Go & AWS. Lagos, Nigeria · Remote.">
      {children}
    </SiteChrome>
  );
}
