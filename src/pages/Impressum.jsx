import React from 'react';

const Impressum = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-[#1F4C73]">Impressum</h1>

      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          <strong>Angaben gemäß § 5 TMG:</strong><br />
          Kristin Zhivkova<br />
          Berner Koppel 8<br />
          22159 Hamburg, Deutschland
        </p>

        <p>
          <strong>Kontakt:</strong><br />
          E-Mail:{" "}
          <a
            href="mailto:ms.zhivkova@googlemail.com"
            className="text-[#BF4A06] underline"
          >
            ms.zhivkova@googlemail.com
          </a><br />
          Telefon: +49 151 19495232
        </p>

        <p>
          <strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</strong><br />
          Kristin Zhivkova
        </p>

        <p>
          Dieses Projekt ist ein rein privates, nicht-kommerzielles Angebot. Es
          werden keine Produkte oder Dienstleistungen verkauft. Keine
          kommerzielle Nutzung oder Werbung.
        </p>

        <p>
          <strong>Haftung für Inhalte:</strong><br />
          Ich bemühe mich, alle Inhalte auf dieser Seite sorgfältig zu prüfen und
          aktuell zu halten. Dennoch kann ich keine Gewähr für Richtigkeit,
          Vollständigkeit und Aktualität übernehmen. Nach §§ 8 bis 10 TMG bin ich
          nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen
          zu überwachen oder nach Umständen zu forschen, die auf eine
          rechtswidrige Tätigkeit hinweisen.
        </p>

        <p>
          <strong>Haftung für Links:</strong><br />
          Diese Webseite kann Links zu externen Webseiten Dritter enthalten, auf
          deren Inhalte ich keinen Einfluss habe. Für diese Inhalte wird daher
          keine Haftung übernommen.
        </p>

        <p>
          <strong>Urheberrecht:</strong><br />
          Alle durch mich erstellten Inhalte unterliegen dem deutschen
          Urheberrecht. Eine Vervielfältigung oder Verbreitung ist nur mit
          schriftlicher Zustimmung gestattet. Inhalte Dritter sind als solche
          gekennzeichnet.
        </p>

        <p>
          <strong>Datenschutz:</strong><br />
          Diese Webseite wird über GitHub Pages gehostet. Dabei können
          automatisch Server-Logfiles (z. B. IP-Adresse, Zeitpunkt) erfasst
          werden. Ich selbst verwende kein Tracking und keine Cookies. Details
          siehe:{" "}
          <a
            href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#BF4A06] underline"
          >
            GitHub Privacy Statement
          </a>
        </p>
      </div>
    </div>
  );
};

export default Impressum;
