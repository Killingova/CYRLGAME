import { create } from "zustand";

/**
 * Mini-Store für UI-Status, getrennt von Supabase-User-Objekt.
 * - isLoggedIn: bool     (abgeleitet von AuthContext)
 * - hasInteracted: bool  (erste echte User-Interaktion)
 */
const useAuthStore = create((set) => ({
  isLoggedIn: false,
  hasInteracted: false,
  setLoggedIn: (state) => {
    console.debug("🔑 setLoggedIn ->", state);
    set({ isLoggedIn: state });
  },
  setInteracted: () => {
    console.debug("👀 erste Interaktion entdeckt – hasInteracted = true");
    set({ hasInteracted: true });
  },
}));

export default useAuthStore;
