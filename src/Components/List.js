import React from "react";
import "../Styles/Styles.css";
import pizza from "../Assets/b.jpg";
import { Link } from "react-router-dom";
import { listfake } from "../FakeData";
import MainPageCard from "./MainPageCard/MainPageCard";
const List = () => {
  console.log(listfake);
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
    </>
  );
};

export default List;
