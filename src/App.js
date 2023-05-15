import Main from "./Components/Main";
import Skills from "./Components/Skills";
import Resume from "./Components/Resume";
import About from "./Components/About";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
