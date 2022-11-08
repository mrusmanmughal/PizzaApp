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
          <div>
            <i
              class="bi bi-cart-dash-fill text-danger  h3 mx-5 cartbtn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            ></i>
            <button
              class="navbar-toggler border border-2 border-danger mt-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <i class="bi bi-list h2 text-danger"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Your Cart
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="row">
                <div className="col-md-2">
                  <img src={Logo} width="70px" height="70px" alt="" />
                </div>
                <div className="col-md-10">
                  <h6 className="fw-bold">Chicken Tikka </h6>
                  <small className=" text-secondary ">
                    Tender Chunks of Marinated Grilled Chicken with Savory Onion
                  </small>
                  <br />
                  <small className="fw-bold">Variation </small>
                  <small>+ Small</small>
                  <br />
                  <small className="fw-bold">Extra Topping</small>{" "}
                  <small>+Chicken Small : </small>
                  <div className="row bg-warning  my-2">
                    <div className="col text-white"> Rs .350</div>
                    <div className="col text-white text-end">
                      <i className="bi bi-trash"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="d-flex flex-column px-3">
              <div className="d-flex justify-content-between">
                <small>Subtotal</small>
                <small>Rs .90</small>
              </div>
              <div className="d-flex justify-content-between">
                <small>Delivery Charges</small>
                <small>Rs .40</small>
              </div>
              <div className="d-flex justify-content-between">
                <small className="fw-bold">Grand Total</small>
                <small className="fw-bold">Rs .98</small>
              </div>
            </div>

            <button
              type="button"
              class="btn btn-warning fw-bold text-white m-2"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      {/* offCanvas */}

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">
            <img src={Logo} alt="" width="70px" height="70px" />
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul>
            <li>Home</li>
            <li>Pizza</li>
            <li>Burgers</li>
            <li>Deserts</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
