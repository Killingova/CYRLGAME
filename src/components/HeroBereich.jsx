import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Assets
import wallpaperKorn from "../assets/logo/wallpaperR.png";

// Legungen (deine bleiben)
import KeltischesKreuz from "../legungen/KeltischesKreuz";
import LebensbaumLegung from "../legungen/LebensbaumLegung";
import AstrologischeLegung from "../legungen/AstrologischeLegung";
import ChakraLegung from "../legungen/ChakraLegung";
import BeziehungsKompass from "../legungen/BeziehungsKompass";
import PentagrammLegung from "../legungen/PentagrammLegung";
import PyramidenLegung from "../legungen/PyramidenLegung";
import GrosseTafel from "../legungen/GrosseTafel";
import HufeisenLegung from "../legungen/HufeisenLegung";

// Zufallswelten
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
  const [showVideo, setShowVideo] = useState(true); // Start mit Video

  // Welt zufällig setzen
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * worldsForHero.length);
    setZufallsWelt(worldsForHero[randomIndex]);
  }, []);

  // Nach 30 Sekunden auf Bild wechseln
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(false);
    }, 5500); // 30 Sekunden
    return () => clearTimeout(timer);
  }, []);

  if (!zufallsWelt) return null;

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Video oder Wallpaper */}
      {showVideo ? (
        <iframe
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          src="https://www.youtube.com/embed/6w6aIJ22Kow?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0"
          title="Intro Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
        ></iframe>
      ) : (
        <img
          src={wallpaperKorn}
          alt="Hintergrund"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Inhalt */}
      <motion.section
        className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
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
          onClick={() => onLegungClick(zufallsWelt.component)}
          className="mt-8 bg-gradient-to-r from-[#8C5A67] to-[#A67C7C] text-white py-3 px-6 rounded-lg font-semibold transition duration-300 hover:brightness-110"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Tauche ein!
        </motion.button>
      </motion.section>
    </div>
  );
};

export default HeroBereich;
