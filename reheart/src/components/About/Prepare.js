import React from 'react';
import styled from "styled-components";
import aed from '../../assets/AED.svg';
import {Contents, MainContainer, MainWrapper, Point, MiniTitle, Title} from "../../atoms/Atomic";

const Prepare = ({scRef}) => {
  return (
    <MainContainer ref={scRef}>
      <MainWrapper gap={'100px'}>
        <TempContainer>
          <div>
            <Title >
            <Point size={'48'} weight={'600'}>자동심장충격기(AED) </Point> 사용법
            </Title>
            <Blank num={'4vh'}/>
            <Contents>
              <div ><br/>
              <div>
              <MiniTitle>준비하기</MiniTitle><br/><br/>
              </div>
              환자의 확인(신고 병행 119 또는 1339)<br/>
              자동심장충격기(AED)가 준비되기 전까지 심폐소생술(CPR)을 합니다.<br/>
              심장충격기(자동제세동기)는 반응과 정상적인 호흡이 없는 심정지 환자에게만 사용해야 하며, <br/>
              심폐소생술 시행 중에 심장충격기(자동제세동기)가 도착하면 지체 없이 적용해야 한다. <br/>
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

export default Prepare;