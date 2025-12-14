import { useState, useEffect, type ReactNode } from "react";
import { ThemeContext } from "./ThemeContext";

/**
 * Proveedor del contexto del tema
 * Maneja el estado del tema y su persistencia en localStorage
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
