// Education.js
import React from "react";
import { motion } from "framer-motion";
import { ResumeCard } from "../ResumeCard/ResumeCard";
import "./education.css";

export const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="education"
    >
      {/* part one */}
      <div className="education">
        <div className="eduContainer">
          <div>
            <p>2010 - 2023</p>
            <h2 className="title">Education Quality</h2>
          </div>
          <div>
            <ResumeCard
              title="BSc in Pure and Applied Chemistry"
              subTitle="Lebanese University (LU) (2010 - 2013)"
            />
            <ResumeCard
              title="Master 1 of Chemistry in Environmental Chemistry"
              subTitle="Lebanese University (LU) (2014)"
            />
            <ResumeCard
              title="Teaching Diploma"
              subTitle="Lebanese International University (2021)"
            />
            <ResumeCard
              title="Professional Master in Mental Health"
              subTitle="New York International University (2022)"
            />
            <ResumeCard
              title="Master 2 of Education in Educational Management"
              subTitle="Lebanese International University (2023)"
            />
            <ResumeCard
              title="Professional Doctorate in Mental Health"
              subTitle="New York International University (2023)"
            />
            <ResumeCard
              title="International Coaching Federation (ICF)"
              subTitle="Master Life Coach (2023)"
            />
            <ResumeCard
              title="International Coaching Federation (ICF)"
              subTitle="High Performance Life Coach (Pending)"
            />
            {/* Additional ResumeCard components */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
