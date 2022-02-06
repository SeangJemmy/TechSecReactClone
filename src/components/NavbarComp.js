import React from "react";
import "../App.css";
import { BrowserRouter as NavLink } from "react-router-dom";

function NavbarComp() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <a className="navbar-brand" href="./">
        <img
          loading="lazy"
          src="./logo.svg"
          alt=""
          height="50"
          className="d-inline-block logo"
        />
      </a>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto text-center mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink
              to="/"
              activeClassName="active"
              className="nav-link"
              onClick={() => {
                window.location.reload();
              }}
            >
              HOME
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/product"
              activeClassName="active"
              className="nav-link"
              onClick={() => {
                window.location.reload();
              }}
            >
              PRODUCT
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/forum"
              activeClassName="active"
              className="nav-link"
              onClick={() => {
                window.location.reload();
              }}
            >
              FORUM
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/login"
              activeClassName="active"
              className="nav-link"
              onClick={() => {
                window.location.reload();
              }}
            >
              LOGIN
            </NavLink>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              ABOUT
            </a>
            <div
              className="dropdown-menu text-center"
              aria-labelledby="navbarDropdown"
            >
              <NavLink
                to="/about"
                activeClassName="active"
                className="dropdown-item"
                onClick={() => {
                  window.location.reload();
                }}
              >
                About Us
              </NavLink>

              <NavLink
                to="/contact"
                activeClassName="active"
                className="dropdown-item"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/faq"
                activeClassName="active"
                className="dropdown-item"
                onClick={() => {
                  window.location.reload();
                }}
              >
                FAQ
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink
                to="/pp"
                activeClassName="active"
                className="dropdown-item"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Privacy Policy
              </NavLink>

              <NavLink
                to="/tos"
                activeClassName="active"
                className="dropdown-item"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Terms of Service
              </NavLink>
              <NavLink
                to="/tracking"
                activeClassName="active"
                className="dropdown-item"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Tracking
              </NavLink>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 justify-content-center">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            <img loading="lazy" src="./mag.png" alt="" width="25" height="25" />
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavbarComp;
