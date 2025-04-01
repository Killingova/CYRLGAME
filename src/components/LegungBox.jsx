// src/components/LegungBox.jsx
import React from 'react';

function LegungBox({ legung, onClick }) {
  const { title, image, info } = legung;

  return (
    <div
      className="
        group
        relative
        w-full
        max-w-sm
        bg-white
        border border-[#1F4C73]/20
        rounded-xl
        shadow-md
        cursor-pointer
        hover:shadow-lg
        transition
        overflow-hidden
      "
      onClick={onClick}
    >
      {/* 5:7 Bild-Proportion per Tailwind Utility */}
      <div className="relative aspect-[5/7]">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold text-[#1F4C73] mb-2 group-hover:underline transition">
          {title}
        </h2>
        <p className="text-gray-700">{info}</p>

        <button
          className="
            mt-4
            bg-[#1F4C73]
            text-white
            py-2
            px-4
            rounded
            hover:bg-[#163B5A]
            transition
            font-semibold
          "
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default LegungBox;
