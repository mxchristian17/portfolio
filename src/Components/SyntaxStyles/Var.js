import React, { useContext} from 'react'
import GeneralContext from '../../Context/GeneralContext'

const Var = (props) => {

    const { consoleFontStyle } = useContext(GeneralContext);
    const consoleVarStyle = { ...consoleFontStyle, 'color' : 'rgb(79,193,219)' }
    const { text } = props

  return (
    <span style= { consoleVarStyle } >{ text }</span>
  )
}

export default Var