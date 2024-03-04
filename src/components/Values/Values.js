import React from "react";
import { Card } from "../layouts/Card/Card";
import { ValuesData } from "../../data/ValuesData";
import { Title } from "../layouts/Title/Title";
import './values.css'

export const Values = () => {
  return (
    <div className="values" id="values">
      <Title title={'Values'}/>
      <div className="container">
        {ValuesData.map((item) => (
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
