import React from 'react';
import { HEROBANNER_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { Button } from "./Button";
import { Grid } from "./Grid";
import { Herobanner } from "./HeroBanner";
import { Searchbar } from "./Searchbar";
import NoImage from '../images/no_image.jpg'
import { useHomeSeriesFetch } from '../Hooks/useHomeSeriesFetch';
import { ThumbSeries } from './ThumbSeries';

export const HomeSeries = () => {
  const { state, loading, error, setSearchTerm, setIsLoadingMore, searchTerm } =
    useHomeSeriesFetch();

  if (error) return <div>Oulala, il y a un problème</div>;
  console.log(state);
  return (
    <>
     {state.results[0] ? (
        
        <Herobanner
          image={`${IMAGE_BASE_URL}${HEROBANNER_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_name}
        />
      ) : null}
      <Searchbar setSearchTerm={setSearchTerm} />
      <Grid headTitle={searchTerm ? "Series recherchées" : "Les populaires"}>
        {state.results.map((serie) => (
          <ThumbSeries
            key={serie.id}
            clickable
            serieId={serie.id}
            image={
              serie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + serie.poster_path
                : NoImage
            }
            title={serie.name}
          />
        ))}
        {loading && <h1>Chargement</h1>}
      </Grid>
      {state.page < state.total_pages && !loading && (
        <Button text="Suivant" callback={() => setIsLoadingMore(true)} />
      )} 
    </>
  )
}
