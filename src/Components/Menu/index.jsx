import React, { useContext } from "react";
import Logo from "../../images/film.svg";
import TvLogo from "../../images/tv.svg";
import Tmdb from "../../images/tmdb_logo.svg";
import { StyledMenu } from "./Menu.styles";
import { LogoImg } from "../Header/Header.styles";
import { Link } from "react-router-dom";
import { Context } from "../../context";

export const Menu = ({ open, button }) => {

  const [user] = useContext(Context);

  return (
    <StyledMenu aria-label="menu" open={open}>
      <div>{button}</div>
      
      <Link to="/">
        <LogoImg src={Logo} alt="movie logo" />
        <span>Films</span>
      </Link>

      <Link to="/tv">
        <LogoImg src={TvLogo} alt="Tv logo" />
        <span>Séries</span>
      </Link>

      <a href="https://www.themoviedb.org/documentation/api">
        <LogoImg src={Tmdb} alt="The Movie data base logo" />
        <span> Api</span>
      </a>

      {user ? (
        <h3 className="loggedin">Bienvenue: {user.username}</h3>
      ) : (
        <Link to="/login">
          <h3 className="login">Se Connecter</h3>
        </Link>
      )}
    </StyledMenu>
  );
};
