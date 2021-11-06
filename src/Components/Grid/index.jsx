import React from 'react';
import { Content, Wrapper } from './Grid.styles';

export const Grid = ({headTitle, children}) => {

  return (
    <Wrapper>
      <h1>{headTitle}</h1>
      <Content>{children}</Content>
    </Wrapper>
  )
}
