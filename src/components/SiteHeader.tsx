// location: src/components/SiteHeader.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/design", label: "Landscape Architecture" },
  { href: "/construction", label: "Landscape Construction" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/projects", label: "Projects" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKeyDown);
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

          <div className="eliNav__dropdown" ref={wrapRef}>
            <button
              type="button"
              className="eliNav__link eliNav__dropdownBtn"
              aria-haspopup="true"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              Contact Us{" "}
              <span className="eliNav__caret" aria-hidden="true">
                ▾
              </span>
            </button>

            {open ? (
              <div className="eliNav__dropdownPanel">
                <Link
                  href="/contact-us"
                  className="eliNav__dropdownLink"
                  onClick={() => setOpen(false)}
                >
                  Contact Page
                </Link>

                <a className="eliNav__dropdownLink" href="tel:+12812592610">
                  Call: 281.259.2610
                </a>

                <a className="eliNav__dropdownLink" href="tel:+12812592622">
                  Fax: 281.259.2622
                </a>
              </div>
            ) : null}
          </div>
        </nav>
      </div>
    </header>
  );
}
