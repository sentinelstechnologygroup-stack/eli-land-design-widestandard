// location: src/app/contact-us/page.tsx
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Contact Us | ELI Land Design",
  description:
    "Contact ELI Land Design in The Woodlands, TX for landscape architecture, construction, and project inquiries.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactUsPage() {
  return (
    <PageShell>
      <div className="eliPage">
        <h1 className="eliH1">Contact Us</h1>
        <p className="eliLead">
          Tell us about your project. We’ll follow up to discuss goals, timeline, and next steps.
        </p>

        <div className="eliContactGrid">
          <div className="eliContactCard">
            <h2 className="eliH2">Office</h2>
            <p>P.O. Box 131264</p>
            <p>The Woodlands, TX 77393</p>
            <p style={{ marginTop: 12 }}>
              Phone: <a href="tel:+12812592610">281.259.2610</a>
              <br />
              Fax: <a href="tel:+12812592622">281.259.2622</a>
            </p>
          </div>

          <div className="eliContactCard">
            <h2 className="eliH2">Send a Message</h2>
            <form className="eliForm" action="mailto:info@elilanddesign.com" method="post">
              <label className="eliField">
                <span>Name</span>
                <input name="name" type="text" />
              </label>
              <label className="eliField">
                <span>Email</span>
                <input name="email" type="email" />
              </label>
              <label className="eliField">
                <span>Message</span>
                <textarea name="message" rows={5} />
              </label>
              <button className="eliBtn" type="submit">
                Send
              </button>
            </form>
            <p className="eliNote">
              (Temporary form. We can wire this to a real handler later.)
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
