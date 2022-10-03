import React, { useRef, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../GlobalStyle";
//Components
import { Header } from "../Components/Header";
import { HomeMovies } from "../Components/HomeMovies";
import { Menu } from "../Components/Menu";
import { Burger } from "../Components/Burger";
import { lightTheme, darkTheme } from "../theme";
import { ThemeProvider } from "styled-components";
//Context
import UserProvider from "../context";
import { ThemeButton } from "../Components/ThemeButton";
//hooks
import { useOnClickOutside } from "../Hooks/useOutsideMenu";
import { ScrollButton } from "../Components/TopButton";
//lazy loading
const HomeSeries = lazy(() => import('../Components/HomeSeries').then(module => ({default: module.HomeSeries})));
const Movie = lazy(() => import('../Components/Movie').then(module => ({default: module.Movie})));
const Profile = lazy(() => import('../Components/Profile').then(module => ({default: module.Profile})));
const Serie = lazy(() => import('../Components/Serie').then(module => ({default: module.Serie})));
const Login = lazy(() => import('../Components/Login').then(module => ({default: module.Login})));

export const App = () => {

  const [theme, setTheme] = useState("light");
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Router>
        <UserProvider>
          <Header
            button={
              <ThemeButton
                text={theme === "light" ? "Dark" : "Light"}
                callback={themeToggler}
              />
            }
          />
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu
              open={open}
              setOpen={setOpen}
              button={
                <ThemeButton
                  text={theme === "light" ? "Dark" : "Light"}
                  callback={themeToggler}
                />
              }
            />
          </div>
          <Suspense fallback={<div><h1>Loading...</h1></div>}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" exact element={<HomeMovies />} />
              <Route path="/tv" element={<HomeSeries />} />
              <Route path="/tv/:serieId" element={<Serie />} />
              <Route path="/movie/:movieId" element={<Movie />} />
              <Route path="/actor/:personId" element={<Profile />} />
            </Routes>
          </Suspense>
          <GlobalStyle />
        </UserProvider>
      </Router>
      <ScrollButton />
    </ThemeProvider>
  );
};
