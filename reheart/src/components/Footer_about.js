import React from 'react';
import styled from "styled-components";
import './Footer.css';

const FooterAbout = () => {
  return (
    <Container>
      <Wrapper>
        <Item>
          <Texts>
            <Contents>
              이미지 출처 : 질병관리청 손상예방관리과 (043-719-7418)
            </Contents>
            <Contents>
              ©️songyeon7  |  Develop : dnwntjsg
            </Contents>
          </Texts>
        </Item>
      </Wrapper>
    </Container>
  );
};

const Contents = styled.div`
  color: #3f3f3f;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: max-content;
  @media(max-width: 1600px){
    font-size: 14px;
  }
  @media(max-width: 1430px){
    font-size: 12px;
  }
  @media(max-width: 740px) {
    font-size: 12px;
  }
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: max-content;
  height: max-content;
`;
const Item = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 2vw;
  width: max-content;
  height: max-content;
  @media(max-width: 740px) {
    gap: 5vw;
  }
`;
const Wrapper = styled.div`
  display: flex;
  width: max-content;
  gap: 5vw;
  @media(max-width: 1023px) {
    gap: 3vw;
  }
  @media(max-width: 740px) {
    flex-direction: column;
    margin: 30px 0;
    gap: 10vh;
    align-items: baseline;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff5f5;
  @media(max-width: 1023px) {
    height: 200px;
  }
  @media(max-width: 740px) {
    height: max-content;
  }
`;
export default FooterAbout;