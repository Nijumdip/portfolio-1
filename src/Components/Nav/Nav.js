import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  return (
    <nav>
      <Link to="/home"><AiOutlineHome /></Link>
      <Link to="/about"><BiUserCircle /></Link>
      <Link to="/experience"><GiSkills /></Link>
      <Link to="/service"><RiServiceLine /></Link>
      <Link to="/contact"><BiMessageSquareDetail /></Link>
    </nav>
  );
};

export default Nav;
