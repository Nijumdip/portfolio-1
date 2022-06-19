import React from "react";
import "./About.css";
import ME from "../../assets/nijum_pic-removebg-preview.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { BiUserCircle } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h2 className="pb-1">About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME}  alt="about me" />
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
            
            <article className="about_card">
            <BiUserCircle className="about_icon" />
              <h5>Clients</h5>
              <small>200+</small>
            </article>
          </div>
          <p>
          Hello !! My name is Shamima Akter.  I am a very ordinary person. I know very little about web development. I look forward to developing my innovative creative skills to grow myself and the company.I am a quick learner. I love learning new technology and trying to improve myself and working hard.
        </p>
        <a href="https://m.me/nizum.nizum.1481/" target="_blank" className="btn btn-primary">
          Let's Talk
        </a>
        </div>
      </div>
    </section>
  );
};

export default About;
