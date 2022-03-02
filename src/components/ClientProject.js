import React from "react";
import { RiMessage2Fill } from "react-icons/ri";
import { BiCurrentLocation } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";
import { MdWavingHand } from "react-icons/md";

const ClientProject = () => {
  return (
    <div className=" flex flex-col justify-between mt-24 lg:ml-14 flex-wrap lg:flex-nowrap lg:mr-14 mr-0 sm:mr-0 bg-primary ">
      <div className=" flex flex-wrap lg:flex-nowrap justify-around lg:pl-8 ">
        <div className="relative">
          <span className=" flex text-primaryLight lg:font-bold mt-14 skew-y-3 skew-x-12 absolute">
            Contact
          </span>
          <h1 className="flex font-bold lg:text-6xl text-2xl text-left mt-20">
            Let's Discuss <br /> Your Project
          </h1>
          <hr className="mt-28 w-auto border-black border-2 rounded-md mr-4" />
          <div className="flex mt-8">
            <div
              className="  bg-secondaryGray text-secondary p-4 pl-4 rounded-full
            hover:bg-secondaryGray text-4xl hover:text-secondary flex justify-end"
            >
              <span>
                <RiMessage2Fill />
              </span>
            </div>
            <div className="flex flex-col text-left">
              <span className="flex lg:ml-16 ml-0 font-bold text-secondaryGray">
                Email
              </span>
              <p className="mt-4 lg:ml-16 ml-0 font-bold lg:text-2xl text-lg">
                khanu6935@gmail.com
              </p>
            </div>
          </div>

          <hr className="mt-28 w-auto border-black border-2 rounded-md mr-4" />
          <div className="flex mt-8">
            <button
              className="  bg-secondaryGray text-secondary p-4 pl-4 rounded-full
            hover:bg-secondaryGray text-4xl hover:text-black flex justify-end"
            >
              <BiCurrentLocation />
            </button>
            <div className="flex flex-col text-left">
              <span className="flex lg:ml-16 ml-0 font-bold text-secondaryGray">
                Location
              </span>
              <p className="mt-4 lg:ml-16 ml-0 font-bold lg:text-2xl text-lg">
                Rawalpindi Pakistan
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center flex-wrap lg:flex-nowrap">
          <div className="bg-primary rounded-full border-2 border-black lg:h-96 lg:w-96 h-64 w-64 ">
            <div className="text-secondaryGray flex items-center justify-around mt-40">
              <div className="flex justify-center">
                <span className="lg:mt-8 mt-0 m-5 text-zinc-900 font-bold">
                  Say Hi!
                </span>
                <span className="text-amber-900 text-4xl">
                  <MdWavingHand />
                </span>
              </div>
              <button
                className="  bg-primaryLight text-secondaryGray p-9 pl-9 rounded-full
            hover:bg-secondaryGray text-4xl hover:text-black flex justify-end"
              >
                <BsArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-10 border-2 border-black ml-8 mr-8" />
      <div className="flex lg:flex-nowrap flex-wrap justify-around mt-10">
        <p className="flex font-bold">2022 All Right Reserved</p>
        <p className="flex font-bold">Designed By Usman khan</p>
        <p className="flex font-bold">khanu6935@gmail.com</p>
      </div>
    </div>
  );
};

export default ClientProject;
