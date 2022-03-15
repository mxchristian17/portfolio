import React, { useContext} from 'react'
import GeneralContext from '../../Context/GeneralContext'

const VarDeclaration = (props) => {

    const { consoleFontStyle } = useContext(GeneralContext);
    const consoleVarDeclarationStyle = { ...consoleFontStyle, 'color' : 'rgb(86,156,214)' }
    const { text } = props

  return (
    <span style= { consoleVarDeclarationStyle } >{ text }</span>
  )
}

export default VarDeclaration