import styled from "styled-components";

export const Wrapper = styled.div`
max-width: 800px;
margin:0 auto;
padding:0 20px;

h1{
  color: #e5383b;

  @media screen and (max-width: 500px) {
    font-size: var(--fontBig)
  }
}
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))
`
