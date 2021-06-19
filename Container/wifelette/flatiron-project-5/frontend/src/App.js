/// <reference path="./types/app.d.ts" />

import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Footer from "./components/Footer";
import Content from "./components/Content";
import ScrollToTop from "./components/ScrollToTop";

export const MATERIALS_URL = "http://localhost:3000/materials";
export const DAYS_URL = "http://localhost:3000/days";
export const ACTIVITIES_URL = "http://localhost:3000/activities";

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Nav />
        <div id="content-wrapper" className="d-flex flex-column">
          <Content />
          <Footer />
        </div>
      </div>
      <ScrollToTop />
    </Router>
  );
}

export default App;
