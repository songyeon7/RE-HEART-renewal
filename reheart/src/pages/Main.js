import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'; // react-router-dom을 사용하여 페이지 간 이동을 위한 Link를 임포트

function Main() {
  return (
    <div>
      <Header />
      <div className="main-content">
        <h1>프로젝트 소개</h1>
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

      <Footer />
    </div>
  );
}

export default Main;
