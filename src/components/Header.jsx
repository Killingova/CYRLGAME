import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F2CA50] shadow-md border-b-4 border-[#F2921D]">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Linkes Logo */}
        <div className="flex items-center">
          <img
            src="/LOGOREISE.png"
            alt="Logo links"
            className="h-16 w-auto"
          />
        </div>

        {/* Mittiger Block: Titel + Burger-Button (nur mobil sichtbar) */}
        <div className="flex flex-col items-center justify-center flex-grow relative">
          <div className="flex items-center space-x-3">
            <h1 className="text-black text-4xl font-bold font-[Dancing Script]">
            Inneres Universum
            </h1>

            {/* Burger-Menü nur sichtbar auf kleinen Screens */}
            <button
              className="md:hidden text-black"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

          {/* Navigation – nur auf großen Screens sichtbar */}
          <nav className="hidden md:flex space-x-6 mt-2">
            {["Start", "Über", "Kontakt"].map((text, index) => (
              <a
                key={index}
                href={`#${text.toLowerCase()}`}
                className="text-black font-medium hover:text-[#F2921D] transition duration-300"
              >
                {text}
              </a>
            ))}
          </nav>
        </div>

        {/* Rechtes Logo */}
        <div className="flex items-center">
          <img
            src="/LOGOREISE.png"
            alt="Logo rechts"
            className="h-16 w-auto"
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-[#F2921D] absolute top-full left-0 w-full flex flex-col items-center py-4 space-y-4">
          {["Start", "Über", "Kontakt"].map((text, index) => (
            <a
              key={index}
              href={`#${text.toLowerCase()}`}
              className="text-black font-medium text-lg hover:text-[#F2921D] transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {text}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
