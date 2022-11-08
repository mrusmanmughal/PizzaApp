import React from "react";
import "../Styles/Styles.css";
import pizza from "../Assets/b.jpg";
import { Link } from "react-router-dom";
import { listfake } from "../FakeData";
import MainPageCard from "./MainPageCard/MainPageCard";
import axios from "axios";
const List = () => {
  return (
    <>
      <div className="yellow vh-100">
        <div className="d-flex flex-wrap justify-content-center align-items-center p-5">
          {listfake.map((val) => {
            return (
              <MainPageCard
                name={val.Name}
                dec={val.describe}
                img={pizza}
                url={val.url}
              />
            );
          })}
        </div>
      </div>

      <div className="back_Btn">
        <i class="bi bi-arrow-left-circle-fill text-warning h1  px-5"></i>
      </div>
    </>
  );
};

export default List;
