import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="kms-section">
      <div className="kms-content">
        <h1>안녕하세요.</h1>
        <h2>주니어 백엔드 개발자 김민섭입니다.</h2>
        
        <h2>Contact me</h2>
        <ul>
          <li>
          ● Phone : <span>010-7455-8653</span>
          </li>
          <li>
          ● E-Mail : <span>awdx303@gmail.com</span>
          </li>
          <li>
          ● GitHub : {" "}
            <a href="https://kimminsub1.github.io/MinSub-Portpolio/">
              https://kimminsub1.github.io/MinSub-Portpolio/
            </a>
          </li>
        </ul>
      </div>
      <div className="kms-image">
        <img src="img/kms.jpg" alt="프로필 이미지" />
      </div>
    </section>
  );
};

export default HeroSection;
