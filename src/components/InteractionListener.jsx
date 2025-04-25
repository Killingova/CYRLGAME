import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const InteractionListener = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Wenn schon eingeloggt, nichts tun
    if (user) return;

    // Nach 30 Sekunden zum Login schicken
    const timer = setTimeout(() => {
      navigate("/login");
    }, 30000);

    return () => clearTimeout(timer);
  }, [user, navigate]);

  return null;
};

export default InteractionListener;
