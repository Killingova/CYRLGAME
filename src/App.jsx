// 📂 src/App.jsx
import React, { useEffect, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
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
import ProfilePage from "./pages/ProfilePage";

// Numerologie (geschützt)
import PythagoreanNumerology from "./components/PythagoreanNumerology";

// Auth-Formulare
import LoginFormular from "./components/LoginFormular";
import RegisterFormular from "./components/RegisterFormular";

const AppRoutes = () => {
  const location = useLocation();
  const { user, isAuthLoading } = useContext(AuthContext);

  useEffect(() => {
    console.debug("[AppRoutes] current location:", location.pathname);
    console.debug("[AppRoutes] isAuthLoading:", isAuthLoading, "user:", user);
  }, [location, isAuthLoading, user]);

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

      {/* Geschützte Seiten über einen gemeinsamen Wrapper */}
      <Route element={<ProtectedRoute />}>
        <Route path="/profil" element={<ProfilePage />} />
        <Route path="/numerologie" element={<PythagoreanNumerology />} />
      </Route>

      {/* Fallback: alle unbekannten Pfade */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

const App = () => (
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

export default App;
