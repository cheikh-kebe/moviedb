import React, { useContext, useState } from "react";
//components
import { Thumb } from "../Thumb";
// Config
import { IMAGE_BASE_URL, HEROBANNER_SIZE } from "../../config";
//image
import NoImage from "../../images/no_image.jpg";
//styles
import { Wrapper, Content, Text } from "./Info.styles";
import { Rating } from "../Rating";
//context
import { Context } from "../../context";
//Api
import API from "../../API";

export const Info = ({ movie }) => {
  const [user] = useContext(Context);
  const [state, setstate] = useState(false)
  const [error, seterror] = useState(false)

  const handleRating = async (value) => {
    seterror(false)
    try {
      const rate = await API.rateMovie(user.sessionId, movie.id, value);
      setstate(rate.data.success)
      console.log(rate.data.success);
      
    } catch (error) {
      seterror(true)
    }
  };

  return (
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
            <div className="scores">
              <h3>SCORE</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
          </div>
          {user && (
            <div>
              <h2>Votre note</h2>
              <Rating callback={handleRating} />
            </div>
          )}
          {state && (
            <div><p>vote pris en compte</p></div>
          )}
          {error && (
            <div><p>Il y a un problème</p></div>
          )}

        </Text>
      </Content>
    </Wrapper>
  );
};
