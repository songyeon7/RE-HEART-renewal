import React from 'react';
import styled from "styled-components";
import aed from '../../assets/AED.svg';
import {Contents, MainContainer, MainWrapper, Point, MiniTitle, Title} from "../../atoms/Atomic";

const WhyWe = ({scRef}) => {
  return (
    <MainContainer ref={scRef}>
      <MainWrapper gap={'100px'}>
        <TempContainer>
          <Aed src={aed}/>
          <div>
            <Title >
            <Point size={'48'} weight={'600'}>RE:HEART </Point> 기획 의도
            </Title>
            <Blank num={'4vh'}/>
            <Contents>
              <div >
              응급상황이 올때를 대비하여 <br/>
              우리는 <Point color={'#FF9B9B'}>응급처치 하는법</Point>을 배웁니다.<br/><br/>
              심정지가 왔을때 심페소생술을 하면서 <br/>
              주변사람은 지목하며,
              “119에게 전화해주세요” <br/>
              <Point color={'#FF9B9B'}>“자동제세동기를 가져다주세요”</Point>라고 외치라고 배웁니다.<br/><br/>
              하지만 실제로는 
              자동제세동기의 위치를 잘 모르기 때문에 <br/>
              급한 상황에서 자동제세동기를 찾기 어렵습니다.<br/><br/>
              그러한 점에서 <Point color={'#FF9B9B'}>빠르게</Point> 자동제세동기(AED)의
              <Point color={'#FF9B9B'}>위치를</Point> <br/>
              <Point color={'#FF9B9B'}>알려주는</Point> 웹페이지를 기획하게 되었습니다.
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