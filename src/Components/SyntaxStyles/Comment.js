import './Comment.css'
import React, { useContext} from 'react'
import GeneralContext from '../../Context/GeneralContext'

const Comment = (props) => {

    const { consoleFontStyle } = useContext(GeneralContext);
    const consoleCommentStyle = { ...consoleFontStyle, 'color' : 'rgb(106,153,62)' }
    const { text, blink=true } = props

  return (
    <span className={blink ? "blink" : null} style= { consoleCommentStyle } >{ text }</span>
  )
}

export default Comment