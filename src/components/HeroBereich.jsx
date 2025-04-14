import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

// Assets
import avatar from "../assets/logo/kristin-avatar.jpg";
import wallpaperKorn from "../assets/logo/Wallpaper169B.png";   // Desktop-Hintergrund (16:9)
import wallpaper57 from "../assets/logo/Wallpaper57.png";     // Mobile-Hintergrund (5:7)

// Legungs-Komponenten
import KeltischesKreuz from "../legungen/KeltischesKreuz";
import LebensbaumLegung from "../legungen/LebensbaumLegung";
import AstrologischeLegung from "../legungen/AstrologischeLegung";
import ChakraLegung from "../legungen/ChakraLegung";
import BeziehungsKompass from "../legungen/BeziehungsKompass";
import PentagrammLegung from "../legungen/PentagrammLegung";
import PyramidenLegung from "../legungen/PyramidenLegung";
import GrosseTafel from "../legungen/GrosseTafel";
import HufeisenLegung from "../legungen/HufeisenLegung";

// Beispiel-Bilder (nicht zwingend genutzt für Hintergrund)
import chakralegung from "../assets/images/chakralegung.jpg";
import keltischeskreuz from "../assets/images/keltischeskreuz.jpg";
import astrologische from "../assets/images/astrologische.jpg";
import hufeisen from "../assets/images/hufeisen.jpg";
import pyramiden from "../assets/images/pyramiden.jpg";
import kompass from "../assets/images/kompass.jpg";
import pentagramm from "../assets/images/pentagramm.jpg";
import lebensbaum from "../assets/images/lebensbaum.jpg";
import _21karten from "../assets/images/21karten.jpg";

// Zufallswelten
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
  // State: zufällige Welt
  const [zufallsWelt, setZufallsWelt] = useState(null);

  // State: Hintergrund-Bild & Style
  const [bgImage, setBgImage] = useState(wallpaperKorn);
  const [bgImageStyle, setBgImageStyle] = useState({});

  // 1) Welt auswählen
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * worldsForHero.length);
    setZufallsWelt(worldsForHero[randomIndex]);
  }, []);

  // 2) Responsives Hintergrund
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        // Mobile
        setBgImage(wallpaper57);
        setBgImageStyle({
          objectFit: "cover",
          backgroundPosition: "center",
          transition: "transform 0.5s",
          transform: "scale(1.1)",
        });
      } else {
        // Desktop
        setBgImage(wallpaperKorn);
        setBgImageStyle({
          objectFit: "contain",
          backgroundPosition: "center",
        });
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Falls noch keine Welt gewählt -> null
  if (!zufallsWelt) return null;

  // Button-Klick
  const handleTaucheRein = () => {
    if (onLegungClick) {
      onLegungClick(zufallsWelt.component);
    }
  };

  // Framer-Motion Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };
  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  // JSX
  return (
    <Parallax bgImage={bgImage} bgImageStyle={bgImageStyle} strength={300}>
      <div className="relative">
        {/* Leicht dunkles Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <motion.section
          className="relative text-[#260101] py-16 px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10">
            
            {/* Avatar-Animation */}
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

            {/* Text-Bereich */}
            <motion.div
              className="flex flex-col items-center space-y-4 max-w-2xl text-center"
              variants={containerVariants}
            >
              {/* Gradient-Text */}
              <h1
                className="
                  text-4xl md:text-5xl 
                  font-extrabold 
                  drop-shadow-lg 
                  leading-tight
                  bg-clip-text 
                  text-transparent 
                  bg-gradient-to-r
                  from-[#DCDEF2] 
                  to-[#D9A384]
                "
              >
                Willkommen in der Welt
                <br />
                <span className="text-[#8C5A67]">{zufallsWelt.name}</span>
              </h1>

              <p className="text-lg text-white">
                Erkunde die Tiefen moderner Erkenntnisse und lass dich inspirieren.
              </p>

              {/* Button mit Farbverlauf */}
              <motion.button
                onClick={handleTaucheRein}
                className="
                  bg-gradient-to-r
                  from-[#8C5A67]
                  to-[#A67C7C]
                  text-white
                  py-3
                  px-6
                  mt-4
                  rounded-lg
                  font-semibold
                  transition
                  duration-300
                  hover:brightness-110
                "
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Tauche ein!
              </motion.button>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </Parallax>
  );
}

export default HeroBereich;
