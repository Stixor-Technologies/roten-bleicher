import { create } from "zustand";

type MenuState = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
};
export const useMenuStore = create<MenuState>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (value) => set((state) => ({ isMenuOpen: value })),
}));
