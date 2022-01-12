import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper, Content } from "./Header.styles";
//context
import { Context } from "../../context";
import { GoBackButton } from "../GoBackButton";
import ArrowLeft from "../../images/arrow.svg";

export const Header = ({ button }) => {
  const [user] = useContext(Context);
  const navigate = useNavigate();
  console.log(user);

  return (
    <Wrapper>
      <Content>
        <GoBackButton callback={() => navigate(-1)} svg={ArrowLeft} />
        <h1>React Movie Database</h1>
        {user &&
          <h3 className="loggedin">Bienvenue: {user.username}</h3>
        }
      </Content>
    </Wrapper>
  );
};
