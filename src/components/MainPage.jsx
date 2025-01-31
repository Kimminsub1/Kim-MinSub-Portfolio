import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-container">
      <section className="kms">
        <div className="kms-content">
          <h1>안녕하세요.</h1> 
            <h2>웹 개발자가 되고싶은 저의 이름은 김민섭 입니다.</h2>
          <p>저는 웹 개발자가 되기 위해 끊임없이 배우고 도전하는 개발자 지망생입니다.</p>
          <button className="cta-button">포트폴리오 보기</button>
        </div>
        <div className="kms-image">
          <img src="/img/kms.jpg" alt="프로필 이미지" />
        </div>
      </section>

      <section className="about-me">
        <h2>저에 대해</h2>
        <p>
          저는 남서울대학교에서 컴퓨터학과를 전공으로 공부했고, 2024년부터 개발자를 준비하며 Spring Boot 풀스텍 개발자 국비지원 교육을 받으며 관련분야 자격증인 정보처리기사, SQLD 자격증을 취득하기 시작했습니다.
          웹 개발에 대한 열정을 가지고 있으며, 사용자를 위한 최고의 서비스를 제공하는데 관심이 많습니다.
        </p>
        <p>주요 기술 스택: Java, Spring Boot, APACH, MYSQL, HTML, CSS, JS 등</p>
      </section>

      <section className="contact">
        <h2>연락하기</h2>
        <p>저에게 연락하고 싶으시다면 다음 방법을 이용해주세요:</p>
        <ul>
          <li>연락처: <a href="[]">010-7455-8653</a></li>
          <li>이메일: <a href="awdx303@gmail.com">awdx303@gmail.com</a></li>
          <li>GitHub: <a href="https://github.com/Kimminsub1/Kim-MinSub-Portfolio.git">GitHub</a></li>
        </ul>
      </section>
    </div>
  );
};

export default MainPage;