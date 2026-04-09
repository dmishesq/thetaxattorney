import Link from "next/link";
export const metadata = { title: "Tax Court Litigation Lawyer — The Tax Attorney | Darrin T. Mish", description: "I don't litigate for sport. Tax Court is a tool, and like any tool, you use it when it's the right one for the job. When the IRS takes an unreasonable posi", alternates: { canonical: "/articles/tax-court-litigation-lawyer" } };
export default function Article() {
  return (
    <div style={{ fontFamily: "'Georgia', serif", color: "#1a1a1a", background: "#faf9f6", minHeight: "100vh" }}>
      <header style={{ background: "#0d1b2a", padding: "14px 0" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/" style={{ textDecoration: "none", color: "#fff", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 24, height: 24, background: "#8b5e3c", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "#fff", fontFamily: "system-ui" }}>TA</div>
            <div><span style={{ fontSize: 14, fontWeight: 700, fontFamily: "system-ui", display: "block", lineHeight: 1 }}>THE TAX</span><span style={{ fontSize: 10, fontWeight: 500, letterSpacing: "1.8px", fontFamily: "system-ui", color: "#8b5e3c" }}>ATTORNEY</span></div>
          </Link>
          <nav style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <Link href="/services" style={{ fontSize: 13, color: "#888", textDecoration: "none", fontFamily: "system-ui" }}>Services</Link>
            <Link href="/about" style={{ fontSize: 13, color: "#888", textDecoration: "none", fontFamily: "system-ui" }}>About</Link>
            <Link href="/faq" style={{ fontSize: 13, color: "#888", textDecoration: "none", fontFamily: "system-ui" }}>FAQ</Link>
            <a href="https://getirshelp.com" target="_blank" rel="noopener" style={{ fontSize: 12, fontWeight: 700, color: "#fff", background: "#8b5e3c", padding: "8px 16px", borderRadius: 4, textDecoration: "none", fontFamily: "system-ui" }}>FREE CONSULTATION →</a>
          </nav>
        </div>
      </header>
      <article style={{ maxWidth: 720, margin: "0 auto", padding: "56px 24px" }}>
        <Link href="/" style={{ fontSize: 12, color: "#8b5e3c", textDecoration: "none", fontFamily: "system-ui", display: "inline-block", marginBottom: 20 }}>← Back to Home</Link>
        <h1 style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.3, marginBottom: 20 }}>Tax Court: When the IRS Needs a Judge to Set Them Straight</h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "#444", marginBottom: 40, fontFamily: "system-ui" }}>I don't litigate for sport. Tax Court is a tool, and like any tool, you use it when it's the right one for the job. When the IRS takes an unreasonable position and won't budge, Tax Court is where you make them prove their case.</p>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>When Litigation Makes Sense</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: "system-ui" }}>You got a Notice of Deficiency and disagree. The IRS denied your OIC or installment agreement. An appeals officer sided with the examiner. These are situations where Tax Court gives you a neutral forum.</p>
        </div>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The 90-Day Deadline</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: "system-ui" }}>When the IRS issues a Notice of Deficiency, you have exactly 90 days to petition Tax Court. Miss it and you lose the right. I've had clients call on day 89. Don't be that person. Call early.</p>
        </div>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Leverage Without Trial</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: "system-ui" }}>Most Tax Court cases settle before trial. The IRS counsel evaluates the 'hazards of litigation' and often agrees to terms they never would have offered administratively. Having a lawyer who actually tries cases changes the negotiation.</p>
        </div>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Small Tax Case Option</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: "system-ui" }}>For disputes under $50,000, you can elect the simplified small tax case procedure. It's faster and less formal. The trade-off is the decision can't be appealed. I advise whether this makes sense for your case.</p>
        </div>
      </article>
      <section style={{ background: "#8b5e3c", padding: "48px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: "#fff", marginBottom: 12 }}>Stop losing sleep over the IRS.</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", marginBottom: 24, fontFamily: "system-ui" }}>Free consultation. Nationwide. 32 years.</p>
        <a href="https://getirshelp.com" target="_blank" rel="noopener" style={{ display: "inline-block", padding: "14px 32px", background: "#0d1b2a", color: "#8b5e3c", textDecoration: "none", fontSize: 14, fontWeight: 700, borderRadius: 4, fontFamily: "system-ui" }}>Schedule at getirshelp.com →</a>
      </section>
      <footer style={{ background: "#0d1b2a", color: "#555", padding: "32px 24px", textAlign: "center", fontSize: 12 }}>
        <a href="https://getirshelp.com" target="_blank" rel="noopener" style={{ color: "#8b5e3c", textDecoration: "none" }}>getirshelp.com</a> · © 2026 Law Offices of Darrin T. Mish, P.A.
      </footer>
    </div>
  );
}
