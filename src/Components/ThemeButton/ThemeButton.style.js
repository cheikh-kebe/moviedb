import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${({theme}) => theme.themeSwitch};
  transition: all 0.5s linear;
  color: ${({theme}) => theme.body};
  font-size: var(--fontSmall);
  width: 80px;
  height:35px;
  border: 0;
  border-radius: 10px;
  outline: none;
  font-size:14px;

  
  @media screen and (max-width: 480px) {
    margin: 5px;
    height: 28px;
    //width: 40px;
    padding: 10px;
    font-size: 14px;
  }
`;
