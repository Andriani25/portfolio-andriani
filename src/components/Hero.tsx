import { FC } from "react";
import profile from "../assets/dev2-removebg-preview(1).png";
import { TypeAnimation } from "react-type-animation";

const Hero: FC = function () {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:h-[70vh] pb-8 ">
      <div className="w-[300px] lg:w-[400px] px-8 ">
        <img
          src={profile}
          alt="profile"
          className="rounded-full h-52 md:h-auto "
        />
      </div>

      <div className="text-white text-6xl sm:text-5xl lg:text-8xl font-extrabold">
        <span>I'm a</span>
        <br />
        <TypeAnimation
          className="primary-color"
          sequence={["Mobile", 1500, "Frontend", 1500]}
          wrapper="span"
          speed={25}
          repeat={Infinity}
        />
        <br />
        <span>Developer</span>
      </div>
    </div>
  );
};

export default Hero;
