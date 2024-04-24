import proj1 from "../assets/healthy.jpeg";
import proj2 from "../assets/newspaper.jpeg";
import proj3 from "../assets/pomodoro.jpeg";

const Proyects = function () {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="projects">
      <div className="pb-8">
        <p className="mb-3 text-5xl primary-color">Projects</p>
        <p className="text-gray-400 my-1 ">
          This are my most relevant individual proyects
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
        shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center bg-cover relative"
        >
          <div className="flex flex-row justify-center items-center ">
            <img src={proj1} alt="alt" />
            <span className=" mx-8 text-2xl font-bold text-white tracking-wider">
              Project
            </span>
          </div>
          <div className=" opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <div className="pt-8 text-center">
              <a href="https://youtu.be/Sh5yTLnBQtg" target="blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Youtube Video
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
            <span className=" mx-8 text-2xl font-bold text-white tracking-wider">
              Project
            </span>
          </div>
          <div className=" opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="https://youtu.be/Sh5yTLnBQtg" target="blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Youtube Video
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
            <span className=" mx-8 text-2xl font-bold text-white tracking-wider">
              Project
            </span>
          </div>
          <div className=" opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">
              Project
            </span>
            <div className="pt-8 text-center">
              <a href="https://youtu.be/Sh5yTLnBQtg" target="blank">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Youtube Video
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
