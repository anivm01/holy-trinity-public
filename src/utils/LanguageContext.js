import React, { useContext, useState } from "react"

const LanguageContext = React.createContext()
const LanguageUpdateContext = React.createContext()


//handles the language state
export const useLanguage = () => {
    return useContext(LanguageContext)
}

//handles updating the language state
export const useLanguageUpdate = () => {
    return useContext(LanguageUpdateContext)
}


export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('en')

    const changeLanguage = () => {
        if(language === 'en'){
            setLanguage('bg')
        }
        if(language === 'bg'){
            setLanguage('en')
        }
    }

    return (
        <LanguageContext.Provider value={language} >
            <LanguageUpdateContext.Provider value={changeLanguage}>
            {children}
            </LanguageUpdateContext.Provider>
        </LanguageContext.Provider>
    )
}