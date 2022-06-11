import React from 'react';
import './Experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
    <h2>My Skills</h2>

    <div className="container experience_container">
      <div className="experience_frontend">
        <h3>Frontend Development</h3>
        <div className="experience_content">
          <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
            <div>
              <h4>HTML5, CSS3</h4>
              <small className="text-light">Expertise</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
            <div>
              <h4>JavaScript</h4>
              <small className="text-light">Expertise</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
            <div>
              <h4>React</h4>
              <small className="text-light">Expertise</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
            <div>
              <h4>Tailwind CSS</h4>
              <small className="text-light">Expertise</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
            <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Expertise</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
            <div>
              <h4>DaisyUi</h4>
              <small className="text-light">Expertise</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
            <div>
              <h4>React Bootstrap</h4>
              <small className="text-light">Expertise</small>
            </div>
          </article>
        </div>
      </div>

      <div className="experience_backend">
        <h3>Backend Development</h3>
        <div className="experience_content">
          <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
            <div>
              <h4>Node.Js</h4>
              <small className="text-light">Familiar</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
            <div>
              <h4>Express.Js</h4>
              <small className="text-light">Comportable</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
            <div>
              <h4>MongoDB</h4>
              <small className="text-light">Comportable</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
            <div>
              <h4>Rest API</h4>
              <small className="text-light">Comportable</small>
            </div>
          </article>
          <article className="experience_details">
            <BsPatchCheckFill className="experience_details-icon" />
            <div>
              <h4>Payment Getway</h4>
              <small className="text-light">Familiar</small>
            </div>
          </article>
        </div>
      </div>
    </div>
      
    </section>
  )
}

export default Experience