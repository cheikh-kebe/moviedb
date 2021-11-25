import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 20px;
  background: #ba181b;
  height: 100px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 110px;
  margin: 0 auto;
  a{
    text-decoration: none;
  }

  @media screen and (max-width: 900px) {
    padding: 8px 10px;
    h1 {
      margin: 10px;
      font-size: var(--fontSmall);
    }
  }
  @media screen and (max-width: 780px) {
    padding: 8px 10px;
    h1 {
      margin: 10px;
      font-size: var(--fontSmall);
    }
    h2 {
      margin: 10px;
      font-size: var(--fontMedium);
    }
  }
`;

export const LogoImg = styled.img`
  box-shadow: 5px 6px 11px #0b090a;
  width: 80px;
  border-radius: 20px;
  background: #f5f3f4;

  @media screen and (max-width: 780px) {
    width: 60px;
  }
`;
