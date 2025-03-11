import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CountStore {
  count: number;
  incrementCounter: () => void;
  decrementCounter: () => void;
  resetCounter: () => void;
}

const useCounterStore = create<CountStore>()(
  persist(
    (set) => ({
      count: 0,
      incrementCounter: () => set((state) => ({ count: state.count + 1 })),
      decrementCounter: () => set((state) => ({ count: state.count - 1 })),
      resetCounter: () => set({ count: 0 }),
    }),
    {
      name: 'counter',
    }
  )
);

export default useCounterStore;
