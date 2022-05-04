import React from 'react';
import { useState } from 'react';
import '../css/Navbar.css';

function Navbar() {
    const [leftbardisplay, setLeftbardisplay] = useState(false)
    const handleClick = () => {
        const leftSlider = document.getElementById('leftSlider');
        if (!leftbardisplay) {
            leftSlider.style.display = "flex";
            setLeftbardisplay(true);
        } else {
            leftSlider.style.display = "none";
            setLeftbardisplay(false);
        }
        console.log(leftSlider);
    }
    return (
        <>
            <nav className="navbar">
                <div className="d-flex space-between justify-content align-items w100">
                    <div className="navbar__left">
                        <i className={leftbardisplay ? "fa fa-xmark navbar__left__hamburger" : "fa fa-bars navbar__left__hamburger"} onClick={handleClick} aria-hidden="true"></i>
                        <img src="https://i.ya-webdesign.com/images/youtube-logo-2016-png-8.png" alt="youtube" width="60px" className="navbar__left__logo" />
                    </div>
                    <div className="navbar__center">
                        <input type="text" className="navbar__center__input" placeholder="Search" />
                        <button className="navbar__center__search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </div>
                    <div className="navbar__right">
                        <i className="fa fa-search navbar__right__icon" aria-hidden="true"></i>
                        <i className="fa fa-video-camera navbar__right__icon" aria-hidden="true"></i>
                        <i className="fa fa-th navbar__right__icon" aria-hidden="true"></i>
                        <i className="fa fa-bell navbar__right__icon" aria-hidden="true"></i>
                        <i className="fa fa-user navbar__right__icon" aria-hidden="true"></i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar