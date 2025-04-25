// 📂 src/components/InteractionListener.jsx
import { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const InteractionListener = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    // Wenn User eingeloggt ist oder wir uns auf Login/Register befinden → nichts tun
    if (user || pathname === "/login" || pathname === "/register") {
      return;
    }

    // Andernfalls nach 30s zur Login-Seite weiterleiten
    const timer = setTimeout(() => {
      navigate("/login");
    }, 30_000);

    return () => clearTimeout(timer);
  }, [user, pathname, navigate]);

  return null;
};

export default InteractionListener;
