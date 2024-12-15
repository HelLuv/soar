import { create } from 'zustand';

interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  setResponsiveState: (state: Partial<ResponsiveState>) => void;
}

export const useResponsiveStore = create<ResponsiveState>((set) => ({
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  setResponsiveState: (state) => set((prev) => ({ ...prev, ...state })),
}));

