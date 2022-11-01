import React from "react";
import pizza from "../Assets/img.jpg";
import "../Styles/Styles.css";
import { useState } from "react";

const ProdcutDetails = () => {
  const [Click, setClick] = useState(false);
  const [count, setcount] = useState(0);

  return (
    <>
      <div className="yellow p-5 mx-5 my-3  borders shadow ">
        <div className="row p-5">
          <div className="col-md-4 bg-white p-3 borders">
            <img src={pizza} alt="" width="100%" className="img-thumbnail" />
          </div>
          <div className="col-md-8 px-5 py-2">
            <h2> Zinger burgeer</h2>
            <h5>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.{" "}
              <br></br> Eveniet, reprehenderit.
            </h5>
            <h3 className="fw-bold"> Rs .200</h3>
            <div className="d-flex">
              <button
                className="btn btn-danger mt-5"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Add to Bucket
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* model Starts */}

      <div
        class="modal fade "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog mw-100 w-75">
          <div class="modal-content">
            <div class="modal-body  ">
              <div className="row">
                <div className="col-md-6">
                  <img src={pizza} alt="" className="img-fluid" />
                  <h3>Chicken Fajita </h3>
                  <small className="h6">
                    An Authentic Taste of Fajita Marinated Chicken Onion and
                    Bell Peppers.
                  </small>
                </div>
                <div className="col-md-6 ">
                  <div className="col d-flex align-items-center  justify-content-between bg-light fw-bold py-2 px-2">
                    <span className="align-items-center"> Varients</span>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={() => setClick(false)}
                    ></button>
                  </div>
                  <div className="  d-flex  justify-content-between  border-bottom p-2">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onClick={() => setClick(true)}
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Small
                      </label>
                    </div>
                    Rs. 400
                  </div>
                  <div className="d-flex  justify-content-between  border-bottom p-2">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Medium
                      </label>
                    </div>
                    Rs. 200
                  </div>{" "}
                  <div className="d-flex  justify-content-between border-bottom p-2">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Large
                      </label>
                    </div>
                    Rs. 600
                  </div>
                  {Click ? (
                    <>
                      <div className="row d-flex flex-column ">
                        <div className="col">
                          <div className=" d-flex align-items-center  justify-content-between bg-light fw-bold py-2 px-2">
                            <span className="align-items-center">
                              {" "}
                              Extra Topping
                            </span>
                          </div>
                          <div className="d-flex  justify-content-between border-bottom p-2">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault1"
                              >
                                Special Chesse
                              </label>
                            </div>
                            Rs. 200
                          </div>
                          <div className="d-flex  justify-content-between border-bottom p-2">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                              <label
                                class="form-check-label"
                                for="flexRadioDefault1"
                              >
                                Extra Yummy Miyo's
                              </label>
                            </div>
                            Rs. 200
                          </div>
                        </div>
                        <div className="col mt-5 pt-5">
                          <div className="cart">
                            <div className="d-flex">
                              <div>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => setcount(count - 1)}
                                >
                                  -{" "}
                                </button>
                              </div>
                              <div className="px-2 fw-bold align-text-bottom pt-1">
                                {count}
                              </div>
                              <div>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => setcount(count + 1)}
                                >
                                  +
                                </button>
                              </div>
                              <div>
                                <button
                                  className="btn btn-danger mx-4"
                                  data-bs-toggle="modal"
                                  data-bs-target="#staticBackdrop"
                                >
                                  {" "}
                                  Add to Bucket
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProdcutDetails;
