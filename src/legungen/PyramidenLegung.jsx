import React, { useState, useCallback } from 'react';
import CardBox from '../components/CardBox.jsx';
import CardDisplay from '../components/CardDisplay.jsx';
import Summary from '../components/Summary.jsx'; // Importiere die Summary-Komponente

// Hauptkomponente für die Pyramiden-Legung
const PyramidenLegung = ({ onCardSetSelect }) => {
  const [positions, setPositions] = useState(Array(10).fill({ card: null }));
  const [deck, setDeck] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const positionsInfo = [
    "Karte 1: Repräsentiert den Ursprung der Situation oder das Ereignis, das zur aktuellen Lage geführt hat.",
    "Karte 2: Zeigt die zugrunde liegenden Gefühle oder Motive, die die Situation beeinflussen.",
    "Karte 3: Deutet auf die äußeren Einflüsse und Umstände hin, die zur Entstehung der Situation beigetragen haben.",
    "Karte 4: Offenbart die inneren Überzeugungen oder Gedankenmuster, die die Basis der Situation bilden.",
    "Karte 5: Repräsentiert die verborgenen oder unbewussten Faktoren, die die Situation beeinflussen.",
    "Karte 6: Zeigt die bewussten Absichten oder Pläne, die die aktuelle Lage formen.",
    "Karte 7: Beschreibt die gegenwärtigen Umstände und äußeren Einflüsse, die die Situation bestimmen.",
    "Karte 8: Deutet auf die aktuellen emotionalen oder mentalen Zustände hin, die in der Situation eine Rolle spielen.",
    "Karte 9: Zeigt die nächsten Schritte oder Veränderungen, die in der nahen Zukunft erwartet werden können.",
    "Karte 10: Repräsentiert das endgültige Ergebnis oder die langfristigen Auswirkungen der Situation."
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
      <h2 className="text-3xl font-bold mb-4">Pyramiden-Legung</h2>
      <p className="mb-4">
        Die Pyramiden-Legung bietet Einblicke in die verschiedenen Ebenen einer Situation, von den Wurzeln bis hin zum Endergebnis.
      </p>
      <div className="pyramid-layout">
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
        .pyramid-layout {
          display: grid;
          grid-template-columns: repeat(4, 1fr); /* Layout mit 4 Spalten */
          gap: 4px; /* Abstand zwischen den Positionen */
          justify-content: center; /* Zentrieren der Positionen horizontal */
          align-items: center; /* Zentrieren der Positionen vertikal */
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

        /* Positionen in der Pyramiden-Form */
        .position-1 { grid-column: 1; grid-row: 1; }
        .position-2 { grid-column: 2; grid-row: 1; }
        .position-3 { grid-column: 3; grid-row: 1; }
        .position-4 { grid-column: 4; grid-row: 1; }
        .position-5 { grid-column: 2; grid-row: 2; }
        .position-6 { grid-column: 3; grid-row: 2; }
        .position-7 { grid-column: 2; grid-row: 3; }
        .position-8 { grid-column: 3; grid-row: 3; }
        .position-9 { grid-column: 2 / span 2; grid-row: 4; }
        .position-10 { grid-column: 2 / span 2; grid-row: 5; }
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

export default PyramidenLegung;
