'use client';

import { useState } from 'react';
import { Coupon, Product, Store } from '@/lib/data';
import CouponCard from '@/components/CouponCard';
import FilterTabs from '@/components/FilterTabs';

type Props = {
  store: Store;
  initialCoupons: Coupon[];
  products: Product[];
};

export default function StorePageClient({ store, initialCoupons, products }: Props) {
  const [activeTab, setActiveTab] = useState('All');
  
  const filteredCoupons = initialCoupons.filter(coupon => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Codes') return coupon.type === 'code';
    if (activeTab === 'Deals') return coupon.type === 'deal';
    return true;
  });

  return (
    <div>
      <FilterTabs coupons={initialCoupons} activeTab={activeTab as 'All' | 'Codes' | 'Deals'} onTabChange={setActiveTab} />
      
      <div className="mt-6 flex flex-col gap-4">
        {filteredCoupons.length > 0 ? (
          filteredCoupons.map(coupon => (
            <CouponCard 
              key={coupon.id} 
              coupon={coupon} 
              storeName={store.name} 
              imageUrl={coupon.imageUrl ?? products.find((product) => product.storeId === store.id && product.categoryId === coupon.categoryId)?.imageUrl}
            />
          ))
        ) : (
          <div className="bg-white p-8 rounded-xl border border-slate-200 text-center text-slate-500">
            No {activeTab.toLowerCase()} found for {store.name} right now.
          </div>
        )}
      </div>
    </div>
  );
}
