// src/app/about/page.tsx
import StandardBottomCTA from "@/components/StandardBottomCTA";

/**
 * ABOUT — MUST MATCH HOME (Editorial / Warm-Light)
 * ✅ Local-only assets (public/)
 */

const ASSETS = {
  hero: "/images/about/hero.jpg",
  aboutMain: "/images/about/about-main.jpg",
  teamChris: "/images/about/team-chris.jpg",
  teamMatt: "/images/about/team-matt.jpg",

  // NOTE: Make sure these filenames match what exists in /public/images/about/
  woodhavenThumb: "/images/about/project-woodhaven.jpg",
  vargosThumb: "/images/about/project-vargos.jpg",
  southforkThumb: "/images/about/project-southfork.jpg",
  tenOaksThumb: "/images/about/project-tenoaks.jpg",
  brochureCover: "/images/about/brochure-cover.jpg",
} as const;

const DOWNLOADS = {
  woodhaven: "/projects/downloads/woodhaven-village.pdf",
  vargos: "/projects/downloads/vargos.pdf",
  southfork: "/projects/downloads/southfork.pdf",
  tenOaks: "/projects/downloads/ten-oaks.pdf",
  brochure: "/projects/downloads/eli-land-design-brochure.pdf",
} as const;

// Home-aligned editorial tokens (warm-light, thin borders, REAL elevation)
const page = "bg-[#F5F1EA] text-[#151515]";
const wrap = "mx-auto w-full max-w-6xl px-4";
const section = "py-10 md:py-14";

// Floating panels (stronger shadow, still tasteful)
const card =
  "bg-white/70 border border-black/10 shadow-[0_34px_110px_-80px_rgba(0,0,0,0.55)]";
const tile =
  "bg-white/60 border border-black/10 shadow-[0_26px_90px_-70px_rgba(0,0,0,0.45)]";

// Micro text styles
const kicker =
  "text-[11px] tracking-[0.18em] uppercase text-black/60 font-semibold";
const h1 = "text-3xl md:text-5xl font-semibold tracking-tight";
const h2 = "text-2xl md:text-3xl font-semibold tracking-tight";
const h3 = "text-lg md:text-xl font-semibold tracking-tight";
const body = "text-[15px] md:text-base leading-relaxed text-black/75";

type DownloadRowProps = {
  title: string;
  href: string;
};

function DownloadRow({ title, href }: DownloadRowProps) {
  return (
    <a
      href={href}
      className={
        "group flex items-center justify-between " +
        "border border-black/10 bg-white/60 px-4 py-3 " +
        "shadow-[0_18px_70px_-60px_rgba(0,0,0,0.35)] " +
        "hover:bg-white/80 transition"
      }
    >
      <div>
        <div className="text-sm font-semibold text-black/85">{title}</div>
        <div className="text-xs text-black/55">Open PDF</div>
      </div>
      <div className="text-xs font-semibold tracking-wide text-black/60 group-hover:text-black/80">
        Download →
      </div>
    </a>
  );
}

