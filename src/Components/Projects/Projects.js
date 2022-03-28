import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Projects = () => {

    const { projectId } = useParams();

  return (
    <section className="container">

      <article className="top-0 py-md-4 align-items-center">
        <h3 className="p-4"><span className="text-capitalize">{ projectId }</span></h3>
        <FontAwesomeIcon className="h1 pb-4" icon={ faLock } />
        <p className="h6">I´m sorry. This is an amazing project, but unfortunately is private for now.</p>
        <p className="h6">If you want some extra information about this project you will need to <Link to="/contact" className="text-decoration-none">contact me</Link>. I´ll be happy to share with you some details of it!</p>
      </article>
    </section>
  )
}

export default Projects