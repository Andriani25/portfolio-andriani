import proj1 from "../assets/healthy.jpeg";
import proj2 from "../assets/newspaper.jpeg";
import proj3 from "../assets/pomodoro.jpeg";

const Proyects = function () {
  return (
    <div className="max-w-[1200px] mx-auto p-5 " id="Proyects">
      <div className="pb-8">
        <p className="text-4x1 mb-3 font-bold primary-color">Proyects</p>
        <p className="text-gray-400">
          This are my most relevant individual proyects
        </p>
      </div>

      <div className="grid sm=grid-cols-2 md:grid-cols-3 gap-4">
        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16]e rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative ">
          <img src={proj1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Proyects;
