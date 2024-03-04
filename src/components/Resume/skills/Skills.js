import React from "react";
import './skills.css';

export const Skills = () => {
  const skillsData = [
    { skill: 'Educational Consultancy', percentage: 85 },
    { skill: 'Family & Educational Counseling', percentage: 81 },
    { skill: 'Life Skills Coaching', percentage: 78 },
    { skill: 'Change Agent as Life Coach', percentage: 83 },
    { skill: 'Project Management', percentage: 90 },
    { skill: 'Educational Philosophy', percentage: 75 },
    { skill: 'Behavioral Change Agent', percentage: 79 },
    { skill: 'Teaching Effectiveness ', percentage: 94 },
    { skill: 'Teaching Practices and Dynamics', percentage: 90 },
    { skill: 'High Performance Coaching', percentage: 85 },
    { skill: 'Strategic Planning', percentage: 75 },
    { skill: 'Mental Health', percentage: 90 },
  ];
  return (
    <div className="skills">
      <h2 className="title">Skills</h2>
      {skillsData.map((skill, index) => (
        <div className="skill" key={index}>
          <div className="skill-name">{skill.skill}</div>
          <div className="skill-bar">
            <div className="skill-per" style={{ width: `${skill.percentage}%` }} per={`${skill.percentage}%`}></div>
          </div>
        </div>
      ))}
    </div>
  );
};
