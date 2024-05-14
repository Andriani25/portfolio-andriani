import proj1 from "../assets/healthy.jpeg";
import proj2 from "../assets/newspaper.jpeg";
import proj3 from "../assets/pomodoro.jpeg";

const Proyects = function () {
  return (
    <div className="max-w-[1200px] p-5 mx-auto mt-10" id="projects">
      <div className="pb-8">
        <p className="mb-3 text-5xl primary-color font-bold  sm:ml-5 md:ml-10 ">
          Projects
        </p>
        <p className="text-white my-1 sm:ml-5 md:ml-10 ">
          This are my most relevant proyects that i make.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 px-10 gap-10 justify-center ">
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
        shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center bg-cover relative"
        >
          <div className="flex flex-row justify-center items-center ">
            <img src={proj1} alt="alt" />
          </div>
          <div className=" opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <div className="pt-8 text-center">
              <a href="https://youtu.be/Sh5yTLnBQtg" target="blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-xs sm:text-sm md:text-lg">
                  Healthy-Mealthy is a mobile app who counts the amount of
                  calories that the user consume during 24hs. This app uses Expo
                  Go, React Navigation and React Native Async Storage.{<br />}
                  {
                    <span className="secondary-color rounded-md">
                      Click to see a Youtube Video
                    </span>
                  }
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
        shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center bg-cover relative"
        >
          <div className="flex flex-row justify-center items-center ">
            <img src={proj2} alt="alt" />
          </div>
          <div className=" opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <div className="pt-8 text-center">
              <a href="https://youtu.be/SSRegetjyNU" target="blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-xs sm:text-sm md:text-lg">
                  Newspaper app is, like the name say's, a news provided by the
                  "Current's" API. This app only uses Expo Go.{<br />}
                  {
                    <span className="secondary-color">
                      Click to see a Youtube Video
                    </span>
                  }
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
        shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center bg-cover relative"
        >
          <div className="flex flex-row justify-center items-center ">
            <img src={proj3} alt="alt" />
          </div>
          <div className=" opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="https://youtu.be/s1rH9sbakY8" target="blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold text-xs sm:text-sm md:text-lg">
                  Pomodoro is a chronometer who uses the "Pomodoro" work system.
                  This system consist in 25' of work, 5' short rest, 25' work,
                  15' large rest and repeat. This app only uses Expo Go.
                  {<br />}
                  {
                    <span className="secondary-color">
                      Click to see a Youtube Video
                    </span>
                  }
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyects;
