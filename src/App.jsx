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

// Definition eines Arrays von Legungen mit ihren Eigenschaften
const legungen = [
  {
    title: 'Keltisches Kreuz',
    image: '/images/keltischeskreuz.jpg',
    info: 'Eine umfassende Legung für tiefgehende Analysen.',
    component: <KeltischesKreuz />
  },
  {
    title: 'Lebensbaum-Legung',
    image: '/images/lebensbaum.jpg',
    info: 'Eine spirituelle Legung basierend auf dem Kabbalistischen Lebensbaum.',
    component: <LebensbaumLegung />
  },
  {
    title: 'Astrologische Legung',
    image: '/images/astrologische.jpg',
    info: 'Eine umfassende Analyse der verschiedenen Lebensbereiche basierend auf den zwölf astrologischen Häusern.',
    component: <AstrologischeLegung />
  },
  {
    title: 'Chakra-Legung',
    image: '/images/chakralegung.jpg',
    info: 'Diese Legung wird verwendet, um energetische Blockaden und Zustände der Chakren zu analysieren.',
    component: <ChakraLegung />
  },
  {
    title: 'Beziehungs-Kompass',
    image: '/images/kompass.jpg',
    info: 'Diese Legung ist konzipiert, um Einblicke in die eigenen Gefühle, Bedürfnisse und die mögliche Zukunft einer Beziehung zu gewinnen.',
    component: <BeziehungsKompass />
  },
  {
    title: 'Pentagramm-Legung',
    image: '/images/pentagramm.jpg',
    info: 'Diese Legung nutzt das alte Symbol des Pentagramms und bietet eine spirituelle und umfassende Sichtweise auf eine Situation.',
    component: <PentagrammLegung />
  },
  {
    title: 'Pyramiden-Legung',
    image: '/images/pyramiden.jpg',
    info: 'Diese Legung verwendet eine Pyramidenform, um die Grundlage, die aktuelle Situation und die zukünftigen Entwicklungen zu analysieren.',
    component: <PyramidenLegung />
  },
  {
    title: '21-Karten-Legung (Große Tafel)',
    image: '/images/21karten.jpg',
    info: 'Diese Legung verwendet 21 Karten, um eine umfassende und detaillierte Analyse einer Situation zu bieten.',
    component: <GrosseTafel />
  },
  {
    title: 'Sieben-Karten-Hufeisen-Legung',
    image: '/images/hufeisen.jpg',
    info: 'Diese Legung wird verwendet, um die Entwicklung eines Ereignisses oder einer Situation zu analysieren.',
    component: <HufeisenLegung />
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
      {/* Die PythagoreanNumerology-Komponente wird hier hinzugefügt */}
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
    </div>
  );
}

export default App;
