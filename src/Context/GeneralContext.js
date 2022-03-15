import React from 'react'

const GeneralContext = React.createContext()

export const GeneralContextProvider = ({children}) => {

    const consoleFontStyle = { 'fontFamily' : "'Courier Prime', monospace" }

    return (
        <GeneralContext.Provider value={{ consoleFontStyle : consoleFontStyle }}>
            {children}
        </GeneralContext.Provider>
    )

}

export default GeneralContext