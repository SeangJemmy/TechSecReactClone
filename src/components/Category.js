import React, { Component } from "react";
import "../App.css";

function Category() {
  return (
    <div className="p-0 m-3">
      <div className="container dropdown text-center m-0 p-0 mx-auto">
        <form className="row m-0 p-0 justify-content-center mx-auto">
          <div className="m-0 p-0 col-11 col-md-2 col-lg-2 my-2">
            <a
              className="btn btn-primary dropdown-toggle col-4 col-md-12"
              href="#"
              role="button"
              id="createCategory"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Category
            </a>
            <ul
              className="dropdown-menu m-0 p-0"
              aria-labelledby="createforCategory"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Phone
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Computer
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Charger
                </a>
              </li>
            </ul>
          </div>
          <input
            className="form-control col-9 col-md-7 my-2 mr-2 mx-md-2"
            type="search"
            placeholder="Enter product name"
            aria-label="Search"
          />
          <input
            className="btn btn-success col-2 my-2"
            type="submit"
            value="Search"
          />
        </form>
      </div>
    </div>
  );
}

export default Category;
