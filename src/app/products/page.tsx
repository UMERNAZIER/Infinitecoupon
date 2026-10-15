import type { Metadata } from 'next';
import { getAllCategories, getAllProducts, getAllStores } from '@/lib/data';
import ProductsCatalog from '@/components/ProductsCatalog';

export const metadata: Metadata = {
  title: 'Product Catalog | Infinite Coupons',
  description: 'Browse products by category and find related store offers.',
};

export default function ProductsPage() {
  return (
    <main className="page-shell">
      <div className="page-heading">
        <p className="eyebrow">Browse the catalog</p>
        <h1>Products</h1>
        <p>Explore products by category and browse related store offers.</p>
      </div>
      <ProductsCatalog products={getAllProducts()} categories={getAllCategories()} stores={getAllStores()} />
    </main>
  );
}
