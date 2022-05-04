import React from 'react';
import '../css/Sidebar.css';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import ShortsIcon from '@material-ui/icons/TheatersOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import { Tooltip } from '@material-ui/core';

function LeftSideBar() {
    return (
        <>
            <div className="sidebar col-lg-2" id="leftSlider">
                <div className="sidebar__categories">
                    <div className="sidebar__category">
                        <Tooltip title="home">
                            <HomeOutlinedIcon />
                        </Tooltip>
                        <span>Home</span>
                    </div>
                    <div className="sidebar__category">
                        <Tooltip title="Explore">
                            <ExploreOutlinedIcon />
                        </Tooltip>
                        <span>Explore</span>
                    </div>
                    <div className="sidebar__category">
                        <Tooltip title="Shorts">
                            <ShortsIcon />
                        </Tooltip>
                        <span>Shorts</span>
                    </div>
                    <div className="sidebar__category">
                        <Tooltip title="Subscription">
                            <SubscriptionsOutlinedIcon />
                        </Tooltip>
                        <span>Subcriptions</span>
                    </div>
                </div>
                <hr />
                <div className="sidebar__categories">
                    <div className="sidebar__category">
                        <VideoLibraryOutlinedIcon></VideoLibraryOutlinedIcon>
                        <span>Library</span>
                    </div>
                    <div className="sidebar__category">
                        <HistoryOutlinedIcon></HistoryOutlinedIcon>
                        <span>History</span>
                    </div>
                    <div className="sidebar__category">
                        <WatchLaterOutlinedIcon></WatchLaterOutlinedIcon>
                        <span>Watch Later</span>
                    </div>
                    <div className="sidebar__category">
                        <ThumbUpOutlinedIcon></ThumbUpOutlinedIcon>
                        <span>Liked Videos</span>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}

export default LeftSideBar