import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom'; // Import Link for routing

const MainContent = () => {
  return (
    <>
      <Header isNotHome={false} />
      <div style={{ textAlign: 'center', marginTop: '7%' }}>
        <div className="gotomap" style={{ display: 'inline-block', width: '400px', height: '400px', marginLeft: '15%' }}>
          <Link to="/map">
            <img src="images/map_seoul.svg" style={{ blockSize: '400px' }} alt="지도" />
          </Link>
        </div>
        <div className="AED_img" style={{ display: 'inline-block', width: '400px', height: '400px', marginLeft: '7%', marginRight: '15%' }}>
          <Link to="/explain">
            <img src="images/AED.svg" style={{ blockSize: '400px' }} alt="설명" />
          </Link>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '1%' }}>
        <div className="gotomap" style={{ display: 'inline-block', marginLeft: 'auto' }}>
          <Link to="/map">지도에서 보기</Link>
        </div>
        <div className="AED_img" style={{ display: 'inline-block', marginLeft: '27%', marginRight: 'auto' }}>
          <Link to="/explain">설명보러 가기</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainContent;
