import React from "react";
import './overlay-menu.css'
import { ReactComponent as Telegram } from "../../resources/telegram-brands.svg";
import { ReactComponent as Vk } from "../../resources/vk-brands.svg";
import { ReactComponent as YouTube } from "../../resources/youtube-square-brands.svg";

const OverlayMenu = () => {



    return(
        <div className="overlay-menu">
            <nav className="overlay-navigation">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Aboout us</a></li>
                    <li><a href="">NepalTravel</a></li>
                </ul>
            </nav>
            <footer className="overlay-footer">
                <div className="socials">
                    <a href="https://web.telegram.org" className="social-link">
                        <Telegram alt="Telegram" className="social-icon"/>
                    </a>
                    <a href="https://vk.com/" className="social-link">
                        <Vk alt="vk" className="social-icon"/>
                    </a>
                    <a href="https://www.youtube.com/" className="social-link">
                        <YouTube className="social-icon" alt="YouTube" />
                    </a>
                </div>
                <div >
                    <a href="" className="overlay-footer-logo">NepalTravel</a>
                </div>
            </footer>
        </div>


    );


};


export default OverlayMenu