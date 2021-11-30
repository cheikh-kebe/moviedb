import React from "react";
//components
import { Thumb } from "../Thumb";
// Config
import { IMAGE_BASE_URL, HEROBANNER_SIZE } from "../../config";
//image
import NoImage from "../../images/no_image.jpg";
//styles
import { Wrapper, Content, Text } from "./Info.styles";

export const Info = ({ movie }) => (
  <Wrapper backdrop={movie.backdrop_path}>
    <Content>
      <Thumb
        image={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${HEROBANNER_SIZE}${movie.poster_path}`
            : NoImage
        }
        clickable={false}
      />
      <Text>
        <h1>{movie.title}</h1>
        <h3>Synopsis</h3>
        <p>{movie.overview}</p>

        <div className="rating-directors">
          <div>
            <h3>SCORE</h3>
            <div className="score">{movie.vote_average}</div>
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
);