import React from "react";
import "./Process.css";
import like from "../../assets/like.png";
import dots from "../../assets/dots.png";
import brief from '../../assets/brief.png'
import cala from '../../assets/cala.png'


const Process = () => {
  return (
    <div className="process">
      <div className=" row1">
        <h1 className="process-headings" id="ourProcess" >Our Process</h1>
        <img src={like} alt="" className="like" />
      </div>
      <p className="text-center">
        <span className="circle">o</span>
        ---------------------------------------------------------
        <span className="circle">o</span>
        ----------------------------------------------------------------
        <span className="circle">o</span>
      </p>

      <div className="process-card-container">
        <div className="process-card">
          <div className="process-icon">
            <img src={cala} alt="/" className="icon" />
            <h6 className="process-des">
              3-Month Course:
              <br />
              "Immerse & Innovate"
            </h6>
          </div>

          <p className="process-card-name pb-5">
            "Jumpstart your journey in just three months with Nexa Design's
            immersive courses. Dive deep into design and AI, where every class
            is a step closer to mastery. Here, innovation isn’t just a buzzword;
            it’s your daily routine."
          </p>
        </div>
        <div className="process-card">
          <div className="process-icon">
            <img src={dots} alt="/" className="icon"/>
            <h6 className="process-des">
              3-Month Internship:
              <br />
              "Experience & Execute"
            </h6>
          </div>

          <p className="process-card-name pb-5">
            Step out of the classroom and into the field. Our three-month
            internships place you in the heart of the industry, turning theories
            into action. You’re not just learning; you’re doing. This is your
            chance to shape the future, one project at a time.
          </p>
        </div>
        <div className="process-card">
          <div className="process-icon">
            <img src={brief} alt="/" className="icon"/>
            <h6 className="process-des">
              LaunchPad:
              <br />
              "Elevate & Emerge"
            </h6>
          </div>

          <p className="process-card-name pb-5">
            Nexa Design isn’t just a school; it’s your launchpad.
            Post-internship, harness your skills and our resources to catapult
            your career. From portfolio perfection to interview prep, we're here
            to help you not just fly, but soar.
          </p>
        </div>
      
      </div>
      <button className="contact1 ">Contact Course Advisor</button>
      
    </div>
   
  );
};

export default Process;
