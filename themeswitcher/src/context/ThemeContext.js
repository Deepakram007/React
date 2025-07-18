import React from "react";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) setTheme(savedTheme);
    },[]);

    useEffect(() => {
        document.body.className='';
        document.body.classList.add(theme);
        localStorage.setItem('theme',theme);
    },[theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev=== 'light' ? 'dark' : 'light'));
    };

    return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme =() => useContext(ThemeContext);