import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14">
        <ProjectsCard
          title="Vocalis: MultiLingual Speech to Text Translator"
          des=" Converts spoken language into text and translates it into a user-selected 
            target language to bridge communication gaps across diverse linguistic communities. "
          src={projectFour}
          githubLink="https://github.com/mohit-1347/Vocalis"
        />
        <ProjectsCard
          title="attendEase: Face Recognition Attendance System"
          des=" Developed Scalable and Secure Multi-Face Recognition Attendance System(MFRAS) 
              Utilized OpenCV’s Haarcascade Classifiers for facial recognition 
              Teachers capture class photo(s) for automated attendance marking. "
          src={projectOne}
          githubLink="https://github.com/mohit-1347/attendEase"
        />
        <ProjectsCard
          title="Zenith Cloud: Cloud TCO (Total Cost of Ownership) Calculator"
          des=" Developed Cloud Workload TCO Calculator with predictive auto-scaling capabilities 
              Analyzed parameters such as IOPS, compute, and network requirements 
              Utilized historical data for optimal deployment sizing and type recommendations 
              Integrated with cloud vendor APIs for cost-effective and performance-efficient options"
          src={projectTwo}
          githubLink="https://github.com/mohit-1347/Cloud-TCO-calculator"
        />
        <ProjectsCard
          title="PASSenger: Bus Pass and Tracking System"
          des=" Developed a Digital Bus Pass Management System for students and authorities
              Enabled online bus pass application, renewal, and QR-based verification
              Integrated user authentication and admin dashboard for pass approval
              Used Flutter for frontend and Flask/Firebase for secure backend operations"
          src={projectThree}
          githubLink=""
        />
        
      </div>
    </section>
  );
}

export default Projects
