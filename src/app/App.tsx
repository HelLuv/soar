import { FC } from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { AppProvider } from "./providers/AppProvider";

export const App: FC = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};
