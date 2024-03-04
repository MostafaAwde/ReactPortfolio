import React from "react";
import { Title } from "../layouts/Title/Title";
import { mission } from "../../assets";
import { vision } from "../../assets";
import "./about.css";

export const About = () => {
  return (
    <div className="about" id="about">
      <Title title="About" description="What I do" />
      <div className="container">
        <div className="about-content">
          <div className="image">
            <img src={vision} alt="" />
          </div>
          <div className="text">
            <h2>Vision</h2>
            <hr />
            <p>
              Providing hope and transformation through counseling and coaching,
              unlocking talents, strengthening relationships, and inspiring
              excellence in individuals. Their ultimate aim is a world where
              everyone thrives academically, emotionally, and professionally,
              creating positive change for future generations.
            </p>
          </div>
          <hr className="hrSeparation"/>
          <div className="about-content">
            
            <div className="text">
              <h2>Mission</h2>
              <hr />
              <p>
                At Mind's Eye, our mission is to empower individuals and
                families through personalized counseling and coaching to achieve
                academic, emotional, and professional success. We nurture
                growth, resilience, and positive relationships, striving for
                lasting impacts on lives and communities, one person at a time.
              </p>
            </div>
            <div className="image">
              <img src={mission} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
