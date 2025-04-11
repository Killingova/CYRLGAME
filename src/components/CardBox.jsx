import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// Importiere deine Kartensets und gib eine Debug-Meldung aus
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
import newworldCards from '../data/newworldCards';

// Debug-Meldung beim Import
console.debug("Daten-Dateien wurden erfolgreich importiert.");

const cardSets = [
  { name: "Tarot", cards: tarotkarten },
  { name: "Lenormand", cards: lenormandkarten },
  { name: "Engeln", cards: engelkarten },
  { name: "Tiere", cards: krafttierkarten },
  { name: "Nymphen", cards: nymphen },
  { name: "Runen", cards: runenkarten },
  { name: "Steine", cards: heilsteine },
  { name: "Numerologiekarten", cards: timecards },
  { name: "Kräuterorakel", cards: plants },
  { name: "Selbsterkenntnis", cards: selbsterkenntnis },
  { name: "Lebensfreudekarten", cards: lebensfreudekarten },
  { name: "000Dankbarkeitsorakel", cards: new Array(55) },
  { name: "Lucid Daydreams", cards: luciddaydreams },
  { name: "Zwillingsflamme", cards: zwillingsflammen },
  { name: "Pfad der Erleuchtung", cards: freimaurerei },
  { name: "Weisheitslehre", cards: newworldCards },
  { name: "MoonOracle Cards", cards: moonOracleCards },
  { name: "Sacred Orakeldeck", cards: storytime },
];

function CardBox({ onCardSetSelect }) {
  const handleCardSetClick = (set) => {
    // Debug-Meldung beim Klick
    console.debug("Ausgewähltes Kartenset:", set.name);
    onCardSetSelect(set.cards);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
      {cardSets.map((set) => (
        <motion.div
          key={set.name}
          whileHover={{ scale: 1.05 }}
          className="border rounded-lg p-4 shadow-lg cursor-pointer bg-white"
          onClick={() => handleCardSetClick(set)}
        >
          <h2 className="text-2xl font-bold mt-4">{set.name}</h2>
          <p className="mt-2 text-gray-500">{set.cards.length} Karten</p>
        </motion.div>
      ))}
    </div>
  );
}

CardBox.propTypes = {
  onCardSetSelect: PropTypes.func.isRequired,
};

export default CardBox;
