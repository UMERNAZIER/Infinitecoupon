import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const catalogPath = path.join(root, 'data', 'catalog.json');
const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));

const categoryRows = [
  ['electronics', 'Electronics', 'Monitor', 'Phones, computers, home entertainment, and everyday tech.', 'electronics', 'amazon.com', 'Wireless headphones; Bluetooth speaker; 4K television; Laptop computer; Android smartphone; Tablet with case; Smartwatch; Gaming console; Mirrorless camera; Portable SSD'],
  ['fashion', 'Fashion & Apparel', 'Shirt', 'Clothing, shoes, and accessories for everyday wear.', 'fashion', 'nike.com', 'Classic cotton T-shirt; Everyday jeans; Lightweight jacket; Running shoes; Knit sweater; Casual dress; Crossbody bag; Leather belt; Everyday sneakers; Soft lounge set'],
  ['beauty-health', 'Beauty & Health', 'Heart', 'Makeup, skincare, hair care, wellness, and personal care.', 'beauty', 'sephora.com', 'Daily face cleanser; Hydrating moisturizer; Broad-spectrum sunscreen; Vitamin C serum; Liquid foundation; Lengthening mascara; Fragrance mist; Nourishing hair mask; Lip balm set; Travel skincare kit'],
  ['home-garden', 'Home & Garden', 'Home', 'Furniture, decor, kitchen, and outdoor living essentials.', 'home', 'walmart.com', 'Queen sheet set; Ceramic table lamp; Nonstick cookware set; Storage basket set; Patio chair; Cotton bath towels; Wall mirror; Food storage containers; Area rug; Garden hand tools'],
  ['food-grocery', 'Food & Grocery', 'UtensilsCrossed', 'Grocery essentials, coffee, restaurants, and delivery.', 'food', 'dominos.com', 'Pantry staples bundle; Ground coffee; Green tea assortment; Family-size cereal; Snack variety pack; Sparkling water case; Pasta and sauce set; Frozen meal picks; Organic produce box; Ready-to-eat lunch'],
  ['travel', 'Travel', 'Plane', 'Stays, transportation, luggage, and trip essentials.', 'travel', 'booking.com', 'Weekend hotel stay; Carry-on spinner suitcase; Travel backpack; Packing cube set; Reusable travel bottles; Neck pillow and eye mask; Lightweight duffel bag; Passport wallet; Universal travel adapter; Luggage scale'],
  ['sports-outdoors', 'Sports & Outdoors', 'Dumbbell', 'Training, running, outdoor gear, and recreation.', 'sports', 'adidas.com', 'Training leggings; Cushioned running shoes; Yoga mat; Adjustable dumbbells; Lightweight windbreaker; Insulated water bottle; Resistance band set; Day hiking pack; Fitness tracker; Foam roller'],
  ['swimwear-resortwear', 'Swimwear & Resortwear', 'Shirt', 'Swimsuits, cover-ups, and warm-weather resort styles.', 'fashion', 'cupshe.com', 'One-piece swimsuit; Triangle bikini set; Tie-side bikini bottom; High-waisted bikini set; Underwire bikini top; Rash guard swim top; Ruched tank swimsuit; Beach cover-up dress; Side-tie midi sarong; Packable beach tote'],
  ['mens-clothing', "Men's Clothing", 'Shirt', 'Casual, work, and active clothing for men.', 'fashion', "macys.com", 'Oxford button-down shirt; Slim straight jeans; Chino trousers; Zip fleece jacket; Merino crewneck sweater; Performance polo; Cotton boxer briefs; Casual overshirt; Lightweight puffer vest; Everyday joggers'],
  ['kids-clothing', "Kids' Clothing", 'Baby', 'Comfortable clothing and footwear for babies and kids.', 'fashion', 'target.com', 'Kids graphic T-shirt; Pull-on jogger pants; School uniform polo; Fleece zip hoodie; Cotton pajama set; Rain jacket; Toddler leggings; Baby bodysuit multipack; Kids denim shorts; Playwear dress'],
  ['audio-headphones', 'Audio & Headphones', 'Headphones', 'Headphones, speakers, and home audio equipment.', 'electronics', 'bestbuy.com', 'Wireless noise-canceling headphones; True wireless earbuds; Portable Bluetooth speaker; Soundbar with subwoofer; USB podcast microphone; Studio monitor headphones; Smart speaker; Turntable with speakers; Gaming headset; Desktop bookshelf speakers'],
  ['handbags-accessories', 'Handbags & Accessories', 'ShoppingBag', 'Handbags, wallets, sunglasses, and finishing touches.', 'fashion', 'ebay.com', 'Leather tote bag; Crossbody camera bag; Compact card wallet; Zip-around wallet; Weekend travel tote; Polarized sunglasses; Everyday backpack; Canvas belt bag; Leather shoulder bag; Small evening clutch'],
  ['luggage-travel-gear', 'Luggage & Travel Gear', 'Luggage', 'Luggage, organizers, and practical travel accessories.', 'travel', 'expedia.com', 'Carry-on luggage; Checked spinner suitcase; Lightweight travel backpack; Compression packing cubes; Toiletry organizer; Laptop travel tote; Expandable duffel bag; Passport holder; Garment travel bag; Under-seat rolling bag'],
  ['shoes', 'Shoes', 'Footprints', 'Casual shoes, boots, sandals, and comfortable everyday footwear.', 'fashion', 'zappos.com', 'Leather ankle boots; Everyday walking sneakers; Classic ballet flats; Cushioned running shoes; Waterproof hiking boots; Slide sandals; Loafer flats; Canvas high-tops; Dress shoes; Supportive clogs'],
  ['underwear-lingerie', 'Underwear & Lingerie', 'Heart', 'Bras, underwear, sleepwear, and intimates.', 'fashion', 'victoriassecret.com', 'Wireless T-shirt bra; Cotton underwear multipack; Lace bralette; Seamless brief; Lightweight robe; Satin pajama set; Sports bra; Everyday thong set; Soft sleep shirt; High-waist shaping brief'],
  ['designer-fashion', 'Designer Fashion', 'Shirt', 'Designer clothing, accessories, and elevated wardrobe pieces.', 'fashion', 'nordstrom.com', 'Tailored wool coat; Designer leather handbag; Cashmere crewneck sweater; Silk blouse; Leather ankle boots; Structured shoulder bag; Wide-leg designer denim; Wool-blend blazer; Fine-knit cardigan; Occasionwear dress'],
  ['everyday-basics', 'Everyday Basics', 'Shirt', 'Affordable wardrobe basics, denim, and casual layers.', 'fashion', 'hm.com', 'Cotton crew T-shirt; Straight-leg jeans; Relaxed hoodie; Cotton button-down shirt; Lightweight cardigan; Ribbed tank top; Pull-on trousers; Casual mini dress; Fleece joggers; Everyday socks multipack'],
  ['denim', 'Denim', 'Shirt', 'Jeans, jackets, and denim staples in classic fits.', 'fashion', 'gap.com', 'High-rise straight jeans; Relaxed boyfriend jeans; Slim-fit jeans; Denim trucker jacket; Wide-leg jeans; Bootcut denim; Denim midi skirt; Kids stretch jeans; Denim shorts; Cropped denim jacket'],
  ['family-apparel', 'Family Apparel', 'Baby', 'Matching everyday clothing, kidswear, and family basics.', 'fashion', 'oldnavy.gap.com', 'Family graphic T-shirt; Kids fleece hoodie; Women’s power-soft leggings; Men’s relaxed jeans; Toddler cotton set; Maternity everyday tee; Kids denim jacket; Women’s linen-blend pants; Men’s jogger shorts; Baby sleeper set'],
  ['casual-style', 'Casual Style', 'Shirt', 'Casual clothing, accessories, and weekend-ready looks.', 'fashion', 'ae.com', 'Stretch denim jeans; Oversized graphic tee; Cotton crew sweatshirt; Lightweight shacket; High-waist shorts; Soft ribbed tank; Fleece joggers; Denim mini skirt; Everyday flannel shirt; Stretch boxer brief'],
  ['footwear', 'Footwear', 'Footprints', 'Dress shoes, sandals, boots, and comfortable footwear.', 'fashion', 'dsw.com', 'Leather penny loafers; Strappy sandals; Running sneakers; Chelsea boots; Ballet flats; Leather dress shoes; Platform sneakers; Walking sandals; Waterproof rain boots; Suede ankle boots'],
  ['sneakers', 'Sneakers & Streetwear', 'Footprints', 'Performance sneakers, basketball shoes, and streetwear.', 'sports', 'footlocker.com', 'Retro basketball sneakers; Running trainers; Classic canvas sneakers; High-top court shoes; Kids performance sneakers; Mesh walking shoes; Training cross-trainers; Streetwear hoodie; Track pants; Crew sock multipack'],
  ['jewelry', 'Jewelry', 'Gem', 'Necklaces, bracelets, rings, and thoughtful gifts.', 'fashion', 'pandora.net', 'Sterling silver pendant necklace; Charm bracelet; Stackable ring set; Hoop earrings; Heart charm; Chain necklace; Stud earring pair; Birthstone ring; Tennis bracelet; Gift-ready jewelry box'],
  ['watches', 'Watches', 'Watch', 'Classic watches, smart styles, and watch accessories.', 'fashion', 'fossil.com', 'Stainless steel everyday watch; Leather strap watch; Minimalist analog watch; Chronograph watch; Mesh bracelet watch; Sport watch; Watch strap set; Compact women’s watch; Automatic-style watch; Watch gift set'],
  ['makeup', 'Makeup', 'Sparkles', 'Makeup, tools, brushes, and beauty kits.', 'beauty', 'ulta.com', 'Liquid foundation; Volumizing mascara; Cream blush stick; Matte lipstick; Brow pencil; Eyeshadow palette; Setting spray; Makeup brush set; Tinted moisturizer; Waterproof eyeliner'],
  ['bath-body', 'Bath & Body', 'Droplets', 'Body care, fragrance, bath essentials, and gifts.', 'beauty', 'bathandbodyworks.com', 'Shea body cream; Fine fragrance mist; Foaming hand soap; Three-wick candle; Exfoliating body scrub; Moisturizing body wash; Hand cream set; Bath soak; Home fragrance refill; Travel-size lotion trio'],
  ['skincare', 'Skincare', 'Droplets', 'Daily skincare, gentle cleansers, and moisturizing care.', 'beauty', 'glossier.com', 'Gentle face cleanser; Daily moisturizer; Mineral sunscreen; Niacinamide serum; Hydrating lip balm; Overnight mask; Cleansing balm; Eye cream; Vitamin C serum; Travel skincare duo'],
  ['hair-styling', 'Hair Styling', 'Wind', 'Hair dryers, styling tools, and hair care accessories.', 'beauty', 'dyson.com', 'Multi-styler attachment set; Supersonic hair dryer; Airflow styling brush; Ceramic curling wand; Straightening brush; Diffuser attachment; Heat-protect spray; Volumizing round brush; Travel hair dryer; Hair clips set'],
  ['smartphones', 'Smartphones', 'Smartphone', 'Phones, cases, chargers, and mobile accessories.', 'electronics', 'apple.com', 'Unlocked smartphone; Protective phone case; USB-C charging cable; MagSafe-style wallet; Wireless charging stand; Tempered glass screen protector; Compact power bank; Bluetooth earbuds; Car phone mount; Fast wall charger'],
  ['tvs-home-theater', 'TVs & Home Theater', 'Tv', 'Televisions, streaming devices, and home theater gear.', 'electronics', 'samsung.com', '55-inch 4K smart TV; OLED television; 4K streaming device; Dolby Atmos soundbar; Universal remote control; TV wall mount; HDMI 2.1 cable; Home theater speaker set; Portable projector; TV backlight kit'],
  ['computers', 'Computers', 'Laptop', 'Laptops, desktops, and computer accessories.', 'electronics', 'dell.com', '14-inch work laptop; 2-in-1 convertible laptop; Gaming desktop tower; USB-C docking station; 27-inch monitor; Wireless keyboard and mouse; Laptop sleeve; Portable SSD; Webcam with microphone; Ergonomic laptop stand'],
  ['tablets', 'Tablets & E-readers', 'Tablet', 'Tablets, e-readers, and portable work accessories.', 'electronics', 'lenovo.com', 'Android tablet; 2-in-1 tablet laptop; E-reader with warm light; Tablet keyboard case; Active stylus pen; Folio tablet cover; USB-C hub; Portable monitor; Tablet stand; Screen protector multipack'],
  ['printers-accessories', 'Printers & PC Accessories', 'Printer', 'Home printers, ink, monitors, and computer essentials.', 'electronics', 'hp.com', 'Wireless all-in-one printer; Color laser printer; Ink cartridge multipack; 24-inch monitor; Wireless mouse; Mechanical keyboard; USB-C monitor hub; Laptop docking station; Webcam; Paper shredder'],
  ['computer-accessories', 'Computer Accessories', 'Keyboard', 'Keyboards, mice, webcams, and work-from-home gear.', 'electronics', 'logitech.com', 'Wireless ergonomic mouse; Compact mechanical keyboard; 4K webcam; Bluetooth headset; Multi-device keyboard; Gaming mouse; USB microphone; Conference speakerphone; Laptop camera cover; Keyboard and mouse combo'],
  ['toys-games', 'Toys & Games', 'ToyBrick', 'Building sets, games, and creative play for all ages.', 'toys', 'lego.com', 'City building set; Botanical display set; Space exploration kit; Creative brick box; Architecture landmark set; Friends café playset; Technic race car set; Storage brick box; Mini figure collection; Beginner building kit'],
  ['video-games', 'Video Games', 'Gamepad2', 'Video games, consoles, controllers, and gaming gear.', 'electronics', 'gamestop.com', 'Wireless game controller; Console game bundle; Gaming headset; Racing wheel controller; Portable gaming system; Rechargeable battery pack; Gaming keyboard; Console charging dock; Game storage case; Online gift card'],
  ['furniture', 'Furniture', 'Sofa', 'Living room, bedroom, office furniture, and mattresses.', 'home', 'wayfair.com', 'Queen platform bed; Compact writing desk; Modular sofa; Upholstered dining chair; Nightstand with drawer; Storage bookshelf; Lift-top coffee table; Desk chair; Entryway shoe cabinet; Bedside table lamp'],
  ['home-furnishings', 'Home Furnishings', 'Lamp', 'Storage, lighting, textiles, and functional home pieces.', 'home', 'ikea.com', 'Floor lamp; 6-drawer dresser; Bookcase with shelves; Dining table set; Modular wardrobe; Cotton duvet cover; Glass food containers; Storage cubes; Desk organizer; Kitchen trolley'],
  ['tools-hardware', 'Tools & Hardware', 'Wrench', 'Power tools, hardware, paint, and project supplies.', 'home', 'homedepot.com', 'Cordless drill driver; 20V impact driver; Socket wrench set; Laser level; Interior wall paint; Power tool combo kit; Shop vacuum; Outdoor extension cord; Tool chest; Step ladder'],
  ['home-improvement', 'Home Improvement', 'Wrench', 'Appliances, lighting, flooring, and renovation essentials.', 'home', 'lowes.com', 'Front-load washer; French-door refrigerator; LED recessed lights; Vinyl plank flooring; Bathroom faucet; Cordless leaf blower; Smart thermostat; Ceiling fan; Kitchen sink; Outdoor security light'],
  ['pet-food', 'Pet Food', 'PawPrint', 'Dog and cat food, treats, and everyday nutrition.', 'pets', 'chewy.com', 'Dry dog food; Grain-free cat food; Puppy training treats; Senior dog food; Wet cat food multipack; Dental chews; Sensitive-stomach dog food; Kitten food; Freeze-dried treats; Automatic pet feeder'],
  ['pet-supplies', 'Pet Supplies', 'PawPrint', 'Beds, toys, grooming, and supplies for pets.', 'pets', 'petco.com', 'Orthopedic dog bed; Cat scratching post; Adjustable dog harness; Interactive cat toy; Stainless steel pet bowl; Pet grooming brush; Lightweight carrier; Training leash; Cat litter mat; Water fountain for pets'],
  ['cookware-dining', 'Cookware & Dining', 'CookingPot', 'Cookware, tableware, kitchen tools, and entertaining.', 'home', 'williams-sonoma.com', 'Stainless steel fry pan; Enameled Dutch oven; Stoneware dinnerware set; Chef knife; Glass food storage set; Cotton kitchen towels; Ceramic serving platter; Espresso cups; Acacia cutting board; Linen table runner'],
  ['coffee-tea', 'Coffee & Tea', 'Coffee', 'Coffee, tea, reusable cups, and brewing accessories.', 'food', 'starbucks.com', 'Whole-bean espresso roast; Ground medium roast coffee; Cold brew concentrate; Reusable hot cup; Insulated tumbler; Breakfast blend coffee; Matcha tea sachets; Coffee press; Tea assortment box; Stainless travel mug'],
  ['food-delivery', 'Food Delivery', 'Pizza', 'Restaurant delivery, takeout, and local meal options.', 'food', 'doordash.com', 'Family pizza meal; Sushi dinner combo; Burger and fries meal; Thai noodle dinner; Mexican taco meal; Chicken sandwich combo; Mediterranean bowl; Bakery dessert box; Breakfast sandwich; Salad and soup lunch'],
  ['grocery-delivery', 'Grocery Delivery', 'ShoppingBasket', 'Groceries, household staples, and convenient delivery.', 'food', 'instacart.com', 'Fresh produce bundle; Pantry refill box; Organic snack pack; Breakfast essentials; Dairy and eggs basket; Cleaning supplies bundle; Family dinner ingredients; Frozen fruit assortment; Sparkling water case; Weekly grocery staples'],
  ['outdoor-gear', 'Outdoor Gear', 'Tent', 'Camping, trail, climbing, and outdoor recreation equipment.', 'sports', 'rei.com', 'Two-person backpacking tent; 20-degree sleeping bag; Insulated camp mug; Day hiking backpack; Trekking poles; Packable rain shell; Camping lantern; Folding camp chair; Portable water filter; Sleeping pad'],
  ['activewear', 'Activewear', 'Dumbbell', 'Training apparel, yoga clothing, and performance layers.', 'sports', 'lululemon.com', 'High-rise training leggings; Lightweight running shorts; Yoga sports bra; Sweat-wicking T-shirt; Training tank top; Soft jogger pants; Longline sports bra; Yoga mat bag; Quarter-zip running top; Studio grip socks'],
  ['outdoor-apparel', 'Outdoor Apparel', 'Mountain', 'Weather-ready jackets, trail clothing, and outdoor layers.', 'sports', 'thenorthface.com', 'Waterproof shell jacket; Fleece pullover; Insulated down vest; Trail hiking pants; Packable raincoat; Lightweight daypack; Thermal base layer top; Trail running jacket; Softshell gloves; Reversible bucket hat'],
  ['car-rentals', 'Car Rentals', 'CarFront', 'Rental cars, road trip essentials, and travel transportation.', 'travel', 'hertz.com', 'Compact rental car; Midsize sedan; Hybrid car rental; Seven-seat SUV; Premium crossover; Weekend car rental; Airport pickup car; One-way rental option; Electric car rental; Family minivan rental'],
];

