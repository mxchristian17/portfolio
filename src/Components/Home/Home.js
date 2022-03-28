import React from 'react'
import Console from '../Console/Console'
import Profile from '../Profile/Profile'
import AboutMe from '../AboutMe/AboutMe';
import ExtraKnowledge from '../ExtraKnowledge/ExtraKnowledge';
import { Courses } from '../Courses/Courses';

const Home = () => {

  return (
    <section className="container-fluid">

      <article className="w-100 top-0 py-md-4 d-flex align-items-center">
        <div className="row w-100 py-4 px-1 px-md-4 justify-content-md-center">
          <Profile />
          <Console />
        </div>
      </article>

      <article className="row px-3 px-md-4 pt-4 justify-content-md-center bg-light border-top border-bottom">
        <AboutMe />
        <ExtraKnowledge />
      </article>

      <article className="row px-3 px-md-4 pt-4 justify-content-md-center bg-dark border-bottom">
        <Courses />
      </article>

    </section>
  )
}

export default Home