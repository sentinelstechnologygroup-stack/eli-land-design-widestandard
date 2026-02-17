// src/app/projects/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected ELI Land Design projects.",
};

export default function ProjectsPage() {
  return (
    <PageShell className="eliStdPage">
      <div style={{ padding: "28px 0 60px" }}>
        <h1
          style={{
            margin: 0,
            fontSize: 34,
            letterSpacing: ".02em",
            color: "rgba(0,0,0,.62)",
            fontWeight: 500,
          }}
        >
          Projects
        </h1>
        <p style={{ marginTop: 10, color: "rgba(0,0,0,.54)" }}>
          Selected work. Click a project to view the detail page.
        </p>

        <ul style={{ paddingLeft: 18, marginTop: 18 }}>
          {projects.map((p) => (
            <li key={p.slug} style={{ margin: "10px 0" }}>
              <Link href={`/projects/${p.slug}`}>{p.title}</Link>{" "}
              <span style={{ color: "rgba(0,0,0,0.6)" }}>— {p.location}</span>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
