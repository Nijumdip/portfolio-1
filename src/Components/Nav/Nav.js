import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("/");
  return (
    <nav>
      <Link onClick={() => setActiveNav("/home")}
        className={activeNav === "/home" ? "active" : ""} to="/home"><AiOutlineHome />
      </Link>
      <Link onClick={() => setActiveNav("/about")}
        className={activeNav === "/about" ? "active" : ""} to="/about"><BiUserCircle />
      </Link>
      <Link onClick={() => setActiveNav("/experience")}
        className={activeNav ==="/experience" ? "active" : ""}to="/experience"><GiSkills/>
      </Link>
      <Link onClick={() => setActiveNav("/service")}
        className={activeNav ==="/service" ? "active" : ""}to="/service"><RiServiceLine />
      </Link>
      <Link onClick={() => setActiveNav("/contact")}
        className={activeNav === "/contact" ? "active" : "" } to="/contact"><BiMessageSquareDetail />
      </Link>
    </nav>
  );
};

export default Nav;
