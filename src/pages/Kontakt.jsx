import React, { useState } from "react";

const Kontakt = () => {
  const [name, setName] = useState("");
  const [adresse, setAdresse] = useState("");
  const [nachricht, setNachricht] = useState("");

  const handleSubmit = () => {
    const subject = encodeURIComponent("Kontaktanfrage von Pfad des Paradoxons");
    const body = encodeURIComponent(
      `Nachricht:\n${nachricht}\n\nName: ${name}\nAdresse / Rückrufnummer: ${adresse}`
    );
    window.location.href = `mailto:kontakt@pfad-des-paradoxons.de?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-[#260101]">
      <h1 className="text-4xl font-bold mb-6 text-[#1F4C73]">Kontakt</h1>
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          Wenn du Fragen, Anregungen oder Feedback hast, freue ich mich, von dir zu hören.
        </p>
        <p>
          Du kannst mir gerne eine Nachricht hinterlassen. Falls du eine Rückmeldung möchtest,
          gib bitte deine E-Mail oder Telefonnummer an.
        </p>
      </div>

      <div className="mt-8 space-y-4">


        <button
          onClick={handleSubmit}
          className="bg-[#8C5A67] text-white px-6 py-3 rounded hover:bg-[#A67C7C] transition"
        >
          Nachricht senden
        </button>
      </div>
    </div>
  );
};

export default Kontakt;
