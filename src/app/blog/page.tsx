import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Shopping & Savings Blog | Infinite Coupons',
  description: 'Straightforward guides to promo codes, store offers, and smarter shopping.',
};

export default function BlogPage() {
  return (
    <main className="page-shell">
      <header className="page-heading">
        <p className="eyebrow">The Infinite Coupons blog</p>
        <h1>Simple ways to shop smarter</h1>
        <p>Practical tips for comparing offers and using promo codes at checkout.</p>
      </header>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article className="blog-card" key={post.slug}>
            <p className="eyebrow">{post.category}</p>
            <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
            <p>{post.excerpt}</p>
            <Link className="blog-card__link" href={`/blog/${post.slug}`}>Read article <ArrowUpRight size={16} /></Link>
          </article>
        ))}
      </div>
    </main>
  );
}
