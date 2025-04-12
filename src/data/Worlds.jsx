import React from 'react';

// Importiere direkt deine Legungs-Komponenten
import KeltischesKreuz from '../legungen/KeltischesKreuz';
import LebensbaumLegung from '../legungen/LebensbaumLegung';
import AstrologischeLegung from '../legungen/AstrologischeLegung';
import ChakraLegung from '../legungen/ChakraLegung';
import BeziehungsKompass from '../legungen/BeziehungsKompass';
import PentagrammLegung from '../legungen/PentagrammLegung';
import PyramidenLegung from '../legungen/PyramidenLegung';
import GrosseTafel from '../legungen/GrosseTafel';
import HufeisenLegung from '../legungen/HufeisenLegung';

const worlds = [
  {
    name: "der Schicksalsfäden",
    component: KeltischesKreuz
  },
  {
    name: "des Seelenbaums",
    component: LebensbaumLegung
  },
  {
    name: "der Chakra-Energie",
    component: ChakraLegung
  },
  {
    name: "der kosmischen Weisheit",
    component: AstrologischeLegung
  },
  {
    name: "der Herzensverbindungen",
    component: BeziehungsKompass
  },
  {
    name: "des magischen Ursprungs",
    component: PyramidenLegung
  },
  {
    name: "der Elementarenergie",
    component: PentagrammLegung
  },
  {
    name: "der verborgenen Pfade",
    component: HufeisenLegung
  },
  {
    name: "der Weite Erkenntnis",
    component: GrosseTafel
  }
];

// Wir könnten optional eine React-Komponente definieren,
// falls du das in einer Seite anzeigen willst.
function WorldsList() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Alle Welten</h2>
      <ul className="list-disc list-inside">
        {worlds.map((welt, index) => (
          <li key={index} className="mb-1">
            {welt.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default worlds;

// OPTIONAL: Benutze 'export { worlds, WorldsList };'
// wenn du beides verfügbar machen willst:
// export { worlds, WorldsList };
