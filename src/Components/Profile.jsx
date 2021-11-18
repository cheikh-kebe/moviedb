import React from "react";
import { useParams } from "react-router";
import { usePersonFetch } from "../Hooks/usePersonFetch";
import { ActorCard } from "../Components/ActorCard";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import NoImage from "../images/no_image.jpg";
import { Grid } from "../Components/Grid";
import { Thumb } from "./Thumb";
export const Profile = () => {
  const { personId } = useParams();

  const { state: people, error, loading } = usePersonFetch(personId);

  if (loading) return <div>Chargement</div>;
  if (error) return <div>Une erreur est survenue</div>;
  console.log(people);
  return (
    <div>
      {people.profile_path ? (
        <ActorCard
          realName={people.name}
          imgURL={
            people.profile_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${people.profile_path}`
              : NoImage
          }
          birth={people.birthday}
          bio={people.biography ? people.biography : "non disponible"}
        />
      ) : null}
      <Grid headTitle={"Autres Films"}>
        {people.cast.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            movieId={movie.id}
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            title={movie.title}
          />
        ))}
      </Grid>
    </div>
  );
};
