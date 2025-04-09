import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Start", path: "/" },
    { name: "Über", path: "#über" },
    { name: "Kontakt", path: "#kontakt" },
    { name: "Numerologie", path: "#Numerologie" },
    { name: "Welten", path: "#welten" },
    { name: "Karten", path: "#karten" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-[#DCDEF2] to-[#D9A384] shadow-lg border-b border-[#8C5A67]">
      <div className="max-w-7xl mx-auto flex justify-center items-center h-20 px-4 md:px-8 relative">
        {/* Logo + Titel nebeneinander, zentriert */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex-shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}Logo_World.png`}
              alt="Pfad des Paradoxons"
              className="h-12 sm:h-14 w-auto drop-shadow-md"
            />
          </Link>
          <h1 className="text-[#260101] text-4xl sm:text-3xl font-[Dancing Script] font-bold drop-shadow-sm">
            Pfad des Paradoxons
          </h1>
        </div>

        {/* Burger-Menü Button rechts */}
        <button
          className="md:hidden absolute right-4 text-[#260101] hover:text-[#8C5A67] transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen oder schließen"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navigation – Desktop */}
      <nav className="hidden md:flex justify-center space-x-6 py-2 bg-[#DCDEF2] border-t border-[#A67C7C] shadow-inner">
        {navLinks.map(({ name, path }) =>
          path.startsWith("/") ? (
            <Link
              key={name}
              to={path}
              className="text-[#260101] font-semibold hover:bg-[#8C5A67] hover:text-white px-3 py-1 rounded transition"
            >
              {name}
            </Link>
          ) : (
            <a
              key={name}
              href={path}
              className="text-[#260101] font-semibold hover:bg-[#8C5A67] hover:text-white px-3 py-1 rounded transition"
            >
              {name}
            </a>
          )
        )}
      </nav>

      {/* Navigation – Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-[#DCDEF2] border-t border-[#A67C7C] px-6 py-4 space-y-2 shadow-inner">
          {navLinks.map(({ name, path }) =>
            path.startsWith("/") ? (
              <Link
                key={name}
                to={path}
                onClick={() => setMenuOpen(false)}
                className="block text-[#260101] text-lg font-medium hover:text-white hover:bg-[#8C5A67] px-3 py-2 rounded transition"
              >
                {name}
              </Link>
            ) : (
              <a
                key={name}
                href={path}
                onClick={() => setMenuOpen(false)}
                className="block text-[#260101] text-lg font-medium hover:text-white hover:bg-[#8C5A67] px-3 py-2 rounded transition"
              >
                {name}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
