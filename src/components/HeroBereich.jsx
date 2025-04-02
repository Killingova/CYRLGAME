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
    <section className="bg-[#1F4C73] text-white py-16 px-6 text-center">
      <div className="flex flex-col md:flex-row md:items-center md:justify-center md:text-left space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-40 h-40 rounded-full border-4 border-[#F2921D] overflow-hidden shadow-lg mx-auto md:mx-0">
          <img
            src="/kristin-avatar.jpg"
            alt="Issi la Crisis"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col items-center md:items-start space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-950 drop-shadow-lg leading-tight">
            Willkommen in der Welt
            <br />
            <span className="text-[#F2CA50]">{zufallsWelt}</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-950 max-w-xl">
            Ich bin <span className="text-[#F2921D] font-semibold">Isis Filazma</span> – begleite mich auf 
            einer magischen Reise, die weit über den alltäglichen Pfad hinausführt. In dieser 
            Welt der Paradoxe entfaltet sich ein Universum aus Intuition, Inspiration und 
            innerer Stärke, in dem jede Begegnung, jedes Symbol und jede Erfahrung ein Tor zu 
            tieferen Erkenntnissen darstellt. Lass uns gemeinsam die verborgenen Geheimnisse 
            erkunden – jene alten Mythen, die Energien der Chakren, die Weisheit der Sterne 
            und die uralten Wege der Transformation, die unser Bewusstsein erweitern und uns 
            zu unserem wahren Selbst führen. Tauche ein in die Magie, die in jedem Augenblick 
            schlummert, und entdecke, wie auch du durch deine eigene innere Kraft zu einem 
            Leuchtfeuer der Weisheit werden kannst. 🌙✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBereich;
