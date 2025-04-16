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

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * worldsForHero.length);
    setZufallsWelt(worldsForHero[randomIndex]);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(false);
    }, 5500);
    return () => clearTimeout(timer);
  }, []);

  if (!zufallsWelt) return null;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video oder Wallpaper */}
      {showVideo ? (
        <iframe
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          src="https://www.youtube.com/embed/6w6aIJ22Kow?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&playsinline=1"
          title="Intro Video"
          frameBorder="0"
          allow="autoplay; fullscreen; encrypted-media"
          allowFullScreen
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
  className="relative z-10 flex flex-col justify-start md:justify-center items-center md:items-end w-full h-full px-6 text-center md:text-right md:pr-20"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }}
>
  <div className="w-full md:w-auto md:max-w-lg mt-12 md:mt-0">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold drop-shadow-lg leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#DCDEF2] to-[#D9A384]">
      Willkommen in der Welt
      <br />
      <span className="text-[#8C5A67]">{zufallsWelt.name}</span>
    </h1>
    <p className="text-lg text-white mt-4">
      Erkunde die Tiefen moderner Erkenntnisse und lass dich inspirieren.
    </p>

    {/* Desktop-Button */}
    <motion.button
      onClick={() => onLegungClick(zufallsWelt.component)}
      className="hidden md:inline-block mt-8 bg-gradient-to-r from-[#8C5A67] to-[#A67C7C] text-white py-3 px-6 rounded-lg font-semibold transition duration-300 hover:brightness-110"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Tauche ein!
    </motion.button>
  </div>

  {/* Mobiler Button fixiert unten rechts */}
  <motion.button
    onClick={() => onLegungClick(zufallsWelt.component)}
    className="md:hidden fixed bottom-6 right-6 bg-gradient-to-r from-[#8C5A67] to-[#A67C7C] text-white py-3 px-6 rounded-full shadow-lg font-semibold transition duration-300 hover:brightness-110"
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
