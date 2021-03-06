import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 20px;
  //background: var(--lightBlack);
  animation: animateHeroImage 2s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  `;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  margin: 0 auto;
  border-radius: 30px;
  color: #f5f3f4;
  height: 50px;
  background: ${({theme}) => theme.searchBarbg};

  /* img {
    position: absolute;
    left: 15px;
    top: 10px;
    width: 30px;
    background: #b1a7a6
  } */

  input {
    font-size: 30px;
    position: absolute;
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    background: transparent;
    color: #0b090a;
    //height: 40px;

    :focus {
      outline: none;
    }
  }
`;
