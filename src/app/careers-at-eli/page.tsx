// src/app/careers-at-eli/page.tsx
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StandardBottomCTA from "@/components/StandardBottomCTA";

export const metadata: Metadata = {
  title: "Careers at ELI | ELI Land Design",
  description:
    "Careers at ELI Land Design. Open positions include Crew Foreman, Crew Member, and Experienced Equipment Operator.",
};

// Square “floating” panels
const surface =
  "rounded-none bg-[#F3F0EA] ring-1 ring-black/5 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.35)]";
const card =
  "rounded-none bg-white ring-1 ring-black/5 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)] p-6 md:p-7";

const text = {
  eyebrow: "text-xs font-semibold tracking-widest text-black/55",
  h1: "text-3xl md:text-4xl font-semibold text-black/90",
  lead: "text-black/60 leading-relaxed",
  h2: "text-lg font-semibold text-black/85",
  label: "text-sm font-semibold text-black/60",
  body: "text-black/65",
};

const btnPrimary =
  "inline-flex items-center justify-center rounded-none bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90 transition";
const btnGhost =
  "inline-flex items-center justify-center rounded-none px-6 py-3 text-sm font-semibold text-black/70 ring-1 ring-black/15 hover:bg-black/[0.03] transition";

function RoleCard({
  title,
  requirements,
}: {
  title: string;
  requirements: string[];
}) {
  return (
    <div className={card}>
      <h2 className={text.h2}>{title}</h2>
      <p className={"mt-3 " + text.label}>Requirements:</p>
      <ul className="mt-4 space-y-2">
        {requirements.map((r) => (
          <li key={r} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 bg-black/35 flex-none" />
            <span className={text.body}>{r}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CareersAtEliPage() {
  return (
    <PageShell>
      <div className="space-y-14 md:space-y-20 text-black">
        {/* HERO */}
        <section className={surface + " p-7 md:p-10"}>
          <p className={text.eyebrow}>CAREERS</p>
          <h1 className={"mt-3 " + text.h1}>Careers at ELI</h1>
          <p className={"mt-4 max-w-3xl " + text.lead}>
            Wage offers are determined by level of experience.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className={btnPrimary}
              href="mailto:info@elilanddesign.com?subject=Careers%20at%20ELI"
            >
              Email to Apply
            </a>
            <a className={btnGhost} href="tel:+12812592610">
              Call 281.259.2610
            </a>
          </div>
        </section>

        {/* ROLES */}
        <section className="grid gap-8 md:grid-cols-2 items-start">
          <RoleCard
            title="Crew Foreman"
            requirements={[
              "Must have 3 years minimum experience in landscape installation",
              "Clean driving record with a valid drivers license",
              "Be able to drive a heavy duty truck with gooseneck trailer",
              "Wage offer will be determined upon level of experience",
            ]}
          />

          <RoleCard
            title="Experienced Equipment Operator"
            requirements={[
              "3 Years minimal experience",
              "Clean driving record with a valid drivers license.",
              "Must be able to operate wheel and track loaders with experience in daily equipment maintenance",
              "Be willing to work with landscape installation crews on and off of equipment",
              "Wage offer will be determined by level of experience",
            ]}
          />

          <RoleCard
            title="Crew Member"
            requirements={[
              "Landscape installation experience a plus.",
              "Wage offer will be determined by level of experience",
            ]}
          />

          <div className={card}>
            <h2 className={text.h2}>How to Apply</h2>
            <p className={"mt-4 " + text.body}>
              Email{" "}
              <a
                className="underline underline-offset-4 text-black/80"
                href="mailto:info@elilanddesign.com?subject=ELI%20Careers%20Application"
              >
                info@elilanddesign.com
              </a>{" "}
              with the position you’re applying for, a short experience summary,
              and your contact information. You may also call{" "}
              <a
                className="underline underline-offset-4 text-black/80"
                href="tel:+12812592610"
              >
                281.259.2610
              </a>
              .
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className={btnPrimary}
                href="mailto:info@elilanddesign.com?subject=ELI%20Careers%20Application"
              >
                Email Application
              </a>
              <a className={btnGhost} href="tel:+12812592610">
                Call Office
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
