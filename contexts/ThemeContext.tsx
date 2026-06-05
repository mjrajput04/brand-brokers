"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage or default to dark
    const savedTheme = localStorage.getItem("brandbrokers-theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    const body = document.body;

    if (isDark) {
      // Dark mode styles
      root.classList.remove("light-mode");
      root.classList.add("dark-mode");
      body.style.backgroundColor = "#0a0a0a";
      body.style.color = "#ffffff";
      
      // Update CSS variables
      root.style.setProperty("--bg-primary", "#0a0a0a");
      root.style.setProperty("--bg-secondary", "#141414");
      root.style.setProperty("--bg-card", "rgba(255,255,255,0.03)");
      root.style.setProperty("--text-primary", "#ffffff");
      root.style.setProperty("--text-secondary", "#a0a0a0");
      root.style.setProperty("--border-color", "rgba(255,255,255,0.08)");
      root.style.setProperty("--hover-bg", "rgba(255,255,255,0.05)");
    } else {
      // Light mode styles
      root.classList.remove("dark-mode");
      root.classList.add("light-mode");
      body.style.backgroundColor = "#f8f9fa";
      body.style.color = "#1a1a1a";
      
      // Update CSS variables
      root.style.setProperty("--bg-primary", "#f8f9fa");
      root.style.setProperty("--bg-secondary", "#ffffff");
      root.style.setProperty("--bg-card", "rgba(0,0,0,0.03)");
      root.style.setProperty("--text-primary", "#1a1a1a");
      root.style.setProperty("--text-secondary", "#666666");
      root.style.setProperty("--border-color", "rgba(0,0,0,0.08)");
      root.style.setProperty("--hover-bg", "rgba(0,0,0,0.05)");
    }

    localStorage.setItem("brandbrokers-theme", isDark ? "dark" : "light");
  }, [isDark, mounted]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
