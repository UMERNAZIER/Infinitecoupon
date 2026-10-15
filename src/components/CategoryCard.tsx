import React from 'react';
import Link from 'next/link';
import { Category } from '@/lib/data';
import { Monitor, Shirt, Heart, Home, UtensilsCrossed, Plane, Dumbbell, ShoppingBag } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Shirt,
  Heart,
  Home,
  UtensilsCrossed,
  Plane,
  Dumbbell,
  ShoppingBag
};

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const Icon = category.icon && iconMap[category.icon] ? iconMap[category.icon] : ShoppingBag;

  return (
    <Link href={`/category/${category.slug}`} className="category-card">
      <span className="category-card__icon" style={{ color: category.color || '#047857' }}>
        <Icon size={19} aria-hidden="true" />
      </span>
      <span className="category-card__name">{category.name}</span>
      <span className="category-card__arrow" aria-hidden="true">→</span>
    </Link>
  );
}
