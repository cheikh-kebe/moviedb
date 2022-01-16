import styled from "styled-components";

export const Wrapper = styled.div`
  //padding: 0 20px;
  background: linear-gradient(
    17deg,
    ${({ theme }) => theme.header2} 4%,
    ${({ theme }) => theme.header1} 80%
  );
  height: 100px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 110px;
  margin: 0 auto;
  a {
    text-decoration: none;
    color: var(--lightGrey);
  }

  span {
    font-size: var(--fontMedium);
    padding: 15px;

    @media screen and (max-width: 780px) {
      font-size: var(--fontSmall);
    }
    @media screen and (max-width: 400px) {
      font-size: 10px;
      padding: 8px;
    }
  }

  @media screen and (max-width: 900px) {
    padding-top: 10px;
    h1 {
      margin: 10px;
      padding-top: 10px;
      font-size: var(--fontMedium);
    }
  }
  @media screen and (max-width: 780px) {
    padding: 10px;
    h1 {
      margin: 1px;
      font-size: var(--fontSmall);
    }
    h2 {
      //margin: 10px;
      font-size: var(--fontSmall);
    }
  }
  @media screen and (max-width: 400px) {
    h3 {
      font-size: 10px;
    }
  }
  .loggedin {
    color: var(--lightGrey);
  }
`;


export const LogoImg = styled.img`
  //box-shadow: 5px 6px 11px #0b090a;
  width: 70px;
  //border-radius: 5px;
  //background: var(--lightGrey);

  @media screen and (max-width: 780px) {
    width: 30px;
  }
  @media screen and (max-width: 400px) {
    width: 28px;
  }
`;
