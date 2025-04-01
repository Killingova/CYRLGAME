// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import HeroBereich from './components/HeroBereich';
import Footer from './components/Footer';
// Andere Komponenten
import PythagoreanNumerology from './components/PythagoreanNumerology';
import Rechner from './components/Rechner';
// Unser neues Karussell
import LegungCarousel from './components/LegungCarousel';

// Die Legungen + Komponenten
import KeltischesKreuz from './legungen/KeltischesKreuz';
import LebensbaumLegung from './legungen/LebensbaumLegung';
import AstrologischeLegung from './legungen/AstrologischeLegung';
import ChakraLegung from './legungen/ChakraLegung';
import BeziehungsKompass from './legungen/BeziehungsKompass';
import PentagrammLegung from './legungen/PentagrammLegung';
import PyramidenLegung from './legungen/PyramidenLegung';
import GrosseTafel from './legungen/GrosseTafel';
import HufeisenLegung from './legungen/HufeisenLegung';

// Definition eines Arrays von Legungen mit ihren Eigenschaften
const legungen = [
  {
    title: "Welt des inneren Gleichgewichts", // Chakra
    image: "/images/chakralegung.jpg",
    info: "Reise durch die sieben Energiezentren deines Körpers und erkenne, wo Harmonie oder Blockaden verborgen liegen.",
    component: <ChakraLegung />
  },
  {
    title: "Welt der Schicksalsfäden", // Keltisches Kreuz
    image: "/images/keltischeskreuz.jpg",
    info: "Tauche ein in eine alte, keltische Struktur, die dir Klarheit über Vergangenheit, Gegenwart und Zukunft schenkt.",
    component: <KeltischesKreuz />
  },
  {
    title: "Welt des kosmischen Gleichklangs", // Astrologische
    image: "/images/astrologische.jpg",
    info: "Erkunde deine zwölf Lebensbereiche und erkenne, welche Sterne dir gerade leuchten oder verborgen bleiben.",
    component: <AstrologischeLegung />
  },
  {
    title: "Welt der verborgenen Pfade", // Hufeisen
    image: "/images/hufeisen.jpg",
    info: "Ein Blick auf die Entwicklung eines Themas – von der Vergangenheit, über das Jetzt, bis hin zum Kommenden.",
    component: <HufeisenLegung />
  },
  {
    title: "Welt des magischen Ursprungs", // Pyramide
    image: "/images/pyramiden.jpg",
    info: "Analysiere ein Thema von Grund auf und erkenne den Weg zur spirituellen Spitze deiner Situation.",
    component: <PyramidenLegung />
  },
  {
    title: "Welt der Herzensverbindungen", // Beziehungs-Kompass
    image: "/images/kompass.jpg",
    info: "Navigiere durch die emotionale Landschaft deiner Beziehungen – mit Blick auf Sehnsucht, Nähe und gemeinsame Wege.",
    component: <BeziehungsKompass />
  },
  {
    title: "Welt der Elementarenergie", // Pentagramm
    image: "/images/pentagramm.jpg",
    info: "Erkenne, wie die fünf Kräfte (Erde, Wasser, Feuer, Luft & Geist) in deiner aktuellen Lebenslage wirken.",
    component: <PentagrammLegung />
  },
  {
    title: "Welt des Seelenbaums", // Lebensbaum
    image: "/images/lebensbaum.jpg",
    info: "Eine tiefgehende spirituelle Reise entlang des kabbalistischen Lebensbaums – von Erkenntnis bis Transformation.",
    component: <LebensbaumLegung />
  },
  {
    title: "Welt der Weite Erkenntnis", // 21 Karten
    image: "/images/21karten.jpg",
    info: "Die große Tafel: Eine umfassende Sicht auf alle Aspekte deines Lebens – wie ein Blick von oben auf dein inneres Reich.",
    component: <GrosseTafel />
  }
];


function App() {
  // State: ausgewählte Legung
  const [selectedLegung, setSelectedLegung] = useState(null);

  const handleLegungClick = (component) => {
    setSelectedLegung(component);
  };

  const handleBackClick = () => {
    setSelectedLegung(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroBereich />

      <main className="flex-grow bg-[#1F4C73]">
          <PythagoreanNumerology />

        {selectedLegung ? (
          <section className="container mx-auto px-4">
            <button
              onClick={handleBackClick}
              className="mb-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition"
            >
              Zurück zur Übersicht
            </button>
            {selectedLegung}
          </section>
        ) : (
          <>
            <h1 className="my-8 text-center text-5xl font-bold">
              Herzlich Willkommen ...
            </h1>
            <h3 className="text-center text-3xl mb-4">
              Bitte wähle eine Tafel
            </h3>

            <LegungCarousel 
              legungen={legungen} 
              onLegungClick={handleLegungClick} 
            />
          </>
        )}

        <div className="text-center my-8">
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Neues Spiel starten
          </button>
        </div>
        <Rechner />
      </main>

      <Footer />
    </div>
  );
}

export default App;
