import React from "react";
import { motion } from "framer-motion";
import { ResumeCard } from "../ResumeCard/ResumeCard";
import "./experience.css";

export const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="experience"
    >
      {/* part one */}
      <div className="experience">
        <div className="expContainer">
          <div>
            <p>2012 - 2023</p>
            <h2 className="title">12 Years Of Experience</h2>
          </div>
          <div>
            <ResumeCard
              title="Manner High Schooly"
              subTitle="Grade 12 (SV & SE)"
            />
            <ResumeCard
              title="American Universal School"
              subTitle="Secondary Teacher"
            />
            <ResumeCard
              title="Al – Hekma High School"
              subTitle="Secondary Teacher"
            />
            <ResumeCard
              title="Science Excellence School"
              subTitle="Secondary Teacher + Head of Department"
            />
            <ResumeCard
              title="2 Lebanese Official Schools"
              subTitle="Intermediate Teacher + Coordination"
            />
            <ResumeCard
              title="Lycee Château De Science"
              subTitle="Secondary Teacher"
            />
            <ResumeCard
              title="Modern International School"
              subTitle="Secondary Teacher + Coordination"
            />
            <ResumeCard
              title="Lycee De San BIO"
              subTitle="Secondary Teacher + Coordination"
            />
            <ResumeCard
              title="Heliopolis High School"
              subTitle="Secondary Teacher + Coordination"
            />
            <ResumeCard
              title="Al-Imam Al-Kazem School"
              subTitle="Intermediate Teacher + Coordination"
            />
            {/* Additional ResumeCard components */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
