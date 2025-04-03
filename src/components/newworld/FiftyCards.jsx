// src/components/newworld/FiftyCards.jsx

import React from "react";
import TableGroup from "./TableGroup";
import { groups, finalInfos } from "../../data/newworld/newworldData.js";
// Beachte den relativen Pfad - 2x '..' weil wir in: src/components/NewWorld/ sind => zurück nach src, dann data/newworld

function FiftyCards() {
  return (
    <section className="p-6 bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Hauptüberschrift */}
        <h2 className="text-3xl font-bold mb-4">
          🌐 50 Karten – Zahlenmuster & Symbolische Bedeutungen
        </h2>

        {/* Alle Gruppen (Tabellen) nacheinander */}
        {groups.map((group, idx) => (
          <TableGroup 
            key={idx} 
            title={group.title} 
            rows={group.rows} 
          />
        ))}

        {/* Abschluss */}
        <h2 className="text-3xl font-bold mt-8 mb-4">✨ Zahlenlogik der 50 Karten</h2>
        <p className="mb-6 whitespace-pre-line">
          {finalInfos}
        </p>
      </div>
    </section>
  );
}

export default FiftyCards;
