import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "../Components/Header";
import { HomeMovies } from "../Components/HomeMovies";
import { Movie } from "../Components/Movie";
import { Profile } from "../Components/Profile";
import { HomeSeries } from "../Components/HomeSeries";
import { GlobalStyle } from "../GlobalStyle";
import { Serie } from "../Components/Serie";

export const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomeMovies />}/>
          <Route path="/tv" element={<HomeSeries/>} />
          <Route path="/tv/:serieId" element={<Serie />} />
          <Route path="/movie/:movieId" element={<Movie />}/>
          <Route path="/actor/:personId" element={<Profile />}/>
        </Routes>
      </Router>
      <GlobalStyle />
    </div>
  );
};
