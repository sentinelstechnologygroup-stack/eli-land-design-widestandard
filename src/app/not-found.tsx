import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <div style={{ padding: "28px 0 60px" }}>
        <h1
          style={{
            margin: 0,
            fontSize: 34,
            letterSpacing: ".02em",
            color: "rgba(0,0,0,.62)",
            fontWeight: 500,
          }}
        >
          404
        </h1>
        <p style={{ marginTop: 10, color: "rgba(0,0,0,.54)" }}>Page not found.</p>
        <p style={{ marginTop: 18 }}>
          <Link href="/">← Back to Home</Link>
        </p>
      </div>
    </PageShell>
  );
}
