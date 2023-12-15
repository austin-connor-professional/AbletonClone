/* MainBody.js */
import React from "react";
import './mainBody.css';
import '../../App.css';
import BeatMixerImage from '../../assets/image2.png';
import BlurredWalk from '../../assets/iamge3.png';
import VideoImage from '../../assets/videoImage.png';
import WhiteBoard from '../../assets/image4.png';
import GroupSession from '../../assets/image5.png';
import AbletonSign from '../../assets/image6.png';

const MainBody = () => {
    return (
        <div className="main-body-container">
            <div className="yellow-container">
                <img className="beat-image" src={BeatMixerImage} alt="image of someone using a beat mixer"/>
                <div className="yellow-box">
                    <img className="blurred-image" src={BlurredWalk} alt="image of someone walking but it is blurred"/>
                </div>
            </div>
            <div className="body-text regular-text">
                <h3 className="regular-text">Making music isn't easy. It takes time, effort and learning. But when you're in the flow, it's incredibly rewarding.</h3>
                <p className="regular-text">We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.</p>
            </div>
            <div className="video-image-container"><img className="video-image" src={VideoImage} alt="image of a video"/>
            <p className="info-about-image regular-text">Random info</p></div>
            <div className="body-text regular-text">
                <h3 className="regular-text">We believe it takes focus to create truly oustanding instruments. We only work on a few products and we strive to make them great.gi</h3>
            </div>
            <div className="green-container">
                <div className="green-box">
                    <img src={WhiteBoard} alt="image of someone using a whiteboard"></img>
                    <img src={AbletonSign} alt="image of ableton sign on side of building"></img>
                </div>
                <img src={GroupSession} alt="image of two people collaborating as a group" className="collab-image"></img>
            </div>
        </div>
    );
}

export default MainBody;
