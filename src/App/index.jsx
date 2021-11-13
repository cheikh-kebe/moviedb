import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "../Components/Header";
import { Home } from "../Components/Home";
import { Movie } from "../Components/Movie";
import { Profile } from "../Components/Profile";
import { GlobalStyle } from "../GlobalStyle";

export const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/movie/:movieId" element={<Movie />}/>
          <Route path="/actor/:personId" element={<Profile />}/>
        </Routes>
      </Router>
      <GlobalStyle />
    </div>
  );
};
