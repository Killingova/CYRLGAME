// src/pages/Home.jsx
import React, { useState } from 'react';
import HeroBereich from '../components/HeroBereich';
import FiftyCards from '../components/newworld/FiftyCards';
import PythagoreanNumerology from '../components/PythagoreanNumerology';
import Rechner from '../components/Rechner';
import LegungCarousel from '../components/LegungCarousel';

// Direktimport der Legungen-Komponenten
import KeltischesKreuz from '../legungen/KeltischesKreuz';
import LebensbaumLegung from '../legungen/LebensbaumLegung';
import AstrologischeLegung from '../legungen/AstrologischeLegung';
import ChakraLegung from '../legungen/ChakraLegung';
import BeziehungsKompass from '../legungen/BeziehungsKompass';
import PentagrammLegung from '../legungen/PentagrammLegung';
import PyramidenLegung from '../legungen/PyramidenLegung';
import GrosseTafel from '../legungen/GrosseTafel';
import HufeisenLegung from '../legungen/HufeisenLegung';

// Import Bilder
import chakralegung from '../assets/images/chakralegung.jpg';
import keltischeskreuz from '../assets/images/keltischeskreuz.jpg';
import astrologische from '../assets/images/astrologische.jpg';
import hufeisen from '../assets/images/hufeisen.jpg';
import pyramiden from '../assets/images/pyramiden.jpg';
import kompass from '../assets/images/kompass.jpg';
import pentagramm from '../assets/images/pentagramm.jpg';
import lebensbaum from '../assets/images/lebensbaum.jpg';
import _21karten from '../assets/images/21karten.jpg';

// Array für das Carousel
const legungenArray = [
  {
    title: "Welt des inneren Gleichgewichts",
    image: chakralegung,
    info: "Reise durch die sieben Energiezentren deines Körpers...",
    component: ChakraLegung
  },
  {
    title: "Welt der Schicksalsfäden",
    image: keltischeskreuz,
    info: "Tauche ein in eine alte, keltische Struktur...",
    component: KeltischesKreuz
  },
  {
    title: "Welt des kosmischen Gleichklangs",
    image: astrologische,
    info: "Erkunde deine zwölf Lebensbereiche...",
    component: AstrologischeLegung
  },
  {
    title: "Welt der verborgenen Pfade",
    image: hufeisen,
    info: "Ein Blick auf die Entwicklung eines Themas...",
    component: HufeisenLegung
  },
  {
    title: "Welt des magischen Ursprungs",
    image: pyramiden,
    info: "Analysiere ein Thema von Grund auf...",
    component: PyramidenLegung
  },
  {
    title: "Welt der Herzensverbindungen",
    image: kompass,
    info: "Navigiere durch die emotionale Landschaft...",
    component: BeziehungsKompass
  },
  {
    title: "Welt der Elementarenergie",
    image: pentagramm,
    info: "Erkenne, wie die fünf Kräfte in deiner Lebenslage wirken.",
    component: PentagrammLegung
  },
  {
    title: "Welt des Seelenbaums",
    image: lebensbaum,
    info: "Eine tiefgehende spirituelle Reise...",
    component: LebensbaumLegung
  },
  {
    title: "Welt der Weite Erkenntnis",
    image: _21karten,
    info: "Die große Tafel: Eine umfassende Sicht auf dein inneres Reich.",
    component: GrosseTafel
  }
];

// Mapping: Name → Komponente (falls du es brauchst, aber wir haben ja direct reference)
const Home = () => {
  const [selectedLegung, setSelectedLegung] = useState(null);

  // Aufruf aus HeroBereich oder LegungCarousel
  const handleLegungClick = (LegungComponent) => {
    console.log('Ausgewählte Legung:', LegungComponent);
    setSelectedLegung(() => LegungComponent);
  };

  const handleBackClick = () => {
    setSelectedLegung(null);
  };

  return (
    <div className="bg-[#260101] min-h-screen text-white">
      {/* Zeigt Zufallswelt im HeroBereich */}
      <HeroBereich onLegungClick={handleLegungClick} />

      {selectedLegung ? (
        // Wurde eine Legung ausgewählt
        <section className="container mx-auto px-4 py-8">
          <button
            onClick={handleBackClick}
            className="mb-6 bg-[#8C5A67] text-white py-2 px-4 rounded hover:bg-[#A67C7C] transition"
          >
            Zurück zur Übersicht
          </button>
          <div className="bg-[#DCDEF2] p-6 rounded-xl text-[#260101] shadow-lg">
            {React.createElement(selectedLegung)}
          </div>
        </section>
      ) : (
        // Übersichts-Modus
        <>
          <section className="text-center py-12">
            <p className="text-[#DCDEF2] text-xl mb-6">
              Wähle deine Legung und entdecke neue Perspektiven
            </p>
          </section>

          {/* Dein LegungCarousel bleibt erhalten */}
          <LegungCarousel
            legungen={legungenArray}
            onLegungClick={(Comp) => handleLegungClick(Comp)}
          />
        </>
      )}

      <div className="text-center my-10">
        <button
          onClick={() => window.location.reload()}
          className="bg-[#1A3A5D] text-white py-2 px-4 rounded hover:bg-[#163049] transition"
        >
          Neues Spiel starten
        </button>
      </div>

      {/* Deine restlichen Komponenten */}
      <PythagoreanNumerology />
      <FiftyCards />
      <Rechner />
    </div>
  );
};

export default Home;
