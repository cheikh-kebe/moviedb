import React from "react";
import { useParams } from "react-router";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { useMovieFetch } from "../Hooks/useMovieFetch";
import { Actor } from "./Actor";
import { Grid } from "./Grid";
import NoImage from "../images/no_image.jpg";
import { Thumb } from "./Thumb";
import { Info } from "./Info";

export const Movie = () => {
  const { movieId } = useParams();

  const { state: movie, error, loading } = useMovieFetch(movieId);
  if (loading) return <div>Chargement</div>;
  if (error) return <div>Une erreur est survenue</div>;
  return (
    <div>
      <Info movie={movie} />
      <Grid headTitle="Casting">
        {movie.cast.map((actor) => (
          <Actor
            key={actor.id}
            name={actor.name}
            imageURL={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
            clickable
            personId={actor.id}
            character={actor.character}
          />
        ))}
      </Grid>
      <Grid headTitle="Film similaires">
        {movie.results.slice(0, 8).map((movies) => (
          <Thumb
            key={movies.id}
            clickable
            movieId={movies.id}
            image={
              movies.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movies.poster_path
                : NoImage
            }
            title={movies.title}
          />
        ))}
      </Grid>
    </div>
  );
};
