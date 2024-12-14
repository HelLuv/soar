import { FC } from "react";
import { NavLink, useLocation } from "react-router";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SidebarLink } from "@/constants";
import { cn } from "@/lib/utils";
import HamburgerIcon from "@/assets/icons/outlined/hamburger.svg?react";
import Logo from "@/components/Logo";

type Props = {
  links: SidebarLink[];
};

export const MobileNav: FC<Props> = ({ links }) => {
  const { pathname } = useLocation();

  return (
    <section className="w-fit h-[30px] sm:hidden">
      <Sheet>
        <SheetTrigger>
          <HamburgerIcon className="cursor-pointer w-[30px] h-[30px]" />
        </SheetTrigger>

        <SheetContent side="left" className="border-none bg-white pl-0 w-[300px]">
          <SheetClose asChild>
            <NavLink to="/" className="cursor-pointer flex items-center gap-1 px-4">
              <Logo />
              <h1 className="text-26 font-extrabold text-blue-900">Soar Task</h1>
            </NavLink>
          </SheetClose>

          <SheetClose asChild>
            <nav className="flex h-full flex-col gap-6 pt-10 text-white">
              {links.map(({ route, label, Icon }) => {
                const isActive = pathname === route || pathname.startsWith(`${route}/`);

                return (
                  <SheetClose asChild key={route}>
                    <NavLink to={route} key={label} className="flex gap-4 relative pl-8">
                      {isActive && <span className="sidebar-active-indicator" />}
                      <Icon
                        className={cn({
                          "brightness-[0] invert-0": isActive,
                        })}
                      />
                      <p
                        className={cn("mobilenav-label", {
                          "!text-black": isActive,
                        })}
                      >
                        {label}
                      </p>
                    </NavLink>
                  </SheetClose>
                );
              })}
            </nav>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </section>
  );
};
