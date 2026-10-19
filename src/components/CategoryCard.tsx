import React from 'react';
import Link from 'next/link';
import { Category } from '@/lib/data';
import {
  Baby, CarFront, Coffee, CookingPot, Droplets, Dumbbell, Footprints, Gamepad2, Gem, Headphones, Heart,
  Home, Keyboard, Lamp, Laptop, Luggage, Monitor, Mountain, PawPrint, Pizza, Plane, Printer, Shirt,
  ShoppingBag, ShoppingBasket, Smartphone, Sofa, Sparkles, Tablet, Tent, ToyBrick, Tv, UtensilsCrossed, Watch, Wrench, Wind,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Monitor, Shirt, Heart, Home, UtensilsCrossed, Plane, Dumbbell, ShoppingBag, Baby, CarFront, Coffee,
  CookingPot, Droplets, Footprints, Gamepad2, Gem, Headphones, Keyboard, Lamp, Laptop, Luggage, Mountain,
  PawPrint, Pizza, Printer, ShoppingBasket, Smartphone, Sofa, Sparkles, Tablet, Tent, ToyBrick, Tv, Watch,
  Wrench, Wind,
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
