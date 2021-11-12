import styled from "styled-components";

export const Wrapper = styled.div`
max-width: 1280px;
margin:0 auto;
padding:0 20px;

h1{
  color: #e5383b;

  @media screen and (max-width: 780px) {
    font-size: var(--fontBig)
  }
}
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 8rem;
  @media screen and (max-width: 780px) {
    grid-gap: 4rem;
  }
`
