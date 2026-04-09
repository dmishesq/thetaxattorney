import Link from "next/link";
export const metadata = { title: "Criminal Tax Defense Attorney — The Tax Attorney | Darrin T. Mish", description: "If IRS Criminal Investigation has contacted you, this is not a collection problem. This is a criminal case. CI has a conviction rate above 90%. Everything ", alternates: { canonical: "/articles/criminal-tax-defense-attorney" } };
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
        <h1 style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.3, marginBottom: 20 }}>IRS Criminal Investigation: Stop Talking. Call a Lawyer.</h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: "#444", marginBottom: 40, fontFamily: "system-ui" }}>If IRS Criminal Investigation has contacted you, this is not a collection problem. This is a criminal case. CI has a conviction rate above 90%. Everything you say from this point forward can be used against you in federal court. Stop talking and call me.</p>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>What Triggers a Criminal Investigation</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: "system-ui" }}>Tax fraud. Filing false returns. Willful evasion. Structuring bank deposits to avoid reporting. Hiding income offshore. These are federal crimes carrying prison time and massive fines.</p>
        </div>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Attorney-Client Privilege</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: "system-ui" }}>This is the single most important reason to hire a tax attorney instead of a CPA or enrolled agent. Your communications with me are legally privileged. A CPA can be subpoenaed. An enrolled agent can be compelled to testify. I cannot.</p>
        </div>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>The Investigation Timeline</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: "system-ui" }}>CI agents build their case before you know you're being investigated. By the time they knock on your door, they've already reviewed your bank records, interviewed witnesses, and consulted with the U.S. Attorney's office. Your response is critical.</p>
        </div>
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Voluntary Disclosure</h2>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: "#555", fontFamily: "system-ui" }}>If you come forward before the IRS initiates an investigation, voluntary disclosure may prevent criminal prosecution. This window closes the moment an investigation begins. Timing is everything.</p>
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
