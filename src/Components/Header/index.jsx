import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/film.svg";
import TvLogo from "../../images/tv.svg";
import Tmdb from "../../images/tmdb_logo.svg";
import { Wrapper, Content, LogoImg, Nav } from "./Header.styles";
//context
import { Context } from "../../context";
import { GoBackButton } from "../GoBackButton";
import ArrowLeft from '../../images/arrow.svg'
export const Header = ({button}) => {
  const [user] = useContext(Context);
  const navigate = useNavigate()
  console.log(user);

  return (
    <Wrapper>
      <Content>
        <GoBackButton 
          callback={()=> navigate(-1)} 
          svg={ArrowLeft} />
        <Link to="/">
          <Nav>
            <LogoImg src={Logo} alt="movie logo" />
            <span>Films</span>
          </Nav>
        </Link>
        <Link to="/tv">
          <Nav>
            <LogoImg src={TvLogo} alt="Tv logo" />
            <span>Séries</span>
          </Nav>
        </Link>
        <Nav>
          <a href="https://www.themoviedb.org/documentation/api">
            <LogoImg src={Tmdb} alt="The Movie data base logo" />
            <span>Api</span>
          </a>
        </Nav>
        {user ? (
          <h3 className="loggedin">Bienvenue: {user.username}</h3>
        ) : (
          <Link to="/login">
            <h3 className="login">Se Connecter</h3>
          </Link>
        )}
        {button}
      </Content>
    </Wrapper>
  );
};
