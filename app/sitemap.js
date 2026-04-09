export default function sitemap() {
  const base = "https://www.thetaxattorney.net";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1.0 },
    { url: base + "/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: base + "/services", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: base + "/faq", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/articles/nationwide-irs-tax-lawyer", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/articles/offer-in-compromise-attorney", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/articles/irs-audit-representation", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/articles/stop-irs-wage-garnishment", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/articles/irs-bank-levy-attorney", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/articles/unfiled-returns-tax-attorney", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/articles/irs-penalty-relief-lawyer", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/articles/irs-payment-plan-attorney", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/articles/tax-court-litigation-lawyer", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/articles/innocent-spouse-tax-attorney", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/articles/currently-not-collectible-lawyer", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/articles/irs-appeals-representation", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/articles/csed-tax-debt-expiration", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/articles/trust-fund-penalty-lawyer", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/articles/criminal-tax-defense-attorney", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/articles/tax-debt-bankruptcy-attorney", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/articles/fbar-foreign-account-lawyer", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/articles/small-business-irs-attorney", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/articles/freelancer-tax-debt-attorney", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: base + "/articles/revenue-officer-defense-lawyer", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
