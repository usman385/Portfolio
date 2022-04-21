import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.jpg";
const Projects = () => {
  return (
    <div
      id="projects"
      className="flex bg-primary justify-between  flex-wrap lg:justify-around"
    >
      <div className=" flex flex-col pl-4">
        <span className="flex text-primaryLight lg:font-bold rotate-[-16deg] text-base lg:mt-2">
          Projects
        </span>
        <h1 className="font-bold lg:text-6xl text-2xl flex flex-wrap text-left mt-10">
          Latest <br /> Projects
        </h1>
        <hr className="mt-8 w-auto border-black border-2 rounded-md mr-4" />
        <h1 className="font-semibold text-4xl flex mt-8 lg:text-left text-center ">
          Web UI/UX Designer
        </h1>
        <div className="flex justify-between pr-5 ">
          <span className="flex mt-6 ext-base">Web Landing Page</span>
          <button
            className="  bg-primaryLight text-secondaryGray p-4 pl-4 rounded-full
            hover:bg-secondaryGray text-4xl hover:text-black flex justify-end"
          >
            <BsArrowUpRight />
          </button>
        </div>
        <div className="p-4 ">
          <img src={project1} alt="project1" className="rounded-md h-72 w-72" />
        </div>
      </div>

      {/*2nd project div */}
      <div className="  flex flex-col flex-wrap lg:flex-nowrap">
        <hr className="mt-28 w-auto border-black border-2 rounded-md mr-4" />
        <h1 className="font-semibold text-4xl flex mt-8 lg:text-left text-center ">
          Multiple Page Designer
        </h1>

        <div className="flex justify-between pr-5 ">
          <span className="flex mt-6 pl-4 ext-base">Web MuktiPage Website</span>
          <button
            className="  bg-primaryLight text-secondaryGray p-4 pl-4 rounded-full
            hover:bg-secondaryGray text-4xl hover:text-secondary flex justify-end"
          >
            <BsArrowUpRight />
          </button>
        </div>
        <div className="p-8 flex ">
          <img src={project2} alt="project1" className="rounded-md h-72 w-72" />
        </div>
      </div>

      {/*3nd project div */}

      <div className=" flex flex-col">
        <hr className="mt-16 w-auto border-black border-2 rounded-md mr-4" />
        <h1 className="font-semibold text-4xl flex mt-8 lg:text-left text-center ">
          Book Landing Page Designer
        </h1>

        <div className="flex justify-between pr-5 ">
          <span className="flex mt-6 pl-4 ext-base">Web MuktiPage Website</span>
          <button
            className="  bg-primaryLight text-slate-200 p-4 pl-4 rounded-full
            hover:bg-slate-200 text-4xl hover:text-black flex justify-end"
          >
            <BsArrowUpRight />
          </button>
        </div>
        <div className="p-4 ">
          <img src={project3} alt="project1" className="rounded-md h-72 w-72" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
