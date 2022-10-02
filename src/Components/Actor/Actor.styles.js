import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({theme}) => theme.actorName};
  background: ${({theme}) => theme.actorBg};
  border-radius: 20px;
  padding: 5px;
  text-align: center;


  h3{
    margin: 10px 0 0 0;
}

  p{
    margin: 5px 0;
    color: ${({theme}) => theme.text};
  }
`;

export const Content = styled.div``

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 20px;
  object-fit: cover;
`