import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import stamp from "../assets/images/stamp.png";

const Services = () => {
  return (
    <div
      className="flex lg:flex-row flex-col bg-primary 
    lg:justify-around justify-center lg:mt-12 mt-0
     lg:ml-14 lg:mr-14 mr-0 ml-0 flex-wrap md:content-center sm:pr-20"
    >
      <div className="w-1/2 pl-10 lg:flex-nowrap flex-wrap">
        <div className="mt-14 ">
          <span className="flex text-primaryLight lg:font-bold rotate-[-16deg] mb-20 text-base lg:mt-2">
            Services
          </span>
          <h1 className="font-bold lg:text-8xl text-2xl  flex mt-8 flex-wrap text-left">
            Services I<br /> offer
          </h1>
          <p className="flex lg:mt-6 font-semibold lg:text-xl text-sm text-left">
            We Help ambitious business like your generate more
            <br /> profits by building awerness, driving web traffic <br />{" "}
            connecting with customers and growing overall{" "}
          </p>
        </div>
      </div>
      <div className="w-1/2 pr-10 flex flex-col lg:flex-nowrap flex-wrap">
        <div className="mt-28 flex flex-col lg:flex-nowrap flex-wrap">
          <hr className="mt-2 lg:ml-3 ml-12 w-auto border-[1px] border-black" />

          <div className="flex  mt-10">
            <span className="font-bold lg:text-2xl text-lg lg:pl-2 pl-5">
              01/
            </span>
            <h1 className="lg:font-bold font-bold lg:text-5xl text-5xl ml-11">
              Web UI/UX design
            </h1>
          </div>
          <div className="flex justify-between lg:mt-24 mt-12">
            <p className="font-medium lg:text-xl text-lg mt-8 lg:ml-0 ml-3">
              Explore
            </p>
            <button
              className="rounded-full flex text-bgsecondaryGray bg-primaryLight justify-center p-5 lg:p-7 text-lg lg:text-xl 
              hover:bg-secondaryGray
              hover:text-black"
            >
              <BsArrowUpRight />
            </button>
          </div>
        </div>
        <div className="lg:mt-8 mt-0 flex flex-col ">
          <hr className="mt-2 w-auto lg:ml-3 ml-12 border-[1px] border-black" />

          <div className="flex mt-6">
            <span className="font-bold text-2xl lg:pl-2 pl-5">02/</span>
            <h1 className="font-bold text-5xl ml-11">
              Mobile App UI/UX design
            </h1>
          </div>
          <div className="flex justify-between lg:mt-20 mt-12">
            <p className="font-medium lg:text-xl text-lg mt-8 lg:ml-0 ml-3">
              Explore
            </p>
            <button
              className="rounded-full flex bg-primaryLight text-bgsecondaryGray justify-center p-5 lg:p-7 text-lg lg:text-xl 
              hover:bg-secondaryGray
              hover:text-black"
            >
              <BsArrowUpRight />
            </button>
          </div>
        </div>
        <div className="lg:mt-16 mt-0 flex flex-col justify-end">
          <hr className=" w-auto lg:ml-3 ml-12 border-[1px] border-black" />

          <div className="flex mt-6">
            <span className="font-bold text-2xl lg:pl-2 pl-5">03/</span>
            <h1 className="font-bold text-5xl ml-11">
              Dashboard & SAAS design
            </h1>
          </div>
          <div className="flex justify-between lg:mt-16  mt-12">
            <p className="font-medium lg:text-xl text-lg pt-8 lg:ml-0 ml-3">
              Explore
            </p>
            <button
              className="rounded-full flex bg-primaryLight text-bgsecondaryGray justify-center mb-14 p-5 lg:p-7 text-lg lg:text-xl 
              hover:bg-secondaryGray
              hover:text-black"
            >
              <BsArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
