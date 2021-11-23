import React from "react";
import { Link } from "react-router-dom";
import { Content, Image, Wrapper } from "./Thumb.styles";

export const ThumbSeries = ({ image, clickable, serieId, title }) => {
  return (
    <Wrapper>
      {clickable ? (
        <Content>
          <Link to={`/tv/${serieId}`}>
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
