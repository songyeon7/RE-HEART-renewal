import React from 'react';
import styled from "styled-components";
import aed from '../../assets/ch5.png';
import {Contents, MainContainer, MainWrapper, Point, MiniTitle} from "../../atoms/Atomic";

const Chap5 = ({scRef}) => {
  return (
    <MainContainer ref={scRef}>
      <MainWrapper gap={'100px'}>
        <TempContainer>
          <div>
            <MiniTitle >
            <Point size={'48'} weight={'600'}>5. 즉시 심폐소생술 다시 시행</Point> 
            </MiniTitle>
            <Blank num={'4vh'}/>
            <Contents>
              <div ><br/>
              심장충격(제세동)을 실시한 뒤에는 <br/>
              즉시 가슴압박과 인공호흡을 30:2로 다시 시작한다. <br/><br/>
              심장충격기(자동제세동기)는 2분마다 심장리듬을 반복해서 분석하며, <br/>
              이러한 심장충격기(자동제세동기)의 사용 및 심폐소생술의 시행은 <br/>
              119 구급대가 현장에 도착할 때까지 지속되어야 한다.<br/><br/>
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
  width: 300px;
  height: 300px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  @media(max-width: 1080px) {
    height: 250px;
    width: 250px;
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

export default Chap5;