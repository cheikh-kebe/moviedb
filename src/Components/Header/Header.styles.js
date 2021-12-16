import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 20px;
  /* background: #ba181b;
  background: linear-gradient(174deg , #ba181b 12% #660708 65%); */
  background: var(--black);
  background: linear-gradient(174deg, var(--lightBlack) 4%, var(--red) 55%);
  height: 100px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px 110px;
  margin: 0 auto;
  a {
    text-decoration: none;
    color: var(--lightGrey);
  }

  span{
    font-size: var(--fontMedium);
    padding: 15px;

    @media screen and (max-width: 780px) {
      font-size: var(--fontSmall)
    }
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
      //margin: 10px;
      font-size: var(--fontSmall);
    }
  }
`;

export const Nav = styled.div`
  display: flex;
`

export const LogoImg = styled.img`
  //box-shadow: 5px 6px 11px #0b090a;
  width: 70px;
  //border-radius: 5px;
  //background: var(--lightGrey);

  @media screen and (max-width: 780px) {
    width: 30px;
  }
`;
