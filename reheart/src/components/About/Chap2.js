import React from 'react';
import styled from "styled-components";
import aed from '../../assets/ch2.png';
import {Contents, MainContainer, MainWrapper, Point, MiniTitle} from "../../atoms/Atomic";

const Chap2 = ({scRef}) => {
  return (
    <MainContainer ref={scRef}>
      <MainWrapper gap={'100px'}>
        <TempContainer>
          <div>
            <MiniTitle >
            <Point size={'48'} weight={'600'}>2. 두 개의 패드 부착</Point> 
            </MiniTitle>
            <Blank num={'4vh'}/>
            <Contents>
              <div ><br/>
              패드 1 : 오른쪽 빗장뼈 아래<br/>
              패드 2 : 왼쪽 젖꼭지 아래의 중간겨드랑선<br/>
              패드 부착부위에 이물질이 있다면 제거하며, <br/>
              패드와 심장충격기(자동제세동기) 본체가 분리되어 있는 경우에는 연결한다.<br/><br/>
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

export default Chap2;