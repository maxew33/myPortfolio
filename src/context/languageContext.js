import React, { createContext, useState } from 'react';

export const Context = createContext()

const supportedLanguage = ['EN', 'FR']

let browserLang = navigator.language.slice(0,2).toUpperCase()

if(!supportedLanguage.includes(browserLang)){
    console.log('your language is not supported, sorry!')
    browserLang = 'EN'
}

const ContextProvider = props => {

    const [language, setLanguage] = useState(browserLang)

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

