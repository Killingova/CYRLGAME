import React, { useState } from 'react';
import HeroBereich from '../components/HeroBereich';
import PythagoreanNumerology from '../components/PythagoreanNumerology';
import Rechner from '../components/Rechner';
import LegungCarousel from '../components/LegungCarousel';
import FiftyCards from '../components/newworld/FiftyCards';

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

// Direkt definierte Legungen ohne Auslagerung
const legungen = [
  {
    title: "Welt des inneren Gleichgewichts",
    image: `${import.meta.env.BASE_URL}images/chakralegung.jpg`,
    info: "Reise durch die sieben Energiezentren deines Körpers und erkenne, wo Harmonie oder Blockaden verborgen liegen.",
    component: ChakraLegung
  },
  {
    title: "Welt der Schicksalsfäden",
    image: `${import.meta.env.BASE_URL}images/keltischeskreuz.jpg`,
    info: "Tauche ein in eine alte, keltische Struktur, die dir Klarheit über Vergangenheit, Gegenwart und Zukunft schenkt.",
    component: KeltischesKreuz
  },
  {
    title: "Welt des kosmischen Gleichklangs",
    image: `${import.meta.env.BASE_URL}images/astrologische.jpg`,
    info: "Erkunde deine zwölf Lebensbereiche und erkenne, welche Sterne dir gerade leuchten oder verborgen bleiben.",
    component: AstrologischeLegung
  },
  {
    title: "Welt der verborgenen Pfade",
    image: `${import.meta.env.BASE_URL}images/hufeisen.jpg`,
    info: "Ein Blick auf die Entwicklung eines Themas – von der Vergangenheit, über das Jetzt, bis hin zum Kommenden.",
    component: HufeisenLegung
  },
  {
    title: "Welt des magischen Ursprungs",
    image: `${import.meta.env.BASE_URL}images/pyramiden.jpg`,
    info: "Analysiere ein Thema von Grund auf und erkenne den Weg zur spirituellen Spitze deiner Situation.",
    component: PyramidenLegung
  },
  {
    title: "Welt der Herzensverbindungen",
    image: `${import.meta.env.BASE_URL}images/kompass.jpg`,
    info: "Navigiere durch die emotionale Landschaft deiner Beziehungen – mit Blick auf Sehnsucht, Nähe und gemeinsame Wege.",
    component: BeziehungsKompass
  },
  {
    title: "Welt der Elementarenergie",
    image: `${import.meta.env.BASE_URL}images/pentagramm.jpg`,
    info: "Erkenne, wie die fünf Kräfte (Erde, Wasser, Feuer, Luft & Geist) in deiner aktuellen Lebenslage wirken.",
    component: PentagrammLegung
  },
  {
    title: "Welt des Seelenbaums",
    image: `${import.meta.env.BASE_URL}images/lebensbaum.jpg`,
    info: "Eine tiefgehende spirituelle Reise entlang des kabbalistischen Lebensbaums – von Erkenntnis bis Transformation.",
    component: LebensbaumLegung
  },
  {
    title: "Welt der Weite Erkenntnis",
    image: `${import.meta.env.BASE_URL}images/21karten.jpg`,
    info: "Die große Tafel: Eine umfassende Sicht auf alle Aspekte deines Lebens – wie ein Blick von oben auf dein inneres Reich.",
    component: GrosseTafel
  }
];

function Home() {
  const [selectedLegung, setSelectedLegung] = useState(null);

  const handleLegungClick = (component) => setSelectedLegung(component);
  const handleBackClick = () => setSelectedLegung(null);

  return (
    <div className="bg-[#1F4C73]">
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
          {React.createElement(selectedLegung)}
        </section>
      ) : (
        <>
          <h1 className="my-8 text-[#F2CA50] text-center text-5xl font-bold">
            Herzlich Willkommen ...
          </h1>
          <h3 className="text-center text-stone-200 text-3xl mb-4">
            Bitte wähle eine Tafel
          </h3>

          <LegungCarousel legungen={legungen} onLegungClick={handleLegungClick} />
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
