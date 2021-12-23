import styled from "styled-components";

export const Wrapper = styled.div`
  margin: auto;
  `;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 140px auto;
  border-radius: 20px;

  @media screen and (max-width: 900px) {
    margin: 10px auto;
    width: 450px;
    display: block;
  }
  @media screen and (max-width: 400px) {
    margin: 10px auto;
    width: 300px;
    display: block;
  }
`;
export const Text = styled.div`
  padding-top: 50px;
  margin: 100px;
  width: 800px;

  h1 {
    color: var(--shineRed);
  }

  h3 {
    color: var(--red);
    small {
      color: ${({theme}) => theme.text};
    }
  }
  p {
    color: ${({theme}) => theme.text};
    font-size: 1rem;
    text-align: justify;
  }
  @media screen and (max-width: 900px) {
    width: 400px;
    margin: 20px auto;
    p {
      font-size: 100%;
    }
  }
  @media screen and (max-width: 450px) {
    width: 280px;
    margin: 20px auto;
    p {
      font-size: 100%;
    }
  }
`;

export const Image = styled.img`
  
  width: 290px;
  max-width: 780px;
  margin: 0 20px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 5px 6px 12px #0b090a;

  @media screen and (max-width: 900px) {
    width: 260px;
    margin: 20px;
  }
  @media screen and (max-width: 500px) {
    width: 200px;
    margin: 20px;
  }
`;
