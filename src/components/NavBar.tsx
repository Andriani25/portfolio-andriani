import { FC, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/dev.png";

const NavBar: FC = function NavBar() {
  const [nav, setNav] = useState<boolean>(false);

  console.log(nav);

  const handleNav = function () {
    setNav(!nav);
  };

  return (
    <div className="bg-black  text-gray-400  h-[100px] max-w-[1200px] mx-auto flex justify-between items-center ">
      <img src={logo} alt="jaj" className="h-15 w-15 rounded-full" />
      <ul className="hidden md:flex">
        <li className="p-5">
          <a href="#about">About</a>
        </li>
        <li className="p-5">
          <a href="#work">Work</a>
        </li>
        <li className="p-5">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden mr-6 ">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500 "
            : "fixed left-[-100%]"
        }
      >
        <ul className="p-8 text-2x1">
          <li className="p-2">
            <a href="#about">About</a>
          </li>
          <li className="p-2">
            <a href="#work">Work</a>
          </li>
          <li className="p-2">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
