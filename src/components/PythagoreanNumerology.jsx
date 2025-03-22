import React, { useState, useMemo } from "react";

const letterToNumberMap = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
  S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
};

function reduceToSingleDigit(num) {
  while (num > 9 && ![11, 22, 33].includes(num)) {
    num = num
      .toString()
      .split("")
      .reduce((acc, d) => acc + parseInt(d, 10), 0);
  }
  return num;
}

function calculateLifePathNumber(date) {
  const sum = date.replace(/-/g, "").split("").reduce((acc, d) => acc + parseInt(d, 10), 0);
  return reduceToSingleDigit(sum);
}

function calculateDestinyNumber(name) {
  const sum = name
    .toUpperCase()
    .split("")
    .reduce((acc, l) => acc + (letterToNumberMap[l] || 0), 0);
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
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [error, setError] = useState("");

  // Memoisierte Berechnungen, sobald Name & Datum gefüllt sind
  const results = useMemo(() => {
    if (!name.trim() || !birthDate) return null;
    return {
      lifePath: calculateLifePathNumber(birthDate),
      destiny: calculateDestinyNumber(name),
      soul: calculateSoulNumber(name),
      personality: calculatePersonalityNumber(name),
    };
  }, [name, birthDate]);

  const handleCalculate = () => {
    if (!name.trim() || !birthDate) {
      setError("Bitte Name und Geburtsdatum eingeben.");
    } else {
      setError("");
    }
  };

  const handleReset = () => {
    setName("");
    setBirthDate("");
    setError("");
  };

  return (
    // Gesamte Sektion in #1F4C73 lass alles in der section als ein div sauber 
    <section className="w-full bg-[#1F4C73] py-12 px-4 text-[#F2CA50]">
      <div className="max-w-5xl mx-auto">
        {/* Titel */}
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold mb-6">
          Pythagoreische Numerologie
        </h2>

        {/* Weiße Box für das Formular  solll bg-[#1F4C73] */}
        <div className="bg-[#1F4C73] text-stone-950 ">
          <div className="flex flex-col md:flex-row md:items-end md:justify-center md:space-x-4 mb-4">
            {/* Name */}
            <div className="flex-1 mb-4 md:mb-0">
              <label htmlFor="name" className="block font-semibold mb-1">
                Name:
              </label>
              <input
                id="name"
                type="text"
                placeholder="Vollständiger Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded bg-[#1F4C73] border border-stone-950 focus:outline-none focus:ring-2 focus:ring-[#F2CA50]"
              />
            </div>

            {/* Geburtsdatum */}
            <div className="flex-1 mb-4 md:mb-0">
              <label htmlFor="birthDate" className="block font-semibold mb-1">
                Geburtsdatum:
              </label>
              <input
                id="birthDate"
                type="date"
                placeholder="TT.MM.JJJJ"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-3 py-2 bg-[#1F4C73] rounded border border-r-stone-950 focus:outline-none focus:ring-2 focus:ring-[#F2CA50]"
              />
            </div>

            {/* Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={handleCalculate}
                className=" hover:brightness-110 text-stone-200 font-semibold px-4 py-2 rounded"
              >
                Berechnen
              </button>
              <button
                onClick={handleReset}
                className="hover:brightness-110 text-stone-200 font-semibold px-4 py-2 rounded"
              >
                Zurücksetzen
              </button>
            </div>
          </div>

          {/* Fehlermeldung */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-2 mb-4 rounded">
              {error}
            </div>
          )}

          {/* Ergebnisse */}
          {results && !error && (
            <div className="mt-4 bg-[#F2CA50] bg-opacity-20 p-4 rounded-md">
              <h3 className="text-xl font-bold mb-2 text-[#1F4C73]">
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
