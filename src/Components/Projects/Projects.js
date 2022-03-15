import React from 'react'
import { useParams } from 'react-router-dom';

const Projects = () => {

    const { projectId } = useParams();

  return (
    <div className="container">Project { projectId }</div>
  )
}

export default Projects