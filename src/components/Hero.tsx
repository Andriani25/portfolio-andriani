import { FC } from "react";
import profile from "../assets/dev2.jpeg";
import { TypeAnimation } from "react-type-animation";

/*
   <p className="text-white sm:text-lg my-6 lg:text-xl p-6">
          My name is Andriani Leandro and i have 1 year experience in web and
          mobile development. Working right now with {""}
          {
            <a
              className="primary-color font-bold"
              href="https://www.instagram.com/radiostucumanoficial/?hl=es-la"
              target="blank"
            >
              @Radios Tucuman
            </a>
          }
        </p>
*/

const Hero: FC = function () {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:h-[70vh] pb-8 mx-auto ">
      <div className=" col-span-1 my-auto mx-auto w-[300px] lg:w-[400px] px-8 ">
        <img
          src={profile}
          alt="profile"
          className="rounded-full h-52 md:h-auto "
        />
      </div>

      <div className="col-span-2 px-5 my-auto ">
        <h1 className="text-white text-6xl sm:text-5xl lg:text-8xl font-extrabold">
          <span>I'm a</span>
          <br />
          <TypeAnimation
            className="primary-color"
            sequence={["Mobile", 1500, "Frontend", 1500, "Backend", 1500]}
            wrapper="span"
            speed={25}
            repeat={Infinity}
          />
          <br />
          <span>Developer</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
