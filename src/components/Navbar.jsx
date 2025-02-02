import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <button className={activeSection === "hero" ? "active" : ""} onClick={() => scrollToSection("hero")}>
        홈
      </button>
      <button className={activeSection === "skills" ? "active" : ""} onClick={() => scrollToSection("skills")}>
        기술
      </button>
    </nav>
  );
};

export default Navbar;