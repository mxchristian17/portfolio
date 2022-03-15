import React, { useContext} from 'react'
import GeneralContext from '../../Context/GeneralContext'

const Symbol = (props) => {

    const { consoleFontStyle } = useContext(GeneralContext);
    const consoleSymbolStyle = { ...consoleFontStyle, 'color' : 'white' }
    const { text } = props

  return (
    <span style= { consoleSymbolStyle } >{ text }</span>
  )
}

export default Symbol