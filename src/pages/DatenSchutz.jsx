import React from 'react';

const DatenSchutz = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-[#1F4C73]">Datenschutz</h1>
      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          <strong>Datenschutzerklärung</strong><br />
          Der Schutz Ihrer persönlichen Daten ist mir ein besonderes Anliegen. In dieser Datenschutzerklärung informiere ich Sie darüber, welche Daten auf dieser Webseite erhoben, verarbeitet und genutzt werden.
        </p>
        <p>
          <strong>Erhebung und Verarbeitung personenbezogener Daten:</strong><br />
          Bei jedem Zugriff auf diese Webseite werden automatisch Daten wie die IP-Adresse, Browsertyp, Betriebssystem und Zugriffszeiten erhoben. Diese Daten dienen ausschließlich der Fehlerdiagnose und Verbesserung der Seite.
        </p>
        <p>
          <strong>Cookies:</strong><br />
          Diese Seite verwendet keine Cookies, die personenbezogene Daten speichern. Sollten Cookies zum Einsatz kommen, werde ich Sie darüber in einer aktualisierten Erklärung informieren.
        </p>
        <p>
          <strong>Externe Links:</strong><br />
          Diese Webseite enthält Links zu externen Webseiten. Für den Inhalt und die Datenschutzpraktiken dieser Seiten bin ich nicht verantwortlich.
        </p>
        <p>
          <strong>Kontaktaufnahme:</strong><br />
          Wenn Sie mir per E-Mail schreiben, werden Ihre Angaben aus der E-Mail inklusive aller darin enthaltenen Daten gespeichert, um Ihre Anfrage bearbeiten zu können. Diese Daten werden nicht an Dritte weitergegeben.
        </p>
        <p>
          <strong>Rechte der betroffenen Personen:</strong><br />
          Sie haben das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten sowie das Recht auf Berichtigung, Löschung und Sperrung dieser Daten. Bitte kontaktieren Sie mich dazu unter:{" "}
          <a href="mailto:kontakt@pfad-des-paradoxons.de" className="text-[#BF4A06] underline">
            kontakt@pfad-des-paradoxons.de
          </a>
        </p>
      </div>
    </div>
  );
};

export default DatenSchutz;
