import React from 'react';

// Funktionskomponente LegungBox, die die Eigenschaften title, image, info und onClick als Props erhält
function LegungBox({ title, image, info, onClick }) {
  return (
    // Äußeres Div-Element der LegungBox, das als Container dient
    // Die Klasse `border rounded-lg p-4 shadow-lg cursor-pointer` wird für das Styling verwendet
    // Das `onClick`-Event wird hinzugefügt, um bei einem Klick die übergebene Funktion auszuführen
    <div 
      className="border rounded-lg p-4 shadow-lg cursor-pointer" 
      onClick={onClick}
      style={{ 
        width: 'calc(100vw / 7 * 5)', // 5:7 Proportion für die Breite
        maxWidth: '400px' // Optionale Maximalbreite, um es nicht zu groß zu machen
      }}
    >
      {/* Container für das Bild */}
      <div 
        className="overflow-hidden rounded-t-lg" 
        style={{ 
          position: 'relative', 
          paddingTop: 'calc(7 / 5 * 100%)' // 5:7 Proportion für die Höhe des Bildes
        }}
      >
        {/* Bild-Element mit absoluter Positionierung, um es vollständig in den Container zu passen */}
        <img 
          src={image} 
          alt={title} 
          className="absolute top-0 left-0 w-full h-full object-cover" 
        />
      </div>
      {/* Titel der Legung */}
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
      {/* Beschreibung der Legung */}
      <p className="mt-2">{info}</p>
      {/* Button, um die Legung zu starten */}
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        Start
      </button>
    </div>
  );
}

export default LegungBox;
