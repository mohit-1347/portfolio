import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Business Technology Associate"
            subTitle="ZS Associates - (Jan 2025 - Present)"
            result="Pune, India"
            des={`Contributing to the design and implementation of data-driven 
              technology solutions to support client business processes and decision-making.`.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
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
            des={`Gained hands-on experience in machine learning model development and data-driven problem solving.`.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainee Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="ML Trainee"
            subTitle="Amazon ML Summer School (July 2024)"
            result="India"
            des={`Selected for the Amazon ML Summer School, where I gained in-depth knowledge of machine learning algorithms,
              optimization techniques, and practical applications through expert-led sessions and hands-on exercises.`.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
