import { Product } from './product';

export interface Review {
  id: string;
  documentId: string;
  comment: string;
  rating: number;
  author: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  product: Product;
}

export type NewReview = {
  comment: string;
  rating: number;
  author: string;
};
