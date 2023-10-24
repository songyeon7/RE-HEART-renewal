import React from 'react';
import styled from "styled-components";
import aed from '../../assets/ch3.png';
import {Contents, MainContainer, MainWrapper, Point, MiniTitle} from "../../atoms/Atomic";

const Chap3 = ({scRef}) => {
  return (
    <MainContainer ref={scRef}>
      <MainWrapper gap={'100px'}>
        <TempContainer>
          <div>
            <MiniTitle >
            <Point size={'48'} weight={'600'}>3. 심장리듬 분석</Point> 
            </MiniTitle>
            <Blank num={'4vh'}/>
            <Contents>
              <div ><br/>
              "분석 중..."이라는 음성 지시가 나오면, <br/>
              심폐소생술을 멈추고 환자에게서 손을 뗀다.<br/><br/>
              심장충격(제세동)이 필요한 경우라면 <br/>
              "심장충격(제세동)이 필요합니다"라는 음성 지시와 함께 <br/>
              심장충격기(자동제세동기) 스스로 설정된 에너지로 충전을 시작한다. <br/><br/>
              가능한 가슴압박을 시행한다. <br/>
              심장충격기(자동제세동기)의 충전은 <br/>
              수 초 이상 소요되므로 가능한 가슴압박을 시행한다. <br/><br/>
              심장충격(제세동)이 필요 없는 경우에는 "환자의 상태를 확인하고, <br/>
              심폐소생술을 계속 하십시오"라는 음성 지시가 나오며, <br/>
              이 경우에는 즉시 심폐소생술을 시작한다.<br/><br/>
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

export default Chap3;