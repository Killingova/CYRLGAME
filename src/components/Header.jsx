import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F2CA50] shadow-md border-b-4 border-[#F2921D]">
      <div className="container mx-auto flex items-end justify-between h-20 px-6">
        {/* Linkes Logo */}
        <img
          src={`${import.meta.env.BASE_URL}LOGOREISE.png`}
          alt="Logo links"
          className="h-16 w-auto object-bottom"
        />

        {/* Mittiger Block: Titel + Burger-Button */}
        <div className="flex items-end space-x-4">
          <h1 className="text-black text-4xl font-bold font-[Dancing Script] leading-none">
            Reise durch Paradoxe
          </h1>
          <button
            type="button"
            className="text-black hover:text-[#F2921D] transition-colors duration-300 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Rechtes Logo */}
        <img
          src={`${import.meta.env.BASE_URL}LOGOREISE.png`}
          alt="Logo rechts"
          className="h-16 w-auto object-bottom"
        />
      </div>

      {/* Navigation – Desktop */}
      <nav className="hidden md:flex justify-center space-x-6 py-2">
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

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-[#F2921D] absolute top-[5rem] left-0 w-full flex flex-col items-center py-4 space-y-4">
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
