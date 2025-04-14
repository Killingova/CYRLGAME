// src/components/HeroBereich.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Assets
import videoBackground from "../assets/logo/GlowM.mp4";
import wallpaperKorn from "../assets/logo/wallpaperR.png";

// Legungs-Komponenten (für zufällige Auswahl)
import KeltischesKreuz from "../legungen/KeltischesKreuz";
import LebensbaumLegung from "../legungen/LebensbaumLegung";
import AstrologischeLegung from "../legungen/AstrologischeLegung";
import ChakraLegung from "../legungen/ChakraLegung";
import BeziehungsKompass from "../legungen/BeziehungsKompass";
import PentagrammLegung from "../legungen/PentagrammLegung";
import PyramidenLegung from "../legungen/PyramidenLegung";
import GrosseTafel from "../legungen/GrosseTafel";
import HufeisenLegung from "../legungen/HufeisenLegung";

// Beispiel-Array für zufällige Welten
const worldsForHero = [
  { name: "der Schicksalsfäden", component: KeltischesKreuz },
  { name: "des Seelenbaums", component: LebensbaumLegung },
  { name: "der Chakra-Energie", component: ChakraLegung },
  { name: "der kosmischen Weisheit", component: AstrologischeLegung },
  { name: "der Herzensverbindungen", component: BeziehungsKompass },
  { name: "des magischen Ursprungs", component: PyramidenLegung },
  { name: "der Elementarenergie", component: PentagrammLegung },
  { name: "der verborgenen Pfade", component: HufeisenLegung },
  { name: "der Weiten Erkenntnis", component: GrosseTafel },
];

const HeroBereich = ({ onLegungClick }) => {
  const [zufallsWelt, setZufallsWelt] = useState(null);
  // State, ob das Video beendet ist (dann soll das Bild angezeigt werden)
  const [videoFinished, setVideoFinished] = useState(false);
  // Video-Referenz
  const videoRef = useRef(null);

  // Zufällige Welt beim ersten Rendern auswählen
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * worldsForHero.length);
    setZufallsWelt(worldsForHero[randomIndex]);
  }, []);

  // Falls noch keine Auswahl getroffen wurde, render nichts
  if (!zufallsWelt) return null;

  // Wenn das Video endet, setze den state, sodass das Bild als Background angezeigt wird
  const handleVideoEnd = () => {
    setVideoFinished(true);
  };

  // Beim Klick auf den CTA-Button wird die zugehörige Legungskomponente an den Parent weitergereicht
  const handleTaucheEin = () => {
    if (onLegungClick) onLegungClick(zufallsWelt.component);
  };

  // Framer Motion Animationen
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Hintergrund: Video (ohne Loop) oder Bild (16:9, responsiv) */}
      {!videoFinished ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          onEnded={handleVideoEnd}
          className="absolute top-0 left-0 w-full h-full"
          style={{ objectFit: "cover", objectPosition: "center" }}
        >
          <source src={videoBackground} type="video/mp4" />
          Dein Browser unterstützt kein HTML5-Video.
        </video>
      ) : (
        <img
          src={wallpaperKorn}
          alt="Hintergrund"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ objectPosition: "center" }}
        />
      )}

      {/* Dunkles Overlay für bessere Lesbarkeit */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Inhalt: Überschrift, Beschreibung und CTA-Button (ohne Avatar) */}
      <motion.section
        className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#DCDEF2] to-[#D9A384]">
          Willkommen in der Welt
          <br />
          <span className="text-[#8C5A67]">{zufallsWelt.name}</span>
        </h1>
        <p className="text-lg text-white mt-4">
          Erkunde die Tiefen moderner Erkenntnisse und lass dich inspirieren.
        </p>
        <motion.button
          onClick={handleTaucheEin}
          className="mt-8 bg-gradient-to-r from-[#8C5A67] to-[#A67C7C] text-white py-3 px-6 rounded-lg font-semibold transition duration-300 hover:brightness-110"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Tauche ein!
        </motion.button>
      </motion.section>
    </div>
  );
};

export default HeroBereich;
