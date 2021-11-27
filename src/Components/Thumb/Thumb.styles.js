import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
  color: #ba181b;
  p {
    color: #0b090a;
  }
  @media screen and (max-width:1000px){
    width: 220px;
  }
  @media screen and (max-width:800px){
    width: 270px;
  }
  @media screen and (max-width:400px){
    width: 150px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 780px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 5px 6px 12px #0b090a;

  :hover{
    opacity:0.8
  }
  @media screen and (max-width:1000px){
    width: 220px;
  }
  @media screen and (max-width:800px){
    width: 270px;
  }
  @media screen and (max-width:400px){
    width: 150px;
  }
`;
