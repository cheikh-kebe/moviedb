import styled from "styled-components";

export const Wrapper = styled.div`
 color: var(--white);
 background: var(--darkGrey);
 border-radius: 20px;
 padding: 5px;
 text-align: center;

 
 h3{
   margin: 10px 0 0 0;
   
 }

 p{
   margin: 5px 0;
   color: var(--black);
 }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 20px;
  object-fit: cover;
`