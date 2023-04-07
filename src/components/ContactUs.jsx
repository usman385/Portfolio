import React from "react";
import { RiMessage2Fill } from "react-icons/ri";
import { BiCurrentLocation } from "react-icons/bi";
import { BsArrowUpRight, BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdWavingHand } from "react-icons/md";

const ContactUs = () => {
  return (
    <div
      id="contact"
      className=" flex flex-col justify-between  lg:mt-24 mt-8  flex-wrap lg:flex-nowrap
    rounded-b-md
    mb-4 bg-[url('assets/images/aleksander.jpg')] "
    >
      <div className=" flex flex-wrap lg:flex-nowrap justify-around lg:pl-8 ">
        <div className="relative">
          <span className=" flex text-primaryLight lg:font-bold rotate-[-16deg] mt-14 absolute">
            Contact
          </span>
          <h1 className="flex font-bold   lg:text-6xl text-2xl text-left mt-20">
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
            <div className="flex flex-col text-left ml-6">
              <span className="flex  font-bold   text-darkgray">Email</span>
              <a href="https://mail.google.com/mail/u/1/#inbox">
                <p className="mt-1 ml-0   cursor-pointer hover:underline font-bold lg:text-2xl text-lg">
                  khanu6935@gmail.com
                </p>
              </a>

              <p className="flex">
                <BsFillTelephoneForwardFill className="mt-1  " />
                <span className=" ">: 0300 5487511</span>
              </p>
            </div>
          </div>

          <hr className="lg:mt-28 mt-20 w-auto border-black border-2 rounded-md mr-4" />
          <div className="flex mt-8">
            <button
              className="  bg-secondaryGray text-secondary p-4 pl-4 rounded-full
            hover:bg-secondaryGray text-4xl hover:text-black flex justify-end"
            >
              <BiCurrentLocation />
            </button>
            <div className="flex flex-col text-left ml-6">
              <span className="flex  font-bold   text-darkgray">Location</span>
              <p className="mt-1 font-bold   lg:text-2xl text-lg">
                Rawalpindi Pakistan
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-primary rounded-full border-2 border-black
          flex flex-col  justify-center items-center flex-wrap lg:flex-nowrap
         lg:h-[36rem] lg:w-[36rem] md:h-96 md:w-96 h-[21rem] w-[21rem] mt-[4rem] "
        >
          <div className="flex justify-between">
            <div className="mr-7 lg:mt-16 mt-12">
              <span className="lg:mt-32  text-white  mt-0 ml-8  font-bold">
                Say Hi!
              </span>
              <span className="text-amber-900 mt-24 text-4xl">
                <MdWavingHand />
              </span>
            </div>

            <button
              className="  bg-primaryLight text-secondaryGray p-9 pl-9 rounded-full mt-12 ml-12
            hover:bg-secondaryGray lg:text-6xl md:text-2xl text-xl hover:text-black flex justify-end"
            >
              <BsArrowUpRight />
            </button>
          </div>
          <div>
            <hr className="lg:w-[22rem] md:w-[19rem] w-[17rem] mt-2 ml-2 mr-6 origin-center rotate-[14deg] border-black  " />
          </div>
        </div>
      </div>
      <hr className="mt-10 border border-black ml-28 mr-28 " />
      <div className="flex lg:flex-nowrap flex-wrap justify-between pl-28 lg:pr-28 pr-0 mt-4 pb-14">
        <p className="flex font-bold   text-center">
          {" "}
          ©2022 All Right Reserved
        </p>
        <p className="flex font-bold   text-center">Designed By Usman khan</p>
        <p className="flex font-bold   text-center">khanu6935@gmail.com</p>
      </div>
    </div>
  );
};

export default ContactUs;
