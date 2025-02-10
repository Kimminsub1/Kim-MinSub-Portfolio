import React from "react";
import Navbar from "./Navbar"; // 네비게이션 추가
import HeroSection from "./HeroSection";
import Project from "./Project";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main-container">
      <Navbar />

      <section className="page" id="hero">
        <HeroSection />
      </section>
      <section className="page" id="skills">
        <Skills />
      </section>
      <section className="page" id="projects">
        <Project />
      </section>
    </div>
  );
};

export default MainPage;
