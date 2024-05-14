import { FC } from "react";
import html from "../assets/1024px-HTML5_Badge.svg.png";
import css from "../assets/CSS3_logo.svg.png";
import js from "../assets/kisscc0-computer-icons-logo-brand-javascript-angle-js-5b741783856f77.0690615715343348515466.png";
import react from "../assets/react-logo-freelogovectors.net_.png";
import reactnative from "../assets/react-native-logo.png";
import expo from "../assets/expo_logo_icon_145293.png";

const Logos: FC = function () {
  return (
    <div className="md:h-[150px] max-w-[1200px] border-l-red-600 border-r-green-600 border-x-2 mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center">
      <div className="m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={html} alt="" />
      </div>
      <div className="m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={css} alt="" />
      </div>
      <div className="m-4 sm:my-0 w-[80px] md:w-[100px] ">
        <img src={js} alt="" className="h-[80px] md:h-[100px] " />
      </div>
      <div className="m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={react} alt="" />
      </div>
      <div className="m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={reactnative} alt="" />
      </div>
      <div className="m-4 sm:my-0 w-[80px] md:w-[100px]">
        <img src={expo} alt="" className="bg-white rounded-3xl " />
      </div>
    </div>
  );
};

export default Logos;
