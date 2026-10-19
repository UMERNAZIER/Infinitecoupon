import Link from 'next/link';
import {
  getStoreById,
  getFeaturedStores,
  getAllCategories,
  getAllCoupons,
  getAllProducts,
} from '@/lib/data';
import CouponCard from '@/components/CouponCard';
import StoreCard from '@/components/StoreCard';
import CategoryCard from '@/components/CategoryCard';
import { blogPosts } from '@/lib/blog';

export default function Home() {
  const allCoupons = getAllCoupons();
  const products = getAllProducts();
  const deals = allCoupons.filter((coupon) => coupon.type === 'deal');
  const hotDeals = [...deals.filter((coupon) => coupon.featured), ...deals.filter((coupon) => !coupon.featured)].slice(0, 8);
  const couponCodes = allCoupons.filter((coupon) => coupon.type === 'code');
  const hotDealIds = new Set(hotDeals.map((coupon) => coupon.id));
  const additionalDeals = deals.filter((coupon) => !hotDealIds.has(coupon.id)).slice(0, 6);
  const couponSectionItems = [...couponCodes, ...additionalDeals];
  const featuredStores = getFeaturedStores();
  const categories = getAllCategories();
  const getOfferImage = (categoryId: string, storeId: string, offerImage?: string) =>
    offerImage ??
    products.find((product) => product.categoryId === categoryId && product.storeId === storeId)?.imageUrl ??
    products.find((product) => product.categoryId === categoryId)?.imageUrl;

  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero__inner">
          <p className="eyebrow">Save on the things you already shop for</p>
          <h1>Find a deal. Make it count.</h1>
          <p className="home-hero__intro">Promo codes and current offers from the stores you already shop.</p>
          <div className="home-hero__popular">
            <span>Popular:</span>
            {categories.slice(0, 5).map((category) => (
              <Link key={category.id} href={`/category/${category.slug}`}>{category.name}</Link>
            ))}
          </div>
        </div>
      </section>

      {hotDeals.length > 0 && (
        <section className="home-section">
          <div className="home-section__heading">
            <div>
              <p className="eyebrow">Worth a look</p>
              <h2>Hot deals</h2>
            </div>
            <Link className="section-link" href="/coupons">See all deals <span aria-hidden="true">→</span></Link>
          </div>
          <div className="coupon-grid">
            {hotDeals.map((coupon) => {
              const store = getStoreById(coupon.storeId);
              if (!store) return null;
              return <CouponCard key={coupon.id} coupon={coupon} storeName={store.name} imageUrl={getOfferImage(coupon.categoryId, coupon.storeId, coupon.imageUrl)} variant="compact" />;
            })}
          </div>
        </section>
      )}

      <section className="home-section home-section--stores">
        <div className="home-section__heading">
          <div>
            <p className="eyebrow">Browse by brand</p>
            <h2>Popular stores</h2>
          </div>
          <Link className="section-link" href="/stores">All stores <span aria-hidden="true">→</span></Link>
        </div>
        <div className="store-grid">
          {featuredStores.slice(0, 8).map((store) => <StoreCard key={store.id} store={store} />)}
        </div>
      </section>

      {couponSectionItems.length > 0 && (
        <section className="home-section">
          <div className="home-section__heading">
            <div>
              <p className="eyebrow">{couponCodes.length} codes · {additionalDeals.length} more deals</p>
              <h2>Coupons &amp; promo codes</h2>
            </div>
            <Link className="section-link" href="/coupons">Browse all <span aria-hidden="true">→</span></Link>
          </div>
          <div className="coupon-grid">
            {couponSectionItems.map((coupon) => {
              const store = getStoreById(coupon.storeId);
              if (!store) return null;
              return <CouponCard key={coupon.id} coupon={coupon} storeName={store.name} imageUrl={getOfferImage(coupon.categoryId, coupon.storeId, coupon.imageUrl)} variant="compact" />;
            })}
          </div>
        </section>
      )}

      <section className="home-section home-section--categories">
        <div className="home-section__heading">
          <div>
            <p className="eyebrow">Find what you need</p>
            <h2>Shop by category</h2>
          </div>
          <Link className="section-link" href="/categories">All categories <span aria-hidden="true">→</span></Link>
        </div>
        <div className="category-grid">
          {categories.slice(0, 8).map((category) => <CategoryCard key={category.id} category={category} />)}
        </div>
      </section>

      <section className="home-section home-section--blog">
        <div className="home-section__heading">
          <div>
            <p className="eyebrow">The smarter shopping edit</p>
            <h2>Tips from the blog</h2>
          </div>
          <Link className="section-link" href="/blog">More shopping tips <span aria-hidden="true">→</span></Link>
        </div>
        <div className="blog-grid home-blog-grid">
          {blogPosts.slice(0, 3).map((post) => (
            <article className="blog-card" key={post.slug}>
              <p className="eyebrow">{post.category}</p>
              <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
              <p>{post.excerpt}</p>
              <Link className="blog-card__link" href={`/blog/${post.slug}`}>Read article <span aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
