import React from 'react';
import styled from "styled-components";
import maps from '../../assets/map_seoul.svg';
import {Contents, MainContainer, MainWrapper, Point, MiniTitle} from "../../atoms/Atomic";

const MainMap = ({scRef}) => {
  return (
    <MainContainer ref={scRef}>
      <MainWrapper gap={'100px'}>
        <TempContainer>
          <Maps src={maps}/>
          <div>
            <MiniTitle >
            내 주변 <Point size={'35'} weight={'600'}>AED기기</Point> 위치 찾아보기
            </MiniTitle>
            <Blank num={'4vh'}/>
            <Contents>
              <div >
              여러분 주위에 있는 AED 기기를 찾아보아요<br/>
              검색을 통해서 찾아볼 수도 있어요<br/><br/>
              </div>
              <div >
              <Button >찾으러 가보기</Button>
              </div>
            </Contents>
          </div>
        </TempContainer>
      </MainWrapper>
    </MainContainer>
  );
};

const Maps = styled.img`
  width: 400px;
  height: 400px;
  flex-shrink: 0;
  border-radius: 5px;
  @media(max-width: 1080px) {
    height: 430px;
    width: 242px;
  }
`;
const Blank = styled.div`
  width: 0;
  height: ${(props) => props.num};
`;
const TempContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 800px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const Button = styled.button`
  background-color: var(--button-bg, #FF9B9B); // 버튼 배경색을 정의하며 기본값은 파란색
  color: var(--button-text, #fff); // 버튼 텍스트 색상을 정의하며 기본값은 흰색
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--button-hover-bg, #D97D7D); // 마우스 호버시 배경색을 정의하며 기본값은 더 어두운 파란색
  }
`;

export default MainMap;