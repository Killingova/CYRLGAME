import React, { useState, useCallback } from 'react';
import CardBox from '../components/CardBox.jsx';
import CardDisplay from '../components/CardDisplay.jsx';
import Summary from '../components/Summary.jsx';

const ChakraLegung = () => {
  const [positions, setPositions] = useState(Array(7).fill({ card: null }));
  const [deck, setDeck] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const positionsInfo = [
    "Sicherheit & Überleben.",
    "Kreativität & Emotionen.",
    "Selbstbewusstsein & Stärke.",
    "Liebe & Mitgefühl.",
    "Kommunikation & Wahrheit.",
    "Intuition & Weisheit.",
    "Spiritualität & Verbindung."
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
    <div className="bg-[#260101] min-h-screen py-10 px-4">
      <CardBox onCardSetSelect={handleCardSetSelect} />

      <div className="text-center mb-10">
        <h2 className="text-4xl text-[#F2CA50] font-bold mb-2">Chakra-Legung</h2>
        <p className="text-[#DCDEF2] max-w-xl mx-auto">
          Ziehe Karten und entdecke Blockaden oder Stärken in deinen Energiezentren.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 justify-items-center">
        {positions.map((position, index) => (
          <div
            key={index}
            onClick={() => onPositionClick(index)}
            className="bg-[#D9A384]/20 border border-[#A67C7C] rounded-lg shadow-md w-[80px] sm:w-[100px] h-[140px] flex flex-col justify-center items-center text-center cursor-pointer hover:bg-[#8C5A67]/40 transition"
          >
            {position.card ? (
              <CardDisplay card={position.card} onClick={() => onCardClick(position.card)} />
            ) : (
              <>
                <span className="font-bold text-[#DCDEF2] text-sm">
                  {index + 1}
                </span>
                <p className="text-xs text-[#DCDEF2]">{positionsInfo[index]}</p>
              </>
            )}
          </div>
        ))}
      </div>

      <Summary positions={positions} positionsInfo={positionsInfo} />
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

export default ChakraLegung;
