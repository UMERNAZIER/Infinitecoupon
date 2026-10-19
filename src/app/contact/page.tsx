import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Mail, MessageSquareWarning } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Infinite Coupons',
  description: 'Contact Infinite Coupons about site issues or offer corrections.',
};

export default function ContactPage() {
  return (
    <main className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">We’re here to help</p>
        <h1>Contact us</h1>
        <p>Report a site issue or a coupon listing that needs attention.</p>
      </header>
      <div className="contact-grid">
        <section className="contact-card">
          <MessageSquareWarning size={22} aria-hidden="true" />
          <h2>Report a listing or site issue</h2>
          <p>Open a request in the project issue tracker. Include the store name and offer link; please do not post personal or payment information.</p>
          <a className="contact-link" href="https://github.com/UMERNAZIER/Infinitecoupon/issues/new" target="_blank" rel="noopener noreferrer">
            Open a support issue <ArrowUpRight size={16} />
          </a>
        </section>
        <section className="contact-card">
          <Mail size={22} aria-hidden="true" />
          <h2>Privacy and legal requests</h2>
          <p>A private privacy-request channel has not been provided yet. Do not post personal information in a public issue; add a monitored private contact address before launch.</p>
          <a className="contact-link" href="https://github.com/UMERNAZIER" target="_blank" rel="noopener noreferrer">
            View the project owner profile <ArrowUpRight size={16} />
          </a>
          <p className="contact-card__note">No private contact email is configured.</p>
        </section>
      </div>
      <p className="contact-retailer">Questions about an order, a retailer’s current price, or a product return should go directly to the retailer.</p>
      <Link className="section-link" href="/stores">Browse store pages →</Link>
    </main>
  );
}
