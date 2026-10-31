"use client";

import Link from "next/link";
import { site } from "@/lib/data";
import type { NavItem } from "@/components/site-chrome";

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export function MobileMenu({ nav, onClose }: { nav: NavItem[]; onClose: () => void }) {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu-head">
        <span className="nav-brand" style={{ marginRight: 0 }}>
          {site.name}
          <span className="nav-dot">.</span>
        </span>
        <button onClick={onClose} aria-label="Close menu" className="icon-btn">
          <CloseIcon />
        </button>
      </div>
      <div className="mobile-menu-links">
        {nav.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={i === nav.length - 1 ? "mobile-menu-link mobile-menu-link--accent" : "mobile-menu-link"}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
