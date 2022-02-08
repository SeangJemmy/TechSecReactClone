import React from "react";
import "../App.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

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
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              onClick={() => {
                window.location.href = "/";
              }}
            >
              HOME
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              onClick={() => {
                window.location.href = "/product";
              }}
            >
              PRODUCT
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/forum"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              onClick={() => {
                window.location.href = "/forum";
              }}
            >
              FORUM
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              onClick={() => {
                window.location.href = "/login";
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
                className={({ isActive }) =>
                  isActive ? "active dropdown-item" : "dropdown-item"
                }
                onClick={() => {
                  window.location.href = "/about";
                }}
              >
                About Us
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active dropdown-item" : "dropdown-item"
                }
                onClick={() => {
                  window.location.href = "/contact";
                }}
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/faq"
                className={({ isActive }) =>
                  isActive ? "active dropdown-item" : "dropdown-item"
                }
                onClick={() => {
                  window.location.href = "/faq";
                }}
              >
                FAQ
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink
                to="/pp"
                className={({ isActive }) =>
                  isActive ? "active dropdown-item" : "dropdown-item"
                }
                onClick={() => {
                  window.location.href = "/pp";
                }}
              >
                Privacy Policy
              </NavLink>

              <NavLink
                to="/tos"
                className={({ isActive }) =>
                  isActive ? "active dropdown-item" : "dropdown-item"
                }
                onClick={() => {
                  window.location.href = "/tos";
                }}
              >
                Terms of Service
              </NavLink>
              <NavLink
                to="/tracking"
                className={({ isActive }) =>
                  isActive ? "active dropdown-item" : "dropdown-item"
                }
                onClick={() => {
                  window.location.href = "/tracking";
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
            placeholder="Search on page"
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
