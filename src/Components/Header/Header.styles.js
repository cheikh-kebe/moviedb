import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 20px;
  background: #ba181b;
  border-radius: 10px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
  margin: 0 auto;
`;

export const LogoImg = styled.img`
  width: 130px;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;
