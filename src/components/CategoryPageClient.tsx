'use client';

import { useState } from 'react';
import { Coupon, Category, getStoreById } from '@/lib/data';
import CouponCard from '@/components/CouponCard';
import FilterTabs from '@/components/FilterTabs';

type Props = {
  category: Category;
  initialCoupons: Coupon[];
};

export default function CategoryPageClient({ category, initialCoupons }: Props) {
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
          filteredCoupons.map(coupon => {
            const store = getStoreById(coupon.storeId);
            if (!store) return null;
            
            return (
              <CouponCard 
                key={coupon.id} 
                coupon={coupon} 
                storeName={store.name} 
              />
            );
          })
        ) : (
          <div className="bg-white p-8 rounded-xl border border-slate-200 text-center text-slate-500">
            No {activeTab.toLowerCase()} found in {category.name} right now.
          </div>
        )}
      </div>
    </div>
  );
}
