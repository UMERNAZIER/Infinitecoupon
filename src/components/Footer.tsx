import Link from 'next/link';
import SiteLogo from '@/components/SiteLogo';

export default function Footer() {
  return (
    <footer className="bg-midnight text-slate-300 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link href="/" className="footer-logo" aria-label="Infinite Coupons home">
              <SiteLogo variant="inverse" size="footer" />
            </Link>
            <p className="text-sm text-slate-400">
              Browse coupon codes, store deals, and product categories from one simple catalog.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/stores" className="text-sm hover:text-white transition-colors">
                  Stores
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-sm hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm hover:text-white transition-colors">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Top Categories
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/category/electronics" className="text-sm hover:text-white transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/category/fashion" className="text-sm hover:text-white transition-colors">
                  Fashion
                </Link>
              </li>
              <li>
                <Link href="/category/travel" className="text-sm hover:text-white transition-colors">
                  Travel
                </Link>
              </li>
              <li>
                <Link href="/category/health-beauty" className="text-sm hover:text-white transition-colors">
                  Health & Beauty
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            &copy; 2026 Infinite Coupons. All rights reserved.
          </p>
          <p className="mt-3 text-sm text-slate-400 md:mt-0">
            Developed by{' '}
            <a
              href="https://www.huzaifaameer.com"
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-white"
            >
              Huzaifa Ameer
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
