import React, { useState, useCallback } from 'react';
import CardBox from '../components/CardBox.jsx';
import CardDisplay from '../components/CardDisplay.jsx';
import Summary from '../components/Summary.jsx'; // Importiere ggf. deine Summary-Komponente

// Funktion zum zufälligen Mischen eines Kartendecks
const shuffleDeck = (deck) => {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const HufeisenLegung = () => {
  // 7 Positionen, anfangs keine Karten
  const [positions, setPositions] = useState(Array(7).fill({ card: null }));
  // Aktueller Kartenstapel
  const [deck, setDeck] = useState([]);
  // Optional: Karte, die du für eine Detailansicht ausgewählt hast
  const [selectedCard, setSelectedCard] = useState(null);

  // Beschreibung der 7 Positionen
  const positionsInfo = [
    "Vergangenheit: ...",
    "Gegenwart: ...",
    "Zukunft: ...",
    "Rat: ...",
    "Einflüsse: ...",
    "Hindernisse: ...",
    "Ergebnis: ...",
  ];

  // Wird aufgerufen, wenn man einen Kartensatz (Deck) ausgewählt hat
  const handleCardSetSelect = useCallback((cards) => {
    setDeck(shuffleDeck(cards));
  }, []);

  // Beim Klick auf eine Position: Falls das Deck noch Karten hat, ziehe die oberste Karte
  const onPositionClick = useCallback(
    (index) => {
      if (deck.length === 0) return;

      setDeck((prevDeck) => {
        if (prevDeck.length === 0) return prevDeck;
        const drawnCard = prevDeck[prevDeck.length - 1]; // oberste Karte im Deck

        // Lege die gezogene Karte in die Position, wenn dort noch keine Karte liegt
        setPositions((prevPositions) => {
          if (prevPositions[index].card) {
            return prevPositions;
          }
          const newPositions = [...prevPositions];
          newPositions[index] = { card: drawnCard };
          return newPositions;
        });

        // Entferne die gezogene Karte aus dem Deck
        return prevDeck.slice(0, -1);
      });
    },
    [deck]
  );

  // Klick auf eine Karte (z. B. um deren Details anzuzeigen)
  const onCardClick = useCallback((card) => {
    setSelectedCard(card);
  }, []);

  return (
    <div>
      {/* Komponente für die Auswahl eines Kartendecks */}
      <CardBox onCardSetSelect={handleCardSetSelect} />

      <h2 className="text-3xl font-bold mb-4">Hufeisen-Legung</h2>
      <p className="mb-4">
        Diese Version zeigt die Karten in einer einfachen Aufteilung, damit sie alle klar
        sichtbar sind.
      </p>

      {/* Einfaches Grid mit 7 Positionen */}
      <div className="grid-positions">
        {positions.map((position, index) => (
          <div
            key={index}
            className="position"
            onClick={() => onPositionClick(index)}
          >
            {position.card ? (
              <CardDisplay
                card={position.card}
                onClick={() => onCardClick(position.card)}
              />
            ) : (
              <div className="position-info">
                <strong>Position {index + 1}</strong>
                <p className="mt-1 text-sm">{positionsInfo[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Zusammenfassung */}
      <Summary positions={positions} positionsInfo={positionsInfo} />

      <style jsx>{`
        /* Grid für 7 Positionen */
        .grid-positions {
          display: grid;
          grid-template-columns: repeat(7, minmax(100px, 1fr));
          gap: 1rem;
          justify-items: center;
          margin: 2rem auto;
          max-width: 1200px; /* oder beliebig anpassen */
        }

        .position {
          width: 120px; /* Kartenbreite anpassen */
          height: 180px; /* Kartenhöhe anpassen */
          border: 1px dashed #bbb;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.3s;
        }

        .position:hover {
          transform: scale(1.05);
        }

        .position-info {
          text-align: center;
          padding: 4px;
        }
      `}</style>
    </div>
  );
};

export default HufeisenLegung;
