import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GameVisual from "./Views/GameVisual/GameVisual";
import Menu from "./Views/menu/Menu";
import Rules from "./Views/rules/Rules";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={<Menu />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/game/:type" element={<GameVisual />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);