const newStores = [
  ['zappos', 'Zappos', 'zappos.com', 'Shoes, clothing, and accessories with a wide range of everyday styles.', ['shoes', 'fashion']],
  ['victorias-secret', "Victoria's Secret", 'victoriassecret.com', 'Lingerie, bras, underwear, sleepwear, and beauty.', ['underwear-lingerie', 'fashion', 'beauty-health']],
  ['nordstrom', 'Nordstrom', 'nordstrom.com', 'Designer fashion, shoes, beauty, and accessories.', ['designer-fashion', 'fashion', 'beauty-health']],
  ['hm', 'H&M', 'hm.com', 'Fashion, everyday basics, accessories, and home finds.', ['everyday-basics', 'fashion', 'home-garden']],
  ['gap', 'Gap', 'gap.com', 'Denim, casual clothing, and wardrobe essentials.', ['denim', 'fashion']],
  ['old-navy', 'Old Navy', 'oldnavy.gap.com', 'Family apparel, denim, activewear, and everyday basics.', ['family-apparel', 'fashion']],
  ['american-eagle', 'American Eagle', 'ae.com', 'Casual clothing, denim, and accessories.', ['casual-style', 'fashion']],
  ['dsw', 'DSW', 'dsw.com', 'Shoes, boots, sandals, and accessories.', ['footwear', 'fashion']],
  ['foot-locker', 'Foot Locker', 'footlocker.com', 'Athletic sneakers, sportswear, and streetwear.', ['sneakers', 'sports-outdoors', 'fashion']],
  ['pandora', 'Pandora', 'pandora.net', 'Charms, bracelets, rings, and jewelry gifts.', ['jewelry', 'fashion']],
  ['fossil', 'Fossil', 'fossil.com', 'Watches, leather goods, and accessories.', ['watches', 'fashion']],
  ['ulta', 'Ulta Beauty', 'ulta.com', 'Makeup, skincare, haircare, and beauty tools.', ['makeup', 'beauty-health']],
  ['bath-body-works', 'Bath & Body Works', 'bathandbodyworks.com', 'Body care, fragrance, candles, and home scents.', ['bath-body', 'beauty-health', 'home-garden']],
  ['glossier', 'Glossier', 'glossier.com', 'Skincare, makeup, and personal care.', ['skincare', 'beauty-health']],
  ['dyson', 'Dyson', 'dyson.com', 'Hair care tools, home cleaning, and air treatment.', ['hair-styling', 'beauty-health', 'home-garden']],
  ['apple', 'Apple', 'apple.com', 'iPhone, Mac, iPad, accessories, and services.', ['smartphones', 'electronics']],
  ['samsung', 'Samsung', 'samsung.com', 'Phones, TVs, appliances, and connected devices.', ['tvs-home-theater', 'electronics', 'home-garden']],
  ['dell', 'Dell', 'dell.com', 'Laptops, desktop computers, monitors, and accessories.', ['computers', 'electronics']],
  ['lenovo', 'Lenovo', 'lenovo.com', 'Laptops, tablets, accessories, and work devices.', ['tablets', 'electronics']],
  ['hp', 'HP', 'hp.com', 'Printers, PCs, monitors, and everyday tech accessories.', ['printers-accessories', 'electronics']],
  ['logitech', 'Logitech', 'logitech.com', 'Keyboards, mice, webcams, and collaboration gear.', ['computer-accessories', 'electronics']],
  ['lego', 'LEGO', 'lego.com', 'Building sets, creative play, and collectible models.', ['toys-games', 'toys']],
  ['gamestop', 'GameStop', 'gamestop.com', 'Video games, consoles, collectibles, and gaming accessories.', ['video-games', 'electronics']],
  ['wayfair', 'Wayfair', 'wayfair.com', 'Furniture, rugs, lighting, and home decor.', ['furniture', 'home-garden']],
  ['ikea', 'IKEA', 'ikea.com', 'Furniture, storage, home accessories, and lighting.', ['home-furnishings', 'home-garden']],
  ['home-depot', 'The Home Depot', 'homedepot.com', 'Tools, building materials, appliances, and project supplies.', ['tools-hardware', 'home-garden']],
  ['lowes', "Lowe's", 'lowes.com', 'Home improvement, appliances, tools, and outdoor products.', ['home-improvement', 'home-garden']],
  ['chewy', 'Chewy', 'chewy.com', 'Pet food, treats, medications, and supplies.', ['pet-food', 'pets']],
  ['petco', 'Petco', 'petco.com', 'Pet supplies, food, grooming, and services.', ['pet-supplies', 'pets']],
  ['williams-sonoma', 'Williams Sonoma', 'williams-sonoma.com', 'Cookware, kitchen tools, dining, and gourmet foods.', ['cookware-dining', 'home-garden', 'food-grocery']],
  ['starbucks', 'Starbucks', 'starbucks.com', 'Coffee, tea, reusable drinkware, and cafe favorites.', ['coffee-tea', 'food-grocery']],
  ['doordash', 'DoorDash', 'doordash.com', 'Local restaurant delivery and pickup.', ['food-delivery', 'food-grocery']],
  ['instacart', 'Instacart', 'instacart.com', 'Grocery delivery and pickup from local stores.', ['grocery-delivery', 'food-grocery']],
  ['rei', 'REI', 'rei.com', 'Outdoor clothing, camping gear, and cycling equipment.', ['outdoor-gear', 'sports-outdoors']],
  ['lululemon', 'lululemon', 'lululemon.com', 'Technical apparel for training, yoga, and running.', ['activewear', 'sports-outdoors', 'fashion']],
  ['the-north-face', 'The North Face', 'thenorthface.com', 'Outdoor apparel, footwear, and equipment.', ['outdoor-apparel', 'sports-outdoors', 'fashion']],
  ['hertz', 'Hertz', 'hertz.com', 'Car rentals, airport pickup, and road trip transportation.', ['car-rentals', 'travel']],
];

