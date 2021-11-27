import React from "react";
import Logo from "../../images/netflix.svg";
import Tmdb from '../../images/tmdb_logo.svg'
import { Link } from "react-router-dom";
import { Wrapper, Content, LogoImg } from "./Header.styles";


export const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={Logo} alt="netflix logo" />
        </Link>
        <Link to="/tv">
          <h1>Séries TV</h1>
        </Link>
        <h2>Cheikh Kebe | Développeur web</h2>
      </Content>
    </Wrapper>
  );
};
