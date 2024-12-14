import { NavLink } from "react-router";
import SoarLogo from "@/assets/images/soar-logo.png";
import { FC } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const Logo: FC<Props> = ({ className }) => {
  return (
    <NavLink to="/" className={cn("main-logo", className)}>
      <img src={SoarLogo} alt="Soar logo" className="size-8" />
      <span className="main-logo-label text-26 font-extrabold text-blue-900">Soar Task</span>
    </NavLink>
  );
};

export default Logo;
