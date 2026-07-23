"use client";

import Link from "next/link";
import { site } from "@/lib/data";

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export function MobileMenu({ onClose }: { onClose: () => void }) {
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
        <Link href="/" onClick={onClose} className="mobile-menu-link">
          Home
        </Link>
        <Link href="/work" onClick={onClose} className="mobile-menu-link">
          Work
        </Link>
        <Link href="/about" onClick={onClose} className="mobile-menu-link">
          About
        </Link>
        <Link href="/contact" onClick={onClose} className="mobile-menu-link mobile-menu-link--accent">
          Contact
        </Link>
      </div>
    </div>
  );
}
