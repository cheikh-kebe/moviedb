import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { useHomeFetch } from "../Hooks/useHomeFetch";
import { Grid } from "./Grid";

export const Home = () => {
  const { state, loading, error, setSearchterm } = useHomeFetch();

  if (error) return <div>Oulala, il y a un problème</div>;
  console.log(state);

  return (
    <div>
      <Grid headTitle={setSearchterm ? "Films recherchés" : "Les populaires"}>
        {state.results.map((movies) => (
          <div>
            <h1>{movies.title}</h1>
            <img
              src={
                movies.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movies.poster_path
                  : null
              }
              alt=""
            />
          </div>
        ))}
      </Grid>
    </div>
  );
};