if (newStores.length !== 37 || categoryRows.length !== 50) {
  throw new Error(`Expected 50 categories and 37 new stores. Found ${categoryRows.length} and ${newStores.length}.`);
}

const existingStores = new Map(catalog.stores.map((store) => [store.id, store]));
for (const [id, name, domain, description, categories] of newStores) {
  existingStores.set(id, {
    id,
    name,
    slug: id,
    logo: `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
    description,
    website: `https://www.${domain}`,
    categories,
    featured: ['zappos', 'nordstrom', 'apple', 'ulta', 'wayfair', 'chewy', 'rei', 'lululemon'].includes(id),
    rating: 4.4,
    totalCoupons: 0,
  });
}

const stores = Array.from(existingStores.values());
const storeByDomain = new Map(stores.map((store) => [new URL(store.website).hostname.replace(/^www\./, ''), store]));
const storeById = new Map(stores.map((store) => [store.id, store]));
const colors = ['#2563eb', '#7c3aed', '#db2777', '#d97706', '#dc2626', '#059669', '#ea580c', '#0891b2'];
const categories = categoryRows.map(([id, name, icon, description, family, domain], index) => {
  const owner = storeByDomain.get(domain);
  if (!owner) throw new Error(`No store is configured for ${domain}`);
  if (!owner.categories.includes(id)) owner.categories = [...owner.categories, id];
  return { id, name, slug: id, icon, description, color: colors[index % colors.length] };
});

