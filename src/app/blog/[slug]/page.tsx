import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  return post ? { title: `${post.title} | Infinite Coupons`, description: post.excerpt } : { title: 'Article Not Found | Infinite Coupons' };
}

export default async function BlogArticle({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <main className="page-shell article-shell">
      <Link className="article-back" href="/blog">← All articles</Link>
      <article className="article-content">
        <p className="eyebrow">{post.category}</p>
        <h1>{post.title}</h1>
        <p className="article-lede">{post.excerpt}</p>
        {post.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <Link className="section-link" href="/coupons">Browse coupons and deals →</Link>
      </article>
    </main>
  );
}
