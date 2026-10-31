import { SiteChrome } from "@/components/site-chrome";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function WritingLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteChrome nav={NAV} tagline="SEO content writer covering anime, manga & gaming. Lagos, Nigeria · Remote.">
      {children}
    </SiteChrome>
  );
}
