import React from 'react';

const Summary = ({ positions, positionsInfo }) => {
  return (
    <section className="mt-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-[#8C5A67] mb-10 tracking-wide">
        Deine Reise – Zusammenfassung
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {positions.map((position, index) => (
          <div
            key={index}
            className="bg-[#DCDEF2] border border-[#A67C7C] rounded-2xl shadow-lg p-6 hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-semibold text-[#260101] mb-4">
              {positionsInfo[index]}
            </h3>

            {position.card ? (
              <div className="space-y-2 text-[#260101]">
                <p>
                  <span className="font-bold text-[#8C5A67]">Karte:</span>{' '}
                  {position.card.name}
                </p>
                <p>
                  <span className="font-bold text-[#8C5A67]">Deutung:</span>{' '}
                  {position.card.meaning}
                </p>
                <p>
                  <span className="font-bold text-[#8C5A67]">Meditation:</span>{' '}
                  {position.card.meditation}
                </p>
                <p>
                  <span className="font-bold text-[#8C5A67]">Tipps:</span>{' '}
                  {position.card.tips}
                </p>
              </div>
            ) : (
              <p className="italic text-gray-500">Keine Karte gezogen.</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Summary;
