import { React, createContext, useState } from 'react';

export const ThemeContext = createContext(null); // this null value will be used if the context is used outsite of the provider

export const ThemeProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(true);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};