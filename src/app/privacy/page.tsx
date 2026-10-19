import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Infinite Coupons',
  description: 'Learn what information Infinite Coupons processes when you browse the site.',
};

const updated = 'October 20, 2026';

export default function PrivacyPage() {
  return (
    <main className="page-shell legal-shell">
      <header className="page-heading">
        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p>Last updated {updated}</p>
      </header>
      <article className="legal-content">
        <p>This policy describes the information practices for Infinite Coupons (the “site”). The site helps visitors browse coupon listings, retailer links, categories, and product searches. It does not take orders or create user accounts.</p>

        <h2>Information processed when you visit</h2>
        <p>The site does not ask you to submit a name, email address, payment information, or other profile details. Search terms are used to show matching pages and can appear in the URL sent to the site host. Like most web hosts, the hosting provider may process technical request information such as an IP address, browser details, requested URL, and time of request to deliver and secure the site. We do not operate a site database or analytics account in this version of the site.</p>

        <h2>Cookies and similar technologies</h2>
        <p>The site itself does not currently set advertising, analytics, or preference cookies. When you follow a link to a retailer, that retailer and any services it uses may use cookies or similar technologies under their own policies. Their practices are outside our control.</p>

        <h2>Retailer links and offers</h2>
        <p>Store and product links take you to third-party websites. Those sites set their own privacy notices, terms, and data practices. Please review the retailer’s policy before providing information or making a purchase. If a listing is ever marked as an affiliate link, we may receive a commission when a qualifying purchase is made; this does not change the price you pay.</p>

        <h2>How long information is kept</h2>
        <p>Infinite Coupons does not maintain a user profile or database of visitor search history in this version of the site. The site host may retain technical logs for the periods described in its own documentation and agreements.</p>

        <h2>Your privacy choices</h2>
        <p>Privacy rights depend on where you live and whether a law applies to the site operator. The current site does not provide accounts, targeted advertising, or a form for collecting personal information. A private privacy-request contact has not been configured yet. Do not post personal or sensitive information in a public issue tracker; the site operator must publish a private contact method before launch.</p>

        <h2>Children</h2>
        <p>This shopping information site is intended for a general audience and is not designed to collect personal information from children.</p>

        <h2>Changes to this policy</h2>
        <p>This policy may change if the site adds analytics, advertising, account features, forms, or other data practices. The date above will be updated when the policy changes. Material changes should be reviewed before new features launch.</p>
      </article>
      <p className="legal-note"><strong>Site owner action:</strong> Add the operating entity’s name and a monitored private privacy contact address before launch. This draft describes the current code and hosting assumptions.</p>
    </main>
  );
}
