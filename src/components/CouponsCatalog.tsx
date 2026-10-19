'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { Category, Coupon, Store } from '@/lib/data';
import CouponCard from '@/components/CouponCard';

export default function CouponsCatalog({ coupons, categories, stores }: { coupons: Coupon[]; categories: Category[]; stores: Store[] }) {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('all');
  const [categoryId, setCategoryId] = useState('all');
  const visibleCoupons = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return coupons.filter((coupon) => {
      const categoryMatches = categoryId === 'all' || coupon.categoryId === categoryId;
      const typeMatches = type === 'all' || coupon.type === type;
      const store = stores.find((item) => item.id === coupon.storeId);
      const queryMatches = !normalizedQuery || `${coupon.title} ${coupon.description} ${coupon.discount} ${store?.name ?? ''}`.toLowerCase().includes(normalizedQuery);
      return categoryMatches && typeMatches && queryMatches;
    });
  }, [coupons, stores, query, type, categoryId]);

  return (
    <>
      <div className="coupon-filters">
        <label className="catalog-search">
          <Search size={18} aria-hidden="true" />
          <span className="sr-only">Search coupons</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search coupons or stores" />
        </label>
        <label className="catalog-select">
          <span className="sr-only">Filter by offer type</span>
          <select value={type} onChange={(event) => setType(event.target.value)}>
            <option value="all">All offers</option>
            <option value="code">Promo codes</option>
            <option value="deal">Deals</option>
          </select>
        </label>
        <label className="catalog-select">
          <span className="sr-only">Filter by category</span>
          <select value={categoryId} onChange={(event) => setCategoryId(event.target.value)}>
            <option value="all">All categories</option>
            {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
          </select>
        </label>
        <p className="catalog-count">{visibleCoupons.length} {visibleCoupons.length === 1 ? 'offer' : 'offers'}</p>
      </div>
      {visibleCoupons.length ? (
        <div className="coupon-grid coupon-grid--listing">
          {visibleCoupons.map((coupon) => {
            const store = stores.find((item) => item.id === coupon.storeId);
            return store ? <CouponCard key={coupon.id} coupon={coupon} storeName={store.name} showImage={false} variant="compact" /> : null;
          })}
        </div>
      ) : (
        <div className="empty-state">No offers match these filters. Try another search or offer type.</div>
      )}
    </>
  );
}
