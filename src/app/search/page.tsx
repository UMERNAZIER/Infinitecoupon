'use client';

import { Suspense, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { searchAll, getStoreById, getAllCategories, getAllStores, getAllCoupons, getAllProducts, getCategoryBySlug } from '@/lib/data';
import StoreCard from '@/components/StoreCard';
import CouponCard from '@/components/CouponCard';
import ProductCard from '@/components/ProductCard';
import { Search as SearchIcon } from 'lucide-react';

function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get('q') || '';
  const categorySlug = searchParams.get('category') || '';
  const selectedCategory = categorySlug ? getCategoryBySlug(categorySlug) : undefined;
  
  const [query, setQuery] = useState(initialQuery);
  const allResults = initialQuery ? searchAll(initialQuery) : {
    stores: getAllStores(),
    coupons: getAllCoupons(),
    products: getAllProducts(),
    categories: getAllCategories(),
  };
  const results = selectedCategory ? {
    stores: allResults.stores.filter((store) => store.categories.includes(selectedCategory.id)),
    coupons: allResults.coupons.filter((coupon) => coupon.categoryId === selectedCategory.id),
    products: allResults.products.filter((product) => product.categoryId === selectedCategory.id),
    categories: [selectedCategory],
  } : allResults;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const hasSearch = Boolean(initialQuery || selectedCategory);
  const hasResults = results.stores.length > 0 || results.coupons.length > 0 || results.products.length > 0 || results.categories.length > 0;

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSearch} className="mb-10">
          <div className="flex bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden p-1 focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500 transition-all">
            <div className="flex-grow flex items-center px-4">
              <SearchIcon className="text-slate-400 w-5 h-5 mr-3" />
              <input
                type="text"
                placeholder="Search for stores, categories, or coupons..."
                className="w-full py-3 text-slate-800 placeholder-slate-400 outline-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Search
            </button>
          </div>
        </form>

        {!hasSearch ? (
          <div className="bg-white p-12 rounded-xl border border-slate-200 text-center text-slate-500 shadow-sm">
            <SearchIcon className="w-12 h-12 mx-auto text-slate-300 mb-4" />
            <h2 className="text-xl font-semibold text-slate-700 mb-2">Search Infinite Coupons</h2>
            <p>Enter a search term or choose a category to find stores and deals.</p>
          </div>
        ) : !hasResults ? (
          <div className="bg-white p-12 rounded-xl border border-slate-200 text-center text-slate-500 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-700 mb-2">No results found{initialQuery ? ` for “${initialQuery}”` : ''}{selectedCategory ? ` in ${selectedCategory.name}` : ''}</h2>
            <p>Try checking your spelling or using more general terms.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {results.stores.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-slate-900 font-poppins mb-6">Matching Stores</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.stores.map(store => (
                    <StoreCard key={store.id} store={store} />
                  ))}
                </div>
              </section>
            )}

            {results.coupons.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-slate-900 font-poppins mb-6">Matching Coupons</h2>
                <div className="flex flex-col gap-4">
                  {results.coupons.map(coupon => {
                    const store = getStoreById(coupon.storeId);
                    if (!store) return null;
                    const imageUrl = coupon.imageUrl ?? getAllProducts().find((product) => product.storeId === store.id && product.categoryId === coupon.categoryId)?.imageUrl;
                    return (
                      <CouponCard 
                        key={coupon.id} 
                        coupon={coupon} 
                        storeName={store.name} 
                        imageUrl={imageUrl}
                      />
                    );
                  })}
                </div>
              </section>
            )}
            {results.categories.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-slate-900 font-poppins mb-6">Matching Categories</h2>
                <div className="flex flex-wrap gap-3">
                  {results.categories.map((category) => (
                    <a key={category.id} href={`/category/${category.slug}`} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-emerald-600 hover:text-emerald-700">{category.name}</a>
                  ))}
                </div>
              </section>
            )}
            {results.products.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-slate-900 font-poppins mb-6">Matching Products</h2>
                <div className="products-grid">
                  {results.products.map((product) => {
                    const category = getAllCategories().find((item) => item.id === product.categoryId);
                    const store = getAllStores().find((item) => item.id === product.storeId);
                    return category && store ? <ProductCard key={product.id} product={product} category={category} store={store} /> : null;
                  })}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading...</div>}>
      <SearchResults />
    </Suspense>
  );
}
