import React from "react";
import { Link } from "react-router-dom";
const MainPageCard = ({ name, dec, img, url }) => {
  console.log(url);
  return (
    <div className="col-md-3 bg-white borders m-2 p-4 shadow card_move">
      <Link to={url} className="card_Link">
        <div className="borders">
          <div className="">
            <img src={img} className="img-thumbnail" />
            <div>
              <h3 className="text-center py-2 text-dark">{name}</h3>
            </div>
            <p className="card-text text-dark ">{dec}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MainPageCard;
