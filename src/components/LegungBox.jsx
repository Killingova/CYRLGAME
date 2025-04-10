import React from 'react';

const LegungBox = ({ legung, onClick }) => {
  const { title, image, info } = legung;

  return (
    <div
      onClick={onClick}
      className="bg-[#DCDEF2] border border-[#8C5A67] rounded-xl shadow-md hover:shadow-lg transition overflow-hidden cursor-pointer"
    >
      <div className="relative aspect-[5/7]">
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      </div>

      <div className="p-4">
        <h2 className="text-[#8C5A67] text-xl font-bold mb-2">{title}</h2>
        <p className="text-[#260101] text-sm">{info}</p>

        <button
          className="mt-4 bg-[#8C5A67] text-white py-2 px-4 rounded hover:bg-[#A67C7C] transition font-semibold"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default LegungBox;
