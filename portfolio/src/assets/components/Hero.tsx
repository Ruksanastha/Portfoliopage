import React from "react";
import { FaDownload } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="background-to  ">
      <div className="flex justify-between items-center h-screen">
        <div className="flex flex-col ml-16">
          <h1 className="md:text-5xl font-bold  w-[30rem] md:mb-8 mt-2 sm:text-2xl mb-4 ">
            HI, I'M RUKSANA
          </h1>
          <p className=" w-full md:w-[50rem] h-auto md:h-[30vh] text-base md:text-lg lg:text-xl mb-4 md:mb-8">
            I am a passionate web developer with expertise in HTML, CSS,
            JavaScript, and React, dedicated to creating dynamic user
            interfaces. Currently, I'm expanding my skills into backend
            development to build full-stack applications. I thrive in
            collaborative environments and am committed to delivering
            high-quality solutions. Eager to embrace new challenges, I’m excited
            about the opportunities ahead!
          </p>
          <div>
            <button className="bg-yellow-400  w-[8rem] p-1 flex flex-wrap justify-between ">
              <FaDownload />
              Download CV
            </button>
          </div>
        </div>
        <div className="flex items-center  ">
          <img
            className="w-40 h-40 rounded-full hidden lg:block "
            src="https://i.pinimg.com/1200x/a6/59/b0/a659b0f9702c23bca3c185013549b90d.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
