import react, { useEffect, useState } from "react";
import logo from "../assets/images/logo1.PNG";
import search from "../assets/icons/searchicon.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { GiCrossMark } from "react-icons/gi";

const NavBar = () => {
  const [show, setshow] = useState(false);
  const [open, setopen] = useState(false);

  const links = [
    { name: "Home", link: "/Create-User/new" },
    { name: "Create User", link: "/Create-User/new" },
    { name: "User List", link: "/UserList" },
    { name: "Detail", link: "/Detail-user/:id" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        setshow(true);
      } else {
        setshow(false);
      }
    });
  });
  return (
    <div
      className={`flex justify-between md:px-6 px-2 duration-1000 fixed lg:flex-nowrap flex-wrap top-0 w-full z-50 ${
        show &&
        "bg-primaryLight hover:bg-slate-100 hover:text-primaryLight text-slate-100 duration-1000"
      }`}
    >
      <div className="flex md:w-auto w-full">
        <div
          onClick={() => setopen(!open)}
          className="text-3xl  absolute top-6  right-8 cursor-pointer md:hidden"
        >
          {open ? <GiCrossMark /> : <AiOutlineMenu />}
        </div>

        <div
          className={`flex md:flex-row absolute md:static  flex-col p-4 md:bg-transparent bg-slate-200  
        py-4 w-full duration-500 transition-all ease-in ${
          open ? "right-[1vw]  top-20 " : "right-[-150vw] top-[-20rem]"
        }`}
        >
          <ul className="md:flex md:items-center lg:gap-0">
            {links.map((item) => {
              return (
                <li
                  className="pl-4  md:my-0 my-3 duration-500 hover:hover:bg-primaryLight 
              hover:text-slate-50 px-4 font-bold hover:italic hover:rounded-tr-lg hover:rounded-bl-lg"
                >
                  {/* <Link to={item.link}>{item.name}</Link> */}
                  <a href="">{item.name}</a>
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
