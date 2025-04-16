import React, { useState, useCallback } from 'react';
import CardBox from '../components/CardBox.jsx';
import CardDisplay from '../components/CardDisplay.jsx';
import Summary from '../components/Summary.jsx'; // Importiere die Summary-Komponente

// Hauptkomponente für die Lebensbaum-Legung
const LebensbaumLegung = ({ onCardSetSelect }) => {
  const [positions, setPositions] = useState(Array(10).fill({ card: null }));
  const [deck, setDeck] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const positionsInfo = [
    "Kether (Krone): Diese Karte repräsentiert den göttlichen Willen und die höchste spirituelle Ebene.",
    "Chokmah (Weisheit): Diese Karte steht für Weisheit und schöpferische Kraft.",
    "Binah (Verständnis): Diese Karte symbolisiert Verständnis, Reife und Einsicht.",
    "Chesed (Gnade): Diese Karte steht für Gnade, Liebe und Mitgefühl.",
    "Gevurah (Stärke): Diese Karte repräsentiert Stärke, Macht und Disziplin.",
    "Tiphereth (Schönheit): Diese Karte steht für Harmonie, Schönheit und Mitgefühl.",
    "Netzach (Ewigkeit): Diese Karte symbolisiert Sieg, Ausdauer und Antrieb.",
    "Hod (Herrlichkeit): Diese Karte steht für Herrlichkeit, Intellekt und Kommunikation.",
    "Yesod (Grundlage): Diese Karte repräsentiert die Grundlage und Verbindung zur physischen Welt.",
    "Malkuth (Königreich): Diese Karte steht für das Königreich, die materielle Welt und Manifestation."
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
      <h2 className="text-3xl font-bold mb-4">Lebensbaum-Legung</h2>
      <p className="mb-4">
        Die Lebensbaum-Legung basiert auf der kabbalistischen Symbolik des Lebensbaums (Tree of Life). Der Lebensbaum ist ein mystisches Symbol, das aus zehn Sephiroth (Sphären) besteht, die verschiedene Aspekte der spirituellen und materiellen Welt repräsentieren.
      </p>
      <div className="tree-of-life-layout">
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
        .tree-of-life-layout {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4px;
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

        .position-1 { grid-column: 2; grid-row: 1; }
        .position-2 { grid-column: 1; grid-row: 2; }
        .position-3 { grid-column: 3; grid-row: 2; }
        .position-4 { grid-column: 1; grid-row: 3; }
        .position-5 { grid-column: 3; grid-row: 3; }
        .position-6 { grid-column: 2; grid-row: 4; }
        .position-7 { grid-column: 1; grid-row: 5; }
        .position-8 { grid-column: 3; grid-row: 5; }
        .position-9 { grid-column: 2; grid-row: 6; }
        .position-10 { grid-column: 2; grid-row: 7; }
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

export default LebensbaumLegung;
