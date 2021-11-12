import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content, Text } from "./HeroBanner.styles";

export const Herobanner = ({ image, title, text }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);
