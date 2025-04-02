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
    <section className="bg-gradient-to-b from-[#1F4C73] to-[#15315B] text-white py-16 px-6 text-center">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10">
    {/* Avatar-Bereich */}
    <div className="w-40 h-40 rounded-full border-4 border-[#F2921D] overflow-hidden shadow-xl mx-auto md:mx-0">
      <img
        src="/kristin-avatar.jpg"
        alt="Isis Filazma - Avatar"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Textbereich */}
    <div className="flex flex-col items-center md:items-start space-y-4 max-w-2xl">
      <h1 className="text-4xl text-[#F2921D] md:text-5xl font-extrabold drop-shadow-lg leading-tight">
        Willkommen in der Welt<br />
        <span className="text-[#F2CA50]">{zufallsWelt}</span>
      </h1>

    </div>
  </div>
</section>

  );
};

export default HeroBereich;
