import KeltischesKreuz from '../legungen/KeltischesKreuz';
import LebensbaumLegung from '../legungen/LebensbaumLegung';
import AstrologischeLegung from '../legungen/AstrologischeLegung';
import ChakraLegung from '../legungen/ChakraLegung';
import BeziehungsKompass from '../legungen/BeziehungsKompass';
import PentagrammLegung from '../legungen/PentagrammLegung';
import PyramidenLegung from '../legungen/PyramidenLegung';
import GrosseTafel from '../legungen/GrosseTafel';
import HufeisenLegung from '../legungen/HufeisenLegung';

export const legungen = [
  {
    title: "Welt des inneren Gleichgewichts",
    image: `${import.meta.env.BASE_URL}images/chakralegung.jpg`,
    info: "Reise durch die sieben Energiezentren deines Körpers und erkenne, wo Harmonie oder Blockaden verborgen liegen.",
    component: <ChakraLegung />
  },
  {
    title: "Welt der Schicksalsfäden",
    image: `${import.meta.env.BASE_URL}images/keltischeskreuz.jpg`,
    info: "Tauche ein in eine alte, keltische Struktur, die dir Klarheit über Vergangenheit, Gegenwart und Zukunft schenkt.",
    component: <KeltischesKreuz />
  },
  {
    title: "Welt des kosmischen Gleichklangs",
    image: `${import.meta.env.BASE_URL}images/astrologische.jpg`,
    info: "Erkunde deine zwölf Lebensbereiche und erkenne, welche Sterne dir gerade leuchten oder verborgen bleiben.",
    component: <AstrologischeLegung />
  },
  {
    title: "Welt der verborgenen Pfade",
    image: `${import.meta.env.BASE_URL}images/hufeisen.jpg`,
    info: "Ein Blick auf die Entwicklung eines Themas – von der Vergangenheit, über das Jetzt, bis hin zum Kommenden.",
    component: <HufeisenLegung />
  },
  {
    title: "Welt des magischen Ursprungs",
    image: `${import.meta.env.BASE_URL}images/pyramiden.jpg`,
    info: "Analysiere ein Thema von Grund auf und erkenne den Weg zur spirituellen Spitze deiner Situation.",
    component: <PyramidenLegung />
  },
  {
    title: "Welt der Herzensverbindungen",
    image: `${import.meta.env.BASE_URL}images/kompass.jpg`,
    info: "Navigiere durch die emotionale Landschaft deiner Beziehungen – mit Blick auf Sehnsucht, Nähe und gemeinsame Wege.",
    component: <BeziehungsKompass />
  },
  {
    title: "Welt der Elementarenergie",
    image: `${import.meta.env.BASE_URL}images/pentagramm.jpg`,
    info: "Erkenne, wie die fünf Kräfte (Erde, Wasser, Feuer, Luft & Geist) in deiner aktuellen Lebenslage wirken.",
    component: <PentagrammLegung />
  },
  {
    title: "Welt des Seelenbaums",
    image: `${import.meta.env.BASE_URL}images/lebensbaum.jpg`,
    info: "Eine tiefgehende spirituelle Reise entlang des kabbalistischen Lebensbaums – von Erkenntnis bis Transformation.",
    component: <LebensbaumLegung />
  },
  {
    title: "Welt der Weite Erkenntnis",
    image: `${import.meta.env.BASE_URL}images/21karten.jpg`,
    info: "Die große Tafel: Eine umfassende Sicht auf alle Aspekte deines Lebens – wie ein Blick von oben auf dein inneres Reich.",
    component: <GrosseTafel />
  }
];
