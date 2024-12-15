import { NavLink } from "react-router";
import SoarLogo from "@/assets/images/soar-logo.png";
import { FC } from "react";
import { cn } from "@/shared/utils/cn";

type Props = {
  className?: string;
};

export const Logo: FC<Props> = ({ className }) => {
  return (
    <NavLink to="/" className={cn("main-logo", className)}>
      <img src={SoarLogo} alt="Soar logo" className="size-8" />
      <span className="main-logo-label text-26 font-extrabold text-blue-900">Soar Task</span>
    </NavLink>
  );
};
