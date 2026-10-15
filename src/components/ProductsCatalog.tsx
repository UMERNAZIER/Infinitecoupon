'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { Category, Product, Store } from '@/lib/data';
import ProductCard from '@/components/ProductCard';

export default function ProductsCatalog({
  products,
  categories,
  stores,
}: {
  products: Product[];
  categories: Category[];
  stores: Store[];
}) {
  const [query, setQuery] = useState('');
  const [categoryId, setCategoryId] = useState('all');
  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return products.filter((product) => {
      const categoryMatches = categoryId === 'all' || product.categoryId === categoryId;
      const storeName = stores.find((store) => store.id === product.storeId)?.name ?? '';
      const queryMatches = !normalizedQuery ||
        `${product.name} ${product.description} ${storeName}`.toLowerCase().includes(normalizedQuery);
      return categoryMatches && queryMatches;
    });
  }, [products, query, categoryId]);

  return (
    <>
      <div className="catalog-controls">
        <label className="catalog-search">
          <Search size={19} aria-hidden="true" />
          <span className="sr-only">Search products</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products" />
        </label>
        <label className="catalog-select">
          <span className="sr-only">Filter by category</span>
          <select value={categoryId} onChange={(event) => setCategoryId(event.target.value)}>
            <option value="all">All categories</option>
            {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
          </select>
        </label>
        <p className="catalog-count">{visibleProducts.length} {visibleProducts.length === 1 ? 'item' : 'items'}</p>
      </div>
      {visibleProducts.length ? (
        <div className="products-grid">
          {visibleProducts.map((product) => {
            const category = categories.find((item) => item.id === product.categoryId);
            const store = stores.find((item) => item.id === product.storeId);
            return category && store ? <ProductCard key={product.id} product={product} category={category} store={store} /> : null;
          })}
        </div>
      ) : (
        <div className="empty-state">No products match that search. Try another keyword or category.</div>
      )}
    </>
  );
}
