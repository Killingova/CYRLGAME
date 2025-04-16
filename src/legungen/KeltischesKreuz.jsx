import React, { useState, useCallback } from 'react';
import CardBox from '../components/CardBox.jsx';
import CardDisplay from '../components/CardDisplay.jsx';
import Summary from '../components/Summary.jsx'; // Importiere die Summary-Komponente

const KeltischesKreuz = () => {
  const [positions, setPositions] = useState(Array(10).fill({ card: null }));
  const [deck, setDeck] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const positionsInfo = [
    "Die gegenwärtige Situation oder das Hauptthema: Diese Karte beschreibt die aktuelle Situation oder das zentrale Thema der Frage. Sie gibt einen Überblick über die momentane Lage.",
    "Das unmittelbare Hindernis oder die Herausforderung: Diese Karte zeigt ein Ereignis, eine Person oder ein Gefühl, das die Ausgangssituation entweder behindert oder fördert. Sie stellt die unmittelbare Herausforderung dar, die gemeistert werden muss.",
    "Bewusste Einflüsse oder was Sie bewusst wahrnehmen: Diese Karte repräsentiert das, was der Fragende rational über die Situation denkt. Es zeigt das bewusste Ziel oder die bewusste Ebene der Situation.",
    "Unbewusste Einflüsse oder was unter der Oberfläche verborgen ist: Diese Position zeigt tiefer liegende, unbewusste Einflüsse und Emotionen. Sie repräsentiert das Fundament der Situation, das oft nicht sofort erkennbar ist.",
    "Die Vergangenheit oder das, was hinter Ihnen liegt: Diese Karte gibt Hinweise auf die jüngste Vergangenheit und die Ursachen, die zur aktuellen Situation geführt haben.",
    "Die Zukunft oder das, was vor Ihnen liegt: Diese Karte gibt einen Ausblick auf die nahe Zukunft und die kommenden Einflüsse.",
    "Ihr persönlicher Standpunkt oder Ihre Rolle in der Situation: Diese Position reflektiert die Einstellung und Verfassung des Fragenden in Bezug auf die Situation. Sie zeigt, wie der Fragende selbst zur Situation steht.",
    "Externe Einflüsse oder die Menschen und Umstände um Sie herum: Diese Karte zeigt das Umfeld, einschließlich der Einflüsse anderer Personen und der äußeren Umstände, die auf die Situation einwirken.",
    "Hoffnungen und Ängste in Bezug auf die Situation: Diese Karte repräsentiert die Erwartungen, Hoffnungen und Ängste des Fragenden in Bezug auf die Situation.",
    "Das endgültige Ergebnis oder die wahrscheinliche Zukunft: Diese Position zeigt das langfristige Ergebnis oder den Höhepunkt der Situation, sofern die aktuellen Umstände unverändert bleiben."
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
      <h2 className="text-3xl font-bold mb-4">Keltisches Kreuz</h2>
      <p className="mb-4">Eine umfassende Legung für tiefgehende Analysen.</p>
      <div className="celtic-cross-layout">
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
        .celtic-cross-layout {
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
        .position-1 { grid-column: 3; grid-row: 3; }
        .position-2 { grid-column: 4; grid-row: 3; }
        .position-3 { grid-column: 3; grid-row: 2; }
        .position-4 { grid-column: 3; grid-row: 4; }
        .position-5 { grid-column: 2; grid-row: 3; }
        .position-6 { grid-column: 5; grid-row: 3; }
        .position-7 { grid-column: 6; grid-row: 4; }
        .position-8 { grid-column: 6; grid-row: 3; }
        .position-9 { grid-column: 6; grid-row: 2; }
        .position-10 { grid-column: 6; grid-row: 1; }
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

export default KeltischesKreuz;
