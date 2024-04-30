import React from "react";
import power2 from "../../assets/power2.png";
import bulb from "../../assets/bulb.png";
import doc from "../../assets/doc.png";
import power from "../../assets/power.png";
import men from "../../assets/man.png";
import hyd from '../../assets/hyd.png'
import bang from '../../assets/bang.png'
import navlogo from "../../assets/navlogo.png";
import "./Showcase.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Showcase = () => {
  return (
    <>
      <div>
        <div className="showcase">
          <h1 className="showcase-heading" id="whyChoose">Why Choose Nexa Design?</h1>
          <div className="showcase-row">
            <p className="showcase-para"> Your Creative Future, Amplified.</p>
            <img src={power} alt="" className="power1" />
          </div>
          <div className="process-card-container1 ">
            <div className="process-card1">
              <div className="process-icon1">
                <img src={doc} alt="/" className="icon1" />
                <h6 className="h6">Stunning Campus</h6>
              </div>

              <p className="process-card-name1 pb-5">
                Learn in an environment designed to inspire at every corner. Our
                state-of-the-art campus is more than a backdrop—it's the
                starting point of your creative journey.
              </p>
            </div>
            <div className="process-card1">
              <div className="process-icon1">
                <img src={power2} alt="/" className="icon1" />
                <h6 className="h6">Cutting-Edge Labs</h6>
              </div>

              <p className="process-card-name1 pb-5">
                Get hands-on in labs brimming with the latest tech, where ideas
                come to life. Here, the future isn't just talked about—it's
                created.
              </p>
            </div>
            <div className="process-card1">
              <div className="process-icon1">
                <img src={bulb} alt="/" className="icon1" />
                <h6 className="h6">24/7 Support</h6>
              </div>

              <p className="process-card-name1 pb-5">
                Nurture your potential with round-the-clock support. Whether
                it’s a burning midnight query or project guidance, we’re here
                for you—always.
              </p>
            </div>
            <div className="process-card1">
              <div className="process-icon1">
                <img src={doc} alt="/" className="icon1" />
                <h6 className="h6">Dynamic Internships</h6>
              </div>

              <p className="process-card-name1 pb-5">
                Bridge theory with practice through our immersive internships.
                Dive into real-world projects, and start making a difference
                from day one.
              </p>
            </div>
            <div className="process-card1">
              <div className="process-icon1">
                <img src={power2} alt="/" className="icon1" />
                <h6 className="h6">Career Assistance</h6>
              </div>

              <p className="process-card-name1 pb-5">
                Launch your career the right way. From crafting your portfolio
                to connecting with industry leaders, we pave the path to your
                professional success.
              </p>
            </div>
            <div className="process-card1">
              <div className="process-icon1">
                <img src={bulb} alt="/" className="icon1" />
                <h6 className="h6">Robust Industry Partnerships</h6>
              </div>

              <p className="process-card-name1 pb-5">
                Step into the professional sphere with confidence, thanks to our
                strong industry links. With Nexa, opportunities don’t
                wait—they’re grabbed.
              </p>
            </div>

            <div className="campus" id="camPus">
              <div>
                <h1 className="campus-heading">
                  <span className="campus-head">Discover Nexa Design:</span>{" "}
                  Future-
                  <br />
                  Forward Learning Redefined
                </h1>
                <p className="campus-des">
                  Welcome to Nexa Design, where we're redefining the boundaries
                  of learning and creativity. Nestled at the cutting edge of
                  design and AI.Our vibrant campus buzzes with fresh ideas, with
                  state-of-the-art labs that transform visions into reality.
                  From immersive three-month courses to hands-on internships.
                  It’s real, it’s revolutionary, and it’s all about creating the
                  ultimate launchpad for your career.
                </p>
                <button className="contact2 ">Contact Course Advisor</button>
              </div>
              <img src={men} alt="" className="campus-men" />
            </div>
          </div>
          <div className="campus-aca" id="conTact">
            <div className="aca-col">
              <h1 className="aca-head">
                Join Next Gen <span className="design1">Design</span> Academy
              </h1>
              <p className="aca-para">
                Nexa Design is your platform to explore, learn, and innovate.
                <br />
                Join us, and let's design the future, today!
              </p>
            </div>
            <div className="aca-but">
              <button className="demo">Free Demo</button>
              <button className="touch"> Get In Touch</button>
            </div>
          </div>
          <div className="location">
            <h1 className="location-head">Our Locations</h1>
            <p className="location-para">
              Come and chat with us about your goals over a cup of coffee
            </p>
            <div className="cardrow">
              <div className="card-loc">
                <img src={hyd} alt="Cookies Essentials" />
                <h7 className="card-loc-head">Hyderabad</h7>
                <p className="card-loc-name pb-5">2nd Floor, Hitech City Rd, Above Domino's, opp. Cyber Towers, Hyderabad, Telangana</p>
                <button className="scedule">Schedule a visit</button>
              </div>
              <div className="card-loc">
                <img src={bang} alt="" />
                <h7 className="card-loc-head" >Bangaluru</h7>
                <p className="card-loc-name pb-5">3rd Floor , Whitefield Main Road,Above Domino's, Marathahalli, Bengaluru, Karnataka</p>
                <button className="scedule">Schedule a visit</button>
              </div>
            </div>
          </div>
          {/*Footer*/}
          <div className="Footer-container">
            <div className="containerFoot">
              <div className="rowFoot">
                <div className="col-md-6 col-lg-5 col-12 ft-1">
                  <img src={navlogo} alt="" className="logo2" />
                  <p>
                    Nexa Design is your platform to explore,
                    <br /> learn, and innovate. Join us, and let's <br />
                    design the future, today!
                  </p>
                  <p>Follow Us On</p>
                  <div className="footer-icons">
                    <FaFacebook className="icon-foo" />
                    <FaTwitter className="icon-foo" />
                    <FaInstagram className="icon-foo" />
                    <FaLinkedinIn className="icon-foo" />
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 col-12 ft-2">
                  <h3 className="desi">Quick Links</h3>
                  <ul>
                    <li className="nav-item">
                      <a className="" href="/">
                        Interships
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="" href="/">
                        ShowCase
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="" href="/">
                        Campus{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="" href="/">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 col-lg-4 col-12 ft-3">
                  <h3 className="desi">Courses</h3>

                  <p>VFX </p>
                  <p> AR & VR</p>
                  <p>UX Design</p>
                  <p>Interior Design </p>
                  <p>Fashion Design</p>
                  <p>Gaming Design & Art </p>
                  <p>Game Development</p>
                  <p>Digital Marketing</p>
                </div>
                <div className="col-md-6 col-lg-4 col-12 ft-3">
                  <h3 className="desi">Bookmarks</h3>
                  <p>Login</p>
                  <p>Start Now</p>
                </div>
              </div>
            </div>
          </div>
          <div className="Last-footer">
            <div className="horizontal-line"></div>

            <p>© Copyright Next Gen Design. Ltd | 2023 | Privacy Policy</p>
          </div>
        </div>
      </div>

    </>
  );
};

export default Showcase;
