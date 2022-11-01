import React from "react";
import "./Styles/Styles.css";
import { Link } from "react-router-dom";
import "./App.css";
import videoo from "./Assets/fit.mp4";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import List from "./Components/List";
import MainPage from "./Components/MainPage";
import ProdcutDetails from "./Components/ProdcutDetails";
import Navbar from "./Components/Navbar/Navbar";
const App = () => {
  return (
    <>
      <div className="app">
        <div className="overlay"></div>
        <video src={videoo} autoPlay loop muted />
        <div className="vidoe_content">
          <h1>
            <Link to="/home" className="text-decoration-none Link">
              {" "}
              Order Now !
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
};

export default App;
