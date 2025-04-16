import React, { useState, useCallback } from 'react';
import CardBox from '../components/CardBox.jsx';
import CardDisplay from '../components/CardDisplay.jsx';
import Summary from '../components/Summary.jsx'; // Importiere die Summary-Komponente

// Hauptkomponente für die Große Tafel
const GrosseTafel = () => {
  const [positions, setPositions] = useState(Array(21).fill({ card: null }));
  const [deck, setDeck] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const positionsInfo = [
    "Position 1: Bedeutung für den Beginn der Situation.",
    "Position 2: Bedeutung für die ersten Herausforderungen oder Hindernisse.",
    "Position 3: Bedeutung für die ersten Unterstützungen oder Hilfe.",
    "Position 4: Bedeutung für die frühe Entwicklung der Situation.",
    "Position 5: Bedeutung für die Verankerung der Situation.",
    "Position 6: Bedeutung für die erste Reife oder Stabilität der Situation.",
    "Position 7: Bedeutung für die erste Ernte oder die ersten Ergebnisse.",
    "Position 8: Bedeutung für die Herausforderungen in der mittleren Phase.",
    "Position 9: Bedeutung für die Unterstützung in der mittleren Phase.",
    "Position 10: Bedeutung für die Entwicklung in der mittleren Phase.",
    "Position 11: Bedeutung für die Basis der zweiten Hälfte der Situation.",
    "Position 12: Bedeutung für die Herausforderungen in der zweiten Hälfte.",
    "Position 13: Bedeutung für die Unterstützung in der zweiten Hälfte.",
    "Position 14: Bedeutung für die späte Entwicklung der Situation.",
    "Position 15: Bedeutung für die Verankerung in der späten Phase.",
    "Position 16: Bedeutung für die Reife in der späten Phase.",
    "Position 17: Bedeutung für die Ernte in der späten Phase.",
    "Position 18: Bedeutung für die abschließenden Herausforderungen.",
    "Position 19: Bedeutung für die abschließende Unterstützung.",
    "Position 20: Bedeutung für das Endergebnis.",
    "Position 21: Bedeutung für die langfristigen Auswirkungen."
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
      <h2 className="text-3xl font-bold mb-4">21-Karten-Legung (Große Tafel)</h2>
      <div className="grand-tableau-layout">
        {positions.map((position, index) => (
          <div
            key={index}
            className={`position position-${index + 1}`}
            onClick={() => onPositionClick(index)}
          >
            {position.card ? (
              <CardDisplay card={position.card} onClick={() => onCardClick(position.card)} />
            ) : (
              <div className="position-placeholder">
                <strong>Position {index + 1}</strong>
                <p>{positionsInfo[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <Summary positions={positions} positionsInfo={positionsInfo} /> {/* Füge die Summary-Komponente hinzu */}

      <style>{`
        .grand-tableau-layout {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 10px;
          justify-content: center;
          align-items: center;
        }

        .position {
          border: 1px solid black;
          text-align: center;
          cursor: pointer;
          width: 63mm;
          height: 88mm;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .position-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
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

export default GrosseTafel;
