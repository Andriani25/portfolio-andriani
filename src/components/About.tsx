import { FC } from "react";
import dev from "../assets/dev-removebg-preview.png";

const About: FC = function () {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 secondary-color">
              About Me
            </h2>
            <p className="text-base lg:text-lg">
              {" "}
              My name is Andriani Leandro from Argentina. I recently moved to
              Spain looking for new opportunities in my life. I am currently
              searching for a full-time job (preferably remote) in mobile
              development. I have professional experience with maintenance and
              updates of the main page of{" "}
              {
                <a
                  className="secondary-color"
                  href="https://uspt.edu.ar/home/"
                  target="blank"
                >
                  Universidad de San Pablo Tucumán
                </a>
              }{" "}
              and its database, all with JS. Now I'm focused on mobile
              development and studying Kotlin for native apps!
            </p>
          </div>
        </div>
        <img
          src={dev}
          width={300}
          height={300}
          className="mx-auto py-8 md:py-0 rounded-full "
        />
      </div>
    </div>
  );
};

export default About;
