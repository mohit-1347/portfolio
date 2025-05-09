import React from 'react'
// import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaPython, FaJava } from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Business Technology Solutions"
          des="Advice Pharma Businesses with the most Mordern Technology Solution for daily analysis."
         
        />
        <Card
          title="Python Development"
          des="I develop efficient and scalable applications using Python, focusing on backend systems, data processing, and automation."
          icon={<FaPython />}
        />
        <Card
          title="Data Analysis"
          des="I use Python and SQL to analyze data, uncover insights, and build visualizations that support data-driven decision-making."
          icon={<SiProgress />}
        />
        <Card
          title="Business Problem Solving"
          des="I apply analytical thinking and technical skills to solve real-world problems for Pharma Businesses, improving processes and driving strategic decisions."
          icon={<FaMobile />}
        />
        <Card
          title="JAVA Development"
          des="LI develop robust and scalable applications using Java, focusing on object-oriented design, backend systems, and application performance."
          icon={<FaJava />}
        />
        <Card
          title="SQL Database"
          des="I design, manage, and query SQL databases to ensure efficient data storage, retrieval, and integrity for various applications."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features