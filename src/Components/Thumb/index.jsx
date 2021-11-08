import React from "react";
import { Link } from "react-router-dom";
import { Content, Image, Wrapper } from "./Thumb.styles";

export const Thumb = ({ image, clickable, movieId, title, description }) => {
  return (
    <Wrapper>
      {clickable ? (
        <Content>
          <Link to={`/${movieId}`}>
            <Image src={image} alt="movie thumb" />
          </Link>
          <h3>{title}</h3>
          <p>{description}</p>
        </Content>
      ) : (
        <>
          <Image src={image} alt="movie thumb" />
          <h3>{title}</h3>
          <p>{description}</p>
        </>
      )}
    </Wrapper>
  );
};
