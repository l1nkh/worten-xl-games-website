import { React, createContext, useState } from 'react';

export const AlertContext = createContext(null); // this null value will be used if the context is used outsite of the provider

export const AlertProvider = ({ children }) => {

    const [showAlert, setShowAlert] = useState(true);

    return (
        <AlertContext.Provider value={{ showAlert, setShowAlert }}>
            {children}
        </AlertContext.Provider>
    );
};