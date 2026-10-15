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
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-bold text-slate-900 font-poppins mb-3">All Stores</h1>
          <p className="text-slate-600 text-lg">Browse coupons from your favorite brands</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map(store => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </div>
    </main>
  );
}
