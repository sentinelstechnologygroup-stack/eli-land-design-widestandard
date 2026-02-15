export type Project = {
  slug: string;
  title: string;
  location: string;
  heroLabel: string;
  heroImage: string;
  description: string;
  body?: string[];
  gallery?: string[];
};

export const projects: Project[] = [
  {
    slug: "project-title-example",
    title: "Project Title",
    location: "Location",
    heroLabel: "PROJECT PAGES",
    heroImage: "/images/projects/project-title-example/hero.jpg",
    description: "Short SEO description for this project (keep under ~160 characters).",
    body: [
      "Excsest min pra nobis et quam es ea nus, nis acerum quo mosa nihicab or-rovitibus.",
      "Itat eliquunt. Id et quaestio. Olestet in cone eumAtion coreium ipsam vendit estemol uptaspe ritenihit untiisq uaturiatiur...",
    ],
    gallery: [
      "/images/projects/project-title-example/01.jpg",
      "/images/projects/project-title-example/02.jpg",
    ],
  },
];
