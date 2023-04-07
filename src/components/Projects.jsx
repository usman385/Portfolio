import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import project1 from "../assets/images/netflixclone.PNG";
import project2 from "../assets/images/covid-19.jpg";
import project3 from "../assets/images/project3.PNG";
const Projects = () => {
  return (
    <div
      id="projects"
      className="flex divbackgroundcolor justify-between  flex-wrap lg:justify-around"
    >
      <div className=" flex flex-col pl-4">
        <span className="flex  text-primaryLight lg:font-bold rotate-[-16deg] text-base lg:mt-2">
          Projects
        </span>
        <h1 className="font-bold text-white  lg:text-6xl text-2xl flex flex-wrap text-left mt-10">
          Latest <br /> Projects
        </h1>
        <hr className="mt-8 w-auto border-black border-2 rounded-md mr-4" />
        <h1 className="font-semibold text-white  text-4xl flex mt-8 lg:text-left text-center ">
          NETFLIX CLONE
        </h1>
        <div className="flex justify-between pr-5 ">
          <span className="flex mt-6 text-white  ext-base">Online Movies</span>
          <button
            className="  bg-primaryLight text-secondaryGray p-4 pl-4 rounded-full
            hover:bg-secondaryGray text-4xl hover:text-black flex justify-end"
          >
            <a href="https://github.com/usman385/Netflix-clone">
              <BsArrowUpRight />
            </a>
          </button>
        </div>
        <div className="p-4 ">
          <a href="https://usman-netflixclone.herokuapp.com/">
            <img
              src={project1}
              alt="project1"
              className="rounded-md cursor-pointer object-cover h-72 w-72 hover:scale-y-[1.05] hover:scale-x-[1.05] hover:duration-500"
            />
          </a>
        </div>
      </div>

      {/*2nd project div */}
      <div className="  flex flex-col flex-wrap lg:flex-nowrap">
        <hr className="mt-28 w-auto border-black border-2 rounded-md mr-4" />
        <h1 className="font-semibold text-4xl text-white  flex mt-8 lg:text-left text-center ">
          COVID-19 TRACKER
        </h1>

        <div className="flex justify-between pr-5 ">
          <span className="flex mt-6 pl-4 text-white  ext-base">
            World covid-19 tracker
          </span>
          <button
            className="  bg-primaryLight text-secondaryGray p-4 pl-4 rounded-full
            hover:bg-secondaryGray text-4xl hover:text-secondary flex justify-end"
          >
            <a href="https://github.com/usman385/Covid-19">
              <BsArrowUpRight />
            </a>
          </button>
        </div>
        <div className="p-8 flex ">
          <img
            src={project2}
            alt="project1"
            className="rounded-md h-72 w-72 cursor-pointer hover:scale-y-[1.05] hover:scale-x-[1.05] hover:duration-500"
          />
        </div>
      </div>

      <div className=" flex flex-col">
        <hr className="mt-16 w-auto border-black border-2 rounded-md mr-4" />
        <h1 className="font-semibold text-white  text-4xl flex mt-8 lg:text-left text-center ">
          SIMPLE CRUD APP
        </h1>

        <div className="flex justify-between pr-5 ">
          <span className="flex mt-6 text-white  pl-4 ext-base">
            Used React Redux and Node js with Authentication
          </span>
          <button
            className="  bg-primaryLight text-slate-200 p-4 pl-4 rounded-full
            hover:bg-slate-200 text-4xl hover:text-black flex justify-end"
          >
            <a href="https://github.com/usman385/crud-operation">
              <BsArrowUpRight />
            </a>
          </button>
        </div>
        <div className="p-4 ">
          <a href="https://github.com/usman385/Node">
            <img
              src={project3}
              alt="project1"
              className="rounded-md h-72 cursor-pointer object-cover w-72 hover:scale-y-[1.05] hover:scale-x-[1.05] hover:duration-500"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