export default function About() {
  return (
    <div className={page}>
      {/* TOP HEADER */}
      <div className={`${wrap} ${section}`}>
        <div className="max-w-3xl">
          <div className={kicker}>About ELI</div>
          <h1 className={`${h1} mt-3`}>
            HOUSTON & THE WOODLANDS
            <br />
            LANDSCAPE ARCHITECTS & CONTRACTORS
          </h1>
          <p className={`${body} mt-4`}>
            Since 1997, E.L.I. land design has approached outdoor environments as
            part of the architecture — planned, detailed, and executed as a
            cohesive whole.
          </p>
        </div>

        <div className="mt-8">
          <div
            className={
              "overflow-hidden border border-black/10 bg-white/40 " +
              "shadow-[0_34px_110px_-80px_rgba(0,0,0,0.55)]"
            }
          >
            <img
              src={ASSETS.hero}
              alt="ELI Land Design"
              loading="lazy"
              className="h-[180px] md:h-[240px] w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ABOUT BLOCK */}
      <div className={`${wrap} ${section}`}>
        <div className={`${card} overflow-hidden`}>
          <div className="grid gap-0 md:grid-cols-12">
            <div className="md:col-span-5">
              <img
                src={ASSETS.aboutMain}
                alt="About ELI Land Design"
                loading="lazy"
                className="h-full min-h-[260px] w-full object-cover"
              />
            </div>
            <div className="md:col-span-7 p-6 md:p-8">
              <div className={kicker}>Who we are</div>
              <h2 className={`${h2} mt-2`}>
                A unified team for planning, design, and execution
              </h2>
              <p className={`${body} mt-4`}>
                E.L.I. land design was founded in 1997 with a simple goal: raise
                the standard for landscape work by combining strong design
                thinking with build-ready documentation and disciplined
                construction.
              </p>
              <p className={`${body} mt-4`}>
                Our process reduces handoffs and protects design intent —
                resulting in outdoor spaces that feel cohesive, durable, and
                aligned with the architecture and the character of the site.
              </p>
              <p className={`${body} mt-4`}>We look forward to meeting you.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className={`${tile} p-5`}>
            <div className={kicker}>Approach</div>
            <div className={`${h3} mt-2`}>Design clarity</div>
            <p className={`${body} mt-2`}>
              Concept, circulation, and composition that hold together as a
              complete plan.
            </p>
          </div>
          <div className={`${tile} p-5`}>
            <div className={kicker}>Deliverable</div>
            <div className={`${h3} mt-2`}>Buildable documentation</div>
            <p className={`${body} mt-2`}>
              Details that support consistency and craftsmanship in the field.
            </p>
          </div>
          <div className={`${tile} p-5`}>
            <div className={kicker}>Outcome</div>
            <div className={`${h3} mt-2`}>Accountable execution</div>
            <p className={`${body} mt-2`}>
              Design intent carried through — so the finished site matches the
              vision.
            </p>
          </div>
        </div>
      </div>

      {/* TEAM */}
      <div className={`${wrap} ${section}`}>
        <div className="max-w-3xl">
          <div className={kicker}>Our team</div>
          <h2 className={`${h2} mt-2`}>
            Hands-on leadership from design through construction
          </h2>
          <p className={`${body} mt-3`}>
            Experienced, detail-oriented, and accountable — the work is personal
            to the people leading it.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className={`${card} overflow-hidden`}>
            <div className="grid gap-0 md:grid-cols-12">
              <div className="md:col-span-5">
                <img
                  src={ASSETS.teamChris}
                  alt="Chris K. Eiseman, RLA"
                  loading="lazy"
                  className="h-full min-h-[280px] w-full object-cover"
                />
              </div>
              <div className="md:col-span-7 p-6 md:p-8">
                <div className={kicker}>Founder</div>
                <h3 className={`${h3} mt-2`}>Chris K. Eiseman, RLA</h3>
                <p className={`${body} mt-4`}>
                  Chris founded E.L.I. land design in 1997 and has built a
                  reputation for honesty, quality craftsmanship, and design
                  leadership that carries through to the final build.
                </p>
                <p className={`${body} mt-4`}>
                  Contact:{" "}
                  <a
                    className="underline text-black/80 hover:text-black"
                    href="mailto:chris@elilanddesign.com"
                  >
                    chris@elilanddesign.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className={`${card} overflow-hidden`}>
            <div className="grid gap-0 md:grid-cols-12">
              <div className="md:col-span-5 md:order-2">
                <img
                  src={ASSETS.teamMatt}
                  alt="Matt Louderback, RLA"
                  loading="lazy"
                  className="h-full min-h-[280px] w-full object-cover"
                />
              </div>
              <div className="md:col-span-7 md:order-1 p-6 md:p-8">
                <div className={kicker}>Registered Landscape Architect</div>
                <h3 className={`${h3} mt-2`}>Matt Louderback, RLA</h3>
                <p className={`${body} mt-4`}>
                  Matt joined E.L.I. land design in 2012 and supports the full
                  project lifecycle — design, documentation, and visual
                  communication that helps clients and builders align.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DOWNLOADS */}
      <div className={`${wrap} ${section}`}>
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className={kicker}>Downloads</div>
            <h2 className={`${h2} mt-2`}>Project pages and brochure</h2>
            <p className={`${body} mt-3`}>Local PDFs packaged with this build.</p>
          </div>

          <div className="md:col-span-7">
            <div className="space-y-3">
              <DownloadRow
                title="Woodhaven Village — Project Page"
                href={DOWNLOADS.woodhaven}
              />
              <DownloadRow
                title="Vargos — Project Page"
                href={DOWNLOADS.vargos}
              />
              <DownloadRow
                title="Southfork — Project Page"
                href={DOWNLOADS.southfork}
              />
              <DownloadRow
                title="Ten Oaks — Project Page"
                href={DOWNLOADS.tenOaks}
              />
              <DownloadRow
                title="ELI Land Design — Brochure"
                href={DOWNLOADS.brochure}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
