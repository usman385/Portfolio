import React from "react";
import react from "../assets/images/reactjs.png";
import css from "../assets/images/css.png";
import html from "../assets/images/html.png";
import javascript from "../assets/images/javascript.jpg";
import material from "../assets/images/material.png";
import redux from "../assets/images/redux.jpeg";
import tailwind from "../assets/images/tailwind.jpg";
import containerImage from "../assets/images/myimage.png";
import { BsArrowUpRight } from "react-icons/bs";

const skillsData = [
  { image: react, name: "React Js" },
  { image: react, name: "React Native" },
  { image: redux, name: "Redux" },
  { image: javascript, name: "JavaScript" },
  { image: html, name: "HTML" },
  { image: css, name: "CSS" },
  { image: material, name: "Materual" },
  { image: tailwind, name: "Tailwind / BootStrap" },
];

const Skills = () => {
  return (
    <div className="flex flex-row justify-between mt-12 ml-14 mr-14 flex-wrap lg:flex-nowrap ">
      <div
        className="mt-5 flex-wrap lg:w-1/2 w-full justify-center lg:content-start
       content-center lg:items-start items-center  lg:flex-nowrap flex relative flex-col"
      >
        <span
          className="flex text-primaryLight lg:font-bold rotate-[-16deg]
         absolute lg:top-32 top-0 lg:left-0 md:left-52 left-4 text-base lg:mt-2 "
        >
          Skills
        </span>
        <h1 className="font-bold lg:text-6xl text-2xl flex mt-6 flex-wrap lg:text-left text-center">
          Skills and Experience
        </h1>
        <p className="flex lg:mt-6 font-semibold lg:text-xl flex-wrap sm:text-left lg:text-left text-center">
          We Help ambitious business like your generate more
          <br /> profits by building awerness, driving web traffic <br />{" "}
          connecting with customers and growing overall{" "}
        </p>
        <div className="flex mt-14 flex-col">
          <h1 className="font-bold lg:text-4xl text-2xl flex">Skills</h1>

          <div className="grid grid-cols-3  lg:grid-cols-3">
            {skillsData.map((data) => {
              return (
                <div className="p-2">
                  <img src={data.image} alt="images" className="h-16 w-16" />
                  <span className="mt-6 font-bold text-center flex">
                    {data.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="lg:mt-28 mt-6 flex  justify-between flex-col ">
        <p className="flex font-bold lg:text-4xl  text-2xl">Experience</p>
        <hr className="mt-8 lg:w-auto md:w-auto w-72 flex justify-end border-black" />

        <div className="flex  mt-8">
          <span className=" lg:text-lg lg:font-semibold text-xs md:text-lg sm:text-xl text-text-black">
            2022 - Present
          </span>
          <div className="flex flex-col">
            <h1 className="font-semibold lg:text-4xl md:text-2xl text-xl lg:ml-9 ml-4 ">
              Web Development
            </h1>
            <span className="flex mt-4 lg:ml-11 ml-5 md:text-lg  lg:font-bold font-semibold text-darkgray">
              NESL-IT
            </span>
          </div>
        </div>

        <hr className="mt-8 lg:w-auto md:w-auto w-72 border-black " />

        <div className="flex mt-8">
          <span className=" lg:text-lg lg:font-semibold text-xs md:text-lg sm:text-xl text-text-black">
            2022 - Present
          </span>
          <div className="flex flex-col">
            <h1 className="font-semibold lg:text-4xl md:text-2xl text-xl lg:ml-9 ml-4 ">
              UI/UX Designer
            </h1>
            <span className="flex mt-4 lg:ml-11 ml-5 md:text-lg  lg:font-bold font-semibold text-darkgray">
              NESL-IT
            </span>
          </div>
        </div>

        <hr className="mt-8 lg:w-auto md:w-auto w-72 border-black " />

        <div className="flex mt-8">
          <span className=" lg:text-lg lg:font-semibold text-xs md:text-lg sm:text-xl text-black">
            2022 - Present
          </span>
          <div className="flex flex-col">
            <h1 className="font-semibold lg:text-4xl md:text-2xl text-xl lg:ml-9 ml-4 ">
              Web UI/UX Designer
            </h1>
            <span className="flex mt-4 lg:ml-11 ml-5 md:text-lg  lg:font-bold font-semibold text-darkgray">
              NESL-IT
            </span>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex justify-end lg:justify-center ">
            <img src={containerImage} alt="image" className="object-contain " />
          </div>

          <div
            className="bg-black border h-28 w-28 lg:h-44 lg:w-44 md:h-44 md:w-44 hover:animate-spin 2s linear;   top-[9rem] left-20
              flex justify-center items-center 
              rounded-full  sm:mt-20  sm:ml-16 lg:top-52 
              lg:left-[7rem] md:top-52  
          md:left-[7rem]  absolute  "
          >
            <p className="bg-black rounded-full border h-24 w-24 lg:h-36 lg:w-36 md:h-36 md:w-36   items-center ">
              <span className="text-slate-50 flex justify-center content-center  lg:mt-12 md:mt-12 mt-6 lg:text-sm md:text-sm text-xs font-bold m-1 p-2">
                Hire me
                <span className="pl-5 font-bold text-xl text-primary">
                  <BsArrowUpRight />
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
