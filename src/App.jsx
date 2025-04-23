// =============================================================
// 📂 src/App.jsx
// SPA-Shell ohne BrowserRouter – dieser steckt in main.jsx
// Enthält:
//   • AuthProvider  → Supabase-Session + User-Context
//   • InteractionListener → merkt erste User-Interaktion
//   • Header / Footer      → Layout-Chrome
//   • Geschützte & öffentliche Routen via React-Router v6
// =============================================================

import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import InteractionListener from "./components/InteractionListener";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

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

const App = () => {
  return (
    <AuthProvider>
      {/* Lauscht global auf Klick/Scroll → steuert Logout-Button UX */}
      <InteractionListener />

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            {/* ---------- Öffentliche Routen ---------- */}
            <Route path="/login" element={<LoginFormular />} />
            <Route path="/register" element={<RegisterFormular />} />

            {/* Rechtliche Pflichtseiten: immer zugänglich */}
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<DatenSchutz />} />

            {/* ---------- Geschützte App-Sektion ---------- */}
            <Route path="/" element={<ProtectedRoute />}>
              {/* index = “/”  */}
              <Route index element={<Home />} />

              {/* weitere Unterseiten */}
              <Route path="ueber" element={<PfadDesParadoxonsArticle />} />
              <Route path="kontakt" element={<Kontakt />} />
              <Route path="numerologie" element={<PythagoreanNumerology />} />
            </Route>

            {/* ---------- Fallback ---------- */}
            {/* Alles andere führt zum Login (oder du baust eine 404-Page) */}
            <Route path="*" element={<LoginFormular />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;
