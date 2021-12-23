import React from 'react';
import { LogoImg } from '../Header/Header.styles';
import { Wrapper } from './GoBackButton.styles';

export const GoBackButton = ({svg, callback}) => {
  return (
    <Wrapper type="button" onClick={callback}>
      <LogoImg src={svg}/>
    </Wrapper>
  )
}
