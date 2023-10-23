import React from 'react';
import Header from '../components/Header'; // Header 컴포넌트 임포트
import Footer from '../components/Footer'; // Footer 컴포넌트 임포트

function MyPage() {
  return (
    <div>
      <Header /> {/* 상단 부분 로고와 메뉴 */}
      {/* 페이지 내용 */}
      <Footer /> {/* 하단 정보 부분 */}
    </div>
  );
}

export default MyPage;
