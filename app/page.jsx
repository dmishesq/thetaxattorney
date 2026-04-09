import Link from "next/link";
export const metadata = { title: "The Tax Attorney — IRS Resolution | Darrin T. Mish", description: "32 years fighting the IRS. Over $100 million resolved. Nationwide representation. Free consultation." };
const GUIDES = [
  { slug: "nationwide-irs-tax-lawyer", title: "Nationwide IRS Tax Lawyer" },
  { slug: "offer-in-compromise-attorney", title: "Offer in Compromise Attorney" },
  { slug: "irs-audit-representation", title: "IRS Audit Representation" },
  { slug: "stop-irs-wage-garnishment", title: "Stop IRS Wage Garnishment" },
  { slug: "irs-bank-levy-attorney", title: "IRS Bank Levy Attorney" },
  { slug: "unfiled-returns-tax-attorney", title: "Unfiled Returns Tax Attorney" },
  { slug: "irs-penalty-relief-lawyer", title: "IRS Penalty Relief Lawyer" },
  { slug: "irs-payment-plan-attorney", title: "IRS Payment Plan Attorney" },
  { slug: "tax-court-litigation-lawyer", title: "Tax Court Litigation Lawyer" },
  { slug: "innocent-spouse-tax-attorney", title: "Innocent Spouse Tax Attorney" },
  { slug: "currently-not-collectible-lawyer", title: "Currently Not Collectible Lawyer" },
  { slug: "irs-appeals-representation", title: "IRS Appeals Representation" },
  { slug: "csed-tax-debt-expiration", title: "CSED Tax Debt Expiration" },
  { slug: "trust-fund-penalty-lawyer", title: "Trust Fund Penalty Lawyer" },
  { slug: "criminal-tax-defense-attorney", title: "Criminal Tax Defense Attorney" },
  { slug: "tax-debt-bankruptcy-attorney", title: "Tax Debt Bankruptcy Attorney" },
  { slug: "fbar-foreign-account-lawyer", title: "FBAR & Foreign Account Lawyer" },
  { slug: "small-business-irs-attorney", title: "Small Business IRS Attorney" },
  { slug: "freelancer-tax-debt-attorney", title: "Freelancer Tax Debt Attorney" },
  { slug: "revenue-officer-defense-lawyer", title: "Revenue Officer Defense Lawyer" },
];
export default function HomePage() {
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
      <section style={{ background: "#0d1b2a", padding: "60px 24px 70px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#8b5e3c", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 20, fontFamily: "system-ui" }}>Nationwide · 32 Years · Over $100M Resolved</p>
          <h1 style={{ fontSize: 40, fontWeight: 700, lineHeight: 1.2, marginBottom: 20, maxWidth: 700, color: "#fff" }}>32 years of fighting the IRS. I know how they think.</h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: "#999", maxWidth: 560, marginBottom: 36 }}>Tax attorney Darrin T. Mish represents Americans in every state against the IRS. Over $100 million in tax debt resolved. Licensed in Florida, Colorado, and Texas. When the IRS comes after you, I push back.</p>
          <a href="https://getirshelp.com" target="_blank" rel="noopener" style={{ display: "inline-block", padding: "14px 28px", background: "#8b5e3c", color: "#fff", textDecoration: "none", fontSize: 14, fontWeight: 700, borderRadius: 4, fontFamily: "system-ui" }}>Free Consultation →</a>
        </div>
      </section>
      <section style={{ background: "#f0eeea", padding: "32px 24px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", justifyContent: "center", gap: 48 }}>
          {[{ num: "50", label: "States Represented" }, { num: "32", label: "Years Experience" }, { num: "$100M+", label: "IRS Debt Resolved" }].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 26, fontWeight: 700, fontFamily: "system-ui" }}>{s.num}</div>
              <div style={{ fontSize: 12, color: "#555", fontFamily: "system-ui" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ padding: "56px 24px", maxWidth: 960, margin: "0 auto" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 32 }}>What I Handle</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {GUIDES.map((g) => (<Link key={g.slug} href={"/articles/" + g.slug} style={{ display: "block", padding: "13px 16px", textDecoration: "none", color: "#1a1a1a", border: "1px solid #ddd", borderRadius: 4, fontSize: 14, fontFamily: "system-ui" }}>{g.title} <span style={{ color: "#8b5e3c" }}>→</span></Link>))}
        </div>
      </section>
      <section style={{ background: "#8b5e3c", padding: "48px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: "#fff", marginBottom: 24 }}>Stop losing sleep over the IRS. Let's talk.</h2>
        <a href="https://getirshelp.com" target="_blank" rel="noopener" style={{ display: "inline-block", padding: "14px 32px", background: "#0d1b2a", color: "#8b5e3c", textDecoration: "none", fontSize: 14, fontWeight: 700, borderRadius: 4, fontFamily: "system-ui" }}>Schedule at getirshelp.com →</a>
      </section>
      <footer style={{ background: "#0d1b2a", color: "#555", padding: "32px 24px", textAlign: "center", fontSize: 12 }}>
        <a href="https://getirshelp.com" target="_blank" rel="noopener" style={{ color: "#8b5e3c", textDecoration: "none" }}>getirshelp.com</a> · © 2026 Law Offices of Darrin T. Mish, P.A.
      </footer>
    </div>
  );
}
