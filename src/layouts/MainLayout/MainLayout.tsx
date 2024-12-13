import { Outlet } from "react-router";
import { FC } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { SIDEBAR_LINKS } from "@/constants";

const MainLayout: FC = () => (
  <main className="flex flex-col">
    <Header links={SIDEBAR_LINKS} />

    <div className="flex">
      <Sidebar links={SIDEBAR_LINKS} />

      <div className="main-layout_content">
        <Outlet />
      </div>
    </div>
  </main>
);

export default MainLayout;