const images = {
  electronics: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=720&h=480&q=82',
  fashion: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=720&h=480&q=82',
  beauty: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=720&h=480&q=82',
  home: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=720&h=480&q=82',
  food: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=720&h=480&q=82',
  travel: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=720&h=480&q=82',
  sports: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=720&h=480&q=82',
  toys: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=720&h=480&q=82',
  pets: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=720&h=480&q=82',
};

const legacyCupsheProducts = [
  {
    id: 'cupshe-one-piece',
    name: 'Act of Self-Love Floral One-Piece Swimsuit',
    description: 'Floral plunge swimsuit with crossback straps and removable soft cups.',
    productUrl: 'https://www.cupshe.com/products/act-of-self-love-floral-one-piece-swimsuit-CAA12E5M015GD',
    imageUrl: 'https://media.cupshe.com/cdn-review.cupshe.com/cmc-admin/product/20251203/444e18f84ef9ffda22ececd49549b6b9.jpg?speedsize=mxw_900',
    featured: true,
  },
  {
    id: 'cupshe-bikini-set',
    name: 'Pool Crush Blue Bikini Set',
    description: 'Blue triangle bikini set with adjustable straps and mix-and-match sizing.',
    productUrl: 'https://www.cupshe.com/products/pool-crush-blue-bikini-set-120000208314',
    imageUrl: 'https://media.cupshe.com/cdn-review.cupshe.com/cmc-admin/product/20260902/fa3c1ac7492250c7b30f8c049e0e1f00.jpg?speedsize=mxw_900',
    featured: true,
  },
  {
    id: 'cupshe-sarong',
    name: 'Black Side Tie Midi Sarong',
    description: 'Black woven beach sarong with a side tie and midi length.',
    productUrl: 'https://www.cupshe.com/products/black-side-tie-midi-sarong-CAA07D3D3PP',
    imageUrl: 'https://media.cupshe.com/cdn-review.cupshe.com/cmc-admin/2024_01_17/20_33_4112/8348bc45-3f0e-4375-958b-4429d182902f/CAA07D3D3PP/1.jpg?speedsize=mxw_900',
    featured: false,
  },
];

