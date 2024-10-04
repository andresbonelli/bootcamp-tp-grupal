export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface ProductFromCart extends Product {
  quantity: number;
}

export interface Rating {
  rate: number;
  count: number;
}

export interface svgProps {
  height?: number;
  width?: number;
  fill?: string;
  stroke?: string;
}
