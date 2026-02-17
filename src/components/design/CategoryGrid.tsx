// location: src/components/design/CategoryGrid.tsx
import Link from "next/link";
import Image from "next/image";
import { DESIGN_HUB, DesignMode } from "@/content/designHubs";

const cardBase =
  "group relative overflow-hidden ring-1 ring-black/10 bg-white/60";
const cardFooter =
  "px-6 py-4 md:px-7 md:py-5 border-t border-black/10 flex items-center justify-between";

export default function CategoryGrid({ mode }: { mode: DesignMode }) {
  const hub = DESIGN_HUB[mode];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {hub.categories.map((c) => (
        <Link
          key={c.slug}
          href={`${hub.basePath}/${c.slug}`}
          className={`${cardBase} block`}
        >
          <div className="relative h-[190px] md:h-[220px]">
            <Image
              src={c.imageSrc}
              alt={`${c.title} preview`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/40" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
              <div className="text-[11px] tracking-[0.28em] uppercase text-white/70">
                {c.eyebrow}
              </div>
              <div className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-white">
                {c.title}
              </div>
            </div>
          </div>

          <div className={cardFooter}>
            <div className="text-[11px] tracking-[0.22em] uppercase text-black/55">
              Gallery
            </div>
            <div className="text-sm font-semibold text-black/80 underline underline-offset-4">
              Explore →
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
