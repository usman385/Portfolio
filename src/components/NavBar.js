import React from "react";
import logo from "../assets/images/logo1.PNG";
import search from "../assets/icons/searchicon.svg";
import { AiOutlineSearch } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-around mt-10 flex-wrap ">
      <div className="flex">
        <img src={logo} alt="Loading..." />
        <h1 className="font-extrabold pt-5 pl-3">Usman khan</h1>
      </div>
      <div className="flex">
        <ul className="flex flex-wrap sticky ">
          <li className="p-4 hover:border-b-2 border-b-primaryLight hover:font-bold hover:text-primaryLight">
            About
          </li>
          <li className="p-4 hover:border-b-2 border-b-primaryLight hover:font-bold hover:text-primaryLight">
            Services
          </li>
          <li className="p-4 hover:border-b-2 border-b-primaryLight hover:font-bold hover:text-primaryLight">
            Portfolio
          </li>
          <li className="p-4 hover:border-b-2 border-b-primaryLight hover:font-bold hover:text-primaryLight">
            Testimonials
          </li>
        </ul>
      </div>
      <div className="border-2 rounded-xl relative">
        <input
          type="search"
          name="search"
          placeholder="Search"
          className="pt-4 pl-4"
        />

        <div className="absolute right-8 top-4">
          <button>
            <img src={search} alt="image" className="h-6 w-7" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
