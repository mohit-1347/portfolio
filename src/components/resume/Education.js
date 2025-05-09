import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in Computer Engineering"
            subTitle="University of DVI (2021 - 2025)"
            result="9.23/10"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Heritage Jr. Secondary School (2019 - 2021)"
            result="93.33/100"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
          <ResumeCard
            title="Primary School Education"
            subTitle="Kingstar Secondary School (2008 - 2019)"
            result="88.60/100"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Business Technology Solutions Associate"
            subTitle="ZS Associates - (Jan 2025   - Present)"
            result="Pune, India"
            des="Contributing to the design and implementation of data-driven 
              technology solutions to support client business processes and decision-making."
          />
          <ResumeCard
            title="Python Developer Intern"
            subTitle="Capriole Sports Tech - (Aug 2024 - Dec 2024)"
            result="Pune, India"
            des="Developing backend solutions and automating data workflows for sports analytics applications."
          />
          <ResumeCard
            title="AI - ML Intern"
            subTitle="AICTE - (Jan 2024 - Mar2024)" 
            result="Virtual"
            des="Gained hands-on experience in machine learning model development and data-driven problem solving."
              
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
