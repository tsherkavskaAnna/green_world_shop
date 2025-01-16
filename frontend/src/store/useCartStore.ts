
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
  addItem: (product: ProductStore, quantity: number) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
  updateItemQuantity: (itemId: string, quantity: number) => void;
}

const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (product, quantity) => set((state) => {
    const existingItem = state.items.find((item) => item.id === product.id);
    if (existingItem) {
      return {
        items: state.items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        ),
      };
    }
    return { items: [...state.items, { ...product, quantity }] };
  }),
  removeItem: (itemId) => set((state) => ({ 
    items: state.items.filter(item => item.id !== itemId) 
  })),
  clearCart: () => set({ items: [] }),
  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + item.price, 0)
  },
  updateItemQuantity: ((itemId, quantity) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === itemId? {...item, quantity } : item
      ),
    }))
   }),
  getItemCount: () => get().items.length,
}))

export default useCartStore