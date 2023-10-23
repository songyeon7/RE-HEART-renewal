import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <header>
        <div className="css-reheart">
          <div className="logo">
            <Link to="/"><img src="images/logo_seoul.svg" alt="RE:HEART logo" /></Link>
          </div>
          <div className="menu">
            <ul >
              <li>
                <Link to="/map" >지도</Link>
              </li>
              <li>
                <Link to="/explain" >설명</Link>
              </li>
              <li>
                <Link to="/aboutus" >우리</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div >
        <div className="gotomap" >
          <Link to="/map"><img src="images/map_seoul.svg"  alt="지도" /></Link>
        </div>
        <div className="AED_img" >
          <Link to="/explain"><img src="images/AED.svg" alt="설명" /></Link>
        </div>
      </div>
      <div >
        <div className="gotomap" >
          <Link to="/map">지도에서 보기</Link>
        </div>
        <div className="AED_img" >
          <Link to="/explain">설명보러 가기</Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
