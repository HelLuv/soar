import { SidebarLink } from "@/constants";
import { NavLink, useLocation } from "react-router";
import { FC } from "react";
import { cn } from "@/lib/utils";

type Props = {
  links: SidebarLink[];
};

export const Sidebar: FC<Props> = ({ links }) => {
  const { pathname } = useLocation();

  return (
    <section className="sidebar">
      <nav>
        <ul className="flex flex-col gap-6">
          {links.map(({ route, label, Icon }) => {
            const isActive = pathname === route || pathname.startsWith(`${route}/`);
            return (
              <li key={label} className="sidebar-link" title={label}>
                <NavLink to={route} end className="flex gap-[26px]">
                  {isActive && <span className="sidebar-active-indicator" />}
                  <div className="size-6">
                    <Icon
                      className={cn({
                        "brightness-[0] invert-0": isActive,
                      })}
                    />
                  </div>
                  <p className={cn("sidebar-label flex-1", { "!text-black": isActive })}>{label}</p>
                </NavLink>
              </li>
            );
          })}
          <li></li>
        </ul>
      </nav>
    </section>
  );
};
