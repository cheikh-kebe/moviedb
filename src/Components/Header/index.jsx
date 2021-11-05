import React from "react";
import Logo from "../../images/netflix.svg";
import { Link } from "react-router-dom";
import { Wrapper, Content, LogoImg } from "./Header.styles";


export const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={Logo} alt="netflix logo" />
        </Link>
        <h1>Cheikh Kebe | Développeur web</h1>
      </Content>
    </Wrapper>
  );
};
