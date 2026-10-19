'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Package } from 'lucide-react';
import { Category, Product, Store } from '@/lib/data';
import BrandLogo from '@/components/BrandLogo';

export default function ProductCard({
  product,
  category,
  store,
}: {
  product: Product;
  category: Category;
  store: Store;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="product-card">
      <div className="product-card__visual">
        {product.imageUrl && !imageFailed ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={product.imageUrl} alt={product.name} loading="lazy" onError={() => setImageFailed(true)} />
        ) : (
          <div className="product-card__image-fallback" aria-hidden="true"><Package size={28} strokeWidth={1.6} /></div>
        )}
        <BrandLogo name={store.name} logoUrl={store.logo} />
      </div>
      <div className="product-card__body">
        <div className="product-card__meta">
          <span>{category.name}</span>
          <span>{store.name}</span>
        </div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <a href={product.productUrl} target="_blank" rel="noopener noreferrer">
          Browse at {store.name} <ArrowUpRight size={16} />
        </a>
        <Link className="product-card__category" href={`/category/${category.slug}`}>
          Browse {category.name} offers
        </Link>
      </div>
    </article>
  );
}
