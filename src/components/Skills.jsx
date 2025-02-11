import React, { useState } from "react";
import "./Skills.css";

const Skills = () => {
  // 선택된 탭을 추적하는 상태
  const [activeTab, setActiveTab] = useState("Language");

  return (
    <div className="appeal">
      <div className="about-me-text">
        <h2>About Me</h2>
        <p>
          국비 지원 교육을 통해 자바 개발자 양성과정과 스프링부트
          풀스택 개발 과정을 이수하면서 실무 기반 기술을 보강하고, 프로젝트
          경험을 쌓았습니다.
        </p>
        <p>
          참여한 프로젝트 중 JAVA와 DB를 활용한 의류 쇼핑몰 웹사이트를 팀원들과
          협력하여 개발하였고, 이를 통해 개발에서 협업의 중요성을 깨달았습니다.
          이후, Servlet을 이용한 전자제품 쇼핑몰을 개발하면서 프로젝트를
          완성하는 성취감을 느꼈고, 개발의 즐거움을 더욱 알게 되었습니다.
        </p>
        <p>
          현재는 클라우드 기술에 관심을 가지고 있으며, 클라우드 관련 자격증
          취득을 목표로 공부 중입니다. 저는 팀원들과 원활하게 협업하며, 업무에
          적극적으로 적응하여 회사에 기여하고 성장할 수 있는 개발자가 되고자
          합니다.
        </p>
        <p>
          주요 기술 스택: Java, Spring Boot, Servlet, Apache, MySQL, HTML, CSS,
          JavaScript 등
        </p>
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
