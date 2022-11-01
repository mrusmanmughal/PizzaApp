import React from "react";
import "../Styles/Styles.css";
import pizza from "../Assets/b.jpg";
import { Link } from "react-router-dom";
import MainPageCard from "./MainPageCard/MainPageCard";

import fakedata from "../FakeData";
const MainPage = () => {
  return (
    <>
      <div className=" p-5  ">
        <div className="d-flex   justify-content-center align-items-center mx-5 ">
          {fakedata.map((val) => {
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
    </>
  );
};

export default MainPage;
