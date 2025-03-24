import React, { useState } from "react";

const BruchRechner = () => {
  const [menge, setMenge] = useState("");
  const [einheit, setEinheit] = useState("ml");
  const [bruch, setBruch] = useState("1/4");

  const brueche = [
    "1/8", "1/4", "1/3", "1/2", "2/3", "3/4", "7/8"
  ];

  const parseBruch = (b) => {
    const [zaehler, nenner] = b.split("/").map(Number);
    return zaehler / nenner;
  };

  const faktor = parseBruch(bruch);
  const teilmenge = menge ? (menge * faktor).toFixed(2) : null;
  const prozent = menge ? (faktor * 100).toFixed(1) : null;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 mt-12 border border-[#1F4C73]/30">
      <h2 className="text-2xl font-bold text-[#1F4C73] mb-6 text-center">
        Teilmengen-Rechner
      </h2>

      {/* Eingabe Menge */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Gesamtmenge
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            value={menge}
            onChange={(e) => setMenge(e.target.value)}
            className="w-full border rounded px-3 py-2"
            min="0"
            placeholder="z. B. 1000"
          />
          <select
            value={einheit}
            onChange={(e) => setEinheit(e.target.value)}
            className="border rounded px-2 py-2 text-gray-700"
          >
            <option>ml</option>
            <option>g</option>
            <option>Stk</option>
            <option>EL</option>
            <option>TL</option>
          </select>
        </div>
      </div>

      {/* Auswahl Bruch */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Bruchteil auswählen
        </label>
        <select
          value={bruch}
          onChange={(e) => setBruch(e.target.value)}
          className="w-full border rounded px-3 py-2"
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
        <div className="text-center mt-4 bg-[#1F4C73]/5 p-4 rounded-xl">
          <p className="text-lg font-medium text-[#1F4C73]">
            🧾 {bruch} von {menge} {einheit} =
          </p>
          <p className="text-2xl font-bold text-[#1F4C73] mt-2">
            {teilmenge} {einheit}
          </p>
          <p className="text-sm text-gray-600 mt-1">
            ({prozent} % der Gesamtmenge)
          </p>
        </div>
      )}
    </div>
  );
};

export default BruchRechner;
