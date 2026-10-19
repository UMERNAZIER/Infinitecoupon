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
  const [page, setPage] = useState(1);
  const pageSize = 24;
  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return products.filter((product) => {
      const categoryMatches = categoryId === 'all' || product.categoryId === categoryId;
      const storeName = stores.find((store) => store.id === product.storeId)?.name ?? '';
      const queryMatches = !normalizedQuery ||
        `${product.name} ${product.description} ${storeName}`.toLowerCase().includes(normalizedQuery);
      return categoryMatches && queryMatches;
    });
  }, [products, stores, query, categoryId]);
  const pageCount = Math.max(1, Math.ceil(visibleProducts.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const pageProducts = visibleProducts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <>
      <div className="catalog-controls">
        <label className="catalog-search">
          <Search size={19} aria-hidden="true" />
          <span className="sr-only">Search products</span>
          <input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Search products" />
        </label>
        <label className="catalog-select">
          <span className="sr-only">Filter by category</span>
          <select value={categoryId} onChange={(event) => { setCategoryId(event.target.value); setPage(1); }}>
            <option value="all">All categories</option>
            {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
          </select>
        </label>
        <p className="catalog-count">{visibleProducts.length} {visibleProducts.length === 1 ? 'item' : 'items'}</p>
      </div>
      {visibleProducts.length ? (
        <div className="products-grid">
          {pageProducts.map((product) => {
            const category = categories.find((item) => item.id === product.categoryId);
            const store = stores.find((item) => item.id === product.storeId);
            return category && store ? <ProductCard key={product.id} product={product} category={category} store={store} /> : null;
          })}
        </div>
      ) : (
        <div className="empty-state">No products match that search. Try another keyword or category.</div>
      )}
      {pageCount > 1 && (
        <nav className="pagination" aria-label="Product pages">
          <button type="button" onClick={() => setPage((value) => Math.max(1, value - 1))} disabled={currentPage === 1}>Previous</button>
          <span>Page {currentPage} of {pageCount}</span>
          <button type="button" onClick={() => setPage((value) => Math.min(pageCount, value + 1))} disabled={currentPage === pageCount}>Next</button>
        </nav>
      )}
    </>
  );
}
