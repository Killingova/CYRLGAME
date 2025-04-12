// src/components/HeroBereich.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// Import des Parallax-Containers von react-parallax
import { Parallax } from "react-parallax";

// Assets
import avatar from "../assets/logo/kristin-avatar.jpg";
// Bilder der verschiedenen Welten
import chakralegung from "../assets/images/chakralegung.jpg";
import keltischeskreuz from "../assets/images/keltischeskreuz.jpg";
import astrologische from "../assets/images/astrologische.jpg";
import hufeisen from "../assets/images/hufeisen.jpg";
import pyramiden from "../assets/images/pyramiden.jpg";
import kompass from "../assets/images/kompass.jpg";
import pentagramm from "../assets/images/pentagramm.jpg";
import lebensbaum from "../assets/images/lebensbaum.jpg";
import _21karten from "../assets/images/21karten.jpg";

// Direkt importierte Legungen (Komponenten)
import KeltischesKreuz from "../legungen/KeltischesKreuz";
import LebensbaumLegung from "../legungen/LebensbaumLegung";
import AstrologischeLegung from "../legungen/AstrologischeLegung";
import ChakraLegung from "../legungen/ChakraLegung";
import BeziehungsKompass from "../legungen/BeziehungsKompass";
import PentagrammLegung from "../legungen/PentagrammLegung";
import PyramidenLegung from "../legungen/PyramidenLegung";
import GrosseTafel from "../legungen/GrosseTafel";
import HufeisenLegung from "../legungen/HufeisenLegung";

// Array mit den Welten-Objekten. Hier werden Name, Bild und die zugehörige Legungs-Komponente gespeichert.
const worldsForHero = [
  {
    name: "der Schicksalsfäden",
    image: keltischeskreuz,
    component: KeltischesKreuz,
  },
  {
    name: "des Seelenbaums",
    image: lebensbaum,
    component: LebensbaumLegung,
  },
  {
    name: "der Chakra-Energie",
    image: chakralegung,
    component: ChakraLegung,
  },
  {
    name: "der kosmischen Weisheit",
    image: astrologische,
    component: AstrologischeLegung,
  },
  {
    name: "der Herzensverbindungen",
    image: kompass,
    component: BeziehungsKompass,
  },
  {
    name: "des magischen Ursprungs",
    image: pyramiden,
    component: PyramidenLegung,
  },
  {
    name: "der Elementarenergie",
    image: pentagramm,
    component: PentagrammLegung,
  },
  {
    name: "der verborgenen Pfade",
    image: hufeisen,
    component: HufeisenLegung,
  },
  {
    name: "der Weite Erkenntnis",
    image: _21karten,
    component: GrosseTafel,
  },
];

function HeroBereich({ onLegungClick }) {
  // State für die zufällig ausgewählte Welt
  const [zufallsWelt, setZufallsWelt] = useState(null);

  // Beim ersten Rendern eine zufällige Welt auswählen
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * worldsForHero.length);
    console.debug("Zufällig ausgewählter Index:", randomIndex);
    setZufallsWelt(worldsForHero[randomIndex]);
  }, []);

  // Debug-Ausgabe, um den aktuellen Zustand anzuzeigen
  useEffect(() => {
    if (zufallsWelt) {
      console.debug("Zufallswelt gesetzt:", zufallsWelt);
    }
  }, [zufallsWelt]);

  // Callback für den Button "Tauche rein!"
  const handleTaucheRein = () => {
    console.debug("Button 'Tauche rein!' geklickt");
    if (zufallsWelt && onLegungClick) {
      onLegungClick(zufallsWelt.component);
    }
  };

  // Falls noch keine Welt ausgewählt wurde, nichts rendern
  if (!zufallsWelt) return null;

  // Definierte Animationen (Variants) für Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    // Verwendung des Parallax-Containers von react-parallax
    // Die Prop `strength` definiert die Intensität des Parallax-Effekts.
    <Parallax bgImage={zufallsWelt.image} strength={300}>
      {/* 
        Hier wird ein Overlay mit Transparenz eingefügt, um die Lesbarkeit
        des Textes vor dem Hintergrundbild zu verbessern.
      */}
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <motion.section
          className="relative text-[#260101] py-16 px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10">
            {/* Avatar-Bild mit Animation */}
            <motion.div
              className="w-40 h-40 rounded-full border-4 border-[#8C5A67] overflow-hidden shadow-xl mx-auto md:mx-0"
              variants={imageVariants}
            >
              <img
                src={avatar}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text-Bereich, der den Namen der Welt, einen kurzen Text und einen Button enthält */}
            <motion.div
              className="flex flex-col items-center space-y-4 max-w-2xl text-center"
              variants={containerVariants}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg leading-tight">
                Willkommen in der Welt
                <br />
                <span className="text-[#8C5A67]">{zufallsWelt.name}</span>
              </h1>
              <p className="text-lg text-white">
                Erkunde die Tiefen moderner Erkenntnisse und lass dich inspirieren.
              </p>
              <motion.button
                onClick={handleTaucheRein}
                className="bg-[#8C5A67] text-white py-3 px-6 mt-4 rounded-lg font-semibold transition hover:bg-[#A67C7C]"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Tauche rein!
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </Parallax>
  );
}

export default HeroBereich;
