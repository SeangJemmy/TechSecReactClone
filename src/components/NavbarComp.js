import React from "react";
import "../App.css";
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import { ScrollToZero } from "../components/ScrollToTop";

function NavbarComp() {
  const searchHandler = (e) => {
    e.preventDefault();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="navv">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#TechSecNavToggler"
        aria-controls="TechSecNavToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <Link
        className="navbar-brand"
        to="/"
        aria-label="Back to Main Page"
        data-toggle="collapse"
        data-target=".navbar-collapse.show"
      >
        <img
          loading="lazy"
          src="./logo.svg"
          alt=""
          className="d-inline-block logo"
        />
      </Link>

      <div className="collapse navbar-collapse" id="TechSecNavToggler">
        <ul className="navbar-nav mr-auto text-center mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink
              onClick={() => ScrollToZero()}
              to="/"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              HOME
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              onClick={() => ScrollToZero()}
              to="/product"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              PRODUCT
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              onClick={() => ScrollToZero()}
              to="/forum"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              FORUM
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              onClick={() => ScrollToZero()}
              to="/login"
              className={({ isActive }) =>
                isActive ? "active nav-link" : "nav-link"
              }
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
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
                onClick={() => ScrollToZero()}
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active dropdown-item" : "dropdown-item"
                }
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                About Us
              </NavLink>

              <NavLink
                onClick={() => ScrollToZero()}
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active dropdown-item" : "dropdown-item"
                }
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Contact Us
              </NavLink>
              <NavLink
                onClick={() => ScrollToZero()}
                to="/faq"
                className={({ isActive }) =>
                  isActive ? "active dropdown-item" : "dropdown-item"
                }
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                FAQ
              </NavLink>
              <div className="dropdown-divider"></div>
              <NavLink
                onClick={() => ScrollToZero()}
                to="/privacypolicy"
                className={({ isActive }) =>
                  isActive ? "active dropdown-item" : "dropdown-item"
                }
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Privacy Policy
              </NavLink>

              <NavLink
                onClick={() => ScrollToZero()}
                to="/termsofservice"
                className={({ isActive }) =>
                  isActive ? "active dropdown-item" : "dropdown-item"
                }
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Terms of Service
              </NavLink>
              <NavLink
                onClick={() => (window.location.href = "/tracking")}
                to="/tracking"
                className={({ isActive }) =>
                  isActive ? "active dropdown-item" : "dropdown-item"
                }
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                Tracking
              </NavLink>
            </div>
          </li>
        </ul>
        <form
          onSubmit={searchHandler}
          className="form-inline my-2 my-lg-0 justify-content-center"
        >
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search on page"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0 search-nav"
            type="submit"
            aria-label="pagesearch"
          >
            <img loading="lazy" src="./mag.png" alt="" width="25" height="25" />
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavbarComp;
