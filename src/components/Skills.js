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
    <div className="flex flex-row justify-between mt-12 ml-14 mr-14 flex-wrap lg:flex-nowrap sm:w-max">
      <div className="mt-14 lg:w-1/2 w-full">
        <span className="flex text-primaryLight lg:font-bold translate-y-4 text-base lg:mt-2">
          Skills
        </span>
        <h1 className="font-bold lg:text-6xl text-2xl flex mt-6 flex-wrap lg:text-left text-center">
          Skills and <br /> Experience
        </h1>
        <p className="flex lg:mt-6 font-semibold lg:text-xl flex-wrap lg:text-left text-center">
          We Help ambitious business like your generate more
          <br /> profits by building awerness, driving web traffic <br />{" "}
          connecting with customers and growing overall{" "}
        </p>
        <div className="flex mt-14 flex-col">
          <h1 className="font-bold lg:text-4xl text-2xl flex">Skills</h1>

          <div className="grid grid-cols-3 lg:grid-cols-4">
            {skillsData.map((data) => {
              return (
                <div className="p-4">
                  <img src={data.image} className="h-16 w-16" />
                  <span className="mt-6 font-bold text-center flex">
                    {data.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="lg:mt-28 mt-6 flex flex-col w-full">
        <p className="flex font-bold lg:text-4xl text-2xl">Experience</p>
        <hr className="mt-8 w-auto border-black border-2" />

        <div className="flex mt-8">
          <span className=" text-2xl text-secondaryGray">2022 - Present</span>
          <div className="flex flex-col">
            <h1 className="font-semibold lg:text-4xl text-xl ml-9 ">
              Web Development
            </h1>
            <span className="flex mt-4 ml-11 font-bold text-secondaryGray">
              NESL-IT
            </span>
          </div>
        </div>

        <hr className="mt-8 w-auto border-black border-2" />

        <div className="flex mt-8">
          <span className=" text-2xl text-secondaryGray">2022 - Present</span>
          <div className="flex flex-col">
            <h1 className="font-semibold lg:text-4xl text-xl ml-9 ">
              UI/UX Designer
            </h1>
            <span className="flex mt-4 ml-11 font-bold text-secondaryGray">
              NESL-IT
            </span>
          </div>
        </div>

        <hr className="mt-8 w-auto border-black border-2" />

        <div className="flex mt-8">
          <span className=" text-2xl text-secondaryGray">2022 - Present</span>
          <div className="flex flex-col">
            <h1 className="font-semibold lg:text-4xl text-xl ml-9 ">
              Web UI/UX Designer
            </h1>
            <span className="flex mt-4 ml-11 font-bold text-secondaryGray">
              NESL-IT
            </span>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex justify-end lg:justify-center ">
            <img
              src={containerImage}
              alt="image"
              className="object-contain  left-56"
            />
          </div>

          <div className="bg-black rounded-full border h-40 w-40 lg:top-80 md:top-80 md:right-48 top-56 lg:right-48 right-24 absolute ">
            <p className="bg-black rounded-full border-slate-50 border-2 p-6 m-4 ">
              <span className="text-slate-50 flex justify-center m-1 p-2">
                Hire me
                <span className="p-2">
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
