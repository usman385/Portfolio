import React from "react";
import { BiNavigation } from "react-icons/bi";
import containerImage from "../assets/images/myimage.png";
import { Wave } from "react-animated-text";
import {
  BsArrowUpRight,
  BsInstagram,
  BsFacebook,
  BsLinkedin,
} from "react-icons/bs";

const MainContainer = () => {
  return (
    <div className="flex flex-row flex-wrap mt-10   justify-around">
      <div className="flex flex-col  lg:w-1/2 relative">
        <span className="flex  text-primaryLight absolute top-1 lg:left-12 left-[-2rem]  ml-4 lg:ml-24   rotate-[-16deg]  text-2xl">
          Hello!
        </span>
        <h1 className="font-bold from-neutral-900 lg:text-[5.9rem] lg:px-[10.6rem] mt-10 lg:mt-5  px-0 text-6xl lg:text-left text-center">
          <Wave
            text="We have Design Experience"
            effect="stretch"
            effectChange={3.0}
            paused={false}
            effectDuration={0.4}
          />
        </h1>
        <p className="pt-11 lg:text-left lg:px-[9rem] md:px-[14rem] px-10 text-center">
          - Hi I am UI/UX Designer --- Creating bold and brave interface design
          for Companies all across the world.
        </p>
        <div className="flex mt-5 p-3 lg:ml-24 md:ml-24 ml-2 lg:justify-start justify-center">
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

        <div className="flex mt-7  ml-28 flex-wrap">
          <p className="mt-8 lg:text-lg text-md lg:text-left text-center font-semibold">
            Check Out My
          </p>
          <div className="flex justify-center content-center mt-4 lg:mt-0 md:mt-4 md:ml-6 ml-0 gap-5">
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
      <div className="flex lg:flex-row flex-col  lg:w-1/2">
        <img
          src={containerImage}
          alt="image"
          className="object-contain mt-12 lg:mt-0   rounded-full "
        />
        <p className="text-base font-bold">
          "People ignore Design that ignores people"
        </p>
      </div>
    </div>
  );
};

export default MainContainer;
