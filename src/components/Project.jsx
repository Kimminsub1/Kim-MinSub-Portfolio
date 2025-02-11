import React, { useState } from "react";
import "./Project.css";

const Projects = () => {
  // 선택된 탭을 추적하는 상태
  const [activeTab, setActiveTab] = useState("Project1");
  const [imageIndex, setImageIndex] = useState(0); // 현재 슬라이드 인덱스

  // 프로젝트별 이미지 배열
  const projectImages = {
    Project1: [
      "img/project_usinsa.png",
      "img/usinsa_login.png",
      "img/usinsa_product.png",
      "img/usinsa_signup.png",
      "img/usinsa_userinfo.png",
    ],
    Project2: [
      "img/project_kiosk.png",
      "img/kiosk_product.png",
      "img/kiosk_product_detail.png",
      "img/kiosk_cart.png",
      "img/kiosk_order.png",
    ],
    Project3: [
      "img/project_sagwasangjum.png",
      "img/project_sagwasangjum.png",
    ],
    Project4: [
      "img/kokeetea.png",
      "img/kokeetea.png",
    ],
  };

  // 현재 선택된 프로젝트의 이미지 배열 가져오기
  const images = projectImages[activeTab];

  // 이전 이미지 보기
  const prevImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // 다음 이미지 보기
  const nextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      {/* 탭 메뉴 */}
      <div className="projects-sidebar">
        <button
          className={activeTab === "Project1" ? "active" : ""}
          onClick={() => {
            setActiveTab("Project1");
            setImageIndex(0);
          }}
        >
          Usinsa
        </button>
        <button
          className={activeTab === "Project2" ? "active" : ""}
          onClick={() => {
            setActiveTab("Project2");
            setImageIndex(0);
          }}
        >
          SmartPhone Kiosk
        </button>
        <button
          className={activeTab === "Project3" ? "active" : ""}
          onClick={() => {
            setActiveTab("Project3");
            setImageIndex(0);
          }}
        >
          Sagwasangjum
        </button>
        <button
          className={activeTab === "Project4" ? "active" : ""}
          onClick={() => {
            setActiveTab("Project4");
            setImageIndex(0);
          }}
        >
          KokeeTea
        </button>
      </div>

      {/* 프로젝트 내용 */}
      <div className="projects-content">
        {images && (
          <div className="project-item">
            <div className="image-slider">
              <button className="prev-btn" onClick={prevImage}>
                {"<"}
              </button>
              <img src={images[imageIndex]} alt={`slide-${imageIndex}`} />
              <button className="next-btn" onClick={nextImage}>
                {">"}
              </button>
            </div>
            <h3>
              {activeTab === "Project1"
                ? "남성의류 쇼핑몰 웹사이트"
                : activeTab === "Project2"
                ? "스마트폰 키오스크"
                : activeTab === "Project3"
                ? "전자제품 쇼핑몰"
                : "Cafe_KokeeTea"}
            </h3>
            <p>
              {activeTab === "Project1"
                ? "JAVA와 MySQL을 이용하여 개발한 쇼핑몰 프로젝트"
                : activeTab === "Project2"
                ? "JAVA와 MySQL을 이용하여 개발한 키오스크 프로젝트"
                : activeTab === "Project3"
                ? "Servlet과 Apache를 사용하여 제작한 웹사이트"
                : "React와 Spring Boot를 활용한 풀스택 웹 애플리케이션"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
