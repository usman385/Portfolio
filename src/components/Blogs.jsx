import React from "react";
import Image from "../assets/images/as.webp";
import Typewriter from "typewriter-effect";

const Blogs = () => {
  return (
    <div className="mt-24 lg:px-14 px-0 flex flex-col justify-center">
      <img src={Image} alt="Image...." className="relative" />
      <h1 className="mt-8 flex justify-center text-2xl font-bold absolute text-white right-16 top-[8rem]">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("THANKS FOR YOUR VISIT")
              .pauseFor(1000)
              .deleteAll()
              .typeString("NEW BLOGS WILL BE UPLOADED SOON")
              .start();
          }}
        />
      </h1>
    </div>
  );
};

export default Blogs;
