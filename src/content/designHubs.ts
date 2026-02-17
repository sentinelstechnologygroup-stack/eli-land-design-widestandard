// location: src/content/designHubs.ts

export type DesignMode = "commercial" | "residential";

export type DesignCategory = {
  slug: string;
  title: string;
  eyebrow: string;
  blurb: string;
  imageSrc: string; // must exist in /public
};

export type HubConfig = {
  mode: DesignMode;
  title: string;
  description: string;
  canonical: string;
  basePath: string; // "/design/commercial" | "/design/residential"
  categories: DesignCategory[];
};

export const DESIGN_HUB: Record<DesignMode, HubConfig> = {
  commercial: {
    mode: "commercial",
    title: "Commercial Design",
    description:
      "Landscape architecture for commercial environments—focused on circulation, grading, materials, and planted systems that perform across schedule, maintenance, and budget constraints.",
    canonical: "/design/commercial",
    basePath: "/design/commercial",
    categories: [
      {
        slug: "lifestyle-center",
        title: "Lifestyle Center",
        eyebrow: "Retail + Public Realm",
        blurb:
          "Entry sequences, plazas, pedestrian flow, and durable materials that elevate the experience.",
        imageSrc: "/images/design/commercial/lifestyle-center/hero.jpg",
      },
      {
        slug: "multifamily",
        title: "Multifamily",
        eyebrow: "Community + Amenity",
        blurb:
          "Amenity courts, pool decks, lighting, planting strategy, and circulation designed for daily use.",
        imageSrc: "/images/design/commercial/multifamily/hero.jpg",
      },
      {
        slug: "office",
        title: "Office",
        eyebrow: "Campus + Streetscape",
        blurb:
          "Arrival, circulation, signage zones, planting systems, and clean detailing across a cohesive site plan.",
        imageSrc: "/images/design/commercial/office/hero.jpg",
      },
      {
        slug: "renderings",
        title: "Renderings",
        eyebrow: "Concept Visualization",
        blurb:
          "High-confidence concepts and visual direction used to align teams before the build phase.",
        imageSrc: "/images/design/commercial/renderings/hero.jpg",
      },
    ],
  },

  residential: {
    mode: "residential",
    title: "Residential Design",
    description:
      "Residential landscape design—outdoor living, planting composition, grading + drainage, and material palettes tailored to the home and site.",
    canonical: "/design/residential",
    basePath: "/design/residential",
    categories: [
      {
        slug: "before-after",
        title: "Before + After",
        eyebrow: "Transformation",
        blurb:
          "Transformations showing how layout, grading, planting, and materials change the lived experience.",
        imageSrc: "/images/design/residential/before-after/hero.jpg",
      },
      {
        slug: "ranches",
        title: "Ranches",
        eyebrow: "Estate + Land",
        blurb:
          "Entries, drives, pasture edges, water management, and durable planting for large rural properties.",
        imageSrc: "/images/design/residential/ranches/hero.jpg",
      },
      {
        slug: "private",
        title: "Private",
        eyebrow: "Outdoor Living",
        blurb:
          "Courtyards, terraces, pool environments, and intimate gardens designed for daily enjoyment.",
        imageSrc: "/images/design/residential/private/hero.jpg",
      },
      {
        slug: "renderings",
        title: "Renderings",
        eyebrow: "Concept Visualization",
        blurb:
          "Concept visuals used to align on materials, planting character, and spatial intent before construction.",
        imageSrc: "/images/design/residential/renderings/hero.jpg",
      },
    ],
  },
};
