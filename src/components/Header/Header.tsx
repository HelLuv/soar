import { FC, useEffect } from "react";
import Logo from "@/components/Logo";
import { useLocation } from "react-router";
import { SidebarLink } from "@/constants";

type Props = {
  links: SidebarLink[];
};

export const Header: FC<Props> = ({ links }) => {
  const { pathname } = useLocation();

  const currentLink = links.find((link) => link.route === pathname);
  // TODO: come up with suitable data structure so there will be no need for this check
  const pageTitle = currentLink
    ? currentLink.label === "Dashboard"
      ? "Overview"
      : currentLink.label
    : "Page Not Found";

  useEffect(() => {
    document.title = `Soar | ${pageTitle}`;
  }, [pageTitle]);

  return (
    <header className="w-full h-[100px] flex items-center">
      <Logo />

      <section className="px-[40px] h-full flex-1 flex items-center">
        <h1 className="text-28 font-extrabold text-blue-900">{pageTitle}</h1>
      </section>
    </header>
  );
};
