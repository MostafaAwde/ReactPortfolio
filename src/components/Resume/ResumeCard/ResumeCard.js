import React from "react";
import './resumeCard.css';

export const ResumeCard = ({ title, subTitle, description }) => {
  return (
    <div className="resumeCard">
      <div className="timeline"></div>
      <div className="main-content">
        <div className="text">
          <div>
            <h3 className="title">{title}</h3>
            <p className="subtitle">{subTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};