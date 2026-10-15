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
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-bold text-slate-900 font-poppins mb-3">Browse by Category</h1>
          <p className="text-slate-600 text-lg">Find the best deals in your favorite categories</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </main>
  );
}
