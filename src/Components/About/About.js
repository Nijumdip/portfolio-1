import React from "react";
import "./About.css";
import ME from "../../assets/nijum_pic-removebg-preview.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>About Me</h5>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="about me" />
        </div> 
        </div>
        
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>6 months</small>
            </article>
            
            <article className="about_card">
            <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
          Hello !! My name is Shamima Akter. I am only one person who have no copy. I am a very ordinary person. I know very little about web development. I express my
          innovative creative skills for self and company growth. I am a
          hardworking and quick learner person. I Love to learn new technology and try to improve myself and working hard.
        </p>
        <a href="https://m.me/mahmud2640" className="btn btn-primary">
          Let's Talk
        </a>
        </div>
      </div>
    </section>
  );
};

export default About;
