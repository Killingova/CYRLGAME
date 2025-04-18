import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo/LOGOBLACK.png"; // Pfad zum Logo

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation-Links – numerologie-Link wurde angepasst
  const navLinks = [
    { name: "Start", path: "/" },
    { name: "Über", path: "/ueber" },
    { name: "Kontakt", path: "/kontakt" },
    { name: "Numerologie", path: "/numerologie" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-[#DCDEF2] to-[#D9A384] shadow-lg border-b border-[#8C5A67]">
      <div className="max-w-7xl mx-auto flex justify-center items-center h-24 md:h-28 px-4 md:px-8 relative">
        
        {/* Logo + Titel nebeneinander */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Pfad des Paradoxons"
              className="h-16 md:h-24 w-auto drop-shadow-md"
            />
          </Link>

          <Link to="/" className="text-[#260101] hover:text-[#8C5A67] transition">
            <h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight font-[Dancing Script] font-bold drop-shadow-sm">
              Pfad des<br />Paradoxons
            </h1>
          </Link>
        </div>

        {/* Burger-Menü Button (mobil) */}
        <button
          className="md:hidden absolute right-4 text-[#260101] hover:text-[#8C5A67] transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen oder schließen"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Navigation */}
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

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-[#DCDEF2] border-t border-[#A67C7C] px-6 py-4 space-y-2 shadow-inner">
          {navLinks.map(({ name, path }) =>
            path.startsWith("/") ? (
              <Link
                key={name}
                to={path}
                onClick={() => setMenuOpen(false)}
                className="block text-[#260101] text-lg font-medium hover:bg-[#8C5A67] hover:text-white px-3 py-2 rounded transition"
              >
                {name}
              </Link>
            ) : (
              <a
                key={name}
                href={path}
                onClick={() => setMenuOpen(false)}
                className="block text-[#260101] text-lg font-medium hover:bg-[#8C5A67] hover:text-white px-3 py-2 rounded transition"
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
