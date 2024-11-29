import React from "react";
import { FaReact } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Service = () => {
  return (
    <div className="background-to flex  justify-center">
      <div className="flex flex-col   ">
        <h2 className="font-bold text-4xl    mx-4 mb-10  flex justify-center mt-7">
          Skills
        </h2>
        <div className="grid grid-cols-3 gap-10">
          <div className="service-box">
            <FaHtml5 />
          </div>

          <div className="service-box">
            <FaCss3Alt />
          </div>
          <div className="service-box">
            <TbBrandJavascript />
          </div>
          <div className="service-box  ">
            <FaReact />
          </div>
          <div className="service-box">
            <RiTailwindCssLine />
          </div>
          <div className="service-box">
            <FaBootstrap />
          </div>
          <div className="service-box">
            <SiTypescript />
          </div>
          <div className="service-box">
            <FaGitSquare />
          </div>
          <div className="service-box">
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
