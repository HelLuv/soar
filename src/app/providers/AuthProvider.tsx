import { FC, ReactNode, useEffect } from "react";
import { useAuthStore } from "@/shared/stores/auth";
import { CURRENT_USER } from "@/shared/mock/users";

type Props = {
  children: ReactNode;
};

export const AuthProvider: FC<Props> = ({ children }) => {
  const { setUser } = useAuthStore();

  useEffect(() => {
    // TODO: make real requests and set user, or better to do it after sign in/up
    setUser(CURRENT_USER);
  }, [setUser]);

  return <>{children}</>;
};
