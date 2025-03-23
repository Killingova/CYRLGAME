import React, { useEffect, useState } from "react";

const welten = [
  "Welt der Schicksalsfäden",
  "Welt des Seelenbaums",
  "Welt der Chakra-Energie",
  "Welt der kosmischen Weisheit",
  "Welt der Herzensverbindungen",
  "Welt des magischen Ursprungs",
  "Welt der Elementarenergie",
  "Welt der verborgenen Pfade",
  "Welt der Weite Erkenntnis"
];

const HeroBereich = () => {
  const [zufallsWelt, setZufallsWelt] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * welten.length);
    setZufallsWelt(welten[randomIndex]);
  }, []);

  return (
    <section className="bg-[#1F4C73]  text-white py-16 px-6 text-center">
      <div className="flex flex-col md:flex-row md:items-center md:justify-center md:text-left space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-40 h-40 rounded-full border-4 border-[#F2921D] overflow-hidden shadow-lg mx-auto md:mx-0">
          <img
            src="/kristin-avatar.jpg"
            alt="Issi la Crisis "
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col items-center md:items-start space-y-4">
          <h1 className="text-4xl text-stone-950 md:text-5xl font-extrabold drop-shadow-lg">
            Willkommen in der <span className="text-[#F2CA50]">{zufallsWelt}</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-950 max-w-xl">
            Ich bin <span className="text-[#F2921D] font-semibold">Isis Filazma</span> – begleite mich auf eine magische Reise voller Intuition, Inspiration & innerer Stärke. 🌙✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroBereich;
