import React, { useContext } from "react";
import "./about.css";
import Award from "../../img/award.jpg";
import { ThemeContext } from "../../context";

const About = () => {
// darkmode
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg" style={{backgroundColor: darkMode && "#222"  }}></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="a-img"
            alt="papa"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <p className="a-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-text">
            <h4 className="a-award-title">Best Development Award 2022</h4>
            <p className="a-award-desc">
              It is a long established fact that a reader will be distracted by
              the readable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
