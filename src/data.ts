import { Product, UgcReview, Article } from './types';

export const PRODUCTS: Product[] = [
  {
    id: "barrier-kit",
    name: "BARRIER KIT",
    subtitle: "For over-treated, sensitive skin",
    price: 52,
    originalPrice: 65,
    stars: 4.9,
    reviews: 142,
    volume: "3 Items (Full Size)",
    benefits: [
      "Repairs compromised skin barriers in 7 days",
      "Reduces redness & instant relief from tingling",
      "Locks in moisture without pore clogging"
    ],
    actives: ["Ceramides (3%)", "Beta-Glucan", "Centella Asiatica"],
    items: [
      "RAW Gel Cleanse (150ml)",
      "Barrier-Glue Serum (50ml)",
      "Ceramide Cement Cream (50ml)"
    ],
    colorTheme: {
      primaryBg: "bg-toxic-lime",
      accentText: "text-raw-charcoal",
      pillBg: "bg-raw-charcoal text-toxic-lime",
      border: "border-raw-charcoal",
      accentBg: "bg-raw-charcoal",
      tagBg: "bg-raw-charcoal",
      tagText: "text-toxic-lime"
    },
    imageColor: "#b6ff00"
  },
  {
    id: "glow-kit",
    name: "GLOW KIT",
    subtitle: "For dull, uneven, hyperpigmented skin",
    price: 58,
    originalPrice: 72,
    stars: 5.0,
    reviews: 98,
    volume: "3 Items (Full Size)",
    benefits: [
      "Visibly brightens and fades dark spots",
      "Gently resurfaces without acid chaos",
      "Delivers signature raw dewy glaze"
    ],
    actives: ["Niacinamide (10%)", "Tranexamic Acid (3%)", "Vitamin C Complex"],
    items: [
      "RAW Cloud Cleanse (150ml)",
      "Liquid Glaze Essence (100ml)",
      "Flash-Bright Booster (30ml)"
    ],
    colorTheme: {
      primaryBg: "bg-electric-cyan",
      accentText: "text-raw-charcoal",
      pillBg: "bg-hot-magenta text-white",
      border: "border-raw-charcoal",
      accentBg: "bg-hot-magenta",
      tagBg: "bg-hot-magenta",
      tagText: "text-white"
    },
    imageColor: "#00f0ff"
  },
  {
    id: "calm-kit",
    name: "CALM KIT",
    subtitle: "For acne-prone, oily, angry breakouts",
    price: 49,
    originalPrice: 60,
    stars: 4.8,
    reviews: 115,
    volume: "3 Items (Full Size)",
    benefits: [
      "Calms active angry papules overnight",
      "Regulates sebum without drying skin out",
      "Clears pores and refines skin texture"
    ],
    actives: ["Centella (50%)", "Salicylic Acid (2%)", "Zinc PCA"],
    items: [
      "RAW Foam Cleanse (150ml)",
      "Angry Skin S.O.S Drops (30ml)",
      "Zero-Weight Gel Moisturizer (50ml)"
    ],
    colorTheme: {
      primaryBg: "bg-neon-orange",
      accentText: "text-white",
      pillBg: "bg-deep-violet text-toxic-lime",
      border: "border-raw-charcoal",
      accentBg: "bg-deep-violet",
      tagBg: "bg-deep-violet",
      tagText: "text-toxic-lime"
    },
    imageColor: "#ff5a00"
  }
];

export const SINGLE_PRODUCTS = [
  { id: "cleanse", name: "RAW Gel-to-Foam Cleanse", type: "Cleanse", price: 18, color: "#DFFF00", active: "Amino Acids + Glycerin" },
  { id: "treat-barrier", name: "Barrier-Glue Serum", type: "Treat", price: 26, color: "#00FFFF", active: "3% Ceramides + B5" },
  { id: "treat-glow", name: "Liquid Glaze Essence", type: "Treat", price: 28, color: "#FF00FF", active: "10% Niacinamide" },
  { id: "seal-cement", name: "Ceramide Cement Cream", type: "Seal", price: 24, color: "#FF5A00", active: "Lipid Complex" },
  { id: "seal-moist", name: "Zero-Weight Gel Moisturizer", type: "Seal", price: 22, color: "#0000FF", active: "Centella + Zinc" },
  { id: "extra-oil", name: "Face Glue Oil", type: "Treat", price: 32, color: "#DFFF00", active: "Squalane + E" },
  { id: "extra-mist", name: "Liquid Air Mist", type: "Treat", price: 15, color: "#00FFFF", active: "Micro-Dose B5" },
  { id: "extra-mask", name: "Deep Cement Mask", type: "Seal", price: 28, color: "#FF5A00", active: "Kaolin + Ceramide" }
];

export const UGC_REVIEWS: UgcReview[] = [
  {
    id: "review-1",
    name: "Elena R.",
    handle: "@elena.skin",
    quote: "My 10-step routine literally melted my face off. Switched to RAW Barrier Kit and my skin has never been this calm and thick. Absolute Holy Grail.",
    rating: 5,
    skinType: "Flaky & Over-exfoliated",
    bgGradient: "from-toxic-lime/20 to-neutral-200",
    authorPicUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&h=400&q=80",
    productTag: "Barrier-Kit"
  },
  {
    id: "review-2",
    name: "Marcus K.",
    handle: "@marcus_rawr",
    quote: "The Glow Kit is insanely strong but zero irritation. That wet-glaze finish isn't oily, it's just pure, bounce-back hydration. Plus, the cyan tubes look mental on my shelf.",
    rating: 5,
    skinType: "Dull/Uneven Post-Acne",
    bgGradient: "from-electric-cyan/20 to-neutral-200",
    authorPicUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400&q=80",
    productTag: "Glow Kit"
  },
  {
    id: "review-3",
    name: "Zoe T.",
    handle: "@zoecleanpress",
    quote: "Active acne was raging. RAW Calm Kit dried the spots out but kept my barrier supple. The orange and violet cylinders are pure art. 3 steps, 10 minutes, done.",
    rating: 5,
    skinType: "Breakout-Prone/Oily",
    bgGradient: "from-neon-orange/20 to-neutral-200",
    authorPicUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&h=400&q=80",
    productTag: "Calm Kit"
  },
  {
    id: "review-4",
    name: "Damien L.",
    handle: "@damien_skincare",
    quote: "Simplified down to just Cleanse (Gel), Treat (Glaze), Seal (Cement). Best decision ever. No redness, no clogged pores, just raw healthy dermis. The design is incredible too.",
    rating: 4,
    skinType: "Sensitive Combination",
    bgGradient: "from-hot-magenta/10 to-neutral-200",
    authorPicUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&h=400&q=80",
    productTag: "Custom Stack"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "Why your barrier hates your 10-step routine",
    tag: "BARRIER BREAKDOWN",
    readTime: "4 MIN READ",
    colorClass: "bg-toxic-lime text-raw-charcoal",
    textClass: "text-raw-charcoal",
    date: "JUNE 18, 2026"
  },
  {
    id: "art-2",
    title: "How to spot over-exfoliation before it tears you",
    tag: "SKIN SCIENCE",
    readTime: "5 MIN READ",
    colorClass: "bg-electric-cyan text-raw-charcoal",
    textClass: "text-raw-charcoal",
    date: "JUNE 12, 2026"
  },
  {
    id: "art-3",
    title: "Skincare actives that play nice together (and ones that war)",
    tag: "RAW FORMULAS",
    readTime: "6 MIN READ",
    colorClass: "bg-neon-orange text-white",
    textClass: "text-white",
    date: "MAY 30, 2026"
  }
];
