import React from 'react';
import styled from "styled-components";
import aed from '../../assets/AED.svg';
import {Contents, MainContainer, MainWrapper, Point, MiniTitle} from "../../atoms/Atomic";

const MainAED = ({scRef}) => {
  return (
    <MainContainer ref={scRef}>
      <MainWrapper gap={'100px'}>
        <TempContainer>
          <div>
            <MiniTitle >
            내 주변 <Point size={'35'} weight={'600'}>AED기기</Point> 위치 찾아보기
            </MiniTitle>
            <Blank num={'4vh'}/>
            <Contents>
              <div ><br/>
              AED기기가 어디에 있는지 궁금하셨다고요?<br/>
              AED의 위치를 미리 알아보시고 싶으시다고요?<br/>
              응급 상황인데 AED기기가 어디에 있는지 모르시겠다고요?<br/>
              여러분 주위에 있는 AED 기기를 찾아보아요<br/><br/>
              </div>
              <div >
              미리미리 알아두면<br/>
              응급 상황에 대비할 수 있을거에요!<br/><br/>
              </div>
            </Contents>
          </div>
          <Aed src={aed}/>
        </TempContainer>
      </MainWrapper>
    </MainContainer>
  );
};

const Aed = styled.img`
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

export default MainAED;