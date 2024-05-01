import { FC } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Logos from "./components/Logos";

const App: FC = function App() {
  return (
    <div className="bg-black">
      <NavBar />
      <Hero />
      <Logos />
      <Projects />
    </div>
  );
};

export default App;
