import React from 'react';
import { Wrapper } from './ThemeButton.style';

export const ThemeButton = ({callback, text}) => {
  return (
    <Wrapper onClick={callback}>
      {text}
    </Wrapper>
  )
}
