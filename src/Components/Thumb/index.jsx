import React from "react";
import { Link } from "react-router-dom";
import { Content, Image, Wrapper } from "./Thumb.styles";

export const Thumb = ({ image, clickable, movieId, title }) => {
  return (
    <Wrapper aria-label="thumb">
      {clickable ? (
        <Content aria-label="movie thumb">
          <Link to={`/movie/${movieId}`}>
            <Image src={image} alt="movie thumb" />
          </Link>
          <h3>{title}</h3>
        </Content>
      ) : (
        <>
          <Image src={image} alt="movie thumb" />
          <h3>{title}</h3>
        </>
      )}
    </Wrapper>
  );
};
