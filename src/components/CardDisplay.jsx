import React from 'react';

// Funktionskomponente CardDisplay, die die Eigenschaften card und onClick als Props erhält
const CardDisplay = ({ card, onClick }) => (
  // Container für die Kartendarstellung, der ein Klick-Event auslöst
  <div className="relative text-center cursor-pointer" onClick={onClick}>
    {/* Bild der Karte */}
    <div className="relative">
      <img src={card.image} alt={card.name} className="w-full h-auto" />
      {/* Name der Karte */}
      <h3 className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-2 py-1 rounded">{card.name}</h3>
    </div>
    {/* Beschreibung der Karte */}
    <p>{card.description}</p>
  </div>
);

export default CardDisplay;
