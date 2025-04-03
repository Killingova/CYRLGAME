// src/components/NewWorld/TableGroup.jsx

import React from "react";

function TableGroup({ title, rows }) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mt-6 mb-2">{title}</h3>
      <table className="table-auto w-full mb-6 border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Nr.</th>
            <th className="border px-4 py-2">Karte</th>
            <th className="border px-4 py-2">Zahlensymbolik</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.nr}>
              <td className="border px-4 py-2">{row.nr}</td>
              <td className="border px-4 py-2">{row.karte}</td>
              <td className="border px-4 py-2">{row.zahlensymbolik}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableGroup;
