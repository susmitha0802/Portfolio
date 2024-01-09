import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    const onChange = () => {
       
        theme === "dark" ? setTheme("light") : setTheme("dark");
    }

    const value = {
        theme,
        onChange
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};