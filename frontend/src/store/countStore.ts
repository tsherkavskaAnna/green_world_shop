import { create } from "zustand";

interface CountStore {
  count: number;
  incrementCounter: () => void;
  decrementCounter: () => void;
  resetCounter: () => void;
}


 const useCounterStore = create<CountStore>((set) => ({
  count: 0,
  incrementCounter: () => set((state) => ({ count: state.count + 1 })),
  decrementCounter: () => set((state) => ({ count: state.count - 1 })),
  resetCounter: () => set({ count: 0 }),
 }))

 export default useCounterStore;
 

