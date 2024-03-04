import React from "react";
import { Card } from "../layouts/Card/Card";
import { GoalsData } from "../../data/GaolsData";
import { Title } from "../layouts/Title/Title";
import "./goals.css";

export const Goals = () => {
  return (
    <div className="goals" id="goals">
      <Title title={"Goals"} />
      <div className="container">
        {GoalsData.map((item) => (
          <Card
            title={item.title}
            description={item.description}
            icon={item.icon}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};
