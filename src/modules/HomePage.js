import React from "react";
import NavBar from "../components/NavBar";
import MainContainer from "../components/MainContainer";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

import ContactUs from "../components/ContactUs";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <MainContainer />
      <Services />
      <Skills />
      <Projects />
      <ContactUs />
    </div>
  );
};

export default HomePage;
