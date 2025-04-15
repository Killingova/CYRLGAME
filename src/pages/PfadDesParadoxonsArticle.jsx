// src/pages/PfadDesParadoxonsArticle.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MotionText from "../components/MotionText"; // Pfad anpassen

// Definition aller Slides als Objekte
const slides = [
  {
    title: "Pfad des Paradoxons",
    content: (
      <>
        <p className="mb-4 leading-7 text-[#260101]">
          Zwischen Licht und Schatten, Logik und Magie entsteht ein Raum der tiefen Erkenntnis.
        </p>
        <p className="mb-4 leading-7 text-[#260101]">
          Der <strong>Pfad des Paradoxons</strong> ist eine geistige und zugleich lebensnahe Reise, bei der scheinbar widersprüchliche
          Perspektiven, Konzepte und Gefühle aufeinandertreffen – und gerade dadurch neue Erkenntnisse
          entstehen können.
        </p>
      </>
    ),
  },
  {
    title: "Faszination Natur und Sternzeichen",
    content: (
      <>
        <p className="mb-4 leading-7 text-[#260101]">
          Von klein auf übte die Natur eine besondere Anziehungskraft auf mich aus. Farben, Formen und Muster zogen mich in ihren Bann.
          Später erweiterte sich dieses Staunen auf die Welt der Sternzeichen. Hier begegnen uns ausgeprägte
          Verhaltensmuster, die oft im Einklang mit bestimmten Tierkreiszeichen stehen.
        </p>
        <p className="mb-4 leading-7 text-[#260101]">
          Für mich hat der Geburtsmoment eine tiefere Bedeutung: Er wirkt wie ein Echo, in dem die Konstellation der Planeten
          und Energien unsere individuellen Anlagen und Potenziale widerspiegelt.
        </p>
      </>
    ),
  },
  {
    title: "Soziales Umfeld und persönliche Anpassung",
    content: (
      <>
        <p className="mb-4 leading-7 text-[#260101]">
          Neben kosmischen Einflüssen spielt das soziale Umfeld eine entscheidende Rolle: Familie, Gesellschaft und Denkweisen prägen
          uns – häufig, ohne dass wir es bewusst hinterfragen. Erst neue Perspektiven eröffnen einen tieferen Zugang zu uns selbst.
        </p>
      </>
    ),
  },
  {
    title: "Vielseitige Methoden: Numerologie, Human Design & mehr",
    content: (
      <>
        <p className="mb-4 leading-7 text-[#260101]">
          Diverse Deutungssysteme können kombiniert werden, um Erkenntnisse zu gewinnen – ohne in jedes einzelne Detail zu gehen.
          Im Überblick:
        </p>
        <ul className="list-disc list-inside text-[#260101] mb-4 leading-7">
          <li>
            <strong>Tarot und Orakel</strong>: Symbolhafte Legungen, die intuitive Einsichten und Kreativität fördern.
          </li>
          <li>
            <strong>Pythagorische Numerologie</strong>: Zahlen als Spiegel der Persönlichkeit, wobei jede Ziffer (1–9) eine eigene
            energetische Qualität besitzt.
          </li>
        </ul>
        <p className="text-[#260101] mb-4 leading-7">
          Ergänzt wird dies durch Ansätze zu Schicksalsmodellen, Matrix-Theorien und astrologischen Horoskopen – ein integraler Ansatz,
          der dazu beiträgt, Muster zu erkennen und neue Klarheit zu gewinnen.
        </p>
        <p className="text-[#260101] mb-4 leading-7">
  <MotionText
    text="
      Auch spielerische Methoden wie kreatives Schreiben und Visualisierungen
      unterstützen den Lernprozess, indem sie nicht nur den Verstand,
      sondern auch die Vorstellungskraft einbeziehen.
    "
  />
</p>
      </>
    ),
  },
  {
    title: "Moderne Energiearbeit und innere Freiheit",
    content: (
      <>
        <p className="text-[#260101] mb-4 leading-7">
          Mithilfe von Konzepten wie dem „Body Code“ lassen sich energetische Blockaden erkennen und alte Glaubenssätze – Teil einer
          „Matrix-Illusion“ – transformieren. So entstehen Freiräume für authentische Entfaltung.
        </p>
        <p className="text-[#260101] mb-4 leading-7">
          Dieser Prozess ist sowohl für rationale Skeptiker als auch für Menschen mit stark kosmischem Bezug geeignet. Entscheidend ist
          die Offenheit, sich selbst bewusster zu begegnen und individuelle Entwicklungsschritte zu gehen.
        </p>
      </>
    ),
  },
  {
    title: "Zweck des Projekts: Wissen teilen und Vielfalt leben",
    content: (
      <>
        <p className="text-[#260101] mb-4 leading-7">
          Der Pfad des Paradoxons bündelt all diese Gedanken in einem Projekt, das darauf abzielt, Wissen weiterzugeben
          und für mehr Abwechslung im Leben zu sorgen. Durch den Austausch verschiedener Perspektiven entsteht ein intensiver
          Wachstumsprozess, der Mut macht, sich neuen Themen zu stellen und das eigene Potenzial zu entfalten.
        </p>
        <p className="text-[#260101] mb-4 leading-7">
          Auch Naturheilungen, tantrische Lehren, Chakrenarbeit sowie moderne Management- und IT-Konzepte finden hier ihren Platz,
          denn spirituelle und weltliche Bereiche schließen sich keineswegs aus.
        </p>
      </>
    ),
  },
  {
    title: "Fazit: Entwicklung durch Integration",
    content: (
      <>
        <p className="text-[#260101] mb-4 leading-7">
          Der Gedanke des Pfads des Paradoxons ist, dass scheinbar widersprüchliche Konzepte sich nicht ausschließen.
          Durch die Verbindung von Hermetik, Numerologie, Astrologie, Energiearbeit und modernen Methoden entsteht
          eine tiefgehende Ganzheit.
        </p>
        <p className="text-[#260101] mb-4 leading-7">
          Indem wir rationales Hinterfragen mit intuitivem Gespür vereinen, bietet sich Raum, Paradoxien als Bereicherung zu erleben und
          unser Bewusstsein spielerisch zu erweitern – ein fortwährender Entwicklungsprozess.
        </p>
        <p className="text-[#260101] mb-4 leading-7">
          Dieser Weg eröffnet neue Ideen, fördert innere Heilung und unterstützt die persönliche Entfaltung in einem dynamischen Miteinander.
        </p>
        <p className="text-[#260101] mb-4 leading-7">
          <strong>Projekt:</strong> Pfad des Paradoxons – ein Raum zwischen Geist und Materie, in dem durch spielerisches Lernen und
          bewusste Integration neuer Perspektiven die eigene Entwicklung vorangetrieben wird.
        </p>
      </>
    ),
  },
];

