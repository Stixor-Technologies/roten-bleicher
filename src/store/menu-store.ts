import { create } from "zustand";

type MenuState = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  activeSection: string;
  setActiveSection: (value: string) => void;
};
export const useMenuStore = create<MenuState>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: (value) => set((state) => ({ isMenuOpen: value })),
  activeSection: "",
  setActiveSection: (value) => set((state) => ({ activeSection: value })),
}));
