import React from 'react';
import styled from "styled-components";
import aed from '../../assets/reheart.svg';
import {Contents, MainContainer, MainWrapper, Point, MiniTitle, Title} from "../../atoms/Atomic";

const WhyWe = ({scRef}) => {
  return (
    <MainContainer ref={scRef}>
      <MainWrapper gap={'100px'}>
        <TempContainer>
          <Aed src={aed}/>
          <div>
            <Title >
            <Point size={'48'} weight={'600'}>RE:HEART </Point> 소개에 앞서
            </Title>
            <Blank num={'4vh'}/>
            <Contents>
              <div >
              안녕하세요 위치기반 AED 위치 표시 웹 “RE:♥”입니다.<br/>
              RE:HEART라는 이름은 “다시 사람을 살린다” 라는 뜻을 의미합니다.
              </div>
            </Contents>
          </div>
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

export default WhyWe;