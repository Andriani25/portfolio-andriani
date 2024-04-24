import { FC } from "react";
import profile from "../assets/dev2.jpeg";
import { TypeAnimation } from "react-type-animation";

const Hero: FC = function () {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8">
      <div className="my-auto mx-auto w-[300px] h-auto lg:w-[400px] ">
        <img src={profile} alt="profile" className="rounded-full mx-4" />
      </div>
      <div className="col-span-2 px-5">
        <h1 className="text-white text-4x1 sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color">I'm a</span>
          <br />
          <TypeAnimation
            sequence={[
              "Mobile Developer",
              1000,
              "Frontend Developer",
              1000,
              "Apprentice in Backend",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p>
          My name is Andriani Leandro and i have 1 year experience in web and
          mobile development.
        </p>
      </div>
    </div>
  );
};

export default Hero;
