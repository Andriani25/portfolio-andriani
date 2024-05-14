import { FC } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Logos from "./components/Logos";
import About from "./components/About";
import Contact from "./components/Contact";

const App: FC = function App() {
  return (
    <div className="bg-black">
      <NavBar />
      <Hero />
      <Logos />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
