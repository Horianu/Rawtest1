export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  stars: number;
  reviews: number;
  colorTheme: {
    primaryBg: string; // Tailwind class
    accentText: string;
    pillBg: string;
    border: string;
    accentBg: string;
    tagBg: string;
    tagText: string;
  };
  benefits: string[];
  actives: string[];
  volume: string;
  items: string[];
  imageColor: string; // hex or class
}

export interface CartItem {
  product: Product;
  quantity: number;
  customStack?: {
    cleanse: string;
    treat: string;
    seal: string;
  };
}

export interface UgcReview {
  id: string;
  name: string;
  handle: string;
  quote: string;
  rating: number;
  skinType: string;
  bgGradient: string;
  authorPicUrl: string;
  productTag: string;
}

export interface Article {
  id: string;
  title: string;
  tag: string;
  readTime: string;
  colorClass: string;
  textClass: string;
  date: string;
}
