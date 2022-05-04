import React from 'react'
import Button from './Button';
import '../../css/Topbar.css';
import '../../css/Filter-tag.css';
import { useState } from 'react';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

function Topbar() {
    const [classActive, setClassActive] = useState("All");
    const categories = ['Music', 'Movie', 'Trailer', 'Comedy', 'Series', 'Cartoon', 'Horror'];

    const handleClickRight = () => {
        var currentScroll = 0
        var slideTimer = setInterval(() => {
            document.getElementById('scroll_bar').scrollLeft += 20;
            currentScroll += 10;
            if (currentScroll >= 100) {
                window.clearInterval(slideTimer);
            }
        }, 25);

    }
    const handleClickLeft = () => {
        var currentScroll = 0
        var slideTimer = setInterval(() => {
            document.getElementById('scroll_bar').scrollLeft -= 20;
            currentScroll += 10;
            if (currentScroll >= 100) {
                window.clearInterval(slideTimer);
            }
        }, 25);
    }
    return (
        <div className="col-sm-12">
            <div className="scroll-toggle" >
                <KeyboardArrowLeftIcon fontSize="large" onClick={handleClickLeft} className="scroll-toggle__button scroll-toggle__button--left"></KeyboardArrowLeftIcon>
                <ul className="scroll-toggle__list" id="scroll_bar" >
                    <Button name="All" classActive={classActive} />
                    {categories.map((item, index) => {
                        return < Button key={index} name={item} classActive={classActive} />
                    })}
                </ul>
                <KeyboardArrowRightIcon fontSize="large" onClick={handleClickRight} className="scroll-toggle__button scroll-toggle__button--right"></KeyboardArrowRightIcon>
                {/* <button className="scroll-toggle__button scroll-toggle__button--right">Scroll Right</button> */}
            </div>
            {/* </div> */}
        </div>
    )
}

export default Topbar;