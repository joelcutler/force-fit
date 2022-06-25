import React from "react";
// import { Link } from "react-router-dom";
import HeaderIMG from "../assets/header.png";

const Header = () => {
  return (
    <>
      <nav className="header">
        <p className="login-signup">Login/SignUp</p>
        <img src={HeaderIMG} className="headerimg" alt="Force Fit" />
        <p className="header-text"> Get fit, you will</p>
      </nav>
    </>
  );
};

export default Header;
