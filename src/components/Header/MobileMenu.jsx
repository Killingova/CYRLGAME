import { motion, AnimatePresence } from "framer-motion";
import NavLinks from "./NavLinks";

const MobileMenu = ({ user, logout, menuOpen, closeMenu }) => (
  <AnimatePresence>
    {menuOpen && (
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="md:hidden bg-[#DCDEF2] px-6 py-4 shadow-inner space-y-2 absolute top-28 left-0 w-full z-40 overflow-hidden"
      >
        <NavLinks user={user} logout={logout} onLinkClick={closeMenu} />
      </motion.div>
    )}
  </AnimatePresence>
);

export default MobileMenu;
