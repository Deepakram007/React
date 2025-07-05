import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggler = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <button onClick={toggleTheme}>
            {theme === 'light' ? 'To Dark Mode' : 'To Light Mode'}
        </button>
    );
};

export default ThemeToggler;