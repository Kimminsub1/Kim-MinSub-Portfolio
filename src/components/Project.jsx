import React, { useState } from "react";

const Projects = () => {
  // 선택된 탭을 추적하는 상태
  const [activeTab, setActiveTab] = useState("Project1");

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      
      {/* 탭 메뉴 */}
      <div className="projects-sidebar">
        <button className={activeTab === "Project1" ? "active" : ""} onClick={() => setActiveTab("Project1")}>
          프로젝트 1
        </button>
        <button className={activeTab === "Project2" ? "active" : ""} onClick={() => setActiveTab("Project2")}>
          프로젝트 2
        </button>
        <button className={activeTab === "Project3" ? "active" : ""} onClick={() => setActiveTab("Project3")}>
          프로젝트 3
        </button>
      </div>

      {/* 프로젝트 내용 */}
      <div className="projects-content">
        {activeTab === "Project1" && (
          <div className="project-item">
            <img src="/img/project1.jpg" alt="프로젝트 1" />
            <h3>의류 쇼핑몰 웹사이트</h3>
            <p>JAVA와 MySQL을 이용하여 개발한 쇼핑몰 프로젝트</p>
          </div>
        )}
        {activeTab === "Project2" && (
          <div className="project-item">
            <img src="/img/project2.jpg" alt="프로젝트 2" />
            <h3>전자제품 쇼핑몰</h3>
            <p>Servlet과 Apache를 사용하여 제작한 웹사이트</p>
          </div>
        )}
        {activeTab === "Project3" && (
          <div className="project-item">
            <img src="/img/project3.jpg" alt="프로젝트 3" />
            <h3>React & SpringBoot 프로젝트</h3>
            <p>React와 Spring Boot를 활용한 풀스택 웹 애플리케이션</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
