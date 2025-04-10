import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Kontakt from './pages/Kontakt';
import DatenSchutz from './pages/DatenSchutz'; // Import der Datenschutz-Komponente

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
          {/* Weitere Routen können hier ergänzt werden */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
