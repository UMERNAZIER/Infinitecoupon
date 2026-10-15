import catalogData from '@/data/catalog.json';

export type Store = {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
  website: string;
  categories: string[];
  featured: boolean;
  rating: number;
  totalCoupons: number;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  color: string;
};

export type Coupon = {
  id: string;
  storeId: string;
  categoryId: string;
  title: string;
  description: string;
  code: string;
  type: 'code' | 'deal';
  discount: string;
  imageUrl?: string;
  redirectUrl: string;
  verified: boolean;
  featured: boolean;
  usesCount?: number;
  expiresAt?: string;
  terms: string;
};

export type Product = {
  id: string;
  name: string;
  categoryId: string;
  storeId: string;
  description: string;
  productUrl: string;
  featured: boolean;
  imageUrl?: string;
};

export type CatalogData = {
  stores: Store[];
  categories: Category[];
  coupons: Coupon[];
  products: Product[];
};

const data = catalogData as CatalogData;

const productImages: Record<string, string> = {
  'electronics-audio': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=720&h=480&q=82',
  'electronics-computing': 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=720&h=480&q=82',
  'fashion-running': 'https://images.unsplash.com/photo-1637437757614-6491c8e915b5?auto=format&fit=crop&w=720&h=480&q=82',
  'fashion-adidas': 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=720&h=480&q=82',
  'beauty-skincare': 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=720&h=480&q=82',
  'beauty-wellness': 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=720&h=480&q=82',
  'home-kitchen': 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=720&h=480&q=82',
  'home-storage': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=720&h=480&q=82',
  'food-pizza': 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=720&h=480&q=82',
  'food-grocery': 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=720&h=480&q=82',
  'travel-hotels': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=720&h=480&q=82',
  'travel-packages': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=720&h=480&q=82',
  'sports-training': 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=720&h=480&q=82',
  'sports-outdoor': 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=720&h=480&q=82',
};

// Stores
export function getAllStores(): Store[] {
  return data.stores;
}

export function getFeaturedStores(): Store[] {
  return data.stores.filter((s) => s.featured);
}

export function getStoreBySlug(slug: string): Store | undefined {
  return data.stores.find((s) => s.slug === slug);
}

export function getStoreById(id: string): Store | undefined {
  return data.stores.find((s) => s.id === id);
}

// Categories
export function getAllCategories(): Category[] {
  return data.categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return data.categories.find((c) => c.slug === slug);
}

// Coupons
export function getAllCoupons(): Coupon[] {
  return data.coupons;
}

export function getFeaturedCoupons(): Coupon[] {
  return data.coupons.filter((c) => c.featured);
}

export function getCouponsByStore(storeId: string): Coupon[] {
  return data.coupons.filter((c) => c.storeId === storeId);
}

export function getCouponsByCategory(categoryId: string): Coupon[] {
  return data.coupons.filter((c) => c.categoryId === categoryId);
}

export function getAllProducts(): Product[] {
  return (data.products ?? []).map((product) => ({
    ...product,
    imageUrl: product.imageUrl ?? productImages[product.id],
  }));
}

export function getProductsByCategory(categoryId: string): Product[] {
  return getAllProducts().filter((product) => product.categoryId === categoryId);
}

export function searchCoupons(query: string): Coupon[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return data.coupons.filter(
    (c) =>
      c.title.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q)
  );
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return getAllProducts().filter(
    (product) => {
      const storeName = getStoreById(product.storeId)?.name ?? '';
      return (
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        storeName.toLowerCase().includes(q)
      );
    }
  );
}

export function searchStores(query: string): Store[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return data.stores.filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q)
  );
}

export function searchAll(query: string) {
  return {
    stores: searchStores(query),
    coupons: searchCoupons(query),
    products: searchProducts(query),
    categories: data.categories.filter((category) =>
      `${category.name} ${category.description}`.toLowerCase().includes(query.toLowerCase().trim())
    ),
  };
}
