// location: src/app/construction/page.tsx
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction | ELI Land Design",
  description:
    "Landscape construction services from ELI Land Design—installation, project management, and quality execution.",
  alternates: { canonical: "/construction" },
};

export default function ConstructionPage() {
  return (
    <PageShell>
      <div className="eliPage">
        <h1 className="eliH1">Construction</h1>
        <p className="eliLead">
          Impeccable execution—from site prep to final details—built to last.
        </p>

        <div className="eliContent">
          <h2 className="eliH2">Construction Capabilities</h2>
          <ul className="eliList">
            <li>Hardscape & masonry</li>
            <li>Drainage & grading</li>
            <li>Irrigation & lighting</li>
            <li>Planting & finishing</li>
            <li>Outdoor living features</li>
          </ul>

          <p style={{ marginTop: 18 }}>
            Want to talk scope? <Link href="/contact-us">Contact Us</Link>.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
