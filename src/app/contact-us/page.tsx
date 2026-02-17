// src/app/contact-us/page.tsx
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import StandardBottomCTA from "@/components/StandardBottomCTA";

export const metadata: Metadata = {
  title: "Contact Us | ELI Land Design",
  description:
    "Contact ELI Land Design to schedule a meeting and discuss your project in The Woodlands, TX and surrounding areas.",
};

const surface =
  "rounded-none bg-[#F3F0EA] ring-1 ring-black/5 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.35)]";
const card =
  "rounded-none bg-white ring-1 ring-black/5 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.35)] p-6 md:p-7";

const input =
  "w-full rounded-none bg-white ring-1 ring-black/15 px-4 py-3 text-black/80 placeholder:text-black/40 outline-none focus:ring-2 focus:ring-black/25";

const text = {
  eyebrow: "text-xs font-semibold tracking-widest text-black/55",
  h1: "text-3xl md:text-4xl font-semibold text-black/90",
  lead: "text-black/60 leading-relaxed",
  h2: "text-lg font-semibold text-black/85",
  label: "text-sm font-semibold text-black/60",
  body: "text-black/65",
};

const btnPrimary =
  "inline-flex items-center justify-center rounded-none bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90 transition";
const btnGhost =
  "inline-flex items-center justify-center rounded-none px-6 py-3 text-sm font-semibold text-black/70 ring-1 ring-black/15 hover:bg-black/[0.03] transition";

export default function ContactUsPage() {
  return (
    <PageShell>
      <div className="space-y-14 md:space-y-20 text-black">
        {/* HERO */}
        <section className={surface + " p-7 md:p-10"}>
          <p className={text.eyebrow}>CONTACT</p>
          <h1 className={"mt-3 " + text.h1}>Contact Us</h1>

          <div className={"mt-4 max-w-3xl space-y-3 " + text.lead}>
            <p>
              Thank you for your interest in E.L.I. land design. If you would
              like to discuss your specific needs, please call our office at{" "}
              <a className="underline underline-offset-4 text-black/80" href="tel:+12812592610">
                281.259.2610
              </a>{" "}
              during normal business hours or email{" "}
              <a
                className="underline underline-offset-4 text-black/80"
                href="mailto:info@elilanddesign.com"
              >
                info@elilanddesign.com
              </a>
              .
            </p>
            <p>
              You may also use the contact form below and we will contact you as
              soon as possible to schedule a meeting.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className={btnPrimary} href="tel:+12812592610">
              Call 281.259.2610
            </a>
            <a className={btnGhost} href="mailto:info@elilanddesign.com">
              Email info@elilanddesign.com
            </a>
          </div>
        </section>

        {/* MAIN */}
        <section className="grid gap-8 md:grid-cols-2 items-start">
          {/* Left */}
          <div className="space-y-8">
            <div className={card}>
              <h2 className={text.h2}>Office Information</h2>

              <div className="mt-5 space-y-5">
                <div>
                  <div className={text.eyebrow}>ADDRESS</div>
                  <div className={"mt-1 " + text.body}>
                    P.O. Box 131264
                    <br />
                    The Woodlands, TX 77393
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className={text.eyebrow}>PHONE</div>
                    <a
                      className="mt-1 inline-block underline underline-offset-4 text-black/80"
                      href="tel:+12812592610"
                    >
                      281.259.2610
                    </a>
                  </div>

                  <div>
                    <div className={text.eyebrow}>EMAIL</div>
                    <a
                      className="mt-1 inline-block underline underline-offset-4 text-black/80"
                      href="mailto:info@elilanddesign.com"
                    >
                      info@elilanddesign.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={card}>
              <h3 className={text.h2}>What to Include</h3>
              <ul className={"mt-4 space-y-2 " + text.body}>
                {[
                  "Project location",
                  "Scope (design, construction, or both)",
                  "Timeline and any constraints",
                  "Best contact method (phone/email)",
                ].map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 bg-black/35 flex-none" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right */}
          <div className={card}>
            <h2 className={text.h2}>Contact Form</h2>
            <p className={"mt-2 " + text.body}>
              Use the form below and we’ll contact you to schedule a meeting.
            </p>

            <form className="mt-6 space-y-4" action="#" method="post">
              <div>
                <label className={text.label} htmlFor="name">
                  Name
                </label>
                <input id="name" name="name" className={input + " mt-2"} required />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={text.label} htmlFor="phone">
                    Phone
                  </label>
                  <input id="phone" name="phone" className={input + " mt-2"} inputMode="tel" />
                </div>
                <div>
                  <label className={text.label} htmlFor="email">
                    Email
                  </label>
                  <input id="email" name="email" type="email" className={input + " mt-2"} required />
                </div>
              </div>

              <div>
                <label className={text.label} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={input + " mt-2 min-h-[140px] resize-y"}
                  placeholder="Tell us about your project…"
                />
              </div>

              <button type="submit" className={btnPrimary + " w-full"}>
                Submit
              </button>

              <p className="text-xs text-black/45">
                Form wiring can be connected later without changing layout.
              </p>
            </form>
          </div>
        </section>
       </div>
    </PageShell>
  );
}
