import React from "react";
import { HEROBANNER_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { useHomeMovieFetch } from "../Hooks/useHomeMovieFetch";
import { Button } from "./Button";
import { Grid } from "./Grid";
import { Herobanner } from "./HeroBanner";
import { Searchbar } from "./Searchbar";
import { Thumb } from "./Thumb";
import NoImage from '../images/no_image.jpg'

export const HomeMovies = () => {
  const { state, loading, error, setSearchTerm, setIsLoadingMore, searchTerm } =
    useHomeMovieFetch();

  if (error) return <div>Oulala, il y a un problème</div>;  
  return (
    <section aria-label="home movies">
      {state.results[0] ? (
        
        <Herobanner
          image={`${IMAGE_BASE_URL}${HEROBANNER_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].title}
          // text={state.results[0].overview}
        />
      ) : null}
      <Searchbar setSearchTerm={setSearchTerm} />
      <Grid headTitle={searchTerm ? "Films recherchés" : "Les populaires"}>
        {state.results.map((movies) => (
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
        {loading && <h1>Chargement</h1>}
      </Grid>
      {state.page < state.total_pages && !loading && (
        <Button text="Suivant" callback={() => setIsLoadingMore(true)} />
      )}
    </section>
  );
};