const products = [];
for (const [categoryId, name, , , family, domain, itemList] of categoryRows) {
  const store = storeByDomain.get(domain);
  const items = itemList.split(';').map((item) => item.trim());
  if (items.length !== 10) throw new Error(`${categoryId} must have exactly 10 product searches.`);
  const allItems = [
    ...items,
    `Popular ${items[0].toLowerCase()} options`,
    `Top-rated ${items[1].toLowerCase()} options`,
  ];
  allItems.forEach((name, index) => {
    const originalCupsheProduct = categoryId === 'swimwear-resortwear' ? legacyCupsheProducts[index] : undefined;
    products.push({
      id: originalCupsheProduct?.id ?? `${categoryId}-${String(index + 1).padStart(2, '0')}`,
      name: originalCupsheProduct?.name ?? name,
      categoryId,
      storeId: store.id,
      description: originalCupsheProduct?.description ?? `Browse current ${name.toLowerCase()} options from ${store.name}. Availability and selection are set by the retailer.`,
      productUrl: originalCupsheProduct?.productUrl ?? store.website,
      featured: originalCupsheProduct?.featured ?? index < 2,
      imageUrl: originalCupsheProduct?.imageUrl ?? images[family] ?? images.electronics,
    });
  });
}

const couponCountByStore = new Map();
for (const coupon of catalog.coupons) {
  couponCountByStore.set(coupon.storeId, (couponCountByStore.get(coupon.storeId) ?? 0) + 1);
}
for (const store of stores) {
  store.totalCoupons = couponCountByStore.get(store.id) ?? 0;
}

if (stores.length !== 50 || categories.length !== 50 || products.length !== 600) {
  throw new Error(`Catalog totals are incorrect: ${stores.length} stores, ${categories.length} categories, ${products.length} products.`);
}
for (const store of stores) {
  const count = products.filter((product) => product.storeId === store.id).length;
  if (count < 12 || count > 15) throw new Error(`${store.name} has ${count} products.`);
}
for (const category of categories) {
  const count = products.filter((product) => product.categoryId === category.id).length;
  if (count < 10 || count > 15) throw new Error(`${category.name} has ${count} products.`);
}

catalog.stores = stores;
catalog.categories = categories;
catalog.products = products;
fs.writeFileSync(catalogPath, `${JSON.stringify(catalog, null, 2)}\n`);
console.log(`Wrote ${stores.length} stores, ${categories.length} categories, ${products.length} product searches, and retained ${catalog.coupons.length} existing offers.`);
