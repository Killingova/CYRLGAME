import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

// Lucide Icons-Beispiele: Importieren verschiedener Icons, die später als visuelle Repräsentation für die einzelnen Kartensets verwendet werden.
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

// Importieren der Kartendaten aus verschiedenen Dateien
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

// Debug-Ausgabe in der Konsole, um zu überprüfen, ob die Daten erfolgreich importiert wurden.
console.debug("CardBox: Kartendaten importiert.");

// Definieren des Kartensets als Array von Objekten. Jedes Objekt enthält den Namen des Kartensets und die zugehörigen Karten.
// Somit können mehrere Kartensets dynamisch in der UI dargestellt werden.
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

// Mapping von Kartenset-Namen zu entsprechenden Icons. Falls für einen Namen kein Icon definiert ist,
// wird als Fallback das "Star"-Icon verwendet.
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

/**
 * CardBox-Komponente
 * -------------------
 * Zeigt ein scrollbares Grid aller Kartensets an.
 * Beim Klick auf ein Kartenset wird die onCardSetSelect-Funktion aufgerufen und die entsprechenden Karten übergeben.
 */
function CardBox({ onCardSetSelect }) {
  // Event-Handler: Wird ausgeführt, wenn ein Kartenset angeklickt wird.
  // Hier wird der Name des Sets geloggt und die onCardSetSelect-Funktion mit den Karten-Daten aufgerufen.
  const handleClick = (setObj) => {
    console.debug("Ausgewähltes Kartenset:", setObj.name);
    if (onCardSetSelect) onCardSetSelect(setObj.cards);
  };

  return (
    <div className="relative">
      {/* Container für den scrollbaren Bereich:
          - max-h-[540px]: Beschränkt die maximale Höhe auf ca. 3 Reihen (~180px pro Reihe)
          - overflow-y-auto: Ermöglicht vertikales Scrollen, falls der Inhalt größer als die max-Höhe ist
          - p-4: Innenabstand
          - bg-gradient-to-b von einem hellen zu einem wärmeren Farbton
          - rounded-md, border und shadow-inner: Moderne, abgerundete Kanten mit Rahmen und innerer Schattierung */}
      <div
        className="
          max-h-[240px]
          overflow-y-auto
          p-4
          bg-gradient-to-b from-[#DCDEF2] to-[#D9A384]
          rounded-md
          border border-[#A67C7C]
          shadow-inner
          cardbox-scroll
        "
      >
        {/* Grid: 
            - Auf mobilen Geräten: 1 Spalte
            - Auf kleinen Bildschirmen (sm): 2 Spalten
            - Auf mittleren und größeren Bildschirmen (md+): 3 Spalten 
            - gap-3: Abstand zwischen den einzelnen Karten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {cardSets.map(({ name, cards }) => {
            // Wähle das passende Icon aus dem Mapping oder verwende als Fallback das Star-Icon.
            const Icon = iconMap[name] || Star;
            return (
              <motion.div
                key={name}
                // Framer-Motion Animation: Vergrößert das Element leicht beim Hovern.
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
                {/* Darstellung des Icons mit definierter Größe */}
                <Icon size={24} />
                <div>
                  {/* Titel des Kartensets */}
                  <h2 className="font-semibold text-sm">{name}</h2>
                  {/* Anzeige der Anzahl der Karten */}
                  <p className="text-xs">{cards.length} Karten</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Custom Scrollbar für den Karten-Container:
          Mithilfe von Tailwind-Klassen und zusätzlichen CSS-Regeln wird ein moderner und schmaler Scrollbalken realisiert.
          Hier wurde die Breite auf 4px reduziert, um den modernen Look zu unterstützen. */}
      <style jsx>{`
        /* Für WebKit-basierte Browser (Chrome, Safari) */
        .cardbox-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .cardbox-scroll::-webkit-scrollbar-track {
          background: #dcdef2;
        }
        .cardbox-scroll::-webkit-scrollbar-thumb {
          background-color: #8c5a67;
          border-radius: 4px;
          border: 1px solid #a67c7c;
        }
        /* Für Firefox */
        .cardbox-scroll {
          scrollbar-width: thin;
          scrollbar-color: #8c5a67 #dcdef2;
        }
      `}</style>
    </div>
  );
}

// PropTypes definieren die erwarteten Prop-Typen für diese Komponente.
// Hier wird erwartet, dass onCardSetSelect eine Funktion ist, die als Pflichtangabe definiert ist.
CardBox.propTypes = {
  onCardSetSelect: PropTypes.func.isRequired,
};

export default CardBox;
