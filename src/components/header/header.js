import React, { useState } from "react";
import "./header.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = (props) => {
  // <div class="header">
  //     <a class="logo" href="index.html">NepalTravel</a>
  //     <div class="toggle"></div>
  //     <nav>
  //       <ul>
  //         <li class="contacts">
  //           <a href="./about/about.html">
  //             About us
  //           </a>
  //         </li>
  //         <li class="contacts">Follow us</li>
  //         <li class="socials">
  //           <a href="https://web.telegram.org">
  //           <img src="Resources/Icons/telegram-brands.svg" alt="Telegram">
  //           </a>
  //         </li>
  //         <li class="socials">
  //           <a href="https://vk.com/">
  //           <img src="Resources/Icons/vk-brands.svg" alt="vk">
  //         </a>
  //         </li>
  //         <li class="socials">
  //           <a href="https://www.youtube.com/">
  //           <img src="Resources/Icons/youtube-square-brands.svg" alt="YouTube">
  //           </a>
  //         </li>
  //       </ul>
  //     </nav>
  //     <div class="toggle-panel">
  //       <div class="navigation">
  //         <ul>
  //           <li><a href="">Home</a></li>
  //           <li><a href="./about/about.html">About</a></li>
  //           <li><a href="">Blog</a></li>
  //         </ul>
  //       </div>
  //       <footer class="navigation-footer">
  //         <div class="contacts">
  //           <a href="https://web.telegram.org">
  //             <img src="Resources/Icons/telegram-brands.svg" alt="Telegram">
  //           </a>
  //           <a href="https://vk.com/">
  //             <img src="Resources/Icons/vk-brands.svg" alt="vk">
  //           </a>
  //           <a href="https://www.youtube.com/">
  //             <img src="Resources/Icons/youtube-square-brands.svg" alt="YouTube">
  //           </a>
  //         </div>
  //       </footer>
  //     </div>
  // </div>

  const {overlay, toggleOverlay} = props;

  const handleClick = () => {
    toggleOverlay();
  }

  return (
    <div className="header">
      <a className="logo" href="index.html">
        NepalTravelBlog
      </a>
      <button className="mobile-button" onClick={handleClick}>
        {!overlay? (
          <AiOutlineMenu className="svg-menu-icon" />
        ) : (
          <AiOutlineClose className="svg-menu-icon active" />
        )}
      </button>
      <nav>
        <a
          className="about"
          href="https://dfkorn.github.io/nepal/about/about.html"
        >
          About us
        </a>

        {/* <li className="socials">
            <a href="https://web.telegram.org">
              <Telegram alt="Telegram" />
            </a>
          </li>
          <li className="socials">
            <a href="https://vk.com/">
              <Vk alt="vk" />
            </a>
          </li>
          <li className="socials">
            <a href="https://www.youtube.com/">
              <YouTube alt="YouTube" />
            </a>
          </li> */}

        <a className="logo" href="https://dfkorn.github.io/nepal/index.html">
          NepalTravel
        </a>
      </nav>
    </div>
  );
};

export default Header;
