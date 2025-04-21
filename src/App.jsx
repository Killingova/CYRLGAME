import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import Kontakt from "./pages/Kontakt";
import DatenSchutz from "./pages/DatenSchutz";
import PfadDesParadoxonsArticle from "./pages/PfadDesParadoxonsArticle";
import PythagoreanNumerology from "./components/PythagoreanNumerology";

import LoginFormular from "./components/LoginFormular";
import RegisterFormular from "./components/RegisterFormular";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/datenschutz" element={<DatenSchutz />} />
              <Route path="/ueber" element={<PfadDesParadoxonsArticle />} />
              <Route path="/numerologie" element={<PythagoreanNumerology />} />

              {/* Auth */}
              <Route path="/login" element={<LoginFormular />} />
              <Route path="/register" element={<RegisterFormular />} />
            </Routes>
          </main>
          <Footer />
        </div>
  );
}

export default App;
