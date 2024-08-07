import React, { useState, useCallback } from 'react';
import CardBox from '../components/CardBox.jsx';
import CardDisplay from '../components/CardDisplay.jsx';
import Summary from '../components/Summary.jsx'; // Importiere die Summary-Komponente

// Hauptkomponente für die Chakra-Legung
const ChakraLegung = () => {
  const [positions, setPositions] = useState(Array(7).fill({ card: null }));
  const [deck, setDeck] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const positionsInfo = [
    "Wurzelchakra (Muladhara): Diese Karte beleuchtet die Themen Sicherheit, Überleben und grundlegende Bedürfnisse.",
    "Sakralchakra (Svadhisthana): Diese Karte befasst sich mit Kreativität, Sexualität und Emotionen.",
    "Solarplexuschakra (Manipura): Diese Karte repräsentiert Macht, Selbstbewusstsein und persönliche Stärke.",
    "Herzchakra (Anahata): Diese Karte zeigt Themen von Liebe, Mitgefühl und emotionaler Heilung.",
    "Halschakra (Vishuddha): Diese Karte beleuchtet Kommunikation, Selbstausdruck und Wahrheit.",
    "Stirnchakra (Ajna): Diese Karte befasst sich mit Intuition, Einsicht und Weisheit.",
    "Kronenchakra (Sahasrara): Diese Karte repräsentiert Spiritualität, Verbindung zum Universum und höhere Bewusstseinsebenen."
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
      <h2 className="text-3xl font-bold mb-4">Chakra-Legung</h2>
      <p className="mb-4">Eine detaillierte Legung zur Analyse der sieben Chakren und ihrer Themen.</p>
      <div className="chakra-layout">
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
        .chakra-layout {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
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

export default ChakraLegung;
