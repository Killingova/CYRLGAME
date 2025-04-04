import React from 'react';
import { FaInstagram, FaFacebook, FaPinterest, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#F2921D] text-stone-950 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo und Beschreibung */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Kristin Zhivkova</h2>
            <p className="text-sm">Spielerische Reise durch Paradoxien, Mystik & Psychologie.</p>
          </div>

          {/* Links zu Social Media */}
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <FaInstagram size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebook size={24} />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400">
              <FaPinterest size={24} />
            </a>
            <a href="mailto:kontakt@isislacrisis.de" className="hover:text-green-400">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        <hr className="my-4 border-gray-700" />

        {/* Footer-Links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-2 md:mb-0">
            © {new Date().getFullYear()} Reise durch Paradoxe | Kristin Zhivkova
          </div>
          <div className="flex space-x-4">
            <a href="/impressum" className="hover:text-gray-400">Impressum</a>
            <a href="/datenschutz" className="hover:text-gray-400">Datenschutz</a>
            <a href="/kontakt" className="hover:text-gray-400">Kontakt</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;