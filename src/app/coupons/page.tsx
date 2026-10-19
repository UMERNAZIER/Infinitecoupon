import type { Metadata } from 'next';
import { getAllCategories, getAllCoupons, getAllStores } from '@/lib/data';
import CouponsCatalog from '@/components/CouponsCatalog';

export const metadata: Metadata = {
  title: 'Coupons & Deals | Infinite Coupons',
  description: 'Browse coupon codes and store deals by retailer, offer type, and category.',
};

export default function CouponsPage() {
  return (
    <main className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">Save on your next order</p>
        <h1>Coupons &amp; deals</h1>
        <p>Browse listed offers by store, category, or offer type.</p>
      </header>
      <CouponsCatalog coupons={getAllCoupons()} categories={getAllCategories()} stores={getAllStores()} />
    </main>
  );
}
