import React from 'react';
import {
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaEnvelope
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#F2921D] text-stone-900 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:flex-row md:justify-between md:items-start">
        
        {/* Logo & Beschreibung */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight">Kristin Zhivkova</h2>
          <p className="text-sm max-w-sm mt-2">
            Spielerische Reise durch Paradoxien, Mystik und Psychologie – erkunde innere Welten mit Karten, Symbolen und Zahlen.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-5">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#8C1207] transition">
            <FaInstagram size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#1F4C73] transition">
            <FaFacebook size={24} />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="hover:text-[#BF4A06] transition">
            <FaPinterest size={24} />
          </a>
        </div>
      </div>

      {/* Trennlinie */}
      <hr className="my-6 border-[#F2CA50]" />

      {/* Footer Links + Copyright */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-stone-800">
        <p className="mb-2 md:mb-0">
          © {new Date().getFullYear()} Reise durch Paradoxe | Kristin Zhivkova
        </p>
        <div className="flex space-x-4">
          <a href="/impressum" className="hover:text-white transition">Impressum</a>
          <a href="/datenschutz" className="hover:text-white transition">Datenschutz</a>
          <a href="/kontakt" className="hover:text-white transition">Kontakt</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
