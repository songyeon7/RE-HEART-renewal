import React from 'react';
import styled from "styled-components";
import aed from '../../assets/aed_img2.jpg';
import {Contents, MainContainer, MainWrapper, Point, MiniTitle} from "../../atoms/Atomic";

const MainAED = ({scRef}) => {
  return (
    <MainContainer ref={scRef}>
      <MainWrapper gap={'100px'}>
        <TempContainer>
          <div>
            <MiniTitle >
            <Point size={'36'} weight={'600'}>AED</Point>가 무엇인가요?
            </MiniTitle>
            <Blank num={'4vh'}/>
            <Contents>
              <div ><br/>
              <Point color={''}>자동심장충격기(AED)</Point>란<br/>
              심실세동 상태의 환자들에게<br/>
              극히 짧은 순간에 강한 전류를 심장에 통과시켜서<br/>
              대부분의 심근에 활동전위를 유발하여 <br/>
              심실세동이 유지될 수 없도록 함으로써 <br/>
              심실세동을 종료시키고 <br/>
              심장이 다시 <Point color={''}>정상적인 전기활동</Point>을 할 수 있도록<br/>
              유도하는 장치입니다.<br/><br/>
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

export default MainAED;