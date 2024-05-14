import { FC } from "react";

import github from "../assets/11023876.png";
import gmail from "../assets/888853.png";
import linkedin from "../assets/3015805.png";

const Contact: FC = function () {
  return (
    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight secondary-color">
          Contact Me!
        </h2>
      </div>
      <div
        className="flex flex-row sm:justify-center justify-around items-center mx-auto my-auto py-8 transform transition-transform duration-300 hover:scale-105 overflow-hidden
        shadow-lg shadow-[#040c16] group "
      >
        <a
          href="https://www.linkedin.com/in/andriani-leandro/"
          target="blank"
          className="m-4 sm:my-0 w-[80px] md:w-[100px]"
        >
          {" "}
          <img src={linkedin} alt="" />
        </a>
        <a
          href="https://github.com/Andriani25"
          target="blank"
          className="m-4 sm:my-0 w-[80px] md:w-[100px]"
        >
          {" "}
          <img src={github} alt="" />
        </a>
        <a
          href="mailto:andriani.leandro25@gmail.com"
          target="blank"
          className="m-4 sm:my-0 w-[80px] md:w-[100px]"
        >
          <img src={gmail} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
