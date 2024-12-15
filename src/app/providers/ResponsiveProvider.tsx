import { useMediaQuery } from "react-responsive";
import { FC, ReactNode, useEffect } from "react";
import { useResponsiveStore } from "@/shared/stores";

type Props = {
  children: ReactNode;
};

export const ResponsiveProvider: FC<Props> = ({ children }) => {
  const setResponsiveState = useResponsiveStore((state) => state.setResponsiveState);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ maxWidth: 992 });

  useEffect(() => {
    setResponsiveState({ isMobile, isTablet, isDesktop });
  }, [isMobile, isTablet, isDesktop, setResponsiveState]);

  return <>{children}</>;
};
