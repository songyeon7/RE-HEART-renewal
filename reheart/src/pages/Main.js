import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css'; // Main 컴포넌트에 대한 CSS 파일을 임포트

function Main() {
  return (
    <div className="main-content">
      <h3>프로젝트 소개</h3>
      <p>이 프로젝트는 무엇에 관한 것이며 왜 중요한지에 대한 간단한 소개입니다.</p>
      
      <div className="quick-links">
        <Link to="/map">
          <img src="/map-icon.png" alt="지도 아이콘" />
          <p>지도로 이동</p>
        </Link>
        <Link to="/description">
          <img src="/description-icon.png" alt="설명 아이콘" />
          <p>자세한 설명</p>
        </Link>
      </div>
    </div>
  );
}

export default Main;
