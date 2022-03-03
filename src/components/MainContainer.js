import React from "react";
import { BiNavigation } from "react-icons/bi";
import containerImage from "../assets/images/myimage.png";
import {
  BsArrowUpRight,
  BsInstagram,
  BsFacebook,
  BsLinkedin,
} from "react-icons/bs";

const MainContainer = () => {
  return (
    <div className="flex flex-row flex-wrap mt-8  justify-around">
      <div className="flex flex-col">
        <span className="flex  text-primaryLight  rotate-[-16deg] mb-12 mr-10 text-2xl">
          Hello!
        </span>
        <h1 className="font-bold from-neutral-900 lg:text-8xl text-6xl lg:text-left text-center">
          We have <br />
          Design <br />
          Experience
        </h1>
        <p className="pt-11 lg:text-left text-center">
          - Hi I am UI/UX Designer --- Creating bold and brave
          <br /> interface design for Companies all across the world.
        </p>
        <div className="flex mt-5 p-3 lg:justify-start justify-center">
          <button className="mr-4 bg-primaryLight lg:p-5 lg:pl-10 p-2 pt-4 pl-4 rounded-lg text-bgsecondaryGray font-bold flex justify-center">
            Lets Talk
            <span className="pt-1 pl-3">
              <BiNavigation />
            </span>
          </button>
          <button className="mr-4 bg-primaryLight lg:p-5 lg:pl-10 p-2 pt-4 pl-4 rounded-lg  text-bgsecondaryGray font-bold flex">
            Portfolio
            <span className="pt-1 pl-3">
              <button>
                <BsArrowUpRight />
              </button>
            </span>
          </button>
        </div>

        <div className="flex mt-7 flex-wrap">
          <p className="mt-8 lg:text-lg text-md lg:text-left text-center font-semibold">
            Check Out My
          </p>
          <div className="flex ml-8 gap-5">
            <button className="rounded-full flex lg:text-3xl justify-center p-5 lg:p-7 text-secondary bg-bgsecondaryGray">
              <BsInstagram />
            </button>
            <button className="rounded-full flex lg:text-3xl justify-center p-5 lg:p-7 bg-bgsecondaryGray">
              <BsLinkedin />
            </button>
            <button className="rounded-full flex lg:text-3xl justify-center p-5 lg:p-7 bg-bgsecondaryGray">
              <BsFacebook />
            </button>
          </div>
        </div>
      </div>

      {/*--------Image area start from here */}
      <div className="flex lg:flex-row flex-col-reverse">
        <img
          src={containerImage}
          alt="image"
          className="object-contain lg:mb-56 mb-0"
        />
        <p className="text-base font-bold">
          "People ignore Design
          <br /> that ignores people"
        </p>
      </div>
    </div>
  );
};

export default MainContainer;
