import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 20px;
  margin: auto;
`;

export const Content = styled.div`
  aspect-ratio: 6/3;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: var(--maxWidth);
  margin: 0 20px auto;

  @media screen and (max-width: 900px) {
    margin: 10px auto;
    width: 270px;
    display: block;
  }
`;
export const Text = styled.div`
  margin: 100px;
  width: 800px;

  h1 {
    color: var(--shineRed);
  }

  h3 {
    color: var(--red);
    small {
      color: var(--black);
    }
  }
  p {
    color: var(--black);
    font-size: 1.2rem;
  }
  @media screen and (max-width: 900px) {
    width: 270px;
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
    width: 270px;
    margin: 20px auto;
  }
  @media screen and (max-width: 400px) {
    width: 200px;
    margin: 20px auto;
  }
`;
