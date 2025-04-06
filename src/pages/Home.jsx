import React, { useState } from 'react';
import HeroBereich from '../components/HeroBereich';
import FiftyCards from '../components/newworld/FiftyCards';
import PythagoreanNumerology from '../components/PythagoreanNumerology';
import Rechner from '../components/Rechner';
import LegungCarousel from '../components/LegungCarousel';

// Deine Legungs-Komponenten
import KeltischesKreuz from '../legungen/KeltischesKreuz';
import LebensbaumLegung from '../legungen/LebensbaumLegung';
import AstrologischeLegung from '../legungen/AstrologischeLegung';
import ChakraLegung from '../legungen/ChakraLegung';
import BeziehungsKompass from '../legungen/BeziehungsKompass';
import PentagrammLegung from '../legungen/PentagrammLegung';
import PyramidenLegung from '../legungen/PyramidenLegung';
import GrosseTafel from '../legungen/GrosseTafel';
import HufeisenLegung from '../legungen/HufeisenLegung';

const legungenArray = [
  {
    title: "Welt des inneren Gleichgewichts",
    image: "/CYRLGAME/images/chakralegung.jpg",
    info: "Reise durch die sieben Energiezentren...",
    component: ChakraLegung
  },
  {
    title: "Welt der Schicksalsfäden",
    image: "/CYRLGAME/images/keltischeskreuz.jpg",
    info: "Tauche ein in eine alte, keltische Struktur...",
    component: KeltischesKreuz
  },
  {
    title: "Welt des kosmischen Gleichklangs",
    image: "/CYRLGAME/images/astrologische.jpg",
    info: "Erkunde deine zwölf Lebensbereiche...",
    component: AstrologischeLegung
  },
  {
    title: "Welt der verborgenen Pfade",
    image: "/CYRLGAME/images/hufeisen.jpg",
    info: "Ein Blick auf die Entwicklung eines Themas...",
    component: HufeisenLegung
  },
  {
    title: "Welt des magischen Ursprungs",
    image: "/CYRLGAME/images/pyramiden.jpg",
    info: "Analysiere ein Thema von Grund auf...",
    component: PyramidenLegung
  },
  {
    title: "Welt der Herzensverbindungen",
    image: "/CYRLGAME/images/kompass.jpg",
    info: "Navigiere durch die emotionale Landschaft...",
    component: BeziehungsKompass
  },
  {
    title: "Welt der Elementarenergie",
    image: "/CYRLGAME/images/pentagramm.jpg",
    info: "Erkenne, wie die fünf Kräfte...",
    component: PentagrammLegung
  },
  {
    title: "Welt des Seelenbaums",
    image: "/CYRLGAME/images/lebensbaum.jpg",
    info: "Eine tiefgehende spirituelle Reise...",
    component: LebensbaumLegung
  },
  {
    title: "Welt der Weite Erkenntnis",
    image: "/CYRLGAME/images/21karten.jpg",
    info: "Die große Tafel: Eine umfassende Sicht...",
    component: GrosseTafel
  }
];

function Home() {
  const [selectedLegung, setSelectedLegung] = useState(null);

  // Funktion zum Auswählen einer Legung
  const handleLegungClick = (LegungComponent) => {
    setSelectedLegung(() => LegungComponent);
  };

  // Zurück zur Übersicht
  const handleBackClick = () => {
    setSelectedLegung(null);
  };

  return (
    <div className="bg-[#1F4C73] min-h-screen">
      <HeroBereich />
      <FiftyCards />

      {selectedLegung ? (
        <section className="container mx-auto px-4">
          <button
            onClick={handleBackClick}
            className="mb-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition"
          >
            Zurück zur Übersicht
          </button>
          <div className="bg-white p-4">
            {/* Rendet die gewählte Komponente */}
            {React.createElement(selectedLegung)}
          </div>
        </section>
      ) : (
        <>
          <h1 className="my-8 text-[#F2CA50] text-center text-5xl font-bold">
            Herzlich Willkommen ...
          </h1>
          <h3 className="text-center text-stone-200 text-3xl mb-4">
            Bitte wähle eine Tafel
          </h3>

          <LegungCarousel
            legungen={legungenArray}
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

      <PythagoreanNumerology />
      <Rechner />
    </div>
  );
}

export default Home;
