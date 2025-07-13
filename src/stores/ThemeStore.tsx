// /* eslint-disable react-refresh/only-export-components */

// import React, { createContext, useContext, useState, useEffect } from 'react';

// type Theme = 'light' | 'dark';

// interface ThemeContextType {
//   theme: Theme;
//   toggleTheme: () => void;
// }

// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };

// export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [theme, setTheme] = useState<Theme>('dark');

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') as Theme;
//     if (savedTheme) {
//       setTheme(savedTheme);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('theme', theme);
//     document.documentElement.className = theme;
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(prev => prev === 'light' ? 'dark' : 'light');
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

import { create } from "zustand";

interface ThemeState {
  isDark: boolean;
  toggleTheme: () => void;
  setDark: (val: boolean) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDark:
    localStorage.getItem("theme") === "dark" ||
    localStorage.getItem("theme") === null,
  toggleTheme: () =>
    set((state) => {
      const newTheme = !state.isDark;
      document.documentElement.setAttribute(
        "data-theme",
        newTheme ? "dark" : "light",
      );
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return { isDark: newTheme };
    }),
  setDark: (val: boolean) => {
    document.documentElement.setAttribute("data-theme", val ? "dark" : "light");
    localStorage.setItem("theme", val ? "dark" : "light");
    set({ isDark: val });
  },
}));
