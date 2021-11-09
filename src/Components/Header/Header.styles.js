import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 20px;
  background: #ba181b;
  border-radius: 10px;
  height: 100px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  box-shadow: 5px 6px 11px  #0b090a;
  width: 80px;
  border-radius: 20px;
  background: #f5f3f4;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;
