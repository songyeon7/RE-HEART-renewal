import React, { useState } from 'react';
import { useEffect } from 'react';
import Logo from '../assets/logo.svg';
import OpenImg from '../assets/open.svg'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  const [nav, setNav] = useState(props.isNotHome);
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    if(typeof window !== "undefined" && !props.isNotHome) {
      window.addEventListener("scroll", () =>{
        setNav(window.scrollY > 100 ? true : false);
      })
    }
  }, )
  const toggleSideBar = () => {
    setSideBar(!sideBar); // 메뉴 가시성을 토글합니다.
  };
  

  return (
    <>
      <Desktop>
        <HeaderContainer navBar={nav}>
          <HeaderWrapper>
            <TextButton navBar={nav} to={'/'}><Left src={Logo}/></TextButton>
            <Right>
              <TextButton navBar={nav} to={'/'}>홈</TextButton>
              <TextButton navBar={nav} to={'/Map'}>지도</TextButton>
              <TextButton navBar={nav} to={'/About'}>설명</TextButton>
              <TextButton navBar={nav} to={'/Contact'}>소개</TextButton>
            </Right>
          </HeaderWrapper>
        </HeaderContainer>
      </Desktop>
      <Mobile>
        <HeaderContainer navBar={nav}>
          <HeaderWrapper>
            <TextButton navBar={nav} to={'/'}><Left src={Logo}/></TextButton>
              <SideButton navBar={nav} onClick={toggleSideBar}>
              <SideButtonImg src={OpenImg} alt="open image" />
            </SideButton>
            {sideBar && (
            <MobileMenu>
              <TextButton navBar={nav} to={'/'}>홈</TextButton>
              <TextButton navBar={nav} to={'/Map'}>지도</TextButton>
              <TextButton navBar={nav} to={'/About'}>설명</TextButton>
              <TextButton navBar={nav} to={'/Contact'}>소개</TextButton>
            </MobileMenu>
            )}
          </HeaderWrapper>
        </HeaderContainer>
      </Mobile>
    </>
  );
};


const SideButtonImg = styled.img`
  filter: ${(props) => (props.navBar ? "var(--text-title, #2C231E)" : "#f5f5f5")};
  width: max-content;
  height: max-content;
`;
const SideButton = styled.div`
  padding: 10px 15px;
  color: ${(props) => (props.navBar ? "var(--text-title, #2C231E)" : "#f5f5f5")};
`;
const Mobile = styled.div`
  display: none;
  z-index: 9;
  @media(max-width: 730px) {display: block}
`;
const Desktop = styled.div`
  z-index: 9;
  @media(max-width: 730px) {display: none}
`;
const TextButton = styled(Link)`
  color: ${(props) => (props.navBar ? "var(--text-contents, #524437)" : "#9A9A9A")};
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background: none;
  border: 0;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 5px;
  transition: all 0.3s;
  &:hover {
    background: rgba(0, 0, 0, 0.07);
    color: var(--text-title, #2C231E);
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Left = styled.img`
  width: 150px;
  height: 30px;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  margin: 0 auto;
  background-color: ${(props) => (props.navBar ? "rgba(255, 255, 255, 0.8)" : "#fff5f5")};
  border-bottom: 1.5px solid ${(props) => (props.navBar ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 0)")};
  z-index: 10;
  transition-property: background-color, border-bottom-color;
  transition: 0.3s ease-in-out;
  backdrop-filter: ${(props) => (props.navBar ? "blur(10px)" : "transparent")};
`;
const HeaderWrapper = styled.div`
  display: flex;
  width: 1120px;
  height: 60px;
  justify-content: space-between;
  align-items: center;
`;
const MobileMenu = styled.div`
position: absolute;
top: 60px;
left: 0;
width: 100%;
background-color: #FFF5F5;
display: flex;
flex-direction: column;
z-index: 1;
`;

export default Header;