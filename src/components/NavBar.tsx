import { FC, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar: FC = function NavBar() {
  const [nav, setNav] = useState<boolean>(false);

  console.log(nav);

  const handleNav = function () {
    setNav(!nav);
  };

  return (
    <div className="text-white h-[100px] w-auto flex mr-5 justify-between items-center z-50 sticky top-0 ">
      <br></br>
      <ul className="hidden md:flex rounded-3xl bg-gradient-to-r from-red-600 to-green-600 font-bold ">
        <li className="p-5">
          <a href="#about">About</a>
        </li>
        <li className="p-5">
          <a href="#projects">Projects</a>
        </li>
        <li className="p-5">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div
        onClick={handleNav}
        className="block md:hidden relative bg-[#202121] p-2 rounded-xl"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed h-52 left-0 top-0 right-0 bottom-0 z-auto w-[60%] bg-[#202121] rounded-sm ease-in-out duration-500 "
            : "fixed left-[-100%] h-52 top-0 right-0 bottom-0 z-10 w-[60%] bg-[#202121] rounded-sm duration-500 "
        }
      >
        <ul className="p-8 text-2x1">
          <li className="p-2">
            <a onClick={handleNav} href="#about">
              About
            </a>
          </li>
          <li className="p-2">
            <a onClick={handleNav} href="#projects">
              Projects
            </a>
          </li>
          <li className="p-2">
            <a onClick={handleNav} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
