import React from 'react';
import styled from "styled-components";
import aed from '../../assets/AED.svg';
import {Contents, MainContainer, MainWrapper, Point, MiniTitle} from "../../atoms/Atomic";

const MainAED = ({scRef}) => {
  return (
    <MainContainer ref={scRef}>
      <MainWrapper gap={'100px'}>
        <TempContainer>
         <Aed src={aed}/>
          <div>
            <MiniTitle >
            알아보아요 <Point size={'36'} weight={'600'}>AED</Point> 
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

export default MainAED;