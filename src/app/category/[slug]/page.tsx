import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllCategories, getCategoryBySlug, getCouponsByCategory, getProductsByCategory, getAllStores } from '@/lib/data';
import CategoryPageClient from '@/components/CategoryPageClient';

export async function generateStaticParams() {
  return getAllCategories().map((cat) => ({ slug: cat.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  
  if (!category) {
    return { title: 'Category Not Found - Infinite Coupons' };
  }
  
  return {
    title: `${category.name} Coupons & Promo Codes - Infinite Coupons`,
    description: `Save with the latest deals and coupons in ${category.name}.`
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  
  if (!category) {
    notFound();
  }
  
  const coupons = getCouponsByCategory(category.id);

  return (
    <main className="min-h-screen bg-slate-50 pb-16">
      {/* Category Hero */}
      <div className="bg-emerald-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900 to-slate-900 z-0 opacity-90"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold font-poppins mb-4">
            {category.name}
          </h1>
          <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto">
            {category.description} Browse product picks and any listed offers below.
          </p>
          <div className="mt-6 inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
            {coupons.length} Listed {coupons.length === 1 ? 'Offer' : 'Offers'}
          </div>
        </div>
      </div>

      {/* Coupons Section */}
      <div className="max-w-4xl mx-auto mt-8 px-4">
        <CategoryPageClient category={category} initialCoupons={coupons} products={getProductsByCategory(category.id)} stores={getAllStores()} />
      </div>
    </main>
  );
}
