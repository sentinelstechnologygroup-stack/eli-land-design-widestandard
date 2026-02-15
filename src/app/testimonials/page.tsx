// location: src/app/testimonials/page.tsx
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Testimonials | ELI Land Design",
  description:
    "Read testimonials from clients of ELI Land Design—landscape architecture and construction.",
  alternates: { canonical: "/testimonials" },
};

const testimonials = [
  {
    quote:
      "ELI delivered an incredible outdoor space—excellent communication and flawless execution.",
    name: "Client Review",
  },
  {
    quote:
      "Thoughtful design and professional construction. The results exceeded our expectations.",
    name: "Client Review",
  },
  {
    quote:
      "A smooth process from planning through installation. We’d recommend them without hesitation.",
    name: "Client Review",
  },
];

export default function TestimonialsPage() {
  return (
    <PageShell>
      <div className="eliPage">
        <h1 className="eliH1">Testimonials</h1>
        <p className="eliLead">
          A few notes from clients. (We can replace these with exact website copy later.)
        </p>

        <div className="eliCards">
          {testimonials.map((t, idx) => (
            <div key={idx} className="eliCard">
              <p className="eliQuote">“{t.quote}”</p>
              <div className="eliQuoteBy">— {t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
