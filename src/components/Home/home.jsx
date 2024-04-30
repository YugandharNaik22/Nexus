import React from "react";
import "./home.css";
import arrow from "../../assets/arrow.png";
import pen from "../../assets/pen.png";
import paint from "../../assets/paint.png";
import power from "../../assets/power.png";
import boy from "../../assets/boy.png";
import game from "../../assets/game.png";
import calander from "../../assets/calander.png";
import mike from "../../assets/mike.png";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1 className="heading">
          Next Gen <span className="design">Design</span>
          <br />
          <div className="image-container">
            <img src={pen} alt="/" className="pen" />
            Academy
            <img src={arrow} alt="/" className="image" />
          </div>
          <p className="home-para">
            Transform your passion into expertise with next-generation training,
            Nexa Design is your <br />
            platform to explore, learn, and innovate. Join us, and let's design
            the future, today!
            <div className="row">
              <button className="visit">Visit Now</button>
              <button className="contact">Contact Creative Adviser</button>
              <img src={paint} alt="/" className="paint" />
            </div>
            <img src={power} alt="/" className="power" />
          </p>
        </h1>
        <h6 className="explore" id="couRses">Explore Our Courses</h6>
        <div className="card-row">
          <div className="card">
            <img src={game} alt="Cookies Essentials" />
            <h7>Gaming</h7>
            <p className="card-name pb-5">Explore Course</p>
          </div>
          <div className="card">
            <img src={boy} alt="" />
            <h7>AR/VR</h7>
            <p className="card-name pb-5">Explore Course</p>
          </div>
          <div className="card">
            <img src={mike} alt="" />
            <h7>Marketing</h7>
            <p className="card-name">Explore Course</p>
          </div>
          <div className="card">
            <img src={calander} alt="" />
            <h7>UX Design</h7>
            <p className="card-name">Explore Course</p>
          </div>
        </div>
        <button className="contact">View All Courses</button>
      </div>
     
    </>
  );
};

export default Home;
