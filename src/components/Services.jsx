import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Services = () => {
  return (
    <div
      id="services"
      className="flex lg:flex-row flex-col  divbackgroundcolor 
    lg:justify-around justify-center lg:mt-40 mt-6
      flex-wrap md:content-center "
    >
      <div className="lg:w-1/2  w-full items-center  pl-10 lg:flex-nowrap flex lg:flex-col flex-row  flex-wrap  relative">
        <div className="mt-14 flex flex-col lg:justify-center justify-start lg:content-center content-start ">
          <span className="flex text-primaryLight lg:font-bold rotate-[-16deg] lg:mb-20 md:mb:10 absolute top-14   text-base text-white lg:mt-2">
            Services
          </span>
          <h1 className="font-bold text-white lg:text-8xl text-2xl  flex mt-8 flex-wrap text-left">
            Services I offer
          </h1>
          <p className="flex lg:mt-6 font-semibold lg:text-xl text-sm text-left text-white">
            We Help ambitious business like your generate more <br /> profits by
            building awerness, driving web traffic connecting <br /> with
            customers and growing overall
          </p>
        </div>

        <div
          className="  rounded-full border-2 border-black
          flex content-end  justify-center items-center flex-wrap lg:flex-nowrap
         lg:h-48 lg:w-48 md:h-36 md:w-36 h-20 w-20 mt-[4rem] absolute lg:top-[42rem]  md:bottom-0 bottom-24 lg:bottom-0
         lg:left-44 md:left-[30rem] left-64 "
        >
          <p
            className=" border-black  rounded-full border-2 lg:mb-0 mb-[0.37rem]
           md:mb-3 h-16 w-16 lg:h-36 lg:w-36 md:h-28 md:w-28   items-center "
          >
            <span
              className="text-primaryLight flex justify-center
             content-center  lg:mt-9 md:mt-9 mt-3 lg:text-5xl md:text-4xl text-2xl font-bold m-1 p-2"
            >
              <BsArrowUpRight />
            </span>
          </p>
        </div>
      </div>
      <div className="w-1/2 pr-10 flex flex-col lg:flex-nowrap flex-wrap">
        <div className="lg:mt-28 mt-12 flex flex-col lg:flex-nowrap flex-wrap">
          <hr className="mt-2 lg:ml-3 ml-12 w-auto border-[1px] border-black" />

          <div className="flex  mt-10 ">
            <span className="font-bold lg:text-2xl text-white text-lg lg:pl-2 ">
              01/
            </span>
            <h1 className="lg:font-bold font-bold text-white  lg:text-5xl text-5xl ml-11">
              Web Front-end Design
            </h1>
          </div>
          <div className="flex justify-between lg:mt-24 mt-12">
            <p className="font-medium lg:text-xl text-white  text-lg mt-8 lg:ml-0 ml-3">
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
            <span className="font-bold text-2xl lg:pl-2 text-white  ">02/</span>
            <h1 className="font-bold text-4xl text-white  ml-11">Back-end Development</h1>
          </div>
          <div className="flex justify-between lg:mt-20 mt-12">
            <p className="font-medium text-white  lg:text-xl text-lg mt-8 lg:ml-0 ml-3">
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
            <span className="font-bold text-2xl text-white  lg:pl-2 ">03/</span>
            <h1 className="font-bold text-5xl text-white  ml-11">
              Dashboard & SAAS design
            </h1>
          </div>
          <div className="flex justify-between lg:mt-16  mt-12">
            <p className="font-medium lg:text-xl text-white  text-lg pt-8 lg:ml-0 ml-3">
              Explore
            </p>
            <button
              className="rounded-full flex bg-primaryLight text-white justify-center mb-14 p-5 lg:p-7 text-lg lg:text-xl 
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
