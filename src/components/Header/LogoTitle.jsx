import { Link } from "react-router-dom";
import logo from "../../assets/logo/LOGOBLACK.png";

const LogoTitle = () => (
  <div className="flex items-center space-x-4">
    <Link to="/">
      <img
        src={logo}
        alt="Pfad des Paradoxons"
        className="h-16 md:h-24 w-auto drop-shadow-md"
      />
    </Link>
    <Link to="/">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-[Dancing Script] font-bold text-[#260101]">
        Pfad des<br />Paradoxons
      </h1>
    </Link>
  </div>
);

export default LogoTitle;
