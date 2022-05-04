import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import '../../css/Video.css';
import CategoryContext from '../../context/CategoryContext';


function Content() {
    const activeCategories = useContext(CategoryContext);
    const { category, active } = activeCategories;
    const [allData, seAllData] = useState(['']);


    // get all data through get api from details collection //
    useEffect(() => {
        const fetchData = async () => {
            const url = "http://localhost:8080/data";
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            let data = await response.json();
            seAllData(data);

            if (!(active === "All")) {
                seAllData(category);
            } else {
                seAllData(data)
            }
        }
        fetchData();
    }, [active, category])

    return (
        <div>
            <div className="content">
                <div className="videos">
                    <div className="row videos__container">
                        
                        {allData.length > 0 ? allData.map((element, index) => {
                            return <>
                                <div key={element._id} className="video col-lg-3 col-sm-12 col-md-6" style={{ cursor: "pointer" }}>
                                    <div className="video__thumbnail">
                                        <span className="video_time">
                                            {element.videoTime}
                                        </span>
                                        <img src={element.image} alt="/" />
                                    </div>
                                    <div className="video__details">
                                        <div className="author">
                                            <img src="http://aninex.com/images/srvc/web_de_icon.png" alt="" />
                                        </div>
                                        <div className="title">
                                            <h3>
                                                {element.name}
                                            </h3>
                                            <a href='/'>{element.channelName}</a>
                                            <span>{element.view} • {element.uploadTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }) : "data not found"
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Content