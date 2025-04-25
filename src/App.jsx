import React, { useEffect, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import InteractionListener from "./components/InteractionListener";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider, AuthContext } from "./context/AuthContext";

// Seiten / Views
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import Kontakt from "./pages/Kontakt";
import DatenSchutz from "./pages/DatenSchutz";
import PfadDesParadoxonsArticle from "./pages/PfadDesParadoxonsArticle";
import PythagoreanNumerology from "./components/PythagoreanNumerology";

// Auth-Formulare
import LoginFormular from "./components/LoginFormular";
import RegisterFormular from "./components/RegisterFormular";

const AppRoutes = () => {
  const location = useLocation();
  const { user, isLoading: authLoading } = useContext(AuthContext);

  useEffect(() => {
    console.debug("[AppRoutes] current location:", location.pathname);
  }, [location]);

  console.debug("[AppRoutes] authLoading:", authLoading, "user:", user);

  return (
    <Routes>
      {/* Öffentliche Seiten */}
      <Route path="/" element={<Home />} />
      <Route path="/ueber" element={<PfadDesParadoxonsArticle />} />
      <Route path="/kontakt" element={<Kontakt />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<DatenSchutz />} />
      <Route path="/login" element={<LoginFormular />} />
      <Route path="/register" element={<RegisterFormular />} />

      {/* Geschützte Seite */}
      <Route
        path="/numerologie"
        element={
          <ProtectedRoute>
            <PythagoreanNumerology />
          </ProtectedRoute>
        }
      />

      {/* Fallback: Unbekannte Route */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <InteractionListener />

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
