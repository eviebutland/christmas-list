import { create } from "zustand";
import { Image } from "../types/images";
import { fetchAllImages } from "../utils/fetchImages";

type ImagesStore = {
  images: Image[];
  setImages: () => Promise<void>;
};

export const useImageStore = create<ImagesStore>((set, get) => ({
  images: [],
  setImages: async () => {
    if (!get().images.length) {
      const response = await fetchAllImages();

      set({ images: await response?.json() });
    }
  },
}));
