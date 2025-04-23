// =============================================================================
// 📂 src/components/InteractionListener.jsx
// -----------------------------------------------------------------------------
// ‚Invisible‘ Component: setzt hasInteracted=true nach erstem Klick/Scroll,
// aber nur wenn User eingeloggt ist (Session vorhanden).
// =============================================================================
import { useEffect } from "react";
import useAuthStore from "../store/useAuthStore";

const InteractionListener = () => {
  const { setInteracted, session } = useAuthStore();

  useEffect(() => {
    if (!session) return; // Nur aktiv, wenn User eingeloggt ist

    const handleInteraction = () => setInteracted();

    window.addEventListener("click", handleInteraction, { once: true });
    window.addEventListener("scroll", handleInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
    };
  }, [setInteracted, session]);

  return null;
};

export default InteractionListener;
