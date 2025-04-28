import { Link } from "react-router-dom";
import { User, LogIn, LogOut } from "lucide-react";
import { navLinks } from "./menuData";

const linkClasses =
  "flex items-center space-x-1 text-[#260101] hover:bg-[#8C5A67] hover:text-white px-3 py-2 rounded transition";

const NavLinks = ({ user, logout, onLinkClick = () => {} }) => (
  <>
    {navLinks.map(({ name, path, icon: Icon }) => (
      <Link key={name} to={path} className={linkClasses} onClick={onLinkClick}>
        <Icon size={18} />
        <span className="font-paradox">{name}</span>
      </Link>
    ))}

    {user && (
      <Link to="/profil" className={linkClasses} onClick={onLinkClick}>
        <User size={18} />
        <span className="font-paradox">Profil</span>
      </Link>
    )}

    {user ? (
      <button
        onClick={() => {
          logout();
          onLinkClick();
        }}
        className={linkClasses}
      >
        <LogOut size={18} />
        <span className="font-paradox">Logout</span>
      </button>
    ) : (
      <Link to="/login" className={linkClasses} onClick={onLinkClick}>
        <LogIn size={18} />
        <span className="font-paradox">Login</span>
      </Link>
    )}
  </>
);

export default NavLinks;
