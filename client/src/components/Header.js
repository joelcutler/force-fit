import React from "react";
// import { Link } from "react-router-dom";
import HeaderIMG from "../assets/header.png";
import Auth from "../utils/auth";
import Helmets from "../assets/swhelmets.jpg";

const Header = () => {
  return (
    <>
      <nav className="header">
        {Auth.loggedIn() && (
          <a
            href="/login"
            onClick={() => Auth.logout()}
            className="login-signup text-white absolute right-10 top-1"
          >
            Logout
          </a>
        )}

        <img src={HeaderIMG} className="headerimg" alt="Force Fit" />

        <p className="header-text font-bold"> Get fit, you will!</p>
      </nav>
    </>
  );
};

export default Header;
