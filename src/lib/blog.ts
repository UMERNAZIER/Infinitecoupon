export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  paragraphs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-use-a-promo-code',
    category: 'Savings basics',
    title: 'How to use a promo code at checkout',
    excerpt: 'A quick checklist for applying a code and confirming that the discount reaches your order total.',
    paragraphs: [
      'Open the offer and review its conditions before you shop. Check the minimum spend, eligible products, new-customer rules, and any exclusions listed by the retailer.',
      'Copy the code exactly as shown, then enter it in the promo-code or discount-code field at checkout. Apply it before you pay and confirm that the order summary reflects the expected savings.',
      'If the code is rejected, the retailer may have changed or ended the offer, or your cart may not meet its terms. Check the retailer’s current offer page for the latest details.',
    ],
  },
  {
    slug: 'compare-deals-before-you-buy',
    category: 'Smart shopping',
    title: 'Compare a deal with the full checkout price',
    excerpt: 'Look beyond the headline discount to compare shipping, eligibility, and the final price.',
    paragraphs: [
      'A percentage-off headline does not always mean the lowest final price. Compare the item price, shipping, taxes, and any required membership or minimum purchase.',
      'Read the retailer’s offer terms and check whether the products in your cart qualify. A deal can apply only to selected colors, sizes, brands, or sale items.',
      'Use the final checkout total to decide whether an offer is worthwhile. Prices and availability are controlled by the retailer and can change at any time.',
    ],
  },
  {
    slug: 'find-the-right-store-offer',
    category: 'Finding offers',
    title: 'Find the right offer for the store you shop',
    excerpt: 'Filter offers by retailer, category, and code or deal to get to a useful result faster.',
    paragraphs: [
      'Start with the store you already plan to shop. Its store page brings together the offers currently listed for that retailer, along with product searches you can use to browse its catalog.',
      'Use category filters to narrow a large list, then distinguish promo codes from automatic deals. Promo codes need to be entered at checkout; deals usually open the retailer’s own offer page.',
      'Always confirm the terms on the retailer’s site before completing an order. Infinite Coupons is a discovery tool and does not control retailer inventory, pricing, or checkout.',
    ],
  },
  {
    slug: 'check-offer-terms',
    category: 'Offer guide',
    title: 'What to check in coupon terms',
    excerpt: 'Minimum spend, exclusions, expiration dates, and other details can determine whether a coupon works.',
    paragraphs: [
      'Check the expiration date first, then review the minimum purchase and eligible items. Some offers exclude clearance, gift cards, premium brands, or products sold by marketplace vendors.',
      'Pay attention to customer eligibility. A welcome code may be limited to a first purchase, and student or membership discounts may require verification with the retailer.',
      'Offer details can change after they are listed. If anything is unclear, the retailer’s current terms are the source to follow.',
    ],
  },
];
