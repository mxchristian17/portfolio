import React, { useContext} from 'react'
import GeneralContext from '../../Context/GeneralContext'

const Text = (props) => {

    const { consoleFontStyle } = useContext(GeneralContext);
    const consoleTextStyle = { ...consoleFontStyle, 'color' : 'rgb(206,145,91)' }
    const { text } = props

  return (
    <span className="text-truncate" style= { consoleTextStyle } >{ text }</span>
  )
}

export default Text