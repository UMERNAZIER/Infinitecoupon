'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search, Menu, X } from 'lucide-react';
import { getAllCategories } from '@/lib/data';
import SiteLogo from '@/components/SiteLogo';

const navLinks = [
  { href: '/stores', label: 'Stores' },
  { href: '/categories', label: 'Categories' },
  { href: '/products', label: 'Products' },
  { href: '/coupons', label: 'Coupons' },
  { href: '/blog', label: 'Blog' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const router = useRouter();
  const categories = getAllCategories();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchQuery.trim() || selectedCategory !== 'all') {
      const params = new URLSearchParams();
      if (searchQuery.trim()) params.set('q', searchQuery.trim());
      if (selectedCategory !== 'all') params.set('category', selectedCategory);
      router.push(`/search?${params.toString()}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__logo" aria-label="Infinite Coupons home">
          <SiteLogo />
        </Link>

        <form onSubmit={handleSearch} className="site-header__search" role="search">
          <label className="site-header__category-wrap">
            <span className="sr-only">Filter search by category</span>
            <select
              className="site-header__category"
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
            >
              <option value="all">All categories</option>
              {categories.map((category) => <option key={category.id} value={category.slug}>{category.name}</option>)}
            </select>
          </label>
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search stores, coupons, and deals"
            aria-label="Search stores, coupons, and deals"
          />
          <button type="submit" aria-label="Search" title="Search"><Search size={18} /></button>
        </form>

        <nav className="site-header__nav" aria-label="Main navigation">
          {navLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>

        <button
          type="button"
          className="site-header__menu"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="site-header__mobile-nav" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>{link.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
