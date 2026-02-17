// location: src/content/design.registry.ts

export type DesignMode = "commercial" | "residential";
export type MediaType = "image" | "video";

export type GalleryMediaItem = {
  id: string;
  type: MediaType;
  src: string; // for video: use a hosted mp4 url or YouTube embed url later
  alt?: string;
  caption?: string;
};

export type DesignCategory = {
  slug: string;
  title: string;
  note: string; // eyebrow
  blurb: string;
  cardImage: string; // used on hub tiles
  heroImage: string; // used on the category page hero
  items: GalleryMediaItem[]; // future gallery grid/lightbox
};

export type DesignHub = {
  title: string;
  description: string;
  basePath: string; // "/design/commercial" | "/design/residential"
  heroPanel: string; // the top-right hero panel image/video poster
  featuredPanel: string; // featured strip image/video poster
  tags: string[];
  categories: DesignCategory[];
};

export const DESIGN: Record<DesignMode, DesignHub> = {
  commercial: {
    title: "Commercial Design",
    description:
      "Commercial landscape architecture and design—site planning, circulation, grading, materials, and planted systems. Explore galleries by project type.",
    basePath: "/design/commercial",
    heroPanel: "/images/design/commercial/commercial-panel.png",
    featuredPanel: "/images/design/commercial/commercial-panel.png",
    tags: ["Site planning", "Circulation", "Grading + drainage", "Materials", "Plant systems"],
    categories: [
      {
        slug: "lifestyle-center",
        title: "Lifestyle Center",
        note: "Retail + Public Realm",
        blurb:
          "Entry sequences, plazas, pedestrian flow, and durable materials that elevate the experience.",
        cardImage: "/images/design/commercial/lifestyle-center.jpg",
        heroImage: "/images/design/commercial/lifestyle-center/hero.jpg",
        items: [],
      },
      {
        slug: "multifamily",
        title: "Multifamily",
        note: "Community + Amenity",
        blurb:
          "Amenity courts, pool decks, lighting, planting strategy, and circulation designed for daily use.",
        cardImage: "/images/design/commercial/multifamily.jpg",
        heroImage: "/images/design/commercial/multifamily/hero.jpg",
        items: [],
      },
      {
        slug: "office",
        title: "Office",
        note: "Campus + Streetscape",
        blurb:
          "Arrival, circulation, signage zones, planting systems, and clean detailing across a cohesive site plan.",
        cardImage: "/images/design/commercial/office.jpg",
        heroImage: "/images/design/commercial/office/hero.jpg",
        items: [],
      },
      {
        slug: "renderings",
        title: "Renderings",
        note: "Concept Visualization",
        blurb:
          "High-confidence concepts and visual direction used to align teams before the build phase.",
        cardImage: "/images/design/commercial/renderings.jpg",
        heroImage: "/images/design/commercial/renderings/hero.jpg",
        items: [],
      },
    ],
  },

  residential: {
    title: "Residential Design",
    description:
      "Residential landscape design—outdoor living, planting composition, grading + drainage, and material palettes tailored to the home and site. Explore galleries by category.",
    basePath: "/design/residential",
    heroPanel: "/images/design/residential/residential-panel.png",
    featuredPanel: "/images/design/residential/residential-panel.png",
    tags: [
      "Outdoor living",
      "Plant composition",
      "Grading + drainage",
      "Materials",
      "Lighting",
      "Irrigation strategy",
    ],
    categories: [
      {
        slug: "before-after",
        title: "Before + After",
        note: "Transformation",
        blurb:
          "Transformations showing how layout, grading, planting, and materials change the lived experience.",
        cardImage: "/images/design/residential/before-after/hero.jpg",
        heroImage: "/images/design/residential/before-after/hero.jpg",
        items: [],
      },
      {
        slug: "ranches",
        title: "Ranches",
        note: "Estate + Land",
        blurb:
          "Entries, drives, pasture edges, water management, and durable planting for large rural properties.",
        cardImage: "/images/design/residential/ranches/hero.jpg",
        heroImage: "/images/design/residential/ranches/hero.jpg",
        items: [],
      },
      {
        slug: "private",
        title: "Private",
        note: "Outdoor Living",
        blurb:
          "Courtyards, terraces, pool environments, and intimate gardens designed for daily enjoyment.",
        cardImage: "/images/design/residential/private/hero.jpg",
        heroImage: "/images/design/residential/private/hero.jpg",
        items: [],
      },
      {
        slug: "renderings",
        title: "Renderings",
        note: "Concept Visualization",
        blurb:
          "Concept visuals used to align on materials, planting character, and spatial intent before construction.",
        cardImage: "/images/design/residential/renderings/hero.jpg",
        heroImage: "/images/design/residential/renderings/hero.jpg",
        items: [],
      },
    ],
  },
};

export function getHub(mode: DesignMode) {
  return DESIGN[mode];
}

export function getCategory(mode: DesignMode, slug: string) {
  return DESIGN[mode].categories.find((c) => c.slug === slug) ?? null;
}
