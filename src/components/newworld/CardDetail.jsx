import React from "react";
import { cardArticles } from "../../data/newworld/newworldData";

function CardDetail({ nr, onClose }) {
  const article = cardArticles[nr];

  if (!article) {
    return (
      <div className="bg-white p-6 text-[#260101] rounded shadow-lg">
        <p className="mb-4">Kein ausführlicher Artikel für Karte Nr. {nr} vorhanden.</p>
        <button
          onClick={onClose}
          className="mt-4 bg-[#8C5A67] text-white px-4 py-2 rounded hover:bg-[#260101] transition"
        >
          Schließen
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 text-[#260101] rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-[#8C5A67]">{article.title}</h2>
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      <button
        onClick={onClose}
        className="mt-6 bg-[#8C5A67] text-white px-4 py-2 rounded hover:bg-[#260101] transition"
      >
        Schließen
      </button>
    </div>
  );
}

export default CardDetail;
