// src/components/newworld/TableGroup.jsx
import React from "react";
import PropTypes from "prop-types";

function TableGroup({ title, rows, onSelectCard }) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mt-6 mb-2 text-[#BF4A06]">{title}</h3>
      <div className="overflow-x-auto">
        <table className="table-auto w-full mb-6 border-collapse">
          <caption className="sr-only">Tabelle mit Karteninformationen</caption>
          <thead>
            <tr className="bg-[#1F4C73] text-white">
              <th className="border border-[#BF4A06] px-4 py-2">Nr.</th>
              <th className="border border-[#BF4A06] px-4 py-2">Karte</th>
              <th className="border border-[#BF4A06] px-4 py-2">Zahlensymbolik</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.nr}
                className={`transition-colors duration-300 cursor-pointer hover:bg-[#F2921D] ${
                  index % 2 === 0 ? "bg-[#F2CA50] text-[#8C1207]" : "bg-white"
                }`}
                onClick={() => onSelectCard(row.nr)}
              >
                <td className="border border-[#BF4A06] px-4 py-2">{row.nr}</td>
                <td className="border border-[#BF4A06] px-4 py-2">{row.karte}</td>
                <td className="border border-[#BF4A06] px-4 py-2">{row.zahlensymbolik}</td>
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
      zahlensymbolik: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelectCard: PropTypes.func.isRequired,
};

export default TableGroup;
