// location: src/app/design/page.tsx
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Design | ELI Land Design",
  description:
    "Landscape architecture and design services from ELI Land Design—planning, layout, and outdoor living design.",
  alternates: { canonical: "/design" },
};

export default function DesignPage() {
  return (
    <PageShell>
      <div className="eliPage">
        <h1 className="eliH1">Design</h1>
        <p className="eliLead">
          Landscape architecture that blends beauty, function, and the realities of the site.
        </p>

        <div className="eliContent">
          <h2 className="eliH2">Design Services</h2>
          <ul className="eliList">
            <li>Site planning & layout</li>
            <li>Outdoor living concepts</li>
            <li>Planting & hardscape design</li>
            <li>Phasing & budget alignment</li>
          </ul>

          <h2 className="eliH2">From Concept to Build</h2>
          <p>
            Our design team collaborates with construction to ensure the plan can be executed cleanly
            and consistently.
          </p>

          <p style={{ marginTop: 18 }}>
            See examples in <Link href="/projects">Projects</Link>.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
