// src/components/Summary.jsx
import React from 'react';

const Summary = ({ positions, positionsInfo }) => {
  return (
    <section className="summary mt-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-[#1F4C73] mb-10 text-center">
        Zusammenfassung der Legung
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {positions.map((position, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 border border-[#1F4C73]/20"
          >
            <h3 className="text-2xl font-semibold text-[#1F4C73] mb-3">
              {positionsInfo[index]}
            </h3>

            {position.card ? (
              <div className="space-y-2 text-gray-800">
                <p>
                  <span className="font-medium text-[#1F4C73]">Karte:</span>{' '}
                  {position.card.name}
                </p>
                <p>
                  <span className="font-medium text-[#1F4C73]">Deutung:</span>{' '}
                  {position.card.meaning}
                </p>
                <p>
                  <span className="font-medium text-[#1F4C73]">Meditation:</span>{' '}
                  {position.card.meditation}
                </p>
                <p>
                  <span className="font-medium text-[#1F4C73]">Tipps:</span>{' '}
                  {position.card.tips}
                </p>
              </div>
            ) : (
              <p className="italic text-gray-500">Keine Karte gezogen</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Summary;
