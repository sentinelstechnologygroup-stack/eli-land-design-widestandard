// src/components/StandardBottomCTA.tsx
import React from "react";

type StandardBottomCTAProps = {
  kicker?: string;
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  note?: string;
};

export default function StandardBottomCTA({
  kicker = "Next step",
  title = "Schedule a landscape design consultation",
  body = "Tell us what you want the space to do. We’ll outline a clear plan and next steps.",
  primaryLabel = "Contact Us Now",
  primaryHref = "/request-a-consultation",
  secondaryLabel,
  secondaryHref,
  note,
}: StandardBottomCTAProps) {
  return (
    <section className="bg-transparent">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 md:py-12">
        <div className="bg-white/70 border border-black/10 shadow-[0_10px_30px_-26px_rgba(0,0,0,0.35)]">
          <div className="grid gap-6 md:grid-cols-12 items-center p-6 md:p-10">
            {/* Copy */}
            <div className="md:col-span-8">
              <div className="text-[11px] tracking-[0.18em] uppercase text-black/60 font-semibold">
                {kicker}
              </div>

              <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight text-[#151515]">
                {title}
              </h2>

              <p className="mt-3 text-[15px] md:text-base leading-relaxed text-black/75">
                {body}
              </p>

              {note ? (
                <p className="mt-3 text-xs leading-relaxed text-black/55">{note}</p>
              ) : null}
            </div>

            {/* Actions */}
            <div className="md:col-span-4 md:flex md:justify-end">
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
                <a
                  href={primaryHref}
                  className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold
                             bg-[#151515] text-white hover:bg-black transition
                             border border-black/10 shadow-[0_10px_24px_-18px_rgba(0,0,0,0.45)]
                             w-full md:w-[220px]"
                >
                  {primaryLabel}
                </a>

                {secondaryLabel && secondaryHref ? (
                  <a
                    href={secondaryHref}
                    className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold
                               bg-white/70 text-[#151515] hover:bg-white transition
                               border border-black/15
                               w-full md:w-[220px]"
                  >
                    {secondaryLabel}
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
