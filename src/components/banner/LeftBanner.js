import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaPython,
} from "react-icons/fa";
import { SiMysql, SiJava, SiAmazonaws } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Python Developer.", "Machine Learning."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Mohit Lalwani</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a young enthusiast who is keen on IT and anything about it since my first steps to High School. During the past few years, I gained lots of experience in this field due to the strong desire of becoming an expert. Today I am an Intern at one of the leading companies in the world.  
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          “For me, software development is more than just coding. It's a canvas with a blank page and I am the artist to paint it with colors of coding”.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/mohit-1347" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://facebook.com" target="blank">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://instagram.com/_mohit_1347" target="blank">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a href="https://linkedin.com/in/mohit--lalwani" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaPython />
            </span>
            <span className="bannerIcon">
              <SiMysql />
            </span>
            <span className="bannerIcon">
              <SiJava />
            </span>
            <span className="bannerIcon">
              <SiAmazonaws />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
