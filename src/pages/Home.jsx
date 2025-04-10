import React, { useState } from 'react';
import HeroBereich from '../components/HeroBereich';
import FiftyCards from '../components/newworld/FiftyCards';
import PythagoreanNumerology from '../components/PythagoreanNumerology';
import Rechner from '../components/Rechner';
import LegungCarousel from '../components/LegungCarousel';

// Legungen
import KeltischesKreuz from '../legungen/KeltischesKreuz';
import LebensbaumLegung from '../legungen/LebensbaumLegung';
import AstrologischeLegung from '../legungen/AstrologischeLegung';
import ChakraLegung from '../legungen/ChakraLegung';
import BeziehungsKompass from '../legungen/BeziehungsKompass';
import PentagrammLegung from '../legungen/PentagrammLegung';
import PyramidenLegung from '../legungen/PyramidenLegung';
import GrosseTafel from '../legungen/GrosseTafel';
import HufeisenLegung from '../legungen/HufeisenLegung';

const legungenArray = [
  { title: "Welt des inneren Gleichgewichts", image: "/CYRLGAME/images/chakralegung.jpg", info: "Reise durch die sieben Energiezentren...", component: ChakraLegung },
  { title: "Welt der Schicksalsfäden", image: "/CYRLGAME/images/keltischeskreuz.jpg", info: "Tauche ein in eine alte, keltische Struktur...", component: KeltischesKreuz },
  { title: "Welt des kosmischen Gleichklangs", image: "/CYRLGAME/images/astrologische.jpg", info: "Erkunde deine zwölf Lebensbereiche...", component: AstrologischeLegung },
  { title: "Welt der verborgenen Pfade", image: "/CYRLGAME/images/hufeisen.jpg", info: "Ein Blick auf die Entwicklung eines Themas...", component: HufeisenLegung },
  { title: "Welt des magischen Ursprungs", image: "/CYRLGAME/images/pyramiden.jpg", info: "Analysiere ein Thema von Grund auf...", component: PyramidenLegung },
  { title: "Welt der Herzensverbindungen", image: "/CYRLGAME/images/kompass.jpg", info: "Navigiere durch die emotionale Landschaft...", component: BeziehungsKompass },
  { title: "Welt der Elementarenergie", image: "/CYRLGAME/images/pentagramm.jpg", info: "Erkenne, wie die fünf Kräfte...", component: PentagrammLegung },
  { title: "Welt des Seelenbaums", image: "/CYRLGAME/images/lebensbaum.jpg", info: "Eine tiefgehende spirituelle Reise...", component: LebensbaumLegung },
  { title: "Welt der Weite Erkenntnis", image: "/CYRLGAME/images/21karten.jpg", info: "Die große Tafel: Eine umfassende Sicht...", component: GrosseTafel },
];

function Home() {
  const [selectedLegung, setSelectedLegung] = useState(null);
  const handleLegungClick = (LegungComponent) => setSelectedLegung(() => LegungComponent);
  const handleBackClick = () => setSelectedLegung(null);

  return (
    <div className="bg-[#260101] min-h-screen text-white">
      <HeroBereich />
      

      {selectedLegung ? (
        <section className="container mx-auto px-4">
          <button onClick={handleBackClick}
            className="mb-6 bg-[#8C5A67] text-white py-2 px-4 rounded hover:bg-[#A67C7C] transition">
            Zurück zur Übersicht
          </button>
          <div className="bg-[#DCDEF2] p-6 rounded-xl text-[#260101] shadow-lg">
            {React.createElement(selectedLegung)}
          </div>
        </section>
      ) : (
        <>
          <section className="text-center py-12">
            <p className="text-[#DCDEF2] text-xl mb-6">Wähle deine Legung und entdecke neue Perspektiven</p>
          </section>

          <LegungCarousel legungen={legungenArray} onLegungClick={handleLegungClick} />
        </>
      )}

      <div className="text-center my-10">
        <button onClick={() => window.location.reload()}
          className="bg-[#1A3A5D] text-white py-2 px-4 rounded hover:bg-[#163049] transition">
          Neues Spiel starten
        </button>
      </div>

      <PythagoreanNumerology />
      <FiftyCards />
      <Rechner />
    </div>
  );
}

export default Home;
