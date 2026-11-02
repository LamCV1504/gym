"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ThemeMode = "light" | "dark";
type ThemeVariant = "energy" | "calm" | "premium";

type ThemeContextType = {
  mode: ThemeMode;
  variant: ThemeVariant;
  setMode: (mode: ThemeMode) => void;
  setVariant: (variant: ThemeVariant) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("dark");
  const [variant, setVariant] = useState<ThemeVariant>("energy");

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.remove("theme-energy", "theme-calm", "theme-premium");

    root.classList.add(mode);
    root.classList.add(`theme-${variant}`);

    localStorage.setItem("theme-mode", mode);
    localStorage.setItem("theme-variant", variant);
  }, [mode, variant]);

  return (
    <ThemeContext.Provider value={{ mode, variant, setMode, setVariant }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
