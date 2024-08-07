import React, { useState, useCallback } from 'react';
import CardBox from '../components/CardBox.jsx';
import CardDisplay from '../components/CardDisplay.jsx';
import Summary from '../components/Summary.jsx'; // Importiere die Summary-Komponente

// Hauptkomponente für die Hufeisen-Legung
const HufeisenLegung = () => {
  const [positions, setPositions] = useState(Array(7).fill({ card: null }));
  const [deck, setDeck] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const positionsInfo = [
    "Vergangenheit: Diese Karte zeigt die vergangenen Ereignisse und Einflüsse, die zur aktuellen Situation geführt haben.",
    "Gegenwart: Diese Karte gibt Aufschluss über die gegenwärtige Situation und die aktuellen Einflüsse.",
    "Zukunft: Diese Karte gibt Hinweise darauf, wie sich die Situation in naher Zukunft entwickeln wird.",
    "Rat: Diese Karte bietet Ratschläge oder Handlungsanweisungen, die in der aktuellen Situation hilfreich sein könnten.",
    "Einflüsse: Diese Karte zeigt die äußeren Einflüsse und Faktoren, die die Situation beeinflussen.",
    "Hindernisse: Diese Karte offenbart die Herausforderungen und Hindernisse, die in der Situation bestehen.",
    "Ergebnis: Diese Karte gibt einen Ausblick auf das mögliche Ergebnis oder die langfristige Entwicklung der Situation."
  ];

  const onPositionClick = useCallback((index) => {
    if (deck.length === 0) return;

    const newPositions = [...positions];
    if (!newPositions[index].card) {
      newPositions[index] = { card: deck.pop() };
      setPositions(newPositions);
      setDeck([...deck]);
    }
  }, [deck, positions]);

  const onCardClick = useCallback((card) => {
    setSelectedCard(card);
  }, []);

  const handleCardSetSelect = useCallback((cards) => {
    setDeck(shuffleDeck(cards));
  }, []);

  return (
    <div>
      <CardBox onCardSetSelect={handleCardSetSelect} />
      <h2 className="text-3xl font-bold mb-4">Hufeisen-Legung</h2>
      <p className="mb-4">
        Die Hufeisen-Legung bietet Einblicke in die Vergangenheit, Gegenwart und Zukunft, sowie Ratschläge und Einflüsse, die die Situation beeinflussen.
      </p>
      <div className="horseshoe-layout">
        {positions.map((position, index) => (
          <div
            key={index}
            className={`position position-${index + 1}`}
            onClick={() => onPositionClick(index)}
          >
            {position.card ? (
              <CardDisplay card={position.card} onClick={() => onCardClick(position.card)} />
            ) : (
              <div>
                <strong>Position {index + 1}:</strong>
                <p>{positionsInfo[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <Summary positions={positions} positionsInfo={positionsInfo} /> {/* Füge die Summary-Komponente hinzu */}

      <style jsx>{`
        .horseshoe-layout {
          display: grid;
          grid-template-columns: repeat(7, 1fr); /* Layout mit 7 Spalten */
          gap: 4px; /* Abstand zwischen den Positionen */
          justify-content: center; /* Zentrieren der Positionen horizontal */
          align-items: center; /* Zentrieren der Positionen vertikal */
        }

        .position {
          border: 1px solid black; /* Rahmen um die Position */
          text-align: center; /* Zentrierter Text */
          cursor: pointer; /* Zeiger-Icon bei Hover */
          width: 63mm; /* Breite der Position (entspricht typischer Kartenbreite) */
          height: 88mm; /* Höhe der Position (entspricht typischer Kartenhöhe) */
          display: flex; /* Flexbox für zentrierten Inhalt */
          align-items: center; /* Vertikales Zentrieren */
          justify-content: center; /* Horizontales Zentrieren */
        }

        .position-1 { grid-column: 1; grid-row: 1; }
        .position-2 { grid-column: 2; grid-row: 1; }
        .position-3 { grid-column: 3; grid-row: 1; }
        .position-4 { grid-column: 4; grid-row: 1; }
        .position-5 { grid-column: 5; grid-row: 1; }
        .position-6 { grid-column: 6; grid-row: 1; }
        .position-7 { grid-column: 7; grid-row: 1; }
      `}</style>
    </div>
  );
};

const shuffleDeck = (deck) => {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export default HufeisenLegung;
