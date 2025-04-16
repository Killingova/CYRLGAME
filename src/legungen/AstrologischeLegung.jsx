import React, { useState, useCallback } from 'react';
import CardBox from '../components/CardBox.jsx';
import CardDisplay from '../components/CardDisplay.jsx';
import Summary from '../components/Summary.jsx'; // Importiere die Summary-Komponente

const AstrologischeLegung = () => {
  const [positions, setPositions] = useState(Array(12).fill({ card: null }));
  const [deck, setDeck] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const positionsInfo = [
    "1. Haus (Leben, Identität): Diese Karte repräsentiert das Selbst, das Auftreten und die Identität.",
    "2. Haus (Eigentum, Finanzen): Diese Karte beleuchtet die Themen Besitz, Geld und Werte.",
    "3. Haus (Kommunikation, Geschwister): Diese Karte befasst sich mit Kommunikation, Geschwistern und kurzen Reisen.",
    "4. Haus (Familie, Zuhause): Diese Karte zeigt Themen von Familie, Zuhause und den Wurzeln.",
    "5. Haus (Vergnügen, Kinder): Diese Karte beleuchtet Vergnügen, Kreativität und Kinder.",
    "6. Haus (Arbeit, Gesundheit): Diese Karte repräsentiert Arbeit, Gesundheit und tägliche Routinen.",
    "7. Haus (Partnerschaften, Ehe): Diese Karte befasst sich mit Partnerschaften, Ehe und offenen Feinden.",
    "8. Haus (Transformation, Sexualität): Diese Karte zeigt Themen von Transformation, Sexualität und gemeinsamen Ressourcen.",
    "9. Haus (Philosophie, Reisen): Diese Karte beleuchtet Philosophie, höhere Bildung und lange Reisen.",
    "10. Haus (Karriere, Öffentlichkeit): Diese Karte repräsentiert Karriere, öffentliches Ansehen und Ziele.",
    "11. Haus (Freunde, Gemeinschaft): Diese Karte befasst sich mit Freunden, Gemeinschaft und Hoffnungen.",
    "12. Haus (Spiritualität, Rückzug): Diese Karte zeigt Themen von Spiritualität, Rückzug und Geheimnissen."
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
      <h2 className="text-3xl font-bold mb-4">Astrologische Legung</h2>
      <p className="mb-4">
        Die Astrologische Legung basiert auf den Planeten und/oder den zwölf astrologischen Häusern. 
        Jede Position in der Legung repräsentiert einen bestimmten Lebensbereich, der durch die astrologischen Planeten oder Häuser symbolisiert wird.
      </p>
      <div className="astrological-layout">
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
        .astrological-layout {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
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
        .position-5 { grid-column: 1; grid-row: 2; }
        .position-6 { grid-column: 2; grid-row: 2; }
        .position-7 { grid-column: 3; grid-row: 2; }
        .position-8 { grid-column: 4; grid-row: 2; }
        .position-9 { grid-column: 1; grid-row: 3; }
        .position-10 { grid-column: 2; grid-row: 3; }
        .position-11 { grid-column: 3; grid-row: 3; }
        .position-12 { grid-column: 4; grid-row: 3; }
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

export default AstrologischeLegung;
