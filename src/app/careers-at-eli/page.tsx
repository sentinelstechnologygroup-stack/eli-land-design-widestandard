// location: src/app/careers-at-eli/page.tsx
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers at ELI | ELI Land Design",
  description:
    "Explore careers at ELI Land Design—join our team in landscape architecture and construction.",
  alternates: { canonical: "/careers-at-eli" },
};

export default function CareersPage() {
  return (
    <PageShell>
      <div className="eliPage">
        <h1 className="eliH1">Careers at ELI</h1>
        <p className="eliLead">
          We’re always interested in talented people who care about quality work and client experience.
        </p>

        <div className="eliContent">
          <h2 className="eliH2">Open Roles</h2>
          <ul className="eliList">
            <li>Landscape Construction Crew</li>
            <li>Project Coordinator</li>
            <li>Landscape Designer (as needed)</li>
          </ul>

          <h2 className="eliH2">How to Apply</h2>
          <p>
            Send your resume and a short note describing your experience and the role you’re interested in.
          </p>

          <p style={{ marginTop: 18 }}>
            Use the <Link href="/contact-us">Contact Us</Link> page for now (we’ll add a dedicated application form later).
          </p>
        </div>
      </div>
    </PageShell>
  );
}
