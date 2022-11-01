import React from "react";
import { Link } from "react-router-dom";

import "../../Styles/Styles.css";
import Logo from "../../Assets/logo.png";
const Navbar = () => {
  return (
    <>
      <nav class="nav-bar   yellow">
        <div className="  card_data bg-light fw-bold small   px-2 border border-secondary  rounded-circle">
          2
        </div>
        <div class="container d-flex justify-content-between">
          <Link to="/home" class="navbar-brand">
            <img src={Logo} alt="" width="65px" />
          </Link>
          <div className=" ">
            <i class="bi bi-cart-dash-fill text-danger  h3 mx-5"></i>
            <button
              class="navbar-toggler border border-2 border-danger mt-2"
              type="button"
            >
              <i class="bi bi-list h2 text-danger"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
