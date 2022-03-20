import React from 'react'
import { useParams } from 'react-router-dom';

const Projects = () => {

    const { projectId } = useParams();

  return (
    <div className="container">
      <h1><span className="text-capitalize">{ projectId }</span> Project</h1>
    </div>
  )
}

export default Projects