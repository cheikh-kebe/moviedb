import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${({theme}) => theme.themeSwitch};
  color: ${({theme}) => theme.body};
  font-size: var(--fontSmall);
  width: 80px;
  height:35px;
  border: 0;
  border-radius: 10px;
  outline: none;
`;