import { create } from "zustand";
import { ClothingItem } from "../types/clothes";

type ClothingStore = {
  clothes: ClothingItem[];
  fetchClothingItems: () => Promise<void>;
};

export const useClothingStore = create<ClothingStore>((set, get) => ({
  clothes: [],
  fetchClothingItems: async () => {
    if (!get().clothes.length) {
      // Update to React Query?
      const response = await fetch("http://localhost:3001/clothes", {
        method: "GET",
      });

      set({ clothes: await response?.json() });
    }
  },
}));
