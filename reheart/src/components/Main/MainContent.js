import React from 'react';
import styled from "styled-components";
import {Contents, MainContainer, MainWrapper, Point, Title} from "../../atoms/Atomic";

const MainContent = ({scRef}) => {
  return (
    <MainContainer ref={scRef}>
      <MainWrapper gap={'100px'}>
        <TempContainer>
          <div>
            <Title >
            작년 상반기 <Point size={'35'} weight={'600'}>급성심정지환자</Point> 1만7668명 발생…생존률 7.3%
            </Title>
            <Blank num={'4vh'}/>
            <Contents>
              <div >
                오리는 귀여워요 우주 좋아<br/>
                오리는 귀여워요 우주 좋아<br/>
                오리는 귀여워요 우주 좋아<br/><br/>
              </div>
              <div >
              오리는 귀여워요 우주 좋아<br/>
              오리는 귀여워요 우주 좋아<br/><br/>
              </div>
              <div >
              오리는 귀여워요 우주 좋아<br/><br/>
              </div>
              <div >
              오리는 귀여워요 우주 좋아<br/>
              오리는 귀여워요 우주 좋아<br/><br/>
              </div>

              <IntroducePoint >오리는 귀여워요 우주 좋아 <Point size={'25'} weight={'600'}>오리는 귀여워요 우주 좋아 </Point>332</IntroducePoint><Blank num={'1.5vh'}/>
              <div >
              오리는 귀여워요 우주 좋아
              </div>
            </Contents>
          </div>
        </TempContainer>
      </MainWrapper>
    </MainContainer>
  );
};

const News = styled.img`
  width: 305px;
  height: 542px;
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
const IntroducePoint = styled.div`
  color: var(--text-title, #2C231E);
  font-family: 'Pretendard';
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media(max-width: 1080px) {
    font-size: 22px;
  }
`;
export default MainContent;