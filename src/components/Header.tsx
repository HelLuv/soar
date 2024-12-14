import { FC, useEffect } from "react";
import Logo from "@/components/Logo";
import { NavLink, useLocation } from "react-router";
import NotificationIcon from "@/assets/icons/outlined/notification.svg?react";
import SettingsIcon from "@/assets/icons/outlined/settings.svg?react";
import { SidebarLink } from "@/constants";
import { SearchBar } from "./SearchBar";
import { MobileNav } from "./MobileNav";

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
    <header className="w-full h-[100px] max-sm:h-[140px] flex items-center">
      <Logo className="max-sm:hidden" />

      <section className="header flex-wrap">
        <MobileNav links={links} />

        <h1 className="header-title">{pageTitle}</h1>

        <section className="flex gap-[30px] items-center">
          <SearchBar className="max-sm:hidden" />

          {/* either go to settings page or quick settings popup */}
          <NavLink
            to="/settings"
            aria-label="Settings"
            title="Go to Settings page"
            className="size-[50px] bg-blue-200 flex-center rounded-full max-lg:hidden"
          >
            <SettingsIcon />
          </NavLink>

          <span
            aria-label="Notifications"
            title="Show notifications"
            className="cursor-pointer size-[50px] bg-blue-200 flex-center rounded-full max-lg:hidden"
          >
            <NotificationIcon />
          </span>

          {/* you can integrate Log Out / Switch accounts functionality */}
          <span
            aria-label="Accounts"
            title="Open account quick settings"
            className="cursor-pointer size-[60px] max-sm:size-[35px] flex-center rounded-full"
          >
            <img src="/images/user-0.png" alt="user image" />
          </span>
        </section>

        <SearchBar className="sm:hidden block w-full -mt-4" />
      </section>
    </header>
  );
};
