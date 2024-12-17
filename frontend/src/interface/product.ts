export interface ImageProduct {
  id: number;
  formats: {
    thumbnail: { url: string };
    medium: { url: string };
    large: { url: string };
  };
  alternativeText?: string;
}

export interface Review {
  id: string;
  documentId: string;
  comment: string;
  rating: number;
  author: string;
}

export interface Product {
  id: number;
  name: string;
  nickname: string;
  description: string;
  price: number;
  image: ImageProduct[];
  size: string;
  category: string;
  reviews: Review[];
}