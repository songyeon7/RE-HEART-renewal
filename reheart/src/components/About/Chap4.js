import React from 'react';
import styled from "styled-components";
import aed from '../../assets/ch4.png';
import {Contents, MainContainer, MainWrapper, Point, MiniTitle} from "../../atoms/Atomic";

const Chap4 = ({scRef}) => {
  return (
    <MainContainer ref={scRef}>
      <MainWrapper gap={'100px'}>
        <TempContainer>
          <div>
            <MiniTitle >
            <Point size={'48'} weight={'600'}>1. 전원 켜기</Point> 
            </MiniTitle>
            <Blank num={'4vh'}/>
            <Contents>
              <div ><br/>
              먼저 심장충격기(자동제세동기)를 <br/>
              심폐소생술에 방해가 되지않는 위치에 놓은 뒤에 <br/>
              전원 버튼을 누른다.<br/><br/>
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

export default Chap4;