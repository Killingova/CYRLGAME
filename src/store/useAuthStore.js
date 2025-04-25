import { create } from "zustand";

/**
 * Mini-Store für UI-Status, getrennt von Supabase-User-Objekt.
 * - hasInteracted: bool     (erste echte User-Interaktion erkannt)
 * - showLoginPrompt: bool   (sanfte Anzeige Login-Aufforderung nach Timer)
 */
const useAuthStore = create((set) => ({
  hasInteracted: false,
  showLoginPrompt: false,

  markInteracted: () => {
    console.debug("👀 Erste Interaktion erkannt – hasInteracted = true");
    set({ hasInteracted: true });
  },

  enableLoginPrompt: () => {
    console.debug("⏰ Login-Prompt freigeschaltet");
    set({ showLoginPrompt: true });
  },

  resetLoginPrompt: () => {
    console.debug("🔄 Login-Prompt zurückgesetzt");
    set({ showLoginPrompt: false });
  },
}));

export default useAuthStore;
