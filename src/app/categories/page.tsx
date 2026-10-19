import { Metadata } from 'next';
import { getAllCategories } from '@/lib/data';
import CategoryCard from '@/components/CategoryCard';

export const metadata: Metadata = {
  title: 'All Categories - Infinite Coupons',
  description: 'Browse all coupon categories',
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <main className="page-shell directory-shell">
      <div>
        <header className="page-heading">
          <p className="eyebrow">Browse by what you need</p>
          <h1>Shop by category</h1>
          <p>Explore offers and product searches across 50 shopping categories.</p>
        </header>

        <div className="category-grid category-directory-grid">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </main>
  );
}
