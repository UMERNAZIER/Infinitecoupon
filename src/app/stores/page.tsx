import { Metadata } from 'next';
import { getAllStores } from '@/lib/data';
import StoreCard from '@/components/StoreCard';

export const metadata: Metadata = {
  title: 'All Stores - Infinite Coupons',
  description: 'Browse coupons from your favorite brands',
};

export default function StoresPage() {
  const stores = getAllStores().sort((a, b) => a.name.localeCompare(b.name));

  return (
    <main className="page-shell directory-shell">
      <div>
        <header className="page-heading">
          <p className="eyebrow">Browse by retailer</p>
          <h1>All stores</h1>
          <p>Find store offers and browse product searches from popular retailers.</p>
        </header>

        <div className="store-grid store-directory-grid">
          {stores.map(store => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </div>
    </main>
  );
}
