import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const AuthProvider: FC<Props> = ({ children }) => {
  // TODO: here should be auth provider logic
  return <>{children}</>;
};
