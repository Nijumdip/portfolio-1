import React from "react";
import CTA from "./CTA";
import "./Header.css";
import ME from "../../assets/nijum_pic-removebg-preview.png";
import HeaderSocials from "./HeaderSocials";
import { BsArrowRight } from 'react-icons/bs';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div>
          <h5>Hello I'm</h5>
          <h1>Shamima Akter</h1>
          <h5 className="text-light">Front-End Developer</h5>
          <CTA />
          <HeaderSocials />
        </div>

        <div className="me">
          <img className="rounded-circle" src={ME} alt="" />
          <div>More About Me <BsArrowRight/></div>
        </div>
        
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
      </div>
    </header>
  );
};

export default Header;
