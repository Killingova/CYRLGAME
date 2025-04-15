import React, { useState } from "react";
import { FaInstagram, FaTiktok, FaWhatsapp, FaThreads, FaXTwitter, FaTelegram, FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer
  onMouseEnter={() => setIsOpen(true)}
  onMouseLeave={() => setIsOpen(false)}
  onClick={() => setIsOpen(!isOpen)}
  className={`fixed bottom-0 left-0 w-full transition-all duration-500 ease-in-out 
  ${isOpen ? "h-56 bg-gradient-to-t from-[#DCDEF2] to-[#D9A384]" : "h-10 bg-transparent backdrop-blur-sm"} 
  border-t border-[#8C5A67] shadow-xl z-50 cursor-pointer`}
>
  <div className="max-w-6xl mx-auto flex flex-col justify-center h-full px-6">
    {/* Sichtbare Leiste */}
    <div className="flex justify-between items-center text-sm text-stone-500 h-10">
      <p className="drop-shadow-md">
        © {new Date().getFullYear()} Pfad des Paradoxons | Kristin Zhivkova
      </p>
      <div className="hidden md:flex space-x-4">
        <Link to="/impressum" className="hover:underline">Impressum</Link>
        <Link to="/datenschutz" className="hover:underline">Datenschutz</Link>
        <Link to="/kontakt" className="hover:underline">Kontakt</Link>
      </div>
    </div>

    {/* Content beim Aufklappen */}
    {isOpen && (
      <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-6 transition-opacity duration-300 opacity-100">
        <p className="text-center text-sm max-w-md text-[#260101]">
          Spielerische Reise durch Paradoxien, Mystik & Psychologie. Entdecke innere Welten voller Symbole & Zahlen.
        </p>

        <div className="flex space-x-5 text-[#260101] text-2xl">
          {/* Social Icons hier wie gehabt */}
        </div>
      </div>
    )}
  </div>
</footer>
  );
};

export default Footer;
