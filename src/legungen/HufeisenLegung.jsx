import React, { useState, useCallback } from 'react';
import CardBox from '../components/CardBox.jsx';
import CardDisplay from '../components/CardDisplay.jsx';
import Summary from '../components/Summary.jsx'; // Importiere die Summary-Komponente

// Funktion zum zufälligen Mischen eines Kartendecks
const shuffleDeck = (deck) => {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Hauptkomponente für die Hufeisen-Legung
const HufeisenLegung = () => {
  // 7 Positionen, initial ohne gezogene Karte
  const [positions, setPositions] = useState(Array(7).fill({ card: null }));
  // Aktueller Kartenstapel (Deck)
  const [deck, setDeck] = useState([]);
  // Optional: zum Anzeigen einer Detailansicht, wenn eine Karte angeklickt wird
  const [selectedCard, setSelectedCard] = useState(null);

  // Informationen zu den Legungspositionen
  const positionsInfo = [
    "Vergangenheit: Diese Karte zeigt die vergangenen Ereignisse und Einflüsse, die zur aktuellen Situation geführt haben.",
    "Gegenwart: Diese Karte gibt Aufschluss über die gegenwärtige Situation und die aktuellen Einflüsse.",
    "Zukunft: Diese Karte gibt Hinweise darauf, wie sich die Situation in naher Zukunft entwickeln wird.",
    "Rat: Diese Karte bietet Ratschläge oder Handlungsanweisungen, die in der aktuellen Situation hilfreich sein könnten.",
    "Einflüsse: Diese Karte zeigt die äußeren Einflüsse und Faktoren, die die Situation beeinflussen.",
    "Hindernisse: Diese Karte offenbart die Herausforderungen und Hindernisse, die in der Situation bestehen.",
    "Ergebnis: Diese Karte gibt einen Ausblick auf das mögliche Ergebnis oder die langfristige Entwicklung der Situation."
  ];

  // Beim Klick auf eine Position wird – sofern das Deck nicht leer ist – die oberste Karte gezogen
  const onPositionClick = useCallback((index) => {
    if (deck.length === 0) return;
    setDeck((prevDeck) => {
      if (prevDeck.length === 0) return prevDeck;
      const drawnCard = prevDeck[prevDeck.length - 1]; // oberste Karte
      // Aktualisiere Positionen: Nur wenn an der Position noch keine Karte liegt
      setPositions((prevPositions) => {
        if (prevPositions[index].card) return prevPositions;
        const newPositions = [...prevPositions];
        newPositions[index] = { card: drawnCard };
        return newPositions;
      });
      // Entferne die gezogene Karte aus dem Deck
      return prevDeck.slice(0, -1);
    });
  }, [deck]);

  // Bei Klick auf eine Karte (z. B. für Detailansicht)
  const onCardClick = useCallback((card) => {
    setSelectedCard(card);
  }, []);

  // Beim Auswählen eines Kartensatzes wird dieser gemischt im Deck abgelegt
  const handleCardSetSelect = useCallback((cards) => {
    setDeck(shuffleDeck(cards));
  }, []);

  // --- Berechnung der Positionen in Hufeisenform ---
  // Container-Dimensionen
  const containerWidth = 800;   // Breite des Containers
  const containerHeight = 400;  // Höhe des Containers
  // Kreisparameter für die Berechnung der Positionen:
  const centerX = containerWidth / 2;  
  const centerY = containerHeight + 50; // Der Kreismittelpunkt liegt etwas unterhalb des Containers für den Bogen-Effekt
  const radius = 300;                   // Radius des imaginären Kreises
  // Annahme: Wir arbeiten mit 7 Positionen, deren Winkel variieren von -60° bis +60°
  const angles = [-60, -40, -20, 0, 20, 40, 60];
  // Vorgabe für Kartenmaße (du kannst diese Werte anpassen)
  const cardWidth = 150;
  const cardHeight = 220;

  return (
    <div>
      {/* Auswahl des Kartensatzes */}
      <CardBox onCardSetSelect={handleCardSetSelect} />

      <h2 className="text-3xl font-bold mb-4">Hufeisen-Legung</h2>
      <p className="mb-4">
        Die Hufeisen-Legung bietet Einblicke in Vergangenheit, Gegenwart und Zukunft, sowie Ratschläge und Einflüsse, die die Situation beeinflussen.
      </p>

      {/* Container für die Hufeisenform */}
      <div className="horseshoe-container">
        {positions.map((position, index) => {
          // Berechne den Winkel in Radiant für die aktuelle Position
          const angleDeg = angles[index];
          const angleRad = angleDeg * (Math.PI / 180);
          // Berechne die linken und oberen Koordinaten anhand der Kreisgleichung
          const left = centerX + radius * Math.cos(angleRad) - cardWidth / 2;
          const top = centerY + radius * Math.sin(angleRad) - cardHeight / 2;
          // Für eine gerade Darstellung der Karten rotiere diese um den negativen Winkel
          const style = {
            position: 'absolute',
            left: `${left}px`,
            top: `${top}px`,
            width: `${cardWidth}px`,
            height: `${cardHeight}px`,
            transform: `rotate(${-angleDeg}deg)`,
            cursor: "pointer",
            transition: "transform 0.3s"
          };

          return (
            <div
              key={index}
              className={`position position-${index + 1}`}
              style={style}
              onClick={() => onPositionClick(index)}
            >
              {position.card ? (
                <CardDisplay card={position.card} onClick={() => onCardClick(position.card)} />
              ) : (
                <div className="position-info">
                  <strong>Position {index + 1}:</strong>
                  <p>{positionsInfo[index]}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Zusammenfassung der Legung */}
      <Summary positions={positions} positionsInfo={positionsInfo} />

      <style jsx>{`
        .horseshoe-container {
          position: relative;
          width: ${containerWidth}px;
          height: ${containerHeight}px;
          margin: 0 auto;
          /* Optional: Rahmen zur besseren Visualisierung des Containers */
          /* border: 1px dashed #ccc; */
        }
        .position-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.8);
          width: 100%;
          height: 100%;
          padding: 4px;
          box-sizing: border-box;
        }
        .position:hover {
          transform: scale(1.05) rotate(0deg);
        }
      `}</style>
    </div>
  );
};

export default HufeisenLegung;
