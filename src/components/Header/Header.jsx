// src/components/Header/Header.jsx
import React, { useState, useContext } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/AuthContext";
import LogoTitle from "./LogoTitle";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

const Header = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-gradient-to-b from-[#DCDEF2] to-[#D9A384] shadow-lg border-b border-[#8C5A67]"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-end h-28 px-4 md:px-8 relative">
        <LogoTitle />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-end space-x-4">
          <NavLinks user={user} logout={logout} />
        </nav>

        {/* Optionaler Children-Content */}
        <div className="hidden md:flex items-center space-x-2">
          {children}
        </div>

        {/* Mobile Burger Button */}
        <button
          className="md:hidden text-[#260101] hover:text-[#8C5A67] transition"
          onClick={toggleMenu}
          aria-label="Menü öffnen oder schließen"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <MobileMenu user={user} logout={logout} menuOpen={menuOpen} closeMenu={closeMenu} />
    </motion.header>
  );
};

export default Header;
