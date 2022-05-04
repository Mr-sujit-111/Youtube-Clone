import React from 'react';
import Buttons from '@material-ui/core/Button';
import '../../css/Topbar.css';
import { useState } from 'react';
import CategoryContext from '../../context/CategoryContext';
import { useContext } from 'react';
import { useEffect } from 'react';

function Button(props) {
    const categoryData = useContext(CategoryContext);
    const { currentCategory, active, fiterData } = categoryData;
    const { name } = props
    const [classActive, setClassActive] = useState("All")

    const buttonStyle = {
        borderRadius: "20px",
        margin: "12px",
        marginLeft: 0,
        color: "white"
    }
    useEffect(() => {
        setClassActive(active)
    }, [active])

    const handleClick = (data) => {
        if (data === name) {
            currentCategory(name);
        }
        fiterData(data)
    }
    return (
        <div className="category d-inline scroll-toggle__list-item">
            <Buttons variant="contained" onClick={() => handleClick(name)} className={classActive === name ? "active" : "inActive"}
                style={buttonStyle}>{name}
            </Buttons>
        </div>
    )
}

export default Button