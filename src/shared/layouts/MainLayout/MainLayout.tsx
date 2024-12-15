import { Outlet } from "react-router";
import { FC } from "react";
import { SIDEBAR_LINKS } from "@/shared/constants";
import { ErrorBoundary } from "@/shared/components";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

const MainLayout: FC = () => (
  <main className="flex flex-col">
    <Header links={SIDEBAR_LINKS} />

    <div className="flex">
      <Sidebar links={SIDEBAR_LINKS} />

      <div className="main-layout_content">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </div>
    </div>
  </main>
);

export default MainLayout;
