import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyle";
//Components
import { Header } from "../Components/Header";
import { HomeMovies } from "../Components/HomeMovies";
import { Movie } from "../Components/Movie";
import { Profile } from "../Components/Profile";
import { HomeSeries } from "../Components/HomeSeries";
import { Serie } from "../Components/Serie";
import { Login } from "../Components/Login";
//Context
import UserProvider from "../context";

export const App = () => {
  return (
    <div>
      <Router>
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" exact element={<HomeMovies />} />
            <Route path="/tv" element={<HomeSeries />} />
            <Route path="/tv/:serieId" element={<Serie />} />
            <Route path="/movie/:movieId" element={<Movie />} />
            <Route path="/actor/:personId" element={<Profile />} />
          </Routes>
          <GlobalStyle />
        </UserProvider>
      </Router>
    </div>
  );
};
