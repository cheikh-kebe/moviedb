import React from "react";
import { Image, Wrapper } from "./Actor.styles";

export const Actor = ({ imageURL, character, name }) => (
  <Wrapper>
    <Image src={imageURL} />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);
