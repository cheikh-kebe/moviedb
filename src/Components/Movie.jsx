import React from "react";
import { useParams } from "react-router";
import { HEROBANNER_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { useMovieFetch } from "../Hooks/useMovieFetch";
import { Actor } from "./Actor";
import { Grid } from "./Grid";
import { Herobanner } from "./HeroBanner";
import { Thumb } from "./Thumb";

export const Movie = () => {
  const { movieId } = useParams();

  const { state: movie, error, loading } = useMovieFetch(movieId);
  console.log(movie);
  if (loading) return <div>Chargement</div>;
  if (error) return <div>Une erreur est survenue</div>;
  return (
    <div>
      {movie.backdrop_path ? (
        <Herobanner
          image={`${IMAGE_BASE_URL}${HEROBANNER_SIZE}${movie.backdrop_path}`}
          title={movie.original_title}
          text={movie.overview}
          homepage={movie.homepage}
        />
      ) : null}
      <Grid headTitle="Casting">
        {movie.cast.map((actor) => (
          <Actor
            name={actor.name}
            imageURL={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : null
            }
            character={actor.character}
          />
        ))}
      </Grid>
      <Grid headTitle="Film similaires"></Grid>
    </div>
  );
};