import React, { useState } from "react";
import "./Skills.css";

const Skills = () => {
  // 선택된 탭을 추적하는 상태
  const [activeTab, setActiveTab] = useState("Language");

  return (
    <div className="appeal">
      <div className="about-me-text">
        <h2>About Me</h2>
        
      </div>

      <div className="skills-container">
        {/* 왼쪽 탭 메뉴 */}
        <div className="skills-sidebar">
          <button
            className={activeTab === "Language" ? "active" : ""}
            onClick={() => setActiveTab("Language")}
          >
            Language
          </button>
          <button
            className={activeTab === "Database" ? "active" : ""}
            onClick={() => setActiveTab("Database")}
          >
            Database
          </button>
          <button
            className={activeTab === "FrontEnd" ? "active" : ""}
            onClick={() => setActiveTab("FrontEnd")}
          >
            FrontEnd
          </button>
          <button
            className={activeTab === "BackEnd" ? "active" : ""}
            onClick={() => setActiveTab("BackEnd")}
          >
            BackEnd
          </button>
          <button
            className={activeTab === "Server" ? "active" : ""}
            onClick={() => setActiveTab("Server")}
          >
            Server
          </button>
          <button
            className={activeTab === "Certificate" ? "active" : ""}
            onClick={() => setActiveTab("Certificate")}
          >
            Certificate
          </button>
        </div>

        {/* 오른쪽 내용 영역 */}
        <div className="skills-content">
          {activeTab === "Language" && (
            <div>
              <h2>Java</h2>
              <div className="skill-item">
                <p>
                  기본문법: 자바 구조 및 문법 기초를 통하여 프로그래밍 언어에
                  대해 습득함. 제어문, 메소드, 배열: 각종 실습을 통해 원하는
                  방법으로 값을 구현하는 기술 습득.
                </p>
              </div>
            </div>
          )}
          {activeTab === "Database" && (
            <div>
              <h2>Database</h2>
              <div className="skill-item">
                <p>MariaDB, MySQL을 이용한 데이터베이스 설계 및 SQL 활용</p>
              </div>
            </div>
          )}
          {activeTab === "FrontEnd" && (
            <div>
              <h2>FrontEnd</h2>
              <div className="skill-item">
                <p>HTML, CSS, JS: 기본적인 웹페이지를 만들며 익힘.</p>
              </div>
              <div className="skill-item">
                <p>부트스트랩: 기본적인 UI 환경을 반응형 웹페이지로 구축함.</p>
              </div>
              <div className="skill-item">
                <p>React, Vue: 스프링부트와 연동하여 프로젝트 개발하며 익힘</p>
              </div>
            </div>
          )}

          {activeTab === "BackEnd" && (
            <div>
              <h2>BackEnd</h2>
              <div className="skill-item">
                <p>
                  Express : React와 Express를 학습 후 프로젝트의 프론트&백엔드
                  프레임워크로 사용한 경험이 있습니다.
                </p>
              </div>
              <div className="skill-item">
                <p>
                  Spring Boot : 강의를 보며 따라 해 본 경험과 교육과정에서
                  프로젝트를 수행한 경험이 있습니다.
                </p>
              </div>
            </div>
          )}
          {activeTab === "Server" && (
            <div>
              <h2>Server</h2>
              <div className="skill-item">
                <p>Apache, PHP, Linux 서버 운영 경험</p>
              </div>
            </div>
          )}
          {activeTab === "Certificate" && (
            <div>
              <h2>Certificate</h2>
              <div className="skill-item">
                <p>정보처리기사 , SQLD</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
