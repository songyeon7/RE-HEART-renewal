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
            <Point size={'48'} weight={'600'}>4. 심장충격(제세동) 시행</Point> 
            </MiniTitle>
            <Blank num={'4vh'}/>
            <Contents>
              <div ><br/>
              심장충격(제세동)이 필요한 경우에만 <br/>
              심장충격(제세동) 버튼이 깜박이기 시작한다. <br/><br/>
              깜박이는 버튼을 눌러 심장충격(제세동)을 시행한다. <br/><br/>
              심장충격(제세동) 버튼을 누르기 전에는 <br/>
              반드시 다른 사람이 환자에게서 떨어져 있는지 확인하여야 한다.<br/><br/>
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