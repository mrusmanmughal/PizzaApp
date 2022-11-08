import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import List from "./Components/List";
import MainPage from "./Components/MainPage";
import ProdcutDetails from "./Components/ProdcutDetails";
import Navbar from "./Components/Navbar/Navbar";
import Routing from "./Routing";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./Components/Footer/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    <Navbar />

    <Routes>
      <Route path="/home" element={<MainPage />} />
      <Route path="/products" element={<List />} />
      <Route path="/product-details" element={<ProdcutDetails />} />
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>
);

reportWebVitals();
