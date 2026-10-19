'use client';

import { useState } from 'react';
import { Coupon, Category, Product, Store, getStoreById } from '@/lib/data';
import CouponCard from '@/components/CouponCard';
import FilterTabs from '@/components/FilterTabs';
import ProductCard from '@/components/ProductCard';

type Props = {
  category: Category;
  initialCoupons: Coupon[];
  products: Product[];
  stores: Store[];
};

export default function CategoryPageClient({ category, initialCoupons, products, stores }: Props) {
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
          <div className="empty-state">No {activeTab.toLowerCase()} are listed in {category.name} right now.</div>
        )}
      </div>

      {products.length > 0 && (
        <section className="category-products-section">
          <div className="home-section__heading">
            <div>
              <p className="eyebrow">Browse the catalog</p>
              <h2>Popular products in {category.name}</h2>
            </div>
            <span className="catalog-count">{products.length} picks</span>
          </div>
          <div className="products-grid">
            {products.map((product) => {
              const store = stores.find((item) => item.id === product.storeId);
              return store ? <ProductCard key={product.id} product={product} category={category} store={store} /> : null;
            })}
          </div>
        </section>
      )}
    </div>
  );
}
