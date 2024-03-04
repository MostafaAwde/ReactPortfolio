import React, { useEffect, useState } from "react";
import { Title } from "../layouts/Title/Title";
import { Education } from "./education/Education";
import { Experience } from "./experience/Experience";
import { Skills } from "./skills/Skills";
import "./resume.css";

export const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [experienceData, setExperienceData] = useState(true);
  const [skillsData, setSkillsData] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 991) {
      setExperienceData(false);
      setEducationData(false);
      setSkillsData(false);
    }
  }, [])

  const toggleEducation = () => {
    if (window.innerWidth <= 991) {
      setExperienceData(false);
      setEducationData((prev) => !prev);
      setSkillsData(false);
    } else {
      setEducationData((prev) => !prev);
      setSkillsData(false);
    }
  };

  const toggleExperience = () => {
    if (window.innerWidth <= 991) {
      setEducationData(false);
      setExperienceData((prev) => !prev);
      setSkillsData(false);
    } else {
      setExperienceData((prev) => !prev);
      setSkillsData(false);
    }
  };

  const toggleSkills = () => {
    setEducationData(false);
    setExperienceData(false);
    setSkillsData((prev) => !prev);
  };

  return (
    <section id="resume" className="resume">
      <Title title="My Resume" />
      <ul className="links">
        <li
          onClick={toggleEducation}
          className={`${
            educationData ? "border-designColor" : "border-transparent"
          } resumeLi`}
        >
          Education
        </li>
        <li
          onClick={toggleExperience}
          className={`${
            experienceData ? "border-designColor" : "border-transparent"
          } resumeLi`}
        >
          Experience
        </li>
        <li
          onClick={toggleSkills}
          className={`${
            skillsData ? "border-designColor" : "border-transparent"
          } resumeLi`}
        >
          Skills
        </li>
      </ul>
      <div
        className="container"
        style={{
          justifyContent: skillsData ? "center" : "space-between",
        }}
      >
        {educationData && <Education />}
        {experienceData && <Experience />}
        {skillsData && <Skills />}
      </div>
    </section>
  );
};
