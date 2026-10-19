'use client';

import { useState } from 'react';
import { Category, Coupon, Product, Store } from '@/lib/data';
import CouponCard from '@/components/CouponCard';
import FilterTabs from '@/components/FilterTabs';
import ProductCard from '@/components/ProductCard';

type Props = {
  store: Store;
  initialCoupons: Coupon[];
  products: Product[];
  categories: Category[];
};

export default function StorePageClient({ store, initialCoupons, products, categories }: Props) {
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
              showImage={false}
            />
          ))
        ) : (
          <div className="bg-white p-8 rounded-xl border border-slate-200 text-center text-slate-500">
            No {activeTab.toLowerCase()} found for {store.name} right now.
          </div>
        )}
      </div>

      <section className="store-products-section">
        <div className="home-section__heading">
          <div>
            <p className="eyebrow">Browse the catalog</p>
            <h2>Popular products at {store.name}</h2>
          </div>
          <span className="catalog-count">{products.length} picks</span>
        </div>
        <div className="products-grid">
          {products.map((product) => {
            const category = categories.find((item) => item.id === product.categoryId);
            return category ? <ProductCard key={product.id} product={product} category={category} store={store} /> : null;
          })}
        </div>
      </section>
    </div>
  );
}
