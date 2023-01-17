import React, {createContext, ReactElement, useState} from 'react'

export const ThemeContext = createContext<any>({theme: 'dark', undefined})

export const ThemeProvider: React.FC<{children:JSX.Element}> = ({children}) => {
    const [theme, setTheme] = useState('dark');

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}