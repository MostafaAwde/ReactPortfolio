import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { TypeAnimation } from "react-type-animation";
import './home.css'

export const Home = () => {
  return (
    <div className="landing" id="home">
      <div className="container">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <FaFacebook className="icons" style={{ color: "#1877f2" }}/>
              </a>
              <a href="#">
                <FaInstagram className="icons" style={{color: "#e4405f" }}/>
              </a>
              <a href="#">
                <FaLinkedin className="icons" style={{color: "#0a66c2" }}/>
              </a>
              <a href="#">
                <RiTwitterXFill className="icons" style={{color: "#14171a" }}/>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Hello I'm <span className="highlighted-text">Mohammad Awde</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              <p>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "We produce food for Mice",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "We produce food for Hamsters",
                    1000,
                    "We produce food for Guinea Pigs",
                    1000,
                    "We produce food for Chinchillas",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}                  
                  repeat={Infinity}
                />
              </p>
              <span className="profile-role-tagline">Mind's Eye Founder</span>
            </span>
          </div>
        </div>
        <div className="profile-picture">
        <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};
