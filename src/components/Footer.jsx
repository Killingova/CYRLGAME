import React from 'react';
import { FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#DCDEF2] to-[#D9A384] text-[#260101] py-10 px-6 border-t border-[#8C5A67]">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:flex-row md:justify-between md:items-start">
        
        {/* Logo / Name & Beschreibung */}
        <div>
          <h2 className="text-3xl font-[Dancing Script] font-bold tracking-tight">
            Kristin Zhivkova
          </h2>
          <p className="text-sm max-w-sm mt-2">
            Spielerische Reise durch Paradoxien, Mystik & Psychologie erkunde innere Welten mit Karten, Symbolen und Zahlen.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-5">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
             className="hover:text-[#8C1207] transition transform hover:scale-110">
            <FaInstagram size={28} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
             className="hover:text-[#1F4C73] transition transform hover:scale-110">
            <FaFacebook size={28} />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest"
             className="hover:text-[#BF4A06] transition transform hover:scale-110">
            <FaPinterest size={28} />
          </a>
        </div>
      </div>

      {/* Trennlinie */}
      <hr className="my-6 border-[#F2CA50]/50" />

      {/* Footer Bottom */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-[#260101]">
        <p className="mb-2 md:mb-0">
          © {new Date().getFullYear()} Pfad des Paradoxons | Kristin Zhivkova
        </p>
        <div className="flex space-x-4">
          <Link to="/impressum" className="hover:text-[#8C5A67] transition">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-[#8C5A67] transition">Datenschutz</Link>
          <Link to="/kontakt" className="hover:text-[#8C5A67] transition">Kontakt</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
