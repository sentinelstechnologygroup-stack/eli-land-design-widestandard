// location: src/app/design/commercial/office/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Office | Commercial Design | ELI Land Design",
  description:
    "Office commercial landscape design gallery. Campus entries, outdoor workspaces, and low-maintenance planting systems.",
  alternates: { canonical: "/design/commercial/office" },
};

const surface =
  "bg-black/[0.02] ring-1 ring-black/10 shadow-[0_18px_55px_-40px_rgba(0,0,0,0.22)]";
const card = "ring-1 ring-black/10 bg-white";

export default function OfficePage() {
  return (
    <PageShell>
      <div className="eliPage">
        <header className={`${surface} p-7 md:p-10`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-[11px] tracking-[0.35em] uppercase text-black/55">
                Commercial Design
              </div>
              <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-black/90">
                Office
              </h1>
              <p className="mt-4 max-w-3xl text-sm md:text-[15px] leading-relaxed text-black/70">
                Campus entries, outdoor workspaces, signage zones, and cohesive planting systems designed for long-term performance.
              </p>
            </div>

            <Link
              href="/design/commercial"
              className="ring-1 ring-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/70 hover:bg-black/[0.02] transition"
            >
              ← Back
            </Link>
          </div>
        </header>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className={`${card} overflow-hidden`}>
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/design/commercial/office/hero.jpg"
                alt="Office placeholder"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className={`${card} p-7`}>
            <div className="text-[11px] tracking-[0.35em] uppercase text-black/55">
              Gallery stub
            </div>
            <h2 className="mt-3 text-xl md:text-2xl font-semibold tracking-tight text-black/90">
              Grid + lightbox pattern next.
            </h2>
            <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-black/70">
              Next: add image categories for entries, courtyards, outdoor rooms, and detail vignettes—same grid + lightbox pattern as other categories.
            </p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
