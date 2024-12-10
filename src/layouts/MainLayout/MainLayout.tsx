import { Outlet } from "react-router";
import { FC } from "react";

const Dashboard: FC = () => (
  <div>
    <h1>Here should be the different header based on route</h1>

    <Outlet />
  </div>
);

export default Dashboard;
