// location: src/app/about/page.tsx
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About | ELI Land Design",
  description:
    "Learn about ELI Land Design—landscape architecture and construction serving The Woodlands and Houston area.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageShell>
      <div className="eliPage">
        <h1 className="eliH1">About ELI Land Design</h1>
        <p className="eliLead">
          E.L.I. Land Design provides planning, landscape architecture, and landscape
          construction for residential and commercial properties across The Woodlands /
          Houston area.
        </p>

        <div className="eliContent">
          <h2 className="eliH2">What We Do</h2>
          <ul className="eliList">
            <li>Landscape Architecture & Planning</li>
            <li>Construction Management & Installation</li>
            <li>Outdoor Living Enhancements</li>
            <li>Site Coordination & Phased Improvements</li>
          </ul>

          <h2 className="eliH2">Our Approach</h2>
          <p>
            We balance architecture, landscape, client goals, and the natural character of the site to
            create outdoor spaces that are both functional and inspiring.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
