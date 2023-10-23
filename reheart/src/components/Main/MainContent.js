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
            작년 상반기 <Point size={'36'} weight={'600'}>급성심정지환자</Point> 1만7668명 발생…생존률 7.3%
            </Title>
            <Blank num={'4vh'}/>
            <Contents>
              <div >
                <br/>
              급성심정지는 심장 활동이 급격히 저하되거나 멈춘 상태로<br/>
              질병청에 따르면, 지난 상반기 발생한 급성심정지 환자는<br/>
              총 <Point color={'#FF9B9B'}>1만 7668명</Point> 이라고 합니다.<br/><br/>
              </div>
              <div >
              이중 생존 상태로 퇴원한 환자(생존율)은 <Point color={'#FF9B9B'}>7.3%</Point>이며<br/>
              일상생활이 가능할 정도록<br/> 
              뇌 기능을 회복해 퇴원한 환자는 <Point color={'#FF9B9B'}>4.6%</Point>라고 합니다.<br/><br/>
              </div>
              <div >
              일반인 심폐소생술이 시행된 경우에는<br/> 
              그렇지 않은 경우보다 <br/> 
              생존율 및 뇌 기능 회복률이 높아지기 때문에 <br/>
              환자 목격 시 <Point size={'24'} weight={'600'} color={'#FF9B9B'}>심폐소생술을 시행하는 것</Point>이 중요합니다.<br/><br/><Blank num={'1.5vh'}/>
              </div>
            </Contents>
          </div>
        </TempContainer>
      </MainWrapper>
    </MainContainer>
  );
};

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

export default MainContent;
