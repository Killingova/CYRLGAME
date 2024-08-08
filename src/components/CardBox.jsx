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


// Definiere alle Kartensets mit Namen und Kartenanzahl
const cardSets = [
  { name: "Tarotkarten", cards: tarotkarten },
  { name: "Lenormandkarten", cards: lenormandkarten },
  { name: "Engelkarten", cards: engelkarten },
  { name: "Krafttierorakel", cards: krafttierkarten},
  { name: "Göttinnenorakel", cards: new Array(44) },
  { name: "Runenkarten", cards:runenkarten},
  { name: "Heilsteinorakel", cards: heilsteine},
  { name: "Numerologiekarten", cards: new Array(44) },
  { name: "Pflanzen- oder Kräuterorakel", cards: new Array(44) },
  { name: "Selbsterkenntniskarten", cards: selbsterkenntnis},
  { name: "Lebensfreudekarten", cards: new Array(40) },
  { name: "Dankbarkeitsorakel", cards: new Array(55) },
  { name: "Prophezeiungskarten", cards: new Array(44) },
  { name: "Zwillingsflammenkarten", cards: zwillingsflammen },
  { name: "Russisches Zigeuner-Orakel", cards: new Array(25) },
  { name: "Kalat-Karten", cards: new Array(52) },
  { name: "Moonology Oracle Cards", cards: new Array(44) },
  { name: "Sacred Soulmates Orakeldeck", cards: new Array(53) },
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
