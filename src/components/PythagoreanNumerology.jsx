import React, { useState, useMemo } from "react";

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

  return (
    <section className="w-full bg-[#1F4C73] py-12 px-4 text-[#F2CA50]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-6">
          Pythagoreische Numerologie
        </h2>

        <div className="bg-[#1F4C73] border border-[#F2CA50]/30 rounded-xl p-6 shadow text-stone-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block font-semibold mb-1">Vorname</label>
              <input
                type="text"
                value={vorname}
                onChange={(e) => setVorname(e.target.value)}
                placeholder="z. B. Alice"
                className="w-full px-3 py-2 rounded bg-[#1F4C73] border border-stone-300 text-white focus:ring-2 focus:ring-[#F2CA50]"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Nachname</label>
              <input
                type="text"
                value={nachname}
                onChange={(e) => setNachname(e.target.value)}
                placeholder="z. B. Wunder"
                className="w-full px-3 py-2 rounded bg-[#1F4C73] border border-stone-300 text-white focus:ring-2 focus:ring-[#F2CA50]"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Geburtsdatum</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-3 py-2 rounded bg-[#1F4C73] border border-stone-300 text-white focus:ring-2 focus:ring-[#F2CA50]"
              />
            </div>
          </div>

          {/* Ergebnisse */}
          {results && (
            <div className="mt-4 bg-[#F2CA50]/20 p-4 rounded-md">
              <h3 className="text-xl font-bold mb-2 text-[#F2CA50]">
                Ergebnisse:
              </h3>
              <ResultItem label="Lebenszahl" value={results.lifePath} />
              <ResultItem label="Schicksalszahl" value={results.destiny} />
              <ResultItem label="Seelenzahl" value={results.soul} />
              <ResultItem label="Persönlichkeitszahl" value={results.personality} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
