import React, { Component } from "react";
import "../App.css";

function Category() {
  return (
    <div className="dropdown text-center create-forum-post container-fluid my-4 m-0 p-0">
      <div className="row justify-content-center mx-auto m-0 p-0">
        <div className="m-0 p-0 col-9 col-md-auto mt-2">
          <a
            className="btn btn-primary dropdown-toggle"
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
        <div className="m-0 p-0 col-11 col-md-8 col-lg-6 mt-2">
          <form className="form-inline m-0 p-0 row justify-content-center">
            <input
              className="form-control col-9 mr-2"
              type="search"
              placeholder="Enter product name"
              aria-label="Search"
            />
            <input
              className="btn btn-success col-2"
              type="submit"
              value="Search"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Category;
