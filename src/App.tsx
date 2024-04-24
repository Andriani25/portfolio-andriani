import { FC } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const App: FC = function App() {
  return (
    <div className="bg-black">
      <NavBar />
      <Hero />
      <Projects />
    </div>
  );
};

export default App;
