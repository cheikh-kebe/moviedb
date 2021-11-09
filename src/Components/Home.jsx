import React from "react";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { useHomeFetch } from "../Hooks/useHomeFetch";
import { Button } from "./Button";
import { Grid } from "./Grid";
import { Searchbar } from "./Searchbar";
import { Thumb } from "./Thumb";

export const Home = () => {
  const { state, loading, error, setSearchTerm, setIsLoadingMore, searchTerm } = useHomeFetch();

  if (error) return <div>Oulala, il y a un problème</div>;
  console.log(state);

  return (
    <div>
      <Searchbar setSearchTerm={setSearchTerm}/>
      <Grid headTitle={searchTerm ? "Films recherchés" : "Les populaires"}>
        {state.results.map((movies) => (
          <Thumb
            key={movies.id}
            clickable
            movieId={movies.id}
            image={
              movies.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movies.poster_path
                : null
            }
            title={movies.title}
            description={movies.overview}
          />
        ))}
      {loading && <h1>Chargement</h1>}
      </Grid>
      {state.page < state.total_pages && !loading && (
        <Button text="Suivant" callback={() => setIsLoadingMore(true)}/>
      )}
    </div>
  );
};
