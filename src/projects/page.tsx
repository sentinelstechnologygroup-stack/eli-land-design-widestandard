// location: src/app/projects/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects | ELI Land Design",
  description:
    "Explore featured projects by ELI Land Design—landscape architecture and construction portfolio.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <div className="eliPage">
        <h1 className="eliH1">Projects</h1>
        <p className="eliLead">A selection of recent work. Click a project to view details.</p>

        <div className="eliProjectsGrid">
          {projects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="eliProjectCard">
              <div className="eliProjectCard__thumb">
                {/* keep <img> to avoid Next Image config issues */}
                <img src={p.heroImage} alt="" loading="lazy" />
              </div>
              <div className="eliProjectCard__meta">
                <div className="eliProjectCard__title">{p.title}</div>
                {p.location ? <div className="eliProjectCard__loc">{p.location}</div> : null}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
