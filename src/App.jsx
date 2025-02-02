import React, { useEffect, useRef, useState } from "react";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import "./components/MainPage.css";

function App() {
  const outerDivRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const sections = [HeroSection, Skills];
  const sectionNames = ["Home", "Skills"]; // 각 섹션에 대응하는 이름
  const totalSections = sections.length;

  const scrollToSection = (index) => {
    const pageHeight = window.innerHeight;

    if (outerDivRef.current) {
      outerDivRef.current.scrollTo({
        top: index * pageHeight,
        left: 0,
        behavior: "smooth",
      });

      setCurrentPage(index);
      setTimeout(() => setIsScrolling(false), 800);
    }
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (isScrolling) return;
      setIsScrolling(true);

      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current;
      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        // 아래로 스크롤
        if (currentPage < totalSections - 1) {
          scrollToSection(currentPage + 1);
        } else {
          setIsScrolling(false);
        }
      } else {
        // 위로 스크롤
        if (currentPage > 0) {
          scrollToSection(currentPage - 1);
        } else {
          setIsScrolling(false);
        }
      }
    };

    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", handleScroll);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", handleScroll);
    };
  }, [isScrolling, currentPage]);

  return (
    <div ref={outerDivRef} className="main-container">
      <nav className="nav-buttons">
        {sections.map((_, index) => (
          <button
            key={index}
            className={currentPage === index ? "active" : ""}
            onClick={() => scrollToSection(index)}
          >
            {sectionNames[index]}
          </button>
        ))}
      </nav>

      <section id="hero">
        <HeroSection />
      </section>
      <section id="skills">
        <Skills />
      </section>
    </div>
  );
}

export default App;