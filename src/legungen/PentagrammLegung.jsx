import React, { useState, useCallback } from 'react';
import CardBox from '../components/CardBox.jsx';
import CardDisplay from '../components/CardDisplay.jsx';
import Summary from '../components/Summary.jsx'; // Importiere die Summary-Komponente

// Hauptkomponente für die Pentagramm-Legung
const PentagrammLegung = ({ onCardSetSelect }) => {
  const [positions, setPositions] = useState(Array(5).fill({ card: null }));
  const [deck, setDeck] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const positionsInfo = [
    "Erde (Karte 1): Diese Karte repräsentiert die materielle Grundlage, physische Ressourcen und praktische Aspekte der Situation.",
    "Wasser (Karte 2): Diese Karte zeigt die emotionalen und intuitiven Aspekte der Situation. Sie beleuchtet die Gefühle und inneren Strömungen, die eine Rolle spielen.",
    "Feuer (Karte 3): Diese Karte symbolisiert die Energie, den Antrieb und die Motivation hinter der Situation. Sie deutet auf die Kraft und den Willen, die vorhanden sind.",
    "Luft (Karte 4): Diese Karte repräsentiert die mentalen Aspekte und den Verstand. Sie zeigt die Gedanken, Kommunikation und Ideen, die die Situation beeinflussen.",
    "Geist (Karte 5): Diese Karte steht für die spirituelle Dimension der Situation. Sie bietet Einblicke in die höheren Ziele, die spirituelle Lektion oder die karmischen Einflüsse."
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
      <h2 className="text-3xl font-bold mb-4">Pentagramm-Legung</h2>
      <p className="mb-4">
        Die Pentagramm-Legung bietet Einblicke in die materiellen, emotionalen, energetischen, mentalen und spirituellen Aspekte einer Situation.
      </p>
      <div className="pentagram-layout">
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

      <style>{`
        .pentagram-layout {
          display: grid;
          grid-template-columns: repeat(5, 1fr); /* Layout mit 5 Spalten */
          gap: 20px; /* Abstand zwischen den Positionen */
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

        /* Positionen in der Pentagramm-Form */
        .position-1 { grid-column: 1; grid-row: 3; } /* Unten links */
        .position-2 { grid-column: 2; grid-row: 4; } /* Unten rechts */
        .position-3 { grid-column: 3; grid-row: 2; } /* Mitte links */
        .position-4 { grid-column: 4; grid-row: 1; } /* Mitte rechts */
        .position-5 { grid-column: 5; grid-row: 3; } /* Oben Mitte */
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

export default PentagrammLegung;
