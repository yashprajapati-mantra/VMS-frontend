import { create } from "zustand";

export const useNavbarStore = create((set) => ({
    isActive: '',
    setIsActive: (key) => set({ isActive: key })
}))