// location: src/components/SiteHeader.tsx
"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

type MenuKey = "design" | "portfolio" | "contact";

export default function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const uid = useId();
  const panelId = (k: MenuKey) => `eli-dd-${k}-${uid}`;

  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpenMenu(null);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenMenu(null);
    }
    document.addEventListener("mousedown", onDocMouseDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  function toggle(k: MenuKey) {
    setOpenMenu((v) => (v === k ? null : k));
  }

  function btnProps(k: MenuKey) {
    const isOpen = openMenu === k;
    return {
      "aria-haspopup": true as const,
      "aria-controls": panelId(k),
      "aria-expanded": isOpen, // BOOLEAN (this is what Axe expects)
      onClick: () => toggle(k),
    };
  }

  return (
    <header className="eliSiteHeader">
      <style
        dangerouslySetInnerHTML={{
          __html: `
/* =========================
   ELI HEADER — NAV DROPDOWNS
   Alignment locked + minimal dropdown
   ========================= */

.eliSiteHeader .eliNav{
  display:flex;
  align-items:center;
  gap:22px;
}

.eliSiteHeader .eliNav__link,
.eliSiteHeader .eliNav__dropdownBtn{
  display:inline-flex;
  align-items:center;
  height:34px;
  line-height:34px;
  padding:0;
  margin:0;
  white-space:nowrap;
  font:inherit;
  color:inherit;
  letter-spacing:inherit;
  text-transform:inherit;
  vertical-align:middle;
  -webkit-appearance:none;
  appearance:none;
}

.eliSiteHeader .eliNav__dropdown{
  position:relative;
  display:inline-flex;
  align-items:center;
}

.eliSiteHeader .eliNav__dropdownBtn{
  border:0;
  background:transparent;
  cursor:pointer;
}

.eliSiteHeader .eliNav__caret{
  font-size:11px;
  line-height:1;
  margin-left:8px;
  opacity:.6;
  display:inline-block;
}

.eliSiteHeader .eliNav__dropdownPanel{
  position:absolute;
  top:calc(100% + 8px);
  left:50%;
  transform:translateX(-50%);
  z-index:9999;
  min-width:190px;
  padding:2px 0;
  background:rgba(255,255,255,.98);
  border:1px solid rgba(0,0,0,.10);
  border-radius:8px;
  box-shadow:0 8px 18px rgba(0,0,0,.08);
}

.eliSiteHeader .eliNav__dropdownLink{
  display:block;
  padding:7px 12px;
  text-decoration:none;
  color:inherit;
  opacity:.92;
  font:inherit;
  line-height:1.15;
  white-space:nowrap;
}
.eliSiteHeader .eliNav__dropdownLink:hover{
  background:rgba(0,0,0,.04);
}
          `,
        }}
      />

      <div className="eliSiteHeader__inner" ref={wrapRef}>
        <Link href="/" className="eliBrand" aria-label="ELI Land Design">
          <span className="eliBrand__mark">ELI</span>
          <span className="eliBrand__sub">Land Design</span>
        </Link>

        <nav className="eliNav" aria-label="Primary">
          <Link href="/" className="eliNav__link">
            Home
          </Link>

          <Link href="/about" className="eliNav__link">
            About
          </Link>

          {/* DESIGN */}
          <div className="eliNav__dropdown">
            <button
              type="button"
              className="eliNav__link eliNav__dropdownBtn"
              {...btnProps("design")}
            >
              Design <span className="eliNav__caret" aria-hidden="true">▾</span>
            </button>

            {openMenu === "design" ? (
              <div className="eliNav__dropdownPanel" id={panelId("design")}>
                <Link
                  href="/design/commercial"
                  className="eliNav__dropdownLink"
                  onClick={() => setOpenMenu(null)}
                >
                  Commercial
                </Link>
                <Link
                  href="/design/residential"
                  className="eliNav__dropdownLink"
                  onClick={() => setOpenMenu(null)}
                >
                  Residential
                </Link>
              </div>
            ) : null}
          </div>

          <Link href="/construction" className="eliNav__link">
            Construction
          </Link>

          {/* PORTFOLIO */}
          <div className="eliNav__dropdown">
            <button
              type="button"
              className="eliNav__link eliNav__dropdownBtn"
              {...btnProps("portfolio")}
            >
              Portfolio <span className="eliNav__caret" aria-hidden="true">▾</span>
            </button>

            {openMenu === "portfolio" ? (
              <div className="eliNav__dropdownPanel" id={panelId("portfolio")}>
                <Link
                  href="/projects"
                  className="eliNav__dropdownLink"
                  onClick={() => setOpenMenu(null)}
                >
                  Projects
                </Link>
                <Link
                  href="/gallery"
                  className="eliNav__dropdownLink"
                  onClick={() => setOpenMenu(null)}
                >
                  Gallery
                </Link>
                <Link
                  href="/guiding-ideas"
                  className="eliNav__dropdownLink"
                  onClick={() => setOpenMenu(null)}
                >
                  Guiding Ideas
                </Link>
              </div>
            ) : null}
          </div>

          {/* CONTACT */}
          <div className="eliNav__dropdown">
            <button
              type="button"
              className="eliNav__link eliNav__dropdownBtn"
              {...btnProps("contact")}
            >
              Contact <span className="eliNav__caret" aria-hidden="true">▾</span>
            </button>

            {openMenu === "contact" ? (
              <div className="eliNav__dropdownPanel" id={panelId("contact")}>
                <Link
                  href="/contact-us"
                  className="eliNav__dropdownLink"
                  onClick={() => setOpenMenu(null)}
                >
                  Contact Us
                </Link>
                <Link
                  href="/testimonials"
                  className="eliNav__dropdownLink"
                  onClick={() => setOpenMenu(null)}
                >
                  Testimonials
                </Link>
                <Link
                  href="/careers"
                  className="eliNav__dropdownLink"
                  onClick={() => setOpenMenu(null)}
                >
                  Careers at ELI
                </Link>
                <Link
                  href="/idea-center"
                  className="eliNav__dropdownLink"
                  onClick={() => setOpenMenu(null)}
                >
                  Idea Center
                </Link>
              </div>
            ) : null}
          </div>
        </nav>
      </div>
    </header>
  );
}
