import { createContext } from "react";

/**
 * Interfaz para el contexto del tema
 */
export interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

/**
 * Contexto para el manejo del tema de la aplicación
 */
export const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  toggleTheme: () => {}
});