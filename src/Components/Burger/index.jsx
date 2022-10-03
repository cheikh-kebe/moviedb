import React from 'react';
import { StyledBurger } from './Burger.styles';

export const Burger = ({open, setOpen}) => {
  return (
    <StyledBurger aria-label='burger' open={open} onClick={()=> setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
    </StyledBurger>
  )
}
