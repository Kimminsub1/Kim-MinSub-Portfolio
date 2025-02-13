import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="kms-section">
      <div className="kms-image">
        <img src="img/backimg.jpg" alt="프로필 이미지" />
      </div>

      <div className="kms-title">
        <h1>안녕하세요, 주니어 백엔드 개발자 김민섭입니다.</h1>

        <div className="kms-content">
          <div>
            <h2>&lt;학력: 남서울대학교 컴퓨터학과 졸업&gt;</h2>
            <h2>&lt;국비 지원 자바 풀스택 과정 수료&gt;</h2>
            <h2>&lt;정보처리기사 & SQLD 자격증 보유&gt;</h2>
          </div>
        </div>

        <div className="kms-contact">
          <h2>Contact me</h2>
          <ul>
            <li>
              Phone : <span>010-7455-8653</span>
            </li>
            <li>
              E-Mail : <span>awdx303@gmail.com</span>
            </li>
            <li>
              GitHub :{" "}
              <a href="https://github.com/Kimminsub1">
                https://github.com/Kimminsub1
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
