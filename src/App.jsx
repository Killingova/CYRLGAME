// Import der benötigten React-Module
import React, { useState } from 'react';
// Import von Komponenten und Legungen aus verschiedenen Dateien
import LegungBox from './components/LegungBox.jsx';
import KeltischesKreuz from './legungen/KeltischesKreuz.jsx';
import LebensbaumLegung from './legungen/LebensbaumLegung.jsx';
import AstrologischeLegung from './legungen/AstrologischeLegung.jsx';
import ChakraLegung from './legungen/ChakraLegung.jsx';
import BeziehungsKompass from './legungen/BeziehungsKompass.jsx';
import PentagrammLegung from './legungen/PentagrammLegung.jsx';
import PyramidenLegung from './legungen/PyramidenLegung.jsx';
import GrosseTafel from './legungen/GrosseTafel.jsx';
import HufeisenLegung from './legungen/HufeisenLegung.jsx';
// Importiere die PythagoreanNumerology-Komponente
import PythagoreanNumerology from './components/PythagoreanNumerology.jsx';
import Header from './components/Header.jsx'
import HeroBereich from './components/HeroBereich.jsx'
import Footer from './components/Footer.jsx';

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
  // Zustandshaken, um die aktuell ausgewählte Legung zu speichern
  const [selectedLegung, setSelectedLegung] = useState(null);

  // Funktion, die aufgerufen wird, wenn eine Legung angeklickt wird
  const handleLegungClick = (component) => {
    setSelectedLegung(component);
  };

  // Funktion, die aufgerufen wird, um zur Übersicht zurückzukehren
  const handleBackClick = () => {
    setSelectedLegung(null);
  };

  return (
    <div className="container mx-auto p-4">
      <Header/>
      <HeroBereich />
      <PythagoreanNumerology />

      {selectedLegung ? (
        <>
          {/* Button, um zur Übersicht zurückzukehren */}
          <button onClick={handleBackClick} className="mb-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
            Zurück zur Übersicht
          </button>
          {/* Die ausgewählte Legung wird angezeigt */}
          {selectedLegung}
        </>
      ) : (
        <>
          {/* Titel und Untertitel der Anwendung */}
          <h1 className="my-8 text-center text-5xl font-bold">Herzlich Willkommen in den Positive Psychologie Spiel</h1>
          <h3 className="text-center text-3xl mb-8">Bitte wählen Sie eine Tafel</h3>
          
          {/* Grid zur Anzeige der verschiedenen Legungen */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {legungen.map((legung, index) => (
              <LegungBox
                key={index}
                title={legung.title}
                image={legung.image}
                info={legung.info}
                onClick={() => handleLegungClick(legung.component)}
              />
            ))}
          </div>
        </>
      )}
      
      {/* Button, um das Spiel neu zu starten */}
      <button onClick={() => window.location.reload()} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        Neues Spiel starten
      </button>
      <Footer/>
    </div>
  );
}

export default App;
