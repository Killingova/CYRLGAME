import React, { useState, useMemo } from "react";
import { X } from "lucide-react";

const letterToNumberMap = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
  S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
};

function reduceToSingleDigit(num) {
  while (num > 9 && ![11, 22, 33].includes(num)) {
    num = num.toString().split("").reduce((acc, d) => acc + parseInt(d, 10), 0);
  }
  return num;
}

function calculateLifePathNumber(date) {
  const sum = date.replace(/-/g, "").split("").reduce((acc, d) => acc + parseInt(d, 10), 0);
  return reduceToSingleDigit(sum);
}

function calculateDestinyNumber(name) {
  const sum = name.toUpperCase().split("").reduce((acc, l) => acc + (letterToNumberMap[l] || 0), 0);
  return reduceToSingleDigit(sum);
}

function calculateSoulNumber(name) {
  const vowels = name.toUpperCase().match(/[AEIOU]/g) || [];
  const sum = vowels.reduce((acc, v) => acc + (letterToNumberMap[v] || 0), 0);
  return reduceToSingleDigit(sum);
}

function calculatePersonalityNumber(name) {
  const consonants = name.toUpperCase().match(/[^AEIOU\s]/g) || [];
  const sum = consonants.reduce((acc, c) => acc + (letterToNumberMap[c] || 0), 0);
  return reduceToSingleDigit(sum);
}

const ResultItem = ({ label, value }) => (
  <p className="mb-1">
    <strong>{label}:</strong> {value}
  </p>
);

export default function PythagoreanNumerology() {
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const vollerName = `${vorname} ${nachname}`.trim();

  const results = useMemo(() => {
    if (!vollerName || !birthDate) return null;
    return {
      lifePath: calculateLifePathNumber(birthDate),
      destiny: calculateDestinyNumber(vollerName),
      soul: calculateSoulNumber(vollerName),
      personality: calculatePersonalityNumber(vollerName),
    };
  }, [vollerName, birthDate]);

  const handleReset = () => {
    setVorname("");
    setNachname("");
    setBirthDate("");
  };

  return (
    <section className="bg-gradient-to-b from-[#DCDEF2] to-[#D9A384] text-[#260101] py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center drop-shadow-md">
          Pythagoreische Numerologie
        </h2>

        <div className="relative bg-white border border-[#8C5A67]/30 rounded-xl p-6 shadow-lg">
          {/* Reset-X-Button oben rechts */}
          <button
            onClick={handleReset}
            className="absolute top-2 right-2 text-[#8C5A67] hover:text-red-600 transition"
            title="Zurücksetzen"
          >
            <X size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold mb-1">Vorname</label>
              <input
                type="text"
                value={vorname}
                onChange={(e) => setVorname(e.target.value)}
                placeholder="z. B. Alice"
                className="w-full px-3 py-2 rounded bg-[#DCDEF2] border border-[#8C5A67] text-[#260101] focus:outline-none focus:ring-2 focus:ring-[#8C5A67]"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Nachname</label>
              <input
                type="text"
                value={nachname}
                onChange={(e) => setNachname(e.target.value)}
                placeholder="z. B. Wunder"
                className="w-full px-3 py-2 rounded bg-[#DCDEF2] border border-[#8C5A67] text-[#260101] focus:outline-none focus:ring-2 focus:ring-[#8C5A67]"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold mb-1">Geburtsdatum</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-3 py-2 rounded bg-[#DCDEF2] border border-[#8C5A67] text-[#260101] focus:outline-none focus:ring-2 focus:ring-[#8C5A67]"
              />
            </div>
          </div>

          {results && (
            <div className="mt-6 bg-[#8C5A67]/10 p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-[#8C5A67]">Deine Zahlen:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <ResultItem label="Lebenszahl" value={results.lifePath} />
                <ResultItem label="Schicksalszahl" value={results.destiny} />
                <ResultItem label="Seelenzahl" value={results.soul} />
                <ResultItem label="Persönlichkeitszahl" value={results.personality} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
