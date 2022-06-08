import React from "react";
import { BiNavigation } from "react-icons/bi";
import profile from "../assets/images/myimage_ccexpress.png";
import backgroundImage from "../assets/images/backgroundImage.jpg";

import resume from "../assets/files/UsmanCV.pdf";
import Typewriter from "typewriter-effect";

import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";
import { GrResume } from "react-icons/gr";

const MainContainer = () => {
  const alertbox = () => {
    alert("OOOPS Not Ready yet....");
  };
  return (
    <div id="Home" className="h-screen  flex justify-center items-center  ">
      <div className="relative footerClass">
        <img
          src={backgroundImage}
          className="object-cover w-screen min-h-screen leading-snug  opacity-25"
        />
      </div>
      <div className="flex flex-row flex-wrap lg:mt-16 md:mt-40 mt-24 absolute lg:top-0 top-2  justify-around">
        <div className="flex flex-col  lg:w-1/2 relative">
          <span className="flex  text-primaryLight absolute top-1 lg:left-12 left-2  ml-4 lg:ml-24   rotate-[-16deg]  text-2xl">
            Hello!
          </span>
          <div>
            <h1
              className="font-bold  from-neutral-900 lg:text-[5.9rem] lg:px-[10.6rem] mt-10 lg:mt-5 
         px-0 text-5xl lg:text-left text-center"
            >
              MERN STACK
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Designer..")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Developer..")
                    .start();
                }}
              />
            </h1>
          </div>

          <div className="flex mt-5 p-3 lg:ml-24 md:ml-24 ml-2 lg:justify-start justify-center">
            <button
              onClick={() => alertbox()}
              className="mr-4 bg-primaryLight lg:p-5 lg:pl-10 p-2 pt-4 pl-4 rounded-lg text-bgsecondaryGray font-bold flex justify-center"
            >
              Lets Talk
              <span className="pt-1 pl-3">
                <BiNavigation />
              </span>
            </button>
            <button className="mr-4 bg-primaryLight lg:p-5 lg:pl-10 p-2 pt-4 pl-4 rounded-lg  text-bgsecondaryGray font-bold flex">
              <a href={resume} download="YourName resume.pdf">
                {" "}
                Download CV{" "}
              </a>
            
            </button>
          </div>

          <div className="flex lg:mt-0 md:mt-14 mt-0   ml-28 flex-wrap">
            <p className="mt-8 lg:text-lg text-md lg:text-left text-center font-semibold">
              Check Out My
            </p>
            <div className="flex justify-center content-center mt-4 lg:mt-0 md:mt-4 md:ml-6 ml-0 gap-5">
              <button
                className="rounded-full flex lg:text-3xl justify-center hover:bg-primary p-5 lg:p-7 
               duration-500 text-secondary bg-bgsecondaryGray"
              >
                <a href="https://github.com/usman385">
                  <BsGithub />
                </a>
              </button>
              <a href="https://www.linkedin.com/in/usman-khan-463b20113">
                <button
                  className="rounded-full flex lg:text-3xlduration-500 hover:bg-primary  justify-center 
                 p-5 lg:p-7 bg-bgsecondaryGray"
                >
                  <BsLinkedin />
                </button>
              </a>
              <button
                className="rounded-full flex lg:text-3xl justify-center hover:bg-primary p-5 lg:p-7
               duration-500 bg-bgsecondaryGray"
              >
                <BsFacebook />
              </button>
            </div>
          </div>
        </div>

        {/*--------Image area start from here */}
        <div className="flex lg:flex-row  lg:w-1/2">
          <img
            src={profile}
            alt="image"
            className="object-contain containerimage lg:mt-16 md:mt-14 mt-3  "
          />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
