import { FC } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Proyects from "./components/Proyects";

const App: FC = function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Proyects />
    </div>
  );
};

export default App;
