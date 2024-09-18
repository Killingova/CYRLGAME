import React from 'react';

// Importiere deine Kartensets
import tarotkarten from '../data/tarot';
import lenormandkarten from '../data/lenormand';
import engelkarten from '../data/engelkarten';
import krafttierkarten from '../data/krafttierkarten';
import selbsterkenntnis from '../data/selbsterkenntnis';
import runenkarten from '../data/runenkarten';
import zwillingsflammen from '../data/zwillingsflammen';
import heilsteine from '../data/heilsteine';
import nymphen from '../data/nymphen';
import freimaurerei from '../data/freimaurerei';
import lebensfreudekarten from '../data/lebensfreudekarten';
import luciddaydreams from '../data/luciddaydreams';
import plants from '../data/plants';
import moonOracleCards from '../data/moonOracleCards';
import timecards from '../data/timecards';
import storytime from '../data/storytime';




// Definiere alle Kartensets mit Namen und Kartenanzahl
const cardSets = [
  { name: "Tarot", cards: tarotkarten },
  { name: "Lenormand", cards: lenormandkarten },
  { name: "Engeln", cards: engelkarten },
  { name: "Tiere", cards: krafttierkarten},

  { name: "Nymphen", cards: nymphen },

  { name: "Runen", cards:runenkarten},
  { name: "Steine", cards: heilsteine},

  { name: "Numerologiekarten", cards: timecards },
  { name: "Kräuterorakel", cards: plants },

  { name: "Selbsterkenntnis", cards: selbsterkenntnis},

  { name: "Lebensfreudekarten", cards: lebensfreudekarten },
  { name: "000Dankbarkeitsorakel", cards: new Array(55) },
  { name: "Lucid Daydreams", cards: luciddaydreams },

  { name: "Zwillingsflamme", cards: zwillingsflammen },
  
  { name: "Pfad der Erleuchtung", cards: freimaurerei},
  { name: "000Kalat-Karten", cards: new Array(52) },
  { name: "MoonOracle Cards", cards: moonOracleCards },
  { name: "Sacred Orakeldeck", cards: storytime },
];

// Funktionale Komponente CardBox, die ein Callback-Event onCardSetSelect als Prop erhält
function CardBox({ onCardSetSelect }) {
  return (
    // Container für die Kartensets, der in einem Grid-Layout angeordnet wird
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
      {/* Map-Funktion, um jedes Kartenset als eigenes Div-Element zu rendern */}
      {cardSets.map((set, index) => (
        <div 
          key={index} 
          className="border rounded-lg p-4 shadow-lg cursor-pointer" 
          onClick={() => onCardSetSelect(set.cards)} // Event-Handler für das Klicken auf ein Kartenset
        >
          {/* Name des Kartensets */}
          <h2 className="text-2xl font-bold mt-4">{set.name}</h2>
          {/* Anzahl der Karten im Set */}
          <p className="mt-2">{`${set.cards.length} Karten`}</p>
        </div>
      ))}
    </div>
  );
}

export default CardBox;
