import React from "react";
// import { Link } from "react-router-dom";
import HeaderIMG from "../assets/header.png";
import Auth from "../utils/auth";
import Helmets from "../assets/swhelmets.jpg";

const Header = () => {
  return (
    <>
      <nav className="header">
        {Auth.loggedIn() ? (
          <a
            href="/login"
            onClick={() => Auth.logout()}
            className="login-signup text-white"
          >
            Logout
          </a>
        ) : (
          <a href="/login" className="login-signup text-white">
            Login/SignUp
          </a>
        )}

        <img src={HeaderIMG} className="headerimg" alt="Force Fit" />

        <p className="header-text font-bold"> Get fit, you will!</p>
      </nav>
    </>
  );
};

export default Header;
