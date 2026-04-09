import Link from "next/link";
export default function NotFound() { return (<div style={{ fontFamily: "system-ui", textAlign: "center", padding: "120px 24px", background: "#faf9f6", minHeight: "100vh" }}><h1 style={{ fontSize: 48, fontWeight: 700 }}>404</h1><p style={{ color: "#666" }}>Page not found.</p><Link href="/" style={{ color: "#8b5e3c" }}>Back to Home</Link></div>); }
