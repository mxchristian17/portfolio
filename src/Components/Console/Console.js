import React from 'react'
import Var from '../SyntaxStyles/Var'
import VarDeclaration from '../SyntaxStyles/VarDeclaration'
import Symbol from '../SyntaxStyles/Symbol'
import Text from '../SyntaxStyles/Text'
import Comment from '../SyntaxStyles/Comment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3, faGitSquare, faHtml5, faLaravel, faPhp, faReact } from '@fortawesome/free-brands-svg-icons'
import '../Console/Cursor.css'
import { Link } from 'react-router-dom'


const Console = () => {

    const consoleBackgroundStyle = { backgroundColor : '#262626', 'fontSize' : '0.9em', cursor : 'text' }

  return (
    <div style={ consoleBackgroundStyle } className="position-relative col-md-6 col-lg-6 text-start ps-4 rounded py-3 text-truncate text-light">
        <Comment text="//Some of my projects..." blink={false} /><br />
        <VarDeclaration text="const " />
        <Var text="reactJsProject " />
        <Symbol text="= { " /><br />
        &emsp;<Text text="'name' " /><Symbol text=": " /><Text text="'Duo Austral'" /><Symbol text="," /><br />
        &emsp;<Text text="'date' " /><Symbol text=": " /><Text text="'01/02/2022'" /><Symbol text="," /><br />
        &emsp;<Text text="'link' " /><Symbol text=": " /><a className="btn btn-sm btn-secondary py-0 text-decoration-none" rel="noreferrer" href="https://github.com/mxchristian17/duoaustral.git" target="_blank">GitHub link</a><Comment text=" // <--" /><br />
        <Symbol text="}" />
        <br />

        <VarDeclaration text="const " />
        <Var text="LaravelProject " />
        <Symbol text="= { " /><br />
        &emsp;<Text text="'name' " /><Symbol text=": " /><Text text="'Neutrinus'" /><Symbol text="," /><br />
        &emsp;<Text text="'date' " /><Symbol text=": " /><Text text="'01/03/2020'" /><Symbol text="," /><br />
        &emsp;<Text text="'link' " /><Symbol text=": " /><a className="btn btn-sm btn-secondary py-0 text-decoration-none" rel="noreferrer" href="https://github.com/mxchristian17/Neutrinus.git" target="_blank">GitHub link</a><Comment text=" // <--" /><br />
        <Symbol text="}" />
        <br />

        <VarDeclaration text="const " />
        <Var text="PhpProject " />
        <Symbol text="= { " /><br />
        &emsp;<Text text="'name' " /><Symbol text=": " /><Text text="'Administrador OyC'" /><Symbol text="," /><br />
        &emsp;<Text text="'date' " /><Symbol text=": " /><Text text="'01/03/2016'" /><Symbol text="," /><br />
        &emsp;<Text text="'link' " /><Symbol text=": " /><a className="btn btn-sm btn-secondary py-0 text-decoration-none" rel="noreferrer" href="https://drive.google.com/file/d/1D5VTahGoNpqYwlt7NwE_EcpfxFOeXQcG/view?usp=sharing" target="_blank">Demo video</a><Comment text=" // <--" /><br />
        <Symbol text="}" />
        <div className="cursor"></div>

        <div className="position-absolute pe-3 bottom-0 end-0 h5 opacity-25">
          <FontAwesomeIcon className="px-2" icon={ faGitSquare } />
          <FontAwesomeIcon className="px-2" icon={ faReact } />
          <FontAwesomeIcon className="px-2" icon={ faPhp } />
          <FontAwesomeIcon className="px-2" icon={ faLaravel } />
          <FontAwesomeIcon className="px-2" icon={ faCss3 } />
          <FontAwesomeIcon className="px-2" icon={ faBootstrap } />
          <FontAwesomeIcon className="px-2" icon={ faHtml5 } />
        </div>

    </div>
  )
}

export default Console