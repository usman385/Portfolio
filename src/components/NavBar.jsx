import react, { useEffect, useState } from "react";

import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import { GiCrossMark } from "react-icons/gi";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [show, setshow] = useState(false);
  const [open, setopen] = useState(false);

  const links = [
    { name: "Home", link: "#Home" },
    { name: "Services", link: "#services" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
    { name: "BLOGS", link: "/BlogsPage" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setshow(true);
      } else {
        setshow(false);
      }
    });
  });
  return (
    <div
      className={`flex justify-between md:px-6 px-2 duration-500 fixed lg:flex-nowrap flex-wrap top-0 w-full z-50 ${
        show && "bg-primary   text-black duration-500 "
      }`}
    >
      <div className="flex p-4 m-3">
        <span className="text-5xl font-extrabold">
          <CgProfile />
        </span>
        <h3 className="pt-2 pl-2 font-bold">Usman khan</h3>
      </div>

      <div className="flex md:w-auto w-full">
        <div
          onClick={() => setopen(!open)}
          className="text-3xl  absolute top-[1.8rem]  right-8 cursor-pointer md:hidden"
        >
          {open ? <GiCrossMark /> : <AiOutlineMenu />}
        </div>

        <div
          className={`flex md:flex-row absolute md:static  flex-col p-4 lg:bg-transparent md:bg-transparent  bg-primary  
        py-4 w-full duration-500 transition-all ease-in ${
          open ? "right-[0.5vw]  top-20 " : "right-[-170vw] top-[-20rem]"
        }`}
        >
          <ul className="md:flex md:items-center lg:gap-0">
            {links.map((item, key) => {
              return (
                <li
                  key={item.name}
                  className="pl-6  md:my-0 my-3 duration-500 hover:hover:bg-primaryLight 
              hover:text-slate-50 px-4 font-bold hover:italic hover:rounded-tr-lg hover:rounded-bl-lg"
                >
                  <HashLink smooth to={item.link}>
                    {item.name}
                  </HashLink>
                  {/* <a href={item.link}>{item.name}</a> */}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
