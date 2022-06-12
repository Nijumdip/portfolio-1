import React from "react";
import ME from "../../assets/nijum_pic-removebg-preview.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const HireMe = () => {
  return (
    <section>
      <div className="d-lg-flex justify-content-around align-items-center">
        <img
          style={{ width: "390px", height: "490px" }}
          className="rounded-circle"
          src={ME}
          alt=""
        />
        <div>
          <p>
            Start my Journey as Influencer. <br /> Creating yourself as a as Influencer.
            It means to qualify or build. <br /> Then Apply for a job and focused on
            career.
          </p>
          <Link to="/contact" className="btn btn-primary"> Hire Me <BsArrowRight />
          </Link>
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default HireMe;
