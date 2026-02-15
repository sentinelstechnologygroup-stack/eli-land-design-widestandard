// location: src/components/SiteFooter.tsx
import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="eliSiteFooter">
      <div className="eliSiteFooter__inner">
        <div className="eliSiteFooter__grid">
          {/* About us */}
          <div className="eliSiteFooter__col">
            <div className="eliSiteFooter__heading">About us</div>
            <p className="eliSiteFooter__text">
              E.L.I. Land Design specializes in the planning, design, and
              installation of commercial and residential landscapes in The
              Woodlands / Houston area. Thoughtful design and impeccable
              execution result in unique outdoor spaces that engage and inspire.
            </p>
          </div>

          {/* Quick Links */}
          <div className="eliSiteFooter__col">
            <div className="eliSiteFooter__heading">Quick Links</div>
            <ul className="eliSiteFooter__links" aria-label="Footer Quick Links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/design">Landscape Architecture</Link>
              </li>
              <li>
                <Link href="/construction">Landscape Construction</Link>
              </li>
              <li>
                <Link href="/projects">Portfolio</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="eliSiteFooter__col">
            <div className="eliSiteFooter__heading">Contact Us</div>

            <div className="eliSiteFooter__contact">
              <div className="eliSiteFooter__contactRow">
                <span className="eliSiteFooter__contactLabel">P.O. Box</span>
                <span className="eliSiteFooter__contactValue">
                  131264, The Woodlands, TX 77393
                </span>
              </div>

              <div className="eliSiteFooter__contactRow">
                <span className="eliSiteFooter__contactLabel">Phone</span>
                <a className="eliSiteFooter__contactValue" href="tel:+12812592610">
                  281.259.2610
                </a>
              </div>

              <div className="eliSiteFooter__contactRow">
                <span className="eliSiteFooter__contactLabel">Fax</span>
                <a className="eliSiteFooter__contactValue" href="tel:+12812592622">
                  281.259.2622
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="eliSiteFooter__bottom">
          © Copyright {year}. E.L.I. Land Design LLC. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
