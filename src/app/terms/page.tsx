import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | Infinite Coupons',
  description: 'Terms that apply when browsing Infinite Coupons.',
};

export default function TermsPage() {
  return (
    <main className="page-shell legal-shell">
      <header className="page-heading">
        <p className="eyebrow">Legal</p>
        <h1>Terms of Use</h1>
        <p>Last updated October 20, 2026</p>
      </header>
      <article className="legal-content">
        <p>These terms apply to your use of Infinite Coupons (the “site”). By browsing the site, you agree to use it lawfully and in accordance with these terms. If you do not agree, do not use the site.</p>

        <h2>What the site provides</h2>
        <p>Infinite Coupons organizes coupon listings, retailer offers, product searches, and links for convenience. The site does not sell products, process orders, issue discount codes, or control a retailer’s checkout.</p>

        <h2>Offer information can change</h2>
        <p>Offers, prices, eligibility, stock, product descriptions, and expiration dates may change or be limited by the retailer. A listed code may not work for every order. Always check the retailer’s current offer terms and final checkout total before you buy. Retailers’ terms govern purchases and returns.</p>

        <h2>Retailer links and compensation</h2>
        <p>Links may take you to independent retailer websites. Some links may be affiliate links; where a link is identified as an affiliate link, the site may earn a commission from a qualifying purchase at no additional cost to you. Retailers are responsible for their products, services, order fulfilment, returns, and customer support.</p>

        <h2>Acceptable use</h2>
        <p>You may use the site for personal, lawful shopping research. Do not interfere with the site, attempt unauthorized access, scrape it in a way that disrupts service, submit malicious code, or use its content to mislead others.</p>

        <h2>Intellectual property</h2>
        <p>The site’s original text, layout, and branding belong to its operator or licensors. Retailer names, trademarks, and product references belong to their respective owners and are used to identify the stores and products described. No retailer endorsement is implied.</p>

        <h2>Disclaimer</h2>
        <p>The site and its listings are provided for general information and on an “as available” basis. We do not promise that every listing is current, complete, uninterrupted, or suitable for a particular purchase. Nothing on the site replaces the retailer’s offer terms or professional advice where that is needed.</p>

        <h2>Liability</h2>
        <p>To the extent allowed by applicable law, the site operator is not responsible for losses arising from retailer products, purchases, third-party websites, or a listing that has changed. These terms do not exclude rights or remedies that cannot legally be excluded.</p>

        <h2>Updates and contact</h2>
        <p>These terms may be updated as the site changes. The “Last updated” date indicates the latest revision. For questions about these terms, use the Contact page.</p>
      </article>
      <p className="legal-note"><strong>Site owner action:</strong> Confirm the operating entity, private contact method, and governing-law details with qualified counsel before launch. This general draft is not legal advice.</p>
    </main>
  );
}
