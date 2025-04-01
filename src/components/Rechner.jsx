import React, { useState } from "react";

const BruchRechner = () => {
  const [menge, setMenge] = useState("");
  const [einheit, setEinheit] = useState("ml");
  const [bruch, setBruch] = useState("1/4");

  const brueche = ["1/8", "1/4", "1/3", "1/2", "2/3", "3/4", "7/8"];

  const parseBruch = (b) => {
    const [zaehler, nenner] = b.split("/").map(Number);
    return zaehler / nenner;
  };

  const faktor = parseBruch(bruch);
  const teilmenge = menge ? (menge * faktor).toFixed(2) : null;
  const prozent = menge ? (faktor * 100).toFixed(1) : null;

  return (
    <section className="w-full bg-[#1F4C73] py-12 px-4 text-[#F2CA50]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6">
          Rechner für Rezepte
        </h2>

        <div className="bg-[#1F4C73] border border-[#F2CA50]/30 rounded-xl p-6 shadow-md text-stone-100">
          {/* Menge */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">Gesamtmenge:</label>
            <div className="flex gap-2">
              <input
                type="number"
                value={menge}
                onChange={(e) => setMenge(e.target.value)}
                placeholder="z. B. 1000"
                min="0"
                className="w-full px-3 py-2 rounded bg-[#1F4C73] border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#F2CA50]"
              />
              <select
                value={einheit}
                onChange={(e) => setEinheit(e.target.value)}
                className="border rounded px-3 py-2 bg-[#1F4C73] text-stone-100 border-stone-200"
              >
                <option>ml</option>
                <option>g</option>
                <option>Stk</option>
              </select>
            </div>
          </div>

          {/* Bruch */}
          <div className="mb-6">
            <label className="block font-semibold mb-1">Bruchteil:</label>
            <select
              value={bruch}
              onChange={(e) => setBruch(e.target.value)}
              className="w-full px-3 py-2 rounded bg-[#1F4C73] border border-stone-200 text-stone-100"
            >
              {brueche.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* Ergebnis */}
          {menge && (
            <div className="bg-[#F2CA50]/20 p-4 rounded-md text-center">
              <p className="text-lg font-medium">
                {bruch} von {menge} {einheit} =
              </p>
              <p className="text-2xl font-bold text-[#F2CA50] mt-2">
                {teilmenge} {einheit}
              </p>
              <p className="text-sm mt-1 text-stone-200">
                ({prozent} % der Gesamtmenge)
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BruchRechner;
