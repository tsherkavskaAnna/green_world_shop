import { ImageProduct } from '@/interface/product';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ProductStore {
  id: string | number;
  documentId: string;
  slug: string;
  name: string;
  price: number;
  image: ImageProduct;
}

interface CartItem extends ProductStore {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: ProductStore, quantity: number) => void;
  removeItem: (itemId: string | number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  updateItemQuantity: (itemId: string | number, quantity: number) => void;
}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id
          );
          const updatedItems = existingItem
            ? state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              )
            : [...state.items, { ...product, quantity }];
          return { items: updatedItems };
        }),
      removeItem: (itemId) =>
        set((state) => {
          const updatedItems = state.items.filter((item) => item.id !== itemId);
          return { items: updatedItems };
        }),
      clearCart: () => {
        set({ items: [] });
      },
      getTotalPrice: () =>
        get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
      updateItemQuantity: (itemId, quantity) =>
        set((state) => {
          const updatedItems = state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          );
          return { items: updatedItems };
        }),
    }),
    {
      name: 'cart-storage',
    }
  )
);

export default useCartStore;
