import React, { useState } from "react";
import {
  FaInstagram,
  FaTiktok,
  FaTelegram,
  FaEnvelope,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
      className={`fixed bottom-0 left-0 w-full transition-all duration-500 ease-in-out 
      ${isOpen ? "h-64 bg-gradient-to-t from-[#DCDEF2] to-[#D9A384]" : "h-10 bg-transparent backdrop-blur-sm"} 
      border-t border-[#8C5A67] shadow-xl z-50 cursor-pointer`}
    >
      <div className="max-w-6xl mx-auto flex flex-col justify-center h-full px-6">

        {/* Sichtbare Leiste (nur Info, ohne Links auf Mobile) */}
        <div className="flex justify-between items-center text-sm text-stone-500 h-10">
          <p className="drop-shadow-md">
            © {new Date().getFullYear()} Pfad des Paradoxons | Kristin Zhivkova
          </p>

          {/* Nur auf Desktop sichtbar */}
          <div className="hidden md:flex space-x-4">
            <Link to="/impressum" className="hover:underline">Impressum</Link>
            <Link to="/datenschutz" className="hover:underline">Datenschutz</Link>
            <Link to="/kontakt" className="hover:underline">Kontakt</Link>
          </div>
        </div>

        {/* Versteckter Bereich (auch Links für Mobile sichtbar) */}
        {isOpen && (
          <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-6 text-[#260101] transition-opacity duration-300 opacity-100">
            <p className="text-center text-sm max-w-md">
              Spielerische Reise durch Paradoxien, Mystik & Psychologie. Entdecke innere Welten voller Symbole & Zahlen.
            </p>

            <div className="flex flex-col items-center gap-2 md:flex-row md:gap-5">
              <div className="flex space-x-5 text-2xl">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-[#8C5A67] transition transform hover:scale-110"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="hover:text-[#8C5A67] transition transform hover:scale-110"
                >
                  <FaTiktok />
                </a>
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="hover:text-[#8C5A67] transition transform hover:scale-110"
                >
                  <FaTelegram />
                </a>
                <a
                  href="mailto:deinemail@email.de"
                  aria-label="E-Mail"
                  className="hover:text-[#8C5A67] transition transform hover:scale-110"
                >
                  <FaEnvelope />
                </a>
              </div>

              {/* Footer-Links mobil sichtbar */}
              <div className="flex md:hidden space-x-4 mt-2 text-sm">
                <Link to="/impressum" className="hover:underline">Impressum</Link>
                <Link to="/datenschutz" className="hover:underline">Datenschutz</Link>
                <Link to="/kontakt" className="hover:underline">Kontakt</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
