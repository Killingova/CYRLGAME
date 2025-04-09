import React from "react";
import PropTypes from "prop-types";

function TableGroup({ title, rows, onSelectCard }) {
  
  const handleKeyDown = (event, nr) => {
    if (event.key === "Enter" || event.key === " ") {
      onSelectCard(nr);
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#8C5A67]">
        {title}
      </h3>
      <div className="overflow-x-auto">
        <table className="table-auto w-full mb-6 border-collapse">
          <caption className="sr-only">Tabelle mit Karteninformationen</caption>
          <thead>
            <tr className="bg-[#8C5A67] text-[#DCDEF2]">
              <th className="border border-[#A67C7C] px-4 py-2">Nr.</th>
              <th className="border border-[#A67C7C] px-4 py-2">Karte</th>
              <th className="border border-[#A67C7C] px-4 py-2">Symbolik</th>
              <th className="border border-[#A67C7C] px-4 py-2">Reflexion</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.nr}
                tabIndex="0"
                role="button"
                className={`transition-colors duration-300 cursor-pointer focus:outline-none 
                  hover:bg-[#8C5A67] hover:text-[#DCDEF2] focus:ring-2 focus:ring-[#8C5A67]
                  ${index % 2 === 0 ? "bg-[#DCDEF2] text-[#260101]" : "bg-[#D9A384] text-[#260101]"}
                `}
                onClick={() => onSelectCard(row.nr)}
                onKeyDown={(e) => handleKeyDown(e, row.nr)}
              >
                <td className="border border-[#A67C7C] px-4 py-2">{row.nr}</td>
                <td className="border border-[#A67C7C] px-4 py-2">{row.karte}</td>
                <td className="border border-[#A67C7C] px-4 py-2">{row.symbolik}</td>
                <td className="border border-[#A67C7C] px-4 py-2">{row.reflexionsfrage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

TableGroup.propTypes = {
  title: PropTypes.string.isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      nr: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      karte: PropTypes.string.isRequired,
      symbolik: PropTypes.string,
      reflexionsfrage: PropTypes.string,
    })
  ).isRequired,
  onSelectCard: PropTypes.func.isRequired,
};

export default TableGroup;
