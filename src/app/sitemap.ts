import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";

  const staticRoutes = [
    "",
    "/about",
    "/guiding-ideas",
    "/design",
    "/construction",
    "/projects",
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