// Varianten für Slide-Animationen
const slideVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

export default function PfadDesParadoxonsArticle() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Funktionen für Navigation
  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Swipe-Funktionalität mittels Framer Motion
  const handleDragEnd = (event, info) => {
    const swipe = info.offset.x;
    // Schwellenwert von 50 Pixeln für den Swipe
    if (swipe < -50 && currentSlide < slides.length - 1) {
      handleNext();
    } else if (swipe > 50 && currentSlide > 0) {
      handlePrev();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#DCDEF2] to-[#D9A384] px-4 py-8 md:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-10">
        {/* Navigation-Buttons oben */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handlePrev}
            disabled={currentSlide === 0}
            className="bg-[#8C5A67] text-white py-2 px-4 rounded font-semibold transition duration-300 hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Zurück
          </button>
          <button
            onClick={handleNext}
            disabled={currentSlide === slides.length - 1}
            className="bg-[#8C5A67] text-white py-2 px-4 rounded font-semibold transition duration-300 hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Weiter
          </button>
        </div>

        {/* Slide-Inhalt mit Touch/Drag-Unterstützung */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
            >
              {/* Slide-Header */}
              <h2 className="text-2xl font-semibold mb-4 text-[#260101]">
                {slides[currentSlide].title}
              </h2>
              {/* Slide-Inhalt */}
              {slides[currentSlide].content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
