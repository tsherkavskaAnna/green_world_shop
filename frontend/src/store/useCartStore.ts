
import { create } from "zustand";


interface ProductStore {
  id: string;
  name: string;
  price: number;
}

interface CartItem extends ProductStore {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  quantity: number;
  addItem: (item: ProductStore) => void;
  removeItem: (itemId: string) => void;
  increment: (productId: string) => void;
  decrement: (productId: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
}

const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  quantity: 0,
  addItem: (product) => set((state) => {
    const existingItem = state.items.find((item) => item.id === product.id);
    if (existingItem) {
      return {
        items: state.items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }
    return { items: [...state.items, { ...product, quantity: 1 }] };
  }),
  removeItem: (itemId) => set((state) => ({ 
    items: state.items.filter(item => item.id !== itemId) 
  })),
  increment: (productId) => set((state) => ({
    items: state.items.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ),
  })),
  decrement: (productId) => set((state) => {
    const updatedItems = state.items.map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter((item) => item.quantity > 0); 
    return { items: updatedItems };
  }),
  clearCart: () => set({ items: [] }),
  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + item.price, 0)
  },
  getItemCount: () => get().items.length,
}))

export default useCartStore