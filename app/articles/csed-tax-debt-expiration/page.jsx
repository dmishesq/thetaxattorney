import Link from "next/link";
export const metadata = { title: "CSED Tax Debt Expiration — The Tax Attorney | Darrin T. Mish", description: "The IRS has 10 years to collect a tax debt. Ten years from the date of assessment, the debt expires. Disappears. You owe nothing. Most taxpayers have no id", alternates: { canonical: "/articles/csed-tax-debt-expiration" } };
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
        <h1 style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.3, marginBottom: 20 }}>Your IRS Debt Has an Expiration Date</h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "#444", marginBottom: 40, fontFamily: "system-ui" }}>The IRS has 10 years to collect a tax debt. Ten years from the date of assessment, the debt expires. Disappears. You owe nothing. Most taxpayers have no idea this deadline exists. The IRS isn't going to remind you.</p>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>How CSED Works</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: "system-ui" }}>Each tax year has its own Collection Statute Expiration Date, calculated from the date the IRS assessed the tax — not the date you filed. I pull your transcripts and calculate the exact CSED for every year you owe.</p>
        </div>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>What Pauses the Clock</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: "system-ui" }}>An Offer in Compromise suspends the statute while pending plus 30 days. Bankruptcy suspends it. Being outside the country for six consecutive months suspends it. I track every tolling event to give you an accurate picture.</p>
        </div>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Strategic Planning</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: "system-ui" }}>If your oldest debt expires in 18 months, it might make more sense to ride it out than to pay it. A partial-pay installment agreement or CNC status can keep the clock running while protecting you from collection. This is where strategy meets math.</p>
        </div>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Never Sign Form 900</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: "system-ui" }}>The IRS sometimes asks you to extend the collection statute. This benefits the IRS, not you. Never sign Form 900 without talking to a tax attorney first. Once you extend the statute, you can't undo it.</p>
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
