import React from 'react';
import Link from 'next/link';
import { Store } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface StoreCardProps {
  store: Store;
}

export default function StoreCard({ store }: StoreCardProps) {
  return (
    <Link href={`/store/${store.slug}`} className="store-card group">
      <BrandLogo name={store.name} logoUrl={store.logo} />
      <span className="store-card__copy">
        <span className="store-card__name">{store.name}</span>
        <span className="store-card__count">{store.totalCoupons ? `${store.totalCoupons} listed offers` : 'Browse store picks'}</span>
      </span>
      <ArrowRight className="store-card__arrow" size={17} aria-hidden="true" />
    </Link>
  );
}
