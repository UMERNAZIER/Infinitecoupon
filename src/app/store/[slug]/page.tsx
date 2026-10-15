import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Star, ExternalLink } from 'lucide-react';
import { getAllStores, getStoreBySlug, getCouponsByStore, getAllProducts } from '@/lib/data';
import StorePageClient from '@/components/StorePageClient';
import BrandLogo from '@/components/BrandLogo';

export async function generateStaticParams() {
  return getAllStores().map((store) => ({ slug: store.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const store = getStoreBySlug(slug);
  
  if (!store) {
    return { title: 'Store Not Found - Infinite Coupons' };
  }
  
  return {
    title: `${store.name} Coupons & Deals - Infinite Coupons`,
    description: `Save with the latest ${store.name} coupons, promo codes, and deals.`
  };
}

export default async function StorePage({ params }: Props) {
  const { slug } = await params;
  const store = getStoreBySlug(slug);
  
  if (!store) {
    notFound();
  }
  
  const coupons = getCouponsByStore(store.id);

  return (
    <main className="min-h-screen bg-slate-50 pb-16">
      {/* Store Hero */}
      <div className="bg-white border-b border-slate-200 py-12 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-32 h-32 bg-slate-100 rounded-2xl flex items-center justify-center p-4 shadow-sm border border-slate-200 flex-shrink-0">
            <BrandLogo name={store.name} />
          </div>
          
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 font-poppins mb-2">
              {store.name} Coupons
            </h1>
            
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="flex items-center text-amber-500">
                <Star className="w-5 h-5 fill-current" />
                <span className="ml-1 font-semibold text-slate-700">{store.rating}</span>
              </div>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600">{coupons.length} Active Offers</span>
            </div>
            
            <p className="text-slate-600 mb-6 max-w-2xl leading-relaxed">
              {store.description}
            </p>
            
            <a 
              href={store.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Visit Store <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Coupons Section */}
      <div className="max-w-4xl mx-auto mt-8 px-4">
        <StorePageClient store={store} initialCoupons={coupons} products={getAllProducts()} />
      </div>
    </main>
  );
}
