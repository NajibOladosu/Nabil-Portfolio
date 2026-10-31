"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { SiteNav } from "@/components/site-nav";
import { MobileMenu } from "@/components/mobile-menu";
import { SiteFooter } from "@/components/site-footer";

export type NavItem = { href: string; label: string };

const BackgroundScene = dynamic(() => import("@/components/background-scene").then((m) => m.BackgroundScene), {
  ssr: false,
});

function subscribeThemeAttr(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
function getThemeSnapshot(): "light" | "dark" {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}
function getServerThemeSnapshot(): "light" | "dark" {
  return "light";
}

export function SiteChrome({
  children,
  nav,
  tagline,
}: {
  children: ReactNode;
  nav: NavItem[];
  tagline: string;
}) {
  const theme = useSyncExternalStore(subscribeThemeAttr, getThemeSnapshot, getServerThemeSnapshot);
  const [menuOpen, setMenuOpen] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = matchMedia("(pointer:fine)").matches;
    if (!fine) return;
    const onMove = (e: PointerEvent) => {
      if (glowRef.current) {
        glowRef.current.style.opacity = ".9";
        glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const r = el.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        if (Math.hypot(dx, dy) < 130) {
          el.style.transform = `translate(${dx * 0.24}px, ${dy * 0.24}px)`;
        } else {
          el.style.transform = "";
        }
      });
    };
    const onLeave = () => {
      if (glowRef.current) glowRef.current.style.opacity = "0";
    };
    addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const toggleTheme = useCallback(() => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    localStorage.setItem("nabil-theme", next);
    document.documentElement.setAttribute("data-theme", next);
  }, []);

  return (
    <>
      <div className="bg-layer" aria-hidden="true">
        <div className="bg-blob bg-blob--one" />
        <div className="bg-blob bg-blob--two" />
        <BackgroundScene theme={theme} motionEnabled />
        <div className="bg-noise" />
      </div>

      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />

      <div className="site-content">
        <SiteNav nav={nav} theme={theme} onToggleTheme={toggleTheme} onOpenMenu={() => setMenuOpen(true)} />
        {menuOpen && <MobileMenu nav={nav} onClose={() => setMenuOpen(false)} />}
        <main>{children}</main>
        <SiteFooter tagline={tagline} />
      </div>
    </>
  );
}
