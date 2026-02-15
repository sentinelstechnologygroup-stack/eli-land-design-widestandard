// location: src/components/SiteHeader.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const nav = [
  { href: "/about", label: "About" },
  { href: "/guiding-ideas", label: "Guiding Ideas" },
  { href: "/design", label: "Design" },
  { href: "/construction", label: "Construction" },
  { href: "/projects", label: "Projects" },
];

const contactMenu = [
  { href: "/contact-us", label: "Contact Us" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/careers-at-eli", label: "Careers at ELI" },
  { href: "/guiding-ideas", label: "Idea Center" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <header className="eliSiteHeader">
      <div className="eliSiteHeader__inner">
        <Link href="/" className="eliBrand" aria-label="ELI Land Design">
          <span className="eliBrand__mark">ELI</span>
          <span className="eliBrand__sub">Land Design</span>
        </Link>

        <nav className="eliNav" aria-label="Primary">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="eliNav__link">
              {i.label}
            </Link>
          ))}

          {/* Contact dropdown (semantic, no ARIA menu roles) */}
          <div className="eliNav__dropdown" ref={wrapRef}>
            <button
              type="button"
              className="eliNav__link eliNav__dropdownBtn"
              aria-haspopup="true"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              Contact Us <span className="eliNav__caret">▾</span>
            </button>

            {open ? (
              <div className="eliNav__dropdownPanel" aria-label="Contact links">
                {contactMenu.map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    className="eliNav__dropdownItem"
                    onClick={() => setOpen(false)}
                  >
                    {i.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </nav>
      </div>
    </header>
  );
}
