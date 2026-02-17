// location: src/app/design/residential/before-after/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Before + After | Residential Design | ELI Land Design",
  description:
    "Before + After residential landscape transformations. Layout, grading, planting, and materials shown clearly.",
  alternates: { canonical: "/design/residential/before-after" },
};

const shell = "eliPage";
const surface =
  "bg-black/[0.02] ring-1 ring-black/10 shadow-[0_18px_55px_-40px_rgba(0,0,0,0.22)]";
const card = "rounded-3xl ring-1 ring-black/10 bg-white/60";

export default function BeforeAfterPage() {
  return (
    <div className={shell}>
      <div className={`${surface} p-7 md:p-10`}>
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-black/90">
            Before + After
          </h1>
          <Link
            href="/design/residential"
            className="rounded-2xl bg-white/70 px-4 py-2 text-sm text-black/70 ring-1 ring-black/10 hover:bg-white"
          >
            ← Back
          </Link>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className={`${card} overflow-hidden`}>
            <div className="relative aspect-[16/10] w-full">
              <img
                src="/images/design/residential/before-after/hero.jpg"
                alt="Before + After placeholder"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/40" />
            </div>
          </div>

          <div className={`${card} p-6`}>
            <div className="text-[11px] tracking-[0.28em] uppercase text-black/55">
              Transformation
            </div>
            <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-black/70">
              This page is a gallery stub for owner review. Next step: a photo grid with paired
              before/after sets and a lightbox viewer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
