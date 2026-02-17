// location: src/components/SiteFooter.tsx
import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="eliSiteFooter">
      <div className="eliSiteFooter__inner">
        {/* ROW 1: 3 columns */}
        <div className="eliSiteFooter__grid">
          <div className="eliSiteFooter__col">
            <h3 className="eliSiteFooter__heading">About us</h3>
            <p className="eliSiteFooter__text">
              E.L.I. Land Design specializes in the planning, design, and
              installation of commercial and residential landscapes in The
              Woodlands / Houston area. E.L.I. delights in our ability to
              observe the balance between architecture, landscape, the interests
              of our clients and the natural character of the site. Thoughtful
              design and impeccable execution result in unique outdoor spaces
              that engage and inspire.
            </p>
          </div>

          <div className="eliSiteFooter__col">
            <h3 className="eliSiteFooter__heading">Quick Links</h3>
            <div className="eliSiteFooter__linkGrid" aria-label="Footer Quick Links">
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/design">Landscape Architecture</Link></li>
              </ul>
              <ul>
                <li><Link href="/construction">Landscape Construction</Link></li>
                <li><Link href="/projects">Portfolio</Link></li>
                <li><Link href="/contact-us">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="eliSiteFooter__col">
            <h3 className="eliSiteFooter__heading">Contact Us</h3>
            <div className="eliSiteFooter__contactBlock">
              <p className="eliSiteFooter__contactLine">
                P.O. Box 131264<br />
                The Woodlands, TX 77393
              </p>
              <p className="eliSiteFooter__contactLine">
                Phone: <a href="tel:+12812592610">281.259.2610</a>
              </p>
              <p className="eliSiteFooter__contactLine">
                Fax: <a href="tel:+12812592622">281.259.2622</a>
              </p>
            </div>
          </div>
        </div>

        {/* ROW 2: 2 columns */}
        <div className="eliSiteFooter__copyrightSection">
          <div className="eliSiteFooter__copyrightRow">
            <div className="eliSiteFooter__copyrightLeft">
              © {year} E.L.I. Land Design LLC. All Rights Reserved.
            </div>
            <div className="eliSiteFooter__copyrightRight">
              Custom Built By:{" "}
              <a href="https://bigboomhosting.com" target="_blank" rel="noopener noreferrer">
                Big Boom Hosting
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
