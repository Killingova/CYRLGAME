import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  Sparkles,
  Briefcase,
  User,
  Star,
  Leaf,
  Flame,
  Gem,
  Circle,
  Sprout,
  Eye,
  Smile,
  Heart,
  Cloud,
  Mountain,
  BookOpen,
  Moon,
  Layers,
} from "lucide-react";

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

const iconMap = {
  Tarot: Sparkles,
  Lenormand: Briefcase,
  Engeln: User,
  Tiere: Leaf,
  Runen: Flame,
  Steine: Gem,
  Numerologiekarten: Circle,
  Kräuterorakel: Sprout,
  Selbsterkenntnis: Eye,
  Lebensfreudekarten: Smile,
  "000Dankbarkeitsorakel": Heart,
  "Lucid Daydreams": Cloud,
  Zwillingsflamme: Flame,
  "Pfad der Erleuchtung": Mountain,
  Weisheitslehre: BookOpen,
  "MoonOracle Cards": Moon,
  "Sacred Orakeldeck": Layers,
};

function CardBox({ onCardSetSelect }) {
  const handleClick = (setObj) => {
    console.debug("Ausgewähltes Kartenset:", setObj.name);
    if (onCardSetSelect) onCardSetSelect(setObj.cards);
  };

  return (
    <div className="relative">
      <div
        className="
          max-h-[240px]
          overflow-y-auto
          p-4
          bg-gradient-to-b from-[#DCDEF2] to-[#D9A384]
          rounded-md
          border border-[#A67C7C]
          shadow-inner
          scrollbar-thin-custom
        "
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {cardSets.map(({ name, cards }) => {
            const Icon = iconMap[name] || Star;
            return (
              <motion.div
                key={name}
                whileHover={{ scale: 1.04 }}
                className="
                  flex items-center gap-2
                  p-3
                  rounded-md
                  shadow
                  bg-[#8C5A67]/20
                  hover:bg-[#8C5A67]/50
                  text-[#260101]
                  cursor-pointer
                  transition
                "
                onClick={() => handleClick({ name, cards })}
              >
                <Icon size={24} />
                <div>
                  <h2 className="font-semibold text-sm">{name}</h2>
                  <p className="text-xs">{cards.length} Karten</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

CardBox.propTypes = {
  onCardSetSelect: PropTypes.func.isRequired,
};

export default CardBox;
