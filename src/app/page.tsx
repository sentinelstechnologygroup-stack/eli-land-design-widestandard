import Link from "next/link";
import PageShell from "@/components/PageShell";

const IMG = {
  design: "/images/home/design.jpg",
  construction: "/images/home/construction.jpg",
  projects: "/images/home/projects.jpg",
  about: "/images/home/about.jpg",
};

function Band({
  title,
  subtitle,
  cta,
  href,
  image,
  tone = "light",
}: {
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  image: string;
  tone?: "light" | "dark";
}) {
  return (
    <Link href={href} className={`eliBand eliBand--${tone}`} aria-label={title}>
      <div className="eliBand__imgWrap">
        <img className="eliBand__img" src={image} alt="" />
        <div className="eliBand__overlay" />
      </div>
      <div className="eliBand__content">
        <div className="eliBand__title">{title}</div>
        <div className="eliBand__sub">{subtitle}</div>
        <div className="eliBand__cta">→ {cta}</div>
      </div>
    </Link>
  );
}

function Card({
  title,
  subtitle,
  cta,
  href,
  image,
}: {
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  image: string;
}) {
  return (
    <Link href={href} className="eliCard" aria-label={title}>
      <div className="eliCard__imgWrap">
        <img className="eliCard__img" src={image} alt="" />
      </div>
      <div className="eliCard__body">
        <div className="eliCard__title">{title}</div>
        <div className="eliCard__sub">{subtitle}</div>
        <div className="eliCard__cta">→ {cta}</div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <main className="eliHomeWide">
      <section className="eliHomeWide__top">
        <PageShell>
          <div className="eliTopRow">
            <h1 className="eliTopRow__h1">
              GUIDED BY CONTEXT.
              <br />
              BUILT WITH INTENTION.
            </h1>
            <p className="eliTopRow__p">
              We create inspired outdoor environments grounded in informed design and executed
              with meticulous attention to detail. Every ELI space is shaped by its unique
              context—crafting timeless, enduring places that harmonize with their natural and
              built surroundings.
            </p>
          </div>
        </PageShell>
      </section>

      <section className="eliHomeWide__band">
        <PageShell>
          <Band
            title="DESIGN"
            subtitle="Commercial & Residential"
            cta="Explore Design"
            href="/design"
            image={IMG.design}
            tone="light"
          />
        </PageShell>
      </section>

      <section className="eliHomeWide__band">
        <PageShell>
          <Band
            title="CONSTRUCTION"
            subtitle="Execution with precision."
            cta="View Construction"
            href="/construction"
            image={IMG.construction}
            tone="light"
          />
        </PageShell>
      </section>

      <section className="eliHomeWide__section">
        <PageShell>
          <div className="eliSectionHead">
            <div className="eliSectionHead__title">PROJECTS</div>
          </div>

          <div className="eliCardsGrid">
            <Card
              title="DESIGN"
              subtitle="Commercial & Residential"
              cta="Explore Design"
              href="/design"
              image={IMG.design}
            />
            <Card
              title="CONSTRUCTION"
              subtitle="Execution with precision."
              cta="View Construction"
              href="/construction"
              image={IMG.projects}
            />
          </div>
        </PageShell>
      </section>

      <section className="eliHomeWide__section eliHomeWide__section--tight">
        <PageShell>
          <div className="eliAboutRow">
            <div className="eliAboutRow__left">
              <div className="eliSectionHead__title">ABOUT ELI</div>
              <div className="eliAboutCard">
                <img className="eliAboutCard__img" src={IMG.about} alt="" />
              </div>
            </div>

            <div className="eliAboutRow__right">
              <div className="eliAboutText__title">ABOUT ELI</div>
              <p className="eliAboutText__p">
                More than by roots alone, we shape land with purpose. We provide preconstruction
                planning, design development, and disciplined execution—delivering environments
                built to last.
              </p>
              <Link className="eliAboutText__link" href="/about">
                → Learn More
              </Link>
            </div>
          </div>
        </PageShell>
      </section>
    </main>
  );
}
