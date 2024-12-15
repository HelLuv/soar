import { FC, ReactNode } from "react";
import { AuthProvider } from "./AuthProvider";
import { ResponsiveProvider } from "./ResponsiveProvider";

type Props = {
  children: ReactNode;
};

export const AppProvider: FC<Props> = ({ children }) => {
  return (
    <AuthProvider>
      <ResponsiveProvider>{children}</ResponsiveProvider>
    </AuthProvider>
  );
};
