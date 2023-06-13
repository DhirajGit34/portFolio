import React from "react";
import "./intro.css";
import Me from "../../img/mine.png";
import Scroll from "../../img/mouse.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello my name is</h2>
          <h1 className="i-name">Dhiraj Deka</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">App Developer</div>
            </div>
          </div>
          <p className="i-desc">
            I design and Develop service for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
        <img src={Scroll} alt="profile" className="i-scroll" />
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img
          src={Me}
          alt="profile"
          className="i-img"
          loading="lazy"
          sizes="(max-width: 500px) 100vw, (max-width: 768px) 500vw, 1280px"
          srcSet={`${Me} 100w, ${Me} 500w, ${Me} 1280w`}
        />
      </div>
    </div>
  );
};

export default Intro;
