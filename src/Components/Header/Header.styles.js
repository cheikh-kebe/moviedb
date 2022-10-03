import styled from "styled-components";

export const Wrapper = styled.div`
  //padding: 0 20px;
  background: linear-gradient(
    17deg,
    ${({ theme }) => theme.header2} 4%,
    ${({ theme }) => theme.header1} 80%
  );
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 0 auto;
  a {
    text-decoration: none;
    color: var(--lightGrey);
  }
  h1{
    &:hover{
      color: ${({theme}) => theme.text};
    }
  }

  @media screen and (max-width: 1024px) {
    h1 {
      margin: 10px;
      padding-top: 10px;
      font-size: var(--fontBig);
    }
  }
  @media screen and (max-width: 768px) {
    padding: 20px;
    h1 {
      font-size: var(--fontMedium);
    }
    h2 {
      font-size: var(--fontSmall);
    }
  }
  @media screen and (max-width: 480px) {
    padding: 20px;
    h1{
      font-size: var(--fontMedium)
    }
    h3 {
      font-size: 10px;
    }
  }
  .loggedin {
    color: var(--lightGrey);
  }
`;


export const LogoImg = styled.img`
  width: 50px;
  margin-left: 15px;

  @media screen and (max-width: 780px) {
    width: 40px;
  }
  @media screen and (max-width: 480px) {
    margin:20px;
    
  }
`;
