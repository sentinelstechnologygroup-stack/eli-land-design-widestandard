// location: src/app/design/commercial/lifestyle-center/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Lifestyle Center | Commercial Design | ELI Land Design",
  description:
    "Lifestyle Center commercial landscape design gallery. Concept work, amenity spaces, and pedestrian-oriented environments.",
  alternates: { canonical: "/design/commercial/lifestyle-center" },
};

const surface =
  "bg-black/[0.02] ring-1 ring-black/10 shadow-[0_18px_55px_-40px_rgba(0,0,0,0.22)]";
const card = "ring-1 ring-black/10 bg-white";

export default function LifestyleCenterPage() {
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
                Lifestyle Center
              </h1>
              <p className="mt-4 max-w-3xl text-sm md:text-[15px] leading-relaxed text-black/70">
                Retail + public realm environments—entry sequences, plazas, pedestrian flow, and durable materials.
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
                src="/images/design/commercial/lifestyle-center/hero.jpg"
                alt="Lifestyle Center placeholder"
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
              Lightweight now. Gallery next.
            </h2>
            <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-black/70">
              Next step: convert this into a photo grid + lightbox gallery while keeping the site’s minimal-scroll feel.
            </p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
