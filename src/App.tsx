import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Slider } from "./components/Slider/Slider";

import "./app.scss";

export const App = () => {
  return (
    <div className="app">
      <div className="app__content">
        <Navbar />
        <Slider />
      </div>
    </div>
  );
};
