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
            Start my Journey as Influencer. <br /> Creating yourself as a as Influencer.
            It means to qualify or build. <br /> Then Apply for a job and focused on
            career.
          </p>
          <Link to="/blog" className="btn btn-primary">
          Hire Me <BsArrowRight />
        </Link>
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default HireMe;
