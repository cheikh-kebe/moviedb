import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from "../Components/Header";
import { Home } from "../Components/Home";
import { GlobalStyle } from "../GlobalStyle";

export const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>}/>
        </Routes>
      </Router>
      <GlobalStyle />
    </div>
  );
};
