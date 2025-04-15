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
      bg-gradient-to-t from-[#DCDEF2] to-[#D9A384] border-t border-[#8C5A67] shadow-xl
      ${isOpen ? "h-56" : "h-10"} cursor-pointer z-50`}
    >
      <div className="max-w-6xl mx-auto flex flex-col justify-center h-full px-6">
        {/* Sichtbare Leiste */}
        <div className="flex justify-between items-center text-sm text-[#260101]">
          <p>© {new Date().getFullYear()} Pfad des Paradoxons | Kristin Zhivkova</p>
          <div className="hidden md:flex space-x-4">
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
            <Link to="/kontakt">Kontakt</Link>
          </div>
        </div>

        {/* Content beim Aufklappen */}
        {isOpen && (
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-center text-sm max-w-md">
              Spielerische Reise durch Paradoxien, Mystik & Psychologie. Entdecke innere Welten voller Symbole & Zahlen.
            </p>

            <div className="flex space-x-5 text-[#260101] text-2xl">
              <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
              <a href="https://tiktok.com" target="_blank"><FaTiktok /></a>
              <a href="https://wa.me/" target="_blank"><FaWhatsapp /></a>
              <a href="https://www.threads.net" target="_blank"><FaThreads /></a>
              <a href="https://x.com" target="_blank"><FaXTwitter /></a>
              <a href="https://telegram.org" target="_blank"><FaTelegram /></a>
              <a href="mailto:deinemail@email.de"><FaEnvelope /></a>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
