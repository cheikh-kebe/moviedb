import styled from "styled-components";

export const Wrapper = styled.button`
  background: ${({theme}) => theme.nextButton};
  display: block;
  width: 15%;
  height: 50px;
  border: 0;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  font-size: var(--fontBig);
  margin: 25px auto;
  color: var(--lightGrey);

  @media screen and (max-width: 780px){
    font-size: var(--fontMedium);
    width: 100px
  }
`;
