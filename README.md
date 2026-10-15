# Infinite Coupons

A responsive coupon and product catalog built with Next.js App Router, React, and Tailwind CSS. The app is data-driven and can deploy as a standard Next.js project on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Before committing changes, run `npm run lint` and `npx tsc --noEmit`.

## Update the catalog

Edit [`data/catalog.json`](./data/catalog.json). Keep the `stores`, `categories`, `products`, and `coupons` arrays in that file:

- **Stores** provide the store name, URL, description, and category IDs.
- **Categories** define the shared category names and slugs.
- **Products** power `/products`. Each item links to one category and store and opens `productUrl` in a new tab.
- **Coupons** power the homepage, store pages, category pages, search, and coupon actions. `type` must be `code` or `deal`; code offers need a `code`; every offer needs a valid `redirectUrl` and an accurate expiry date.

Use unique IDs. `storeId` and `categoryId` must match an existing record. For a real launch, replace every sample offer, code, date, description, and link with information you have permission to publish and have checked with the merchant. Affiliate tracking URLs should use your own approved affiliate IDs.

The coupon/product data is compiled into the site at build time. Editing the JSON is easy, but a change goes live only after a new deployment. There is no CMS, login, or live database in this first version.

## Pages

- `/` — featured sample deals, stores, and categories
- `/stores` and `/store/[slug]` — store directory and offers for a store
- `/categories` and `/category/[slug]` — category directory and offers for a category
- `/products` — searchable, category-filtered product catalog
- `/search?q=...` — searches stores, products, categories, and coupons

## Deployment

Import this project into Vercel with the project root set to `infinite-coupons`, or use the Vercel CLI from this directory. Vercel detects Next.js; no database or environment variables are required for the sample app.

Vercel Hobby is free but limited to personal, non-commercial use. Because a coupon/affiliate site may earn commission, confirm the applicable Vercel terms before using Hobby for the live business; use Hobby for a personal preview and choose a plan that permits the intended commercial use for launch.

## Catalog data

The coupon records are illustrative and are not verified live offers. The product catalog contains broad category examples, not priced or inventoried products. Replace them before treating the site as a live coupon service.
