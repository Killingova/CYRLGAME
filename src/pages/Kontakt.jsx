import React from 'react';

const Kontakt = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-[#1F4C73]">Kontakt</h1>
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          Wenn du Fragen, Anregungen oder Feedback hast, freue ich mich, von dir zu hören.
        </p>
        <p>
          <strong>E-Mail:</strong><br />
          <a 
            href="mailto:kontakt@pfad-des-paradoxons.de" 
            className="text-[#BF4A06] underline"
          >
            kontakt@pfad-des-paradoxons.de
          </a>
        </p>
        <p>
          <strong>Telefon:</strong><br />
          +49 151 19495232
        </p>
        <p>
          <strong>Adresse:</strong><br />
          Kristin Zhivkova<br />
          Berner Koppel 8<br />
          22159 Hamburg, Deutschland
        </p>
      </div>
    </div>
  );
};

export default Kontakt;
