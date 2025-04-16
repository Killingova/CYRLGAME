// src/pages/PfadDesParadoxonsArticle.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MotionText from "../components/MotionText"; // ggf. Pfad anpassen

// Definition der Slides mit integriertem neuen Inhalt und weiterführendem altem Content
const slides = [
  {
    title: "Einführung: Der Pfad des Paradoxons",
    content: (
      <>
        <p className="mb-4 text-2xl font-bold text-[#4a4a4a]">
          Der „Pfad des Paradoxons“ – Ein universeller Erfahrungsweg
        </p>
        <p className="mb-4 text-lg text-[#260101]">
          Dieser Weg zeigt, dass wahrer Fortschritt oft dadurch entsteht, dass wir Gegensätze und Widersprüche nicht als Hindernisse, sondern als Chancen zur Entwicklung sehen.
        </p>
        <p className="mb-4 text-base text-[#6d6d6d]">
          Licht und Schatten, Materie und Geist, Wissen und Nichtwissen – all dies fließt in die tiefe Erkenntnis ein, die wir auf diesem Pfad gewinnen.
        </p>
      </>
    ),
  },
  {
    title: "Was bedeutet der Pfad des Paradoxons?",
    content: (
      <>
        <h3 className="mb-4 text-xl font-semibold text-[#333333]">Bedeutung und Erkenntnis</h3>
        <p className="mb-4 text-base text-[#260101]">
          Der Pfad des Paradoxons lehrt uns, dass durch das Loslassen von Kontrolle und das Annehmen des Unbekannten echte innere Freiheit entsteht.
        </p>
        <p className="mb-4 text-base text-[#260101]">
          Die Integration scheinbar widersprüchlicher Aspekte eröffnet uns einen Raum, in dem Wachstum und Ganzheit möglich werden.
        </p>
      </>
    ),
  },
  {
    title: "Astrologie: Polaritäten und Potenziale",
    content: (
      <>
        <h3 className="mb-4 text-xl font-semibold text-[#333333]">Astrologische Systeme</h3>
        <p className="mb-4 text-base text-[#260101]">
          Viele astrologische Traditionen arbeiten mit Polaritäten wie Sonne/Mond oder männlich/weiblich. Diese Gegensätze entstehen in jedem Horoskop als Spannungsfelder und Entwicklungspotenziale.
        </p>
        <p className="mb-4 text-base text-[#260101]">
          Durch die bewusste Integration dieser Polaritäten können wir zu einem ausgewogenen und ganzheitlichen Selbst finden.
        </p>
      </>
    ),
  },
  {
    title: "Numerologie: Zahlen als Spiegel der Seele",
    content: (
      <>
        <h3 className="mb-4 text-xl font-semibold text-[#333333]">Numerologische Erkenntnisse</h3>
        <p className="mb-4 text-base text-[#260101]">
          Jede Zahl besitzt eine eigene Essenz und oft auch ihr Gegenteil. Die 4 symbolisiert zum Beispiel Struktur und Sicherheit – aber auch die Notwendigkeit, diese Strukturen zu überwinden, um wahre Freiheit zu erlangen.
        </p>
        <p className="mb-4 text-base text-[#260101]">
          So wird der spirituelle Weg als eine Reise durch verschiedene Zahlenqualitäten gesehen, in der jede Stufe neue Paradoxien und Lernaufgaben bereithält.
        </p>
      </>
    ),
  },
  {
    title: "Spiritualität weltweit: Tradition trifft Moderne",
    content: (
      <>
        <h3 className="mb-4 text-xl font-semibold text-[#333333]">Östliche und westliche Perspektiven</h3>
        <p className="mb-4 text-base text-[#260101]">
          In vielen östlichen Traditionen, wie dem Zen-Buddhismus, helfen unlösbare Rätsel (Koans), den rationalen Verstand zu überwinden. Gleichzeitig betonen hermetische Lehren das Prinzip „wie oben, so unten“.
        </p>
        <p className="mb-4 text-base text-[#260101]">
          Schamanische Wege lehren uns, dass Heilung und Wachstum oft durch das Akzeptieren von Gegensätzen erreicht werden.
        </p>
      </>
    ),
  },
  {
    title: "Symbolik, Ziel und Lebensweisheit",
    content: (
      <>
        <h3 className="mb-4 text-xl font-semibold text-[#333333]">Die Quintessenz</h3>
        <p className="mb-4 text-base text-[#260101]">
          Der Pfad fordert uns auf, die Komfortzone zu verlassen und alte Denkmuster zu hinterfragen. Er steht für Transformation, zyklische Prozesse und die Akzeptanz eines mehrdeutigen Lebens.
        </p>
        <p className="mb-4 text-base text-[#260101]">
          Durch das Erleben und Integrieren von Paradoxien gelangt man zu innerer Freiheit, Weisheit und Ganzheit.
        </p>
        <p className="mb-4 text-base italic text-[#8C5A67]">
          „Das Geheimnis liegt nicht darin, die Zahlen zu kennen, denn sie selbst sind das Geheimnis…“
        </p>
      </>
    ),
  },
  // Hier wird der alte Content weitergeführt:
  {
    title: "Faszination Natur und Sternzeichen",
    content: (
      <>
        <h3 className="mb-4 text-xl font-semibold text-[#333333]">Natur & Kosmos</h3>
        <p className="mb-4 text-base text-[#260101]">
          Von klein auf übte die Natur eine besondere Anziehungskraft aus. Farben, Formen und Muster fesselten mich und öffneten den Blick in die Welt der Sternzeichen.
        </p>
        <p className="mb-4 text-base text-[#260101]">
          Der Geburtsmoment spiegelt durch die Konstellation der Planeten individuelle Potenziale und Anlagen wider.
        </p>
      </>
    ),
  },
  {
    title: "Soziales Umfeld und persönliche Anpassung",
    content: (
      <>
        <h3 className="mb-4 text-xl font-semibold text-[#333333]">Gesellschaft und Selbstfindung</h3>
        <p className="mb-4 text-base text-[#260101]">
          Auch das soziale Umfeld – Familie, Gesellschaft und etablierte Denkweisen – prägt unser tägliches Leben. Doch neue Perspektiven können helfen, sich selbst bewusster zu begegnen.
        </p>
      </>
    ),
  },
  {
    title: "Vielseitige Methoden & moderne Energiearbeit",
    content: (
      <>
        <h3 className="mb-4 text-xl font-semibold text-[#333333]">Kreative Ansätze und moderne Techniken</h3>
        <p className="mb-4 text-base text-[#260101]">
          Verschiedene Systeme wie Tarot, Orakel und pythagoräische Numerologie werden hier mit modernen Ansätzen wie Human Design und dem „Body Code“ kombiniert.
        </p>
        <ul className="list-disc pl-5 mb-4 text-base text-[#260101]">
          <li>Tarot und Orakel: Fördern intuitive Einsichten und Kreativität.</li>
          <li>Human Design & Body Code: Erkennen und transformieren energetische Blockaden.</li>
        </ul>
        <p className="mb-4 text-base text-[#260101]">
          Zusätzlich unterstützen kreative Methoden wie Schreiben und Visualisierungen den Lernprozess.
        </p>
      </>
    ),
  },
  {
    title: "Zweck des Projekts & abschließendes Fazit",
    content: (
      <>
        <h3 className="mb-4 text-xl font-semibold text-[#333333]">Wissen teilen und Vielfalt leben</h3>
        <p className="mb-4 text-base text-[#260101]">
          Das Projekt „Pfad des Paradoxons“ vereint all diese Ansätze, um Wissen zu teilen und einen intensiven Wachstumsprozess zu ermöglichen.
        </p>
        <p className="mb-4 text-base text-[#260101]">
          Durch den Austausch verschiedenster Perspektiven können neue Ideen entstehen und das persönliche Potenzial weiter entfaltet werden.
        </p>
        <p className="mb-4 text-base text-[#260101]">
          Dieser Weg fördert nicht nur die innere Heilung, sondern unterstützt auch die persönliche und gesellschaftliche Entwicklung.
        </p>
        <p className="mb-4 text-base text-[#260101]">
          Lass uns gemeinsam diesen faszinierenden Pfad gehen und die Schönheit der Vielfalt erleben.
        </p>
      </>
    ),
  },
];

// Varianten für die Slide-Animationen
const slideVariants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

export default function PfadDesParadoxonsArticle() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Navigation: Nächste/Letzte Folie
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
    if (swipe < -50 && currentSlide < slides.length - 1) {
      handleNext();
    } else if (swipe > 50 && currentSlide > 0) {
      handlePrev();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#DCDEF2] to-[#D9A384] px-4 py-8 md:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-10">
        {/* Navigation-Buttons */}
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

        {/* Slide-Inhalt mit Drag-Unterstützung */}
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
              <h2 className="text-3xl font-bold mb-6 text-[#260101]">
                {slides[currentSlide].title}
              </h2>
              {slides[currentSlide].content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
