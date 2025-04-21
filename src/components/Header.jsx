import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, LogIn, LogOut } from "lucide-react";
import logo from "../assets/logo/LOGOBLACK.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Beispielzustand

  const navLinks = [
    { name: "Start", path: "/" },
    { name: "Über", path: "/ueber" },
    { name: "Kontakt", path: "/kontakt" },
    { name: "Numerologie", path: "/numerologie" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-[#DCDEF2] to-[#D9A384] shadow-lg border-b border-[#8C5A67]">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-24 md:h-28 px-4 md:px-8">
        {/* Logo + Titel */}
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="text-[#260101] font-semibold hover:bg-[#8C5A67] hover:text-white px-3 py-1 rounded transition"
            >
              {name}
            </Link>
          ))}

          {isLoggedIn ? (
            <button
              onClick={() => setIsLoggedIn(false)}
              className="flex items-center text-[#260101] hover:text-[#8C5A67] px-2 py-1"
            >
              <LogOut className="mr-2" /> Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="flex items-center text-[#260101] hover:text-[#8C5A67] px-2 py-1"
            >
              <LogIn className="mr-2" /> Login
            </Link>
          )}
        </nav>

        {/* Burger-Menü Button */}
        <button
          className="md:hidden text-[#260101] hover:text-[#8C5A67]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen oder schließen"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-[#DCDEF2] border-t border-[#A67C7C] px-6 py-4 space-y-2 shadow-inner">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setMenuOpen(false)}
              className="block text-[#260101] text-lg font-medium hover:bg-[#8C5A67] hover:text-white px-3 py-2 rounded transition"
            >
              {name}
            </Link>
          ))}

          {isLoggedIn ? (
            <button
              onClick={() => {
                setIsLoggedIn(false);
                setMenuOpen(false);
              }}
              className="flex items-center text-[#260101] hover:text-[#8C5A67] px-3 py-2"
            >
              <LogOut className="mr-2" /> Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="flex items-center text-[#260101] hover:text-[#8C5A67] px-3 py-2"
            >
              <LogIn className="mr-2" /> Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
