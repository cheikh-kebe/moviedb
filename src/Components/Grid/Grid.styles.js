import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    color: ${({ theme }) => theme.gridTitle};

    @media screen and (max-width: 780px) {
      font-size: var(--fontBig);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
  @media screen and (max-width: 780px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-gap: 4rem;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 2rem;
  }
`;
