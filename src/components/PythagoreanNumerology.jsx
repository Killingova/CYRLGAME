import React, { useState } from 'react';

// Mapping der Buchstaben nach Pythagoras-Numerologie
const letterToNumberMap = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
  S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8
};

// Funktion zum Reduzieren der Zahl auf eine einstellige oder Meisterzahl
const reduceToSingleDigit = (num) => {
  while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
    num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
  }
  return num;
};

const PythagoreanNumerology = () => {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [results, setResults] = useState({});

  // Berechnung der Lebenszahl (Geburtsdatum)
  const calculateLifePathNumber = (date) => {
    const numbers = date.replace(/-/g, ""); // "-" entfernen
    const sum = numbers.split("").reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    return reduceToSingleDigit(sum);
  };

  // Berechnung der Schicksalszahl (voller Name)
  const calculateDestinyNumber = (name) => {
    const sum = name.toUpperCase().split("").reduce((acc, letter) => {
      return acc + (letterToNumberMap[letter] || 0);
    }, 0);
    return reduceToSingleDigit(sum);
  };

  // Berechnung der Seelenzahl (Vokale des Namens)
  const calculateSoulNumber = (name) => {
    const vowels = name.toUpperCase().match(/[AEIOU]/g) || [];
    const sum = vowels.reduce((acc, letter) => acc + letterToNumberMap[letter], 0);
    return reduceToSingleDigit(sum);
  };

  // Berechnung der Persönlichkeitszahl (Konsonanten des Namens)
  const calculatePersonalityNumber = (name) => {
    const consonants = name.toUpperCase().match(/[^AEIOU\s]/g) || [];
    const sum = consonants.reduce((acc, letter) => acc + letterToNumberMap[letter], 0);
    return reduceToSingleDigit(sum);
  };

  // Handhabung der Berechnung
  const handleCalculate = () => {
    if (!name || !birthDate) {
      alert("Bitte geben Sie sowohl den Namen als auch das Geburtsdatum ein.");
      return;
    }

    const lifePath = calculateLifePathNumber(birthDate);
    const destiny = calculateDestinyNumber(name);
    const soul = calculateSoulNumber(name);
    const personality = calculatePersonalityNumber(name);

    setResults({
      lifePath,
      destiny,
      soul,
      personality
    });
  };

  return (
    <div className="p-4 border rounded-md shadow-md bg-white max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Pythagoreische Numerologie</h2>
      <div className="mb-4">
        <label>
          <strong>Name:</strong>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="border p-2 mt-2 w-full"
          />
        </label>
      </div>
      <div className="mb-4">
        <label>
          <strong>Geburtsdatum (YYYY-MM-DD):</strong>
          <input 
            type="date" 
            value={birthDate} 
            onChange={(e) => setBirthDate(e.target.value)} 
            className="border p-2 mt-2 w-full"
          />
        </label>
      </div>
      <button onClick={handleCalculate} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        Berechnen
      </button>

      {results.lifePath && (
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Ergebnisse:</h3>
          <p><strong>Lebenszahl:</strong> {results.lifePath}</p>
          <p><strong>Schicksalszahl:</strong> {results.destiny}</p>
          <p><strong>Seelenzahl:</strong> {results.soul}</p>
          <p><strong>Persönlichkeitszahl:</strong> {results.personality}</p>
        </div>
      )}
    </div>
  );
};

export default PythagoreanNumerology;
