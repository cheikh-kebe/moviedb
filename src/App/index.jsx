import React, { useState } from "react";
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
import { lightTheme, darkTheme } from "../theme";
import { ThemeProvider } from "styled-components";
//Context
import UserProvider from "../context";
import { ThemeButton } from "../Components/ThemeButton";

export const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Router>
        <UserProvider>
          <Header button={<ThemeButton text={theme === "light" ? 'Dark' : 'Light'} callback={themeToggler}/>}/>
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
    </ThemeProvider>
  );
};
