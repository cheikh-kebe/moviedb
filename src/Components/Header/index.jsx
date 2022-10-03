import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Wrapper, Content } from "./Header.styles";
//context
import { Context } from "../../context";
import { GoBackButton } from "../GoBackButton";
import ArrowLeft from "../../images/arrow.svg";

export const Header = () => {
  const [user] = useContext(Context);
  const navigate = useNavigate();

  return (
    <header aria-label="header">
      <Wrapper>
        <Content>
          <GoBackButton callback={() => navigate(-1)} svg={ArrowLeft} />
          <Link to={'/'}>
            <h1>React MovieDB</h1>
          </Link>
          {user &&
            <h3 className="loggedin">Bienvenue: {user.username}</h3>
          }
        </Content>
      </Wrapper>

    </header>
  );
};
