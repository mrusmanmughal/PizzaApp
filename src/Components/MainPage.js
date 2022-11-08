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
              <MainCard
                name={val.Name}
                dec={val.describe}
                img={val.img}
                url={val.url}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export const MainCard = ({ name, img, url }) => {
  return (
    <>
      <div className="col-md-3 bg-white borders m-2 p-4 shadow card_move">
        <Link to={url} className="card_Link">
          <div className="borders">
            <div className="">
              <img src={img} className="img-thumbnail" />
              <div>
                <h3 className="text-center py-2 fw-bold text-dark text-uppercase">
                  {name}
                </h3>
              </div>
              <div className=" text-white  text-center h6 bg-warning  py-3 border rounded-pill">
                Click Here
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default MainPage;
