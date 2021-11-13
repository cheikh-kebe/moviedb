import React from "react";
import { Link } from "react-router-dom";
import { Image, Wrapper, Content } from "./Actor.styles";

export const Actor = ({ imageURL, character, name, clickable, personId }) => (
  <Wrapper>
    {clickable ? (
      <Content>
        <Link to={`/actor/${personId}`}>
          <Image src={imageURL} alt="actor thumb" />
        </Link>
          <h3>{name}</h3>
          <p>{character}</p>
      </Content>
    ) : (
      <>
        <Image src={imageURL} alt="actor thumb" />
        <h3>{name}</h3>
        <p>{character}</p>
      </>
    )}
  </Wrapper>
);
