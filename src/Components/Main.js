import React from "react";
import Navibar from "./Navibar";
import Skills from "./Skills";
import Resume from "./Resume";
import About from "./About";

const Main = () => {
  return (
    <div className="centered">
      <Navibar />
      <About />
      <Resume />
      <Skills />
    </div>
  );
};

export default Main;
