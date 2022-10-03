import React from 'react';
import { LogoImg } from '../Header/Header.styles';
import { Wrapper } from './GoBackButton.styles';

export const GoBackButton = ({svg, callback}) => {
  return (
    <Wrapper aria-label='page précédente' type="button" onClick={callback}>
      <LogoImg aria-label="svg" src={svg} alt="arrow svg"/>
    </Wrapper>
  )
}
