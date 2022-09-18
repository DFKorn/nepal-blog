import React from "react";
import "./header.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = (props) => {
  

  const {overlay, toggleOverlay} = props;

  const handleClick = () => {
    toggleOverlay();
  }

  return (
    <div className="header">
      <a className="blog-logo" href="index.html">
        NepalTravelBlog
      </a>
      <button className="mobile-button" onClick={handleClick}>
        {!overlay? (
          <AiOutlineMenu className="svg-menu-icon" />
        ) : (
          <AiOutlineClose className="svg-menu-icon active" />
        )}
      </button>
      <nav className="header-nav">
        <a
          className="about"
          href="https://dfkorn.github.io/nepal/about/about.html"
        >
          About us
        </a>
        <a className="logo" href="https://dfkorn.github.io/nepal/index.html">
          NepalTravel
        </a>
      </nav>
    </div>
  );
};

export default Header;
