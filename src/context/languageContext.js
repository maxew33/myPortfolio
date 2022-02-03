import React, { createContext, useState } from 'react';

export const Context = createContext()

const ContextProvider = props => {

    const [language, setLanguage] = useState('FR')

    const toggleLanguage = newLanguage => {
        setLanguage(newLanguage)
    }

    return (
        <Context.Provider value={{ language, toggleLanguage }}>
            {props.children}
        </Context.Provider>

    )

}

export default ContextProvider

