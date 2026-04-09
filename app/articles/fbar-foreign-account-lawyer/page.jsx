import Link from "next/link";
export const metadata = { title: "FBAR & Foreign Account Lawyer — The Tax Attorney | Darrin T. Mish", description: "FBAR penalties for willful violations can reach $100,000 or 50% of the account balance per year. Per violation. Per year. If you have unreported foreign ac", alternates: { canonical: "/articles/fbar-foreign-account-lawyer" } };
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
        <h1 style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.3, marginBottom: 20 }}>Foreign Accounts: The Penalties Can Destroy You</h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "#444", marginBottom: 40, fontFamily: "system-ui" }}>FBAR penalties for willful violations can reach $100,000 or 50% of the account balance per year. Per violation. Per year. If you have unreported foreign accounts, this is not something to handle yourself or with a CPA. You need a tax attorney.</p>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>FBAR Filing Requirements</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: "system-ui" }}>If your foreign financial accounts exceeded $10,000 in aggregate value at any point during the year, you must file FinCEN Form 114. This is separate from your tax return and has its own deadline.</p>
        </div>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>FATCA and Form 8938</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: "system-ui" }}>FATCA requires reporting foreign financial assets above certain thresholds on Form 8938. The thresholds vary by filing status and whether you live in the U.S. or abroad. This overlaps with but is separate from FBAR.</p>
        </div>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Streamlined Filing Procedures</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: "system-ui" }}>If your failure to report was non-willful, the IRS Streamlined Filing Compliance Procedures can bring you into compliance with reduced or eliminated penalties. I evaluate whether you qualify and handle the entire process.</p>
        </div>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>When Privilege Matters Most</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: "system-ui" }}>Foreign account cases often involve potential criminal exposure. Willful failure to file an FBAR is a federal crime. Attorney-client privilege is not optional in these cases. It's essential.</p>
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
