import { NavLink } from "react-router";
import SoarLogo from "@/assets/images/soar-logo.png";

const Logo = () => {
  return (
    <NavLink to="/" className="main-logo">
      <img src={SoarLogo} alt="Soar logo" className="size-8" />
      <span className="main-logo-label text-26 font-extrabold text-blue-900">Soar Task</span>
    </NavLink>
  );
};

export default Logo;
