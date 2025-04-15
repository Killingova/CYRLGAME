// src/pages/PfadDesParadoxonsArticle.jsx

import React from "react";
import { motion } from "framer-motion";

// Du könntest zusätzlich react-helmet o.ä. benutzen, um <title> und <meta> tags zu setzen

function PfadDesParadoxonsArticle() {
  // Framer Motion Variants für Fade-In
  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
    exit: { opacity: 0, y: 10, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      // Container-Hintergrund: dezenter Verlauf
      className="
        min-h-screen 
        bg-gradient-to-r 
        from-[#DCDEF2] 
        to-[#D9A384]
        px-4 
        py-8 
        md:px-8
      "
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <article
        className="
          max-w-3xl 
          mx-auto 
          bg-white 
          rounded-lg 
          shadow-lg 
          p-6 
          md:p-10
        "
      >
        {/* Hauptüberschrift mit Gradient-Text */}
        <header>
          <h1
            className="
              text-3xl 
              md:text-4xl 
              font-bold 
              mb-6 
              leading-tight
              bg-clip-text
              text-transparent
              bg-gradient-to-r
              from-[#8C5A67]
              to-[#A67C7C]
            "
          >
            Pfad des Paradoxons
          </h1>
          <p className="text-[#260101] mb-4 leading-7">
            Ein ganzheitlicher Blick auf kosmische Rhythmen, persönliche
            Entwicklung und neue Perspektiven.
          </p>
        </header>

        {/* Abschnitt 1 */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#260101]">
            1. Faszination Natur und Sternzeichen
          </h2>
          <p className="text-[#260101] mb-4 leading-7">
            Von klein auf übte die Natur eine besondere Anziehungskraft auf mich aus. 
            Farben, Formen und Muster zogen mich in ihren Bann. Später erweiterte 
            sich dieses Staunen auf die Welt der Sternzeichen. Hier begegnen uns 
            ausgeprägte Verhaltensmuster, die oft im Einklang mit bestimmten 
            Tierkreiszeichen stehen. Für mich hat der Geburtsmoment dabei eine 
            tiefere Bedeutung: Er wirkt wie ein Echo, in dem die Konstellation 
            der Planeten und Energien unsere individuellen Anlagen und Potenziale 
            widerspiegelt.
          </p>
        </section>

        {/* Abschnitt 2 */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#260101]">
            2. Soziales Umfeld und persönliche Anpassung
          </h2>
          <p className="text-[#260101] mb-4 leading-7">
            Neben kosmischen Einflüssen spielt das soziale Umfeld eine entscheidende 
            Rolle: Familie, Gesellschaft, Denkweisen – all das prägt uns. Oft passen 
            wir uns an, was wir kennen, ohne es zu hinterfragen. Neue Perspektiven 
            wirken dann wie ein Türöffner: Erst wenn wir uns bewusst verschiedenen 
            Blickwinkeln öffnen, gelangen wir zu einem tieferen Verständnis unserer 
            selbst und können wachsen.
          </p>
        </section>

        {/* Abschnitt 3 */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#260101]">
            3. Vielseitige Methoden: Numerologie, Human Design & mehr
          </h2>
          <p className="text-[#260101] mb-4 leading-7">
            Um diese Entwicklung anzuregen, können verschiedene Systeme ineinandergreifen:
          </p>
          <ul className="list-disc list-inside text-[#260101] mb-4 leading-7">
            <li>
              <strong>Pythagorische Numerologie</strong>: Zahlen als Spiegel unserer 
              Persönlichkeit; jede Ziffer von 1 bis 9 besitzt eine eigene energetische Qualität.
            </li>
            <li>
              <strong>Tibetische Numerologie</strong>: Verbindet Zahlenmystik mit östlicher 
              Lehre und zeigt individuelle Energieflüsse auf.
            </li>
            <li>
              <strong>Human Design</strong>: Kombiniert Astrologie, I-Ging, Kabbala und 
              Chakrenlehre zu einer „inneren Landkarte“, die individuelle 
              Entscheidungsprozesse und Potenziale beleuchtet.
            </li>
            <li>
              <strong>Tarot und Orakel</strong>: Symbolhafte Legungen und Meditationen, 
              die intuitive Einsichten ermöglichen und die Kreativität fördern.
            </li>
          </ul>
          <p className="text-[#260101] mb-4 leading-7">
            Diese Ansätze – gepaart mit dem Blick auf Schicksalsmodelle, Matrix-Theorien 
            und astrologische Horoskope – ergeben einen integralen Ansatz. Er hilft, 
            zentrale Muster zu erkennen, alte Prägungen aufzulösen und mit mehr Klarheit 
            auf den eigenen Lebensweg zu schauen.
          </p>
          <p className="text-[#260101] mb-4 leading-7">
            Darüber hinaus fördern Methoden wie kreatives Schreiben, geführte 
            Visualisierungen oder das bewusste Gestalten einer Geschichte die 
            spielerische Auseinandersetzung mit den eigenen Themen. Auf diese Weise 
            wird Lernen leichter, da wir nicht nur mit dem Verstand, sondern auch mit 
            unserer Vorstellungskraft arbeiten.
          </p>
        </section>

        {/* Abschnitt 4 */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#260101]">
            4. Moderne Energiearbeit und innere Freiheit
          </h2>
          <p className="text-[#260101] mb-4 leading-7">
            Auf körperlich-energetischer Ebene lassen sich mithilfe von Konzepten wie dem 
            „Body Code“ (allgemein verstanden als ein System zur Auflösung energetischer 
            Blockaden) tiefsitzende Muster aufspüren. Alte Glaubenssätze – manchmal auch 
            als Teil einer „Matrix-Illusion“ bezeichnet – werden so erkennbar und können 
            transformiert werden. Dadurch werden innere Freiräume geschaffen, die eine 
            authentische Entfaltung erlauben.
          </p>
          <p className="text-[#260101] mb-4 leading-7">
            Dieser Prozess ist gleichermaßen für rationale Skeptiker wie für Menschen mit 
            starkem kosmischen Bezug geeignet. Entscheidend ist die Offenheit, sich selbst 
            bewusster zu begegnen und individuelle Entwicklungsschritte einzuleiten.
          </p>
        </section>

        {/* Abschnitt 5 */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#260101]">
            5. Zweck des Projekts: Wissen teilen und Vielfalt leben
          </h2>
          <p className="text-[#260101] mb-4 leading-7">
            All diese Gedanken bündeln sich im Pfad des Paradoxons – einem Projekt, das zum 
            Ziel hat, Wissen weiterzugeben und zugleich mehr Abwechslung und Freude im Leben 
            zu eröffnen. Durch den Austausch verschiedener Blickwinkel und das gemeinsame 
            Erforschen von Methoden entsteht ein wahrhaft intensiver Wachstumsprozess. Es 
            geht darum, Mut zu fassen, sich neuen Themen zu stellen, innere Ängste zu 
            überwinden und das eigene Potenzial zu entfalten.
          </p>
          <p className="text-[#260101] mb-4 leading-7">
            Anknüpfend an Naturheilungen, Tantralehren, Chakrenarbeit oder auch moderne 
            Management- und IT-Konzepte (z. B. Scrum) möchte dieses Projekt zeigen, dass 
            sich spirituelle und weltliche Bereiche keineswegs ausschließen müssen. Gerade 
            in ihrer Verbindung liegt oft eine unerwartete Kraft, die unsere Perspektiven 
            erweitert und uns in eine bewusstere Lebensführung führt.
          </p>
        </section>

        {/* Abschnitt 6 */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#260101]">
            6. Fazit: Entwicklung durch Integration
          </h2>
          <p className="text-[#260101] mb-4 leading-7">
            Der Kerngedanke des Pfads des Paradoxons ist, dass gegensätzliche oder 
            widersprüchlich scheinende Konzepte sich nicht gegenseitig ausschließen 
            müssen. Im Gegenteil: Indem wir Hermetik, Numerologie, Astrologie, 
            Energiearbeit und moderne Methoden vereinen, können wir eine tiefgreifende 
            Ganzheit erfahren.
          </p>
          <p className="text-[#260101] mb-4 leading-7">
            Die wahre Stärke liegt darin, sowohl das rationale Hinterfragen als auch das 
            intuitive Gespür zuzulassen. Diese Verbindung gibt uns Raum, Paradoxien als 
            Bereicherung zu betrachten und unser Bewusstsein auf spielerische Weise zu 
            erweitern. So wird die eigene Entwicklung kein starrer Pfad, sondern ein 
            lebendiger, fortwährender Prozess – immer im Fluss zwischen unterschiedlichen 
            Polen.
          </p>
          <p className="text-[#260101] mb-4 leading-7">
            Wer sich auf diesen Weg begibt, erfährt, dass das Paradoxe keinen Widerspruch 
            darstellt, sondern eine Chance, tiefer zu blicken. Genau hier verbirgt sich 
            das Potenzial für neue Ideen, innere Heilung und nachhaltige persönliche 
            Entfaltung.
          </p>
        </section>

        <footer className="mt-8 text-[#260101] leading-7">
          <p>
            <strong>Projekt:</strong> Pfad des Paradoxons – ein Raum zwischen 
            Geist und Materie, in dem wir durch spielerisches Lernen und 
            bewusste Integration neuer Perspektiven unsere eigene Entwicklung 
            vorantreiben können.
          </p>
        </footer>
      </article>
    </motion.div>
  );
}

export default PfadDesParadoxonsArticle;
