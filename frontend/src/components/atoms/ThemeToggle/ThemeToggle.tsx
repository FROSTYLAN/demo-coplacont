import { useContext } from "react";
import styles from "./ThemeToggle.module.scss";
import { ThemeContext } from "@/shared/context/ThemeContext";
import { SunIcon, MoonIcon } from "@/components/atoms/icons";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  if (!theme || !toggleTheme) {
    return null;
  }

  return (
    <div className={styles.themeToggle} onClick={toggleTheme}>
      <span className={styles.themeToggle__label}>Tema de color</span>
      <div className={styles.themeToggle__icons}>
        <SunIcon />
        <MoonIcon />
      </div>
    </div>
  );
};
