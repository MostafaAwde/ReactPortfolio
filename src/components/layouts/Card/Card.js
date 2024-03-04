import React from "react";
import "./card.css"; // Make sure to create this CSS file

export const Card = ({ title, description, image, icon }) => {
  return (
    <div className="card">
      <div className="card-content">
        { image  && <img src={image} className="card-image" />}
        { icon  && <span>{icon}</span>}
        <div className="card-text">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </div>
  );
};
