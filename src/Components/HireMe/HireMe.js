import React from "react";
import ME from "../../assets/nijum_pic-removebg-preview.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const HireMe = () => {
  return (
    <section className="px-2">
      <div className="d-lg-flex justify-content-around align-items-center">
        <div>
        <img
        src={ME}
        width= "750px"
        className="rounded-circle"
        alt=""
      />
        </div>
        <div className="px-3 my-3">
          <p>
          Start my Journey as a  developer. <br /> Creating myself as a back-end developer. It means to qualify or build. <br />Just focused on my career.
          </p>
          <a href="mailto:nijumdip019911@gmail.com" className="btn btn-primary mx-2">
          Hire Me <BsArrowRight />
        </a>
          <Link to="/blog" className="btn btn-primary">
          Blog <BsArrowRight />
        </Link>
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default HireMe;
