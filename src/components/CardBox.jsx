import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

// Lucide-Icons (Beispiel)
import { Sparkles, Briefcase, User, Star, Leaf, Heart, Moon, Flame } from "lucide-react";

// Import deiner Datendateien
import tarotkarten from "../data/tarot";
import lenormandkarten from "../data/lenormand";
import engelkarten from "../data/engelkarten";
import krafttierkarten from "../data/krafttierkarten";
import selbsterkenntnis from "../data/selbsterkenntnis";
import runenkarten from "../data/runenkarten";
import zwillingsflammen from "../data/zwillingsflammen";
import heilsteine from "../data/heilsteine";
import nymphen from "../data/nymphen";
import freimaurerei from "../data/freimaurerei";
import lebensfreudekarten from "../data/lebensfreudekarten";
import luciddaydreams from "../data/luciddaydreams";
import plants from "../data/plants";
import moonOracleCards from "../data/moonOracleCards";
import timecards from "../data/timecards";
import storytime from "../data/storytime";
import newworldCards from "../data/newworldCards";

// Debug-Log
console.debug("CardBox-Daten erfolgreich importiert.");

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

// Ordne Sets Icons zu, anderenfalls Star
const iconMap = {
  Tarot: Sparkles,
  Lenormand: Briefcase,
  Engeln: User,
  Tiere: Leaf,
  "Weisheitslehre": Flame,
  "MoonOracle Cards": Moon,
  "Zwillingsflamme": Heart,
  // usw...
};

function CardBox({ onCardSetSelect }) {
  const handleClick = (setObj) => {
    console.debug("Gewähltes Kartenset:", setObj.name);
    onCardSetSelect(setObj.cards);
  };

  return (
    <div
      // Hintergrund: Farbverlauf, luftig, Scroll Container
      className="
        bg-gradient-to-b from-[#DCDEF2] to-[#D9A384] 
        p-3 
        rounded-md 
        shadow-inner 
        border border-[#A67C7C]
        max-h-[450px] 
        overflow-y-auto
      "
    >
      <div 
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          gap-3
        "
      >
        {cardSets.map(({ name, cards }) => {
          const LucideIcon = iconMap[name] || Star; // Fallback Icon Star
          return (
            <motion.div
              key={name}
              whileHover={{ scale: 1.04 }}
              className="
                flex 
                items-center 
                gap-2 
                p-3 
                rounded-md 
                shadow 
                bg-[#8C5A67]/30
                hover:bg-[#8C5A67]/50 
                text-[#260101]
                cursor-pointer 
                transition
              "
              onClick={() => handleClick({ name, cards })}
            >
              <LucideIcon size={24} />
              <div>
                <h2 className="font-semibold text-sm">
                  {name}
                </h2>
                <p className="text-xs">
                  {cards.length} Karten
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

CardBox.propTypes = {
  onCardSetSelect: PropTypes.func.isRequired,
};

export default CardBox;
