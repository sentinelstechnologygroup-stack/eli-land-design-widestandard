// location: src/app/guiding-ideas/page.tsx
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guiding Ideas | ELI Land Design",
  description:
    "Explore ELI’s guiding ideas—principles that shape our landscape architecture and construction work.",
  alternates: { canonical: "/guiding-ideas" },
};

export default function GuidingIdeasPage() {
  return (
    <PageShell>
      <div className="eliPage">
        <h1 className="eliH1">Guiding Ideas</h1>
        <p className="eliLead">
          A quick look at the principles we use to plan, design, and build outdoor environments.
        </p>

        <div className="eliCards">
          <div className="eliCard">
            <h2 className="eliH2">Balance</h2>
            <p>Architecture, landscape, and usability working together.</p>
          </div>
          <div className="eliCard">
            <h2 className="eliH2">Craft</h2>
            <p>Details matter—from grading and drainage to finishes and planting.</p>
          </div>
          <div className="eliCard">
            <h2 className="eliH2">Longevity</h2>
            <p>Materials and layouts designed to perform and age well.</p>
          </div>
          <div className="eliCard">
            <h2 className="eliH2">Site-First</h2>
            <p>Respect the existing site conditions and optimize the experience.</p>
          </div>
        </div>

        <p style={{ marginTop: 24 }}>
          Ready to start? <Link href="/contact-us">Contact us</Link>.
        </p>
      </div>
    </PageShell>
  );
}
