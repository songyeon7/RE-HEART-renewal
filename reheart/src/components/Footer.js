import React from 'react';
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Item>
          <Texts>
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
  color: #DBDBDB;
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
    font-size: 16px;
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
  background: #3F3F3F;
  @media(max-width: 1023px) {
    height: 200px;
  }
  @media(max-width: 740px) {
    height: max-content;
  }
`;
export default Footer;