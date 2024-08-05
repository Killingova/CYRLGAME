import React, { useState, useCallback } from 'react';
import CardBox from '../components/CardBox.jsx';
import CardDisplay from '../components/CardDisplay.jsx';

// Hauptkomponente für das Keltische Kreuz
const KeltischesKreuz = ({ onCardSetSelect }) => {
  // Zustandshaken für die Positionen, das Deck und die ausgewählte Karte
  const [positions, setPositions] = useState(Array(10).fill({ card: null }));
  const [deck, setDeck] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  // Informationen zu den Positionen im Keltischen Kreuz
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

      {/* Styles für das Layout des Keltischen Kreuzes */}
      <style jsx>{`
        .celtic-cross-layout {
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

// Funktion zum Mischen des Kartendecks
const shuffleDeck = (deck) => {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Tauschen der Karten an den Positionen i und j
  }
  return shuffled; // Rückgabe des gemischten Decks
};

export default KeltischesKreuz;
