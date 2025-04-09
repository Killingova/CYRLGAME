// src/components/HeroBereich.jsx

import React, { useEffect, useState } from "react";

const welten = [
  " der Schicksalsfäden",
  " des Seelenbaums",
  " der Chakra-Energie",
  " der kosmischen Weisheit",
  " der Herzensverbindungen",
  " des magischen Ursprungs",
  " der Elementarenergie",
  " der verborgenen Pfade",
  " der Weite Erkenntnis"
];

const HeroBereich = () => {
  const [zufallsWelt, setZufallsWelt] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * welten.length);
    setZufallsWelt(welten[randomIndex]);
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#DCDEF2] to-[#D9A384] text-[#260101] py-16 px-6 text-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10">
        {/* Avatar-Bereich */}
        <div className="w-40 h-40 rounded-full border-4 border-[#8C5A67] overflow-hidden shadow-xl mx-auto md:mx-0">
          <img
            src={`${import.meta.env.BASE_URL}kristin-avatar.jpg`}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Textbereich */}
        <div className="flex flex-col items-center space-y-4 max-w-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg leading-tight">
            Willkommen in der Welt<br />
            <span className="text-[#8C5A67]">{zufallsWelt}</span>
          </h1>
          <p className="text-lg">
            Erkunde die Tiefen moderner Erkenntnisse und lass dich inspirieren.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBereich;
