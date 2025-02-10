import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section>
      <div className="kms-content">
        <h1>안녕하세요.</h1>
        <h1>백엔드 개발자가 되고 싶은 김민섭입니다.</h1>
        <h2>
          저는 주로 Java와 Spring Framework를 사용하여 백엔드 서비스를 개발하고
          있으며, 끊임없이 배우고 도전하는 개발자 지망생입니다.
        </h2>
        <h3>
          보이지 않는 곳에서도 최고의 서비스를 위해 최선을 다하는 백엔드
          개발자가 되겠습니다.
        </h3>
        <br />
        <h2>연락하기</h2>
        <p>저에게 연락하고 싶으시다면 다음 방법을 이용해주세요:</p>
        <ul>
          <li>
            연락처: <p>010-7455-8653</p>
          </li>
          <li>
            이메일: <p>awdx303@gmail.com</p>
          </li>
          <li>
            GitHub:{" "}
            <p>https://github.com/Kimminsub1/Kim-MinSub-Portfolio.git</p>
          </li>
        </ul>
      </div>
      <div className="kms-image">
        <img src="/MinSub-Portpolio/img/kms.jpg" alt="프로필 이미지" />
      </div>
    </section>
  );
};

export default HeroSection;
