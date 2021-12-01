import React from "react";
import { useParams } from "react-router";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { Grid } from "./Grid";
import NoImage from "../images/no_image.jpg";
import { useSerieFetch } from "../Hooks/useSerieFetch";
import { Info } from "./Info";
import { Thumb } from "./Thumb";

export const Serie = () => {
  const { serieId } = useParams();

  const { state: serie, error, loading } = useSerieFetch(serieId);
  if (loading) return <div>Chargement</div>;
  if (error) return <div>Une erreur est survenue</div>;
  return (
    <div>
      <Info movie={serie} />
      {/* <Grid headTitle="Casting">
        {serie.results.slice(0, 8).map((movies) => (
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
      </Grid> */}
      <Grid headTitle="Saisons disponibles">
        {serie.seasons.map((season) => (
          <Thumb
            movieId={season.id}
            image={
              season.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${season.poster_path}`
                : NoImage
            }
            title={season.name}
            clickable={false}
          />
        ))}
      </Grid>
    </div>
  );
};
