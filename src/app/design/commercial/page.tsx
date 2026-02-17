// location: src/app/design/commercial/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Commercial Design | ELI Land Design",
  description:
    "Commercial landscape architecture and design—site planning, circulation, grading, materials, and planted systems. Explore galleries by project type.",
  alternates: { canonical: "/design/commercial" },
};

const surface =
  "bg-black/[0.02] ring-1 ring-black/10 shadow-[0_18px_55px_-40px_rgba(0,0,0,0.22)]";
const chip =
  "inline-flex items-center gap-2 text-[11px] tracking-[0.35em] uppercase text-black/60";
const h1 = "text-3xl md:text-5xl font-semibold tracking-tight text-black/90";
const lead = "text-sm md:text-[15px] leading-relaxed text-black/70";

function CategoryCard({
  title,
  href,
  imageSrc,
  note,
  blurb,
}: {
  title: string;
  href: string;
  imageSrc: string;
  note: string;
  blurb: string;
}) {
  return (
    <Link href={href} className="group block ring-1 ring-black/10 bg-white">
      {/* Image */}
      <div className="relative h-[220px] md:h-[260px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={`${title} preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          priority
        />
        {/* Subtle image overlay only (no text here) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/20" />
      </div>

      {/* Text (LIGHT SAFE) */}
      <div className="p-6 md:p-7 border-t border-black/10">
        <div className="text-[11px] tracking-[0.32em] uppercase text-black/55">
          {note}
        </div>

        <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-black/90">
          {title}
        </h2>

        <p className="mt-3 text-sm md:text-[14px] leading-relaxed text-black/70">
          {blurb}
        </p>

        <div className="mt-5 text-sm font-semibold text-black/80 underline underline-offset-4">
          Explore →
        </div>
      </div>
    </Link>
  );
}

export default function CommercialDesignPage() {
  return (
    <PageShell>
      <div className="eliPage">
        {/* HERO */}
        <header className={`${surface} p-7 md:p-10`}>
          <div className={chip}>Design • Commercial</div>

          <div className="mt-3 grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <h1 className={h1}>Commercial Design</h1>

              <p className={`mt-5 ${lead}`}>
                Landscape architecture for commercial environments—focused on{" "}
                <span className="font-semibold text-black/80">
                  circulation, grading, materials,
                </span>{" "}
                and{" "}
                <span className="font-semibold text-black/80">planted systems</span>{" "}
                that perform across schedule, maintenance, and budget constraints.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Site planning",
                  "Circulation",
                  "Grading + drainage",
                  "Materials",
                  "Plant systems",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-xs text-black/70 bg-white ring-1 ring-black/10 px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Hero image */}
            <div className="md:col-span-5">
              <div className="relative h-[220px] md:h-[260px] ring-1 ring-black/10 overflow-hidden bg-white">
                <Image
                  src="/images/design/commercial/commercial-panel.png"
                  alt="Commercial design hero"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
              </div>
            </div>
          </div>
        </header>

        {/* CATEGORY GRID */}
        <section className="mt-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-[11px] tracking-[0.35em] uppercase text-black/55">
                Explore by category
              </div>
              <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-black/90">
                Galleries with dedicated pages.
              </h2>
            </div>

            <Link
              href="/projects"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-black/70 underline underline-offset-4"
            >
              View built work →
            </Link>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <CategoryCard
              title="Lifestyle Center"
              href="/design/commercial/lifestyle-center"
              imageSrc="/images/design/commercial/lifestyle-center.jpg"
              note="Retail + Public Realm"
              blurb="Entry sequences, plazas, pedestrian flow, and durable materials that elevate the experience."
            />
            <CategoryCard
              title="Multifamily"
              href="/design/commercial/multifamily"
              imageSrc="/images/design/commercial/multifamily.jpg"
              note="Community + Amenity"
              blurb="Amenity courts, pool decks, lighting, planting strategy, and circulation designed for daily use."
            />
            <CategoryCard
              title="Office"
              href="/design/commercial/office"
              imageSrc="/images/design/commercial/office.jpg"
              note="Campus + Streetscape"
              blurb="Arrival, circulation, signage zones, planting systems, and clean detailing across a cohesive site plan."
            />
            <CategoryCard
              title="Renderings"
              href="/design/commercial/renderings"
              imageSrc="/images/design/commercial/renderings.jpg"
              note="Concept Visualization"
              blurb="High-confidence concepts and visual direction used to align teams before the build phase."
            />
          </div>

          <div className="mt-8 md:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-black/70 underline underline-offset-4"
            >
              View built work →
            </Link>
          </div>
        </section>

        {/* FEATURED STRIP */}
        <section className="mt-14 ring-1 ring-black/10 bg-white">
          <div className="grid gap-0 md:grid-cols-12">
            <div className="relative h-[220px] md:h-[260px] md:col-span-5 overflow-hidden">
              <Image
                src="/images/design/commercial/commercial-panel.png"
                alt="Featured commercial design"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/20" />
            </div>

            <div className="p-7 md:p-10 md:col-span-7">
              <div className="text-[11px] tracking-[0.35em] uppercase text-black/55">
                Featured focus
              </div>
              <h3 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-black/90">
                Clean details. Real-world execution.
              </h3>
              <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-black/70">
                Our commercial work is designed to hold up to schedule pressure, site constraints,
                and long-term maintenance. The goal is simple:{" "}
                <span className="font-semibold text-black/80">
                  a design that looks sharp and builds clean.
                </span>
              </p>

              <div className="mt-6">
                <Link
                  href="/construction"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-black/80 underline underline-offset-4"
                >
                  How we build →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* No local bottom CTA here (StandardBottomCTA is global) */}
      </div>
    </PageShell>
  );
}
