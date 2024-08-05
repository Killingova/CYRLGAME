import React, { useState, useCallback } from 'react';
import CardBox from '../components/CardBox.jsx';
import CardDisplay from '../components/CardDisplay.jsx';

// Hauptkomponente für den Beziehungskompass
const BeziehungsKompass = ({ onCardSetSelect }) => {
  // Zustandshaken für die Positionen, das Deck und die ausgewählte Karte
  const [positions, setPositions] = useState(Array(12).fill({ card: null }));
  const [deck, setDeck] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  // Informationen zu den Positionen im Beziehungskompass
  const positionsInfo = [
    "Eigene wahre Gefühle: Diese Karte zeigt die tiefsten Emotionen in Bezug auf den Partner.",
    "Eigene Bedürfnisse: Diese Karte beleuchtet, was man in emotionaler, physischer oder spiritueller Hinsicht vom Partner erwartet oder benötigt.",
    "Eigenes Angebot an die Beziehung: Diese Karte reflektiert, was man selbst in die Beziehung einbringt.",
    "Faszination für den Partner: Diese Karte zeigt, was einen speziell zum Partner hingezogen fühlen lässt.",
    "Mögliche Zukunft der Beziehung: Diese Karte gibt einen Einblick in die potenzielle Richtung oder Entwicklung der Beziehung.",
    "Hindernisse in der Beziehung: Diese Karte deckt Schwierigkeiten oder Herausforderungen innerhalb der Partnerschaft auf.",
    "Überwindung der Hindernisse: Diese Karte bietet Ratschläge oder Lösungsansätze für die identifizierten Probleme.",
    "Loszulassende Aspekte: Diese Karte hilft zu erkennen, ob es bestimmte Vorstellungen, Erwartungen oder Emotionen gibt, die man loslassen sollte.",
    "Nächste Schritte in der Beziehung: Diese Karte gibt Ratschläge oder eine Richtung für die nächsten Schritte innerhalb der Partnerschaft.",
    "Gemeinsame Stärken: Diese Karte beleuchtet die gemeinsamen Stärken und positiven Aspekte der Partnerschaft.",
    "Gemeinsame Herausforderungen: Diese Karte identifiziert gemeinsame Probleme oder Herausforderungen.",
    "Langfristige Perspektive: Diese Karte gibt einen Einblick in die langfristige Entwicklung und Zukunft der Beziehung."
  ];

  // Funktion, die aufgerufen wird, wenn auf eine Position geklickt wird
  const onPositionClick = useCallback((index) => {
    if (deck.length === 0) return; // Wenn das Deck leer ist, nichts tun

    const newPositions = [...positions];
    if (!newPositions[index].card) { // Wenn an der angeklickten Position noch keine Karte liegt
      newPositions[index] = { card: deck.pop() }; // Ziehe die oberste Karte aus dem Deck und lege sie an die Position
      setPositions(newPositions); // Aktualisiere die Positionen
      setDeck([...deck]); // Aktualisiere das Deck
    }
  }, [deck, positions]);

  // Funktion, die aufgerufen wird, wenn auf eine Karte geklickt wird
  const onCardClick = useCallback((card) => {
    setSelectedCard(card); // Setze die angeklickte Karte als ausgewählte Karte
  }, []);

  // Funktion, die aufgerufen wird, wenn ein Kartenset ausgewählt wird
  const handleCardSetSelect = useCallback((cards) => {
    setDeck(shuffleDeck(cards)); // Mische das ausgewählte Kartenset und setze es als aktuelles Deck
  }, []);

  return (
    <div>
      {/* Komponente zur Auswahl des Kartensets */}
      <CardBox onCardSetSelect={handleCardSetSelect} />
      <h2 className="text-3xl font-bold mb-4">Beziehungskompass</h2>
      <p className="mb-4">Eine detaillierte Legung zur Analyse von Wünschen und Bedürfnissen in einer Beziehung.</p>
      <div className="relationship-compass-layout">
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

      {/* Styles für das Layout des Beziehungskompasses */}
      <style jsx>{`
        .relationship-compass-layout {
          display: grid;
          grid-template-columns: repeat(4, 1fr); /* Layout mit 4 Spalten */
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

// Funktion zum Mischen des Kartendecks
const shuffleDeck = (deck) => {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Tauschen der Karten an den Positionen i und j
  }
  return shuffled; // Rückgabe des gemischten Decks
};

export default BeziehungsKompass;
