import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Start", path: "/" },
    { name: "Über", path: "#über" },
    { name: "Kontakt", path: "#kontakt" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-[#F2CA50] to-[#F2921D] shadow-lg border-b-2 border-[#d98300]">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4 md:px-8">
        {/* Linkes Logo */}
        <img
          src={`${import.meta.env.BASE_URL}LOGOREISE.png`}
          alt="Logo links"
          className="h-12 w-auto"
        />

        {/* Titel */}
        <h1 className="text-black text-3xl sm:text-4xl font-bold font-[Dancing Script] text-center drop-shadow-md">
          Reise durch Paradoxe
        </h1>

        {/* Rechtes Logo */}
        <img
          src={`${import.meta.env.BASE_URL}LOGOREISE.png`}
          alt="Logo rechts"
          className="h-12 w-auto"
        />

        {/* Burger für mobile */}
        <button
          className="md:hidden ml-4 text-black hover:text-[#F2921D] transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen oder schließen"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navigation – Desktop */}
      <nav className="hidden md:flex justify-center space-x-8 py-3 bg-[#F2CA50] border-t border-[#e3a220] shadow-inner">
        {navLinks.map(({ name, path }) =>
          path.startsWith("/") ? (
            <Link
              key={name}
              to={path}
              className="text-black font-semibold hover:text-[#fff] hover:bg-[#F2921D] px-3 py-1 rounded transition"
            >
              {name}
            </Link>
          ) : (
            <a
              key={name}
              href={path}
              className="text-black font-semibold hover:text-[#fff] hover:bg-[#F2921D] px-3 py-1 rounded transition"
            >
              {name}
            </a>
          )
        )}
      </nav>

      {/* Navigation – Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#F2921D] px-6 py-4 space-y-3">
          {navLinks.map(({ name, path }) =>
            path.startsWith("/") ? (
              <Link
                key={name}
                to={path}
                onClick={() => setMenuOpen(false)}
                className="block text-black text-lg font-medium hover:text-[#F2921D] transition"
              >
                {name}
              </Link>
            ) : (
              <a
                key={name}
                href={path}
                onClick={() => setMenuOpen(false)}
                className="block text-black text-lg font-medium hover:text-[#F2921D] transition"
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
