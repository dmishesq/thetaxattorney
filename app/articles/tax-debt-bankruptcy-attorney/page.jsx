import Link from "next/link";
export const metadata = { title: "Tax Debt Bankruptcy Attorney — The Tax Attorney | Darrin T. Mish", description: "Everyone thinks tax debt survives bankruptcy. Not always true. Certain tax debts can be discharged in Chapter 7 if they meet specific timing requirements. ", alternates: { canonical: "/articles/tax-debt-bankruptcy-attorney" } };
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
        <h1 style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.3, marginBottom: 20 }}>Tax Debt in Bankruptcy: Yes, It Can Be Discharged</h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "#444", marginBottom: 40, fontFamily: "system-ui" }}>Everyone thinks tax debt survives bankruptcy. Not always true. Certain tax debts can be discharged in Chapter 7 if they meet specific timing requirements. Miss one requirement and the discharge fails. Meet all three and the debt is gone.</p>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Three Timing Rules</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: "system-ui" }}>Three-year rule: the return was due more than three years ago. Two-year rule: the return was filed more than two years ago. 240-day rule: the tax was assessed more than 240 days ago. All three must be satisfied.</p>
        </div>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>What Can't Be Discharged</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: "system-ui" }}>Fraud penalties. Trust fund recovery penalties. Taxes where no return was filed. Taxes from fraudulent returns. I analyze every tax year to determine which debts qualify and which don't.</p>
        </div>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Strategic Timing</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: "system-ui" }}>Sometimes waiting a few months to file bankruptcy means the difference between discharging $100,000 in tax debt and discharging nothing. I calculate the exact dates and advise on optimal timing.</p>
        </div>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Bankruptcy vs. Other Options</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: "system-ui" }}>Bankruptcy isn't always the best tool. An Offer in Compromise or installment agreement might achieve the same result with less collateral damage to your credit and financial life. I evaluate all options.</p>
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
