import React from 'react';
import styled from "styled-components";
import {Contents, MainContainer, MainWrapper, Point, MiniTitle} from "../../atoms/Atomic";

const MainMap = ({scRef}) => {
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
              <div >
              여러분 주위에 있는 AED 기기를 찾아보아요<br/>
              검색을 통해서 찾아볼 수도 있어요<br/><br/>
              </div>

              {/* <IntroducePoint >오리는 귀여워요 우주 좋아 <Point size={'25'} weight={'600'}>오리는 귀여워요 우주 좋아 </Point>332</IntroducePoint><Blank num={'1.5vh'}/> */}
              <div >
              <button >찾으러 가보기</button>
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
export default MainMap;