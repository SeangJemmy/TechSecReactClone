import "../App.css";
import SetRouteTitle from "../components/SetRouteTitle";
import { NavLink } from "react-router-dom";
import { ScrollToZero } from "../components/ScrollToTop";

function Dashboard() {
  SetRouteTitle("TechSec ~ Dashboard");
  return (
    <div className="m-0 p-0">
      <nav className="container-fluid m-0 p-0 py-2 bg-warning">
        <div className="row justify-content-between m-0 p-0">
          <div className="col-2 row m-0 p-0 align-items-center">
            <a
              href="#"
              data-toggle="collapse"
              data-target="#dashnav"
              aria-controls="dashnav"
              aria-expanded="false"
              aria-label="dashnav"
              className="m-0 p-0 disableA navbar-toggler"
            >
              <i className="dash-item d-flex h2 fa-solid fa-bars m-0 p-0 ml-3"></i>
            </a>
          </div>
          <div className="col-10 row m-0 p-0 align-items-center justify-content-end">
            <i className="dash-item d-flex h4 fa-solid m-0 p-0 mx-2 fa-magnifying-glass"></i>
            <i className="dash-item d-flex h4 fa-solid fa-bookmark m-0 p-0 mx-2"></i>
            <i className="dash-item d-flex h4 fa-solid fa-bell m-0 p-0 mx-2"></i>
            <i className="dash-item d-flex fa-solid fa-user h4 m-0 p-0 mx-2">
              <small className="d-flex my-auto ml-2 mr-3">User</small>
            </i>
          </div>
        </div>
      </nav>

      <div className="collapse navbar-collapse" id="dashnav">
        <ul className="navbar-nav mr-auto text-center m-0 p-0 bg-warning border border-dark dash-nav-item">
          <li className="nav-item m-0 p-0 text-uppercase">
            <NavLink
              onClick={() => ScrollToZero()}
              to="#sr"
              className={({ isActive }) =>
                isActive ? "active nav-link p-0 mt-1" : "nav-link p-0 mt-1"
              }
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              Supplier Requests
            </NavLink>
          </li>

          <li className="nav-item m-0 p-0 text-uppercase">
            <NavLink
              onClick={() => ScrollToZero()}
              to="#cr"
              className={({ isActive }) =>
                isActive ? "active nav-link p-0 mt-1" : "nav-link p-0 mt-1"
              }
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              Contact Request
            </NavLink>
          </li>

          <li className="nav-item m-0 p-0 text-uppercase">
            <NavLink
              onClick={() => ScrollToZero()}
              to="#nov"
              className={({ isActive }) =>
                isActive ? "active nav-link p-0 my-1" : "nav-link p-0 my-1"
              }
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              Number Of Visitors
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="container-fluid m-0 p-3 mx-auto">
        <div className="row mx-auto m-0 p-0">
          <div className="h2 col-12 text-center font-weight-bold">
            Dashboard Summary
          </div>
        </div>

        <hr className="border border-dark p-0 m-0 mb-3 container-fluid" />

        <div className="row mx-auto m-0 p-0">
          {/*  */}
          <div className="col-12 col-md-12 col-lg-4 h3 m-0 p-0 p-2" id="sr">
            <div className="summary-grid p-3">
              <div className="h3 text-center font-weight-bold mb-3">
                Supplier Request
              </div>
              <ul className="h5 col-12 detail-column">
                <li className="row mx-auto justify-content-between py-2">
                  <div className="col-9 m-0 p-0">
                    Product XXX (Price: XXX)
                    <small className="my-auto"> by User X</small>
                  </div>
                  <div className="col-3 row justify-content-end m-0 p-0">
                    <i className="fa-solid fa-circle-minus my-auto d-flex"></i>
                  </div>
                </li>
                <li className="row mx-auto justify-content-between py-2">
                  <div className="col-9 m-0 p-0">
                    Product XXX (Price: XXX)
                    <small className="my-auto"> by User X</small>
                  </div>
                  <div className="col-3 row justify-content-end m-0 p-0">
                    <i className="fa-solid fa-circle-minus my-auto d-flex"></i>
                  </div>
                </li>
                <li className="row mx-auto justify-content-between py-2">
                  <div className="col-9 m-0 p-0">
                    Product XXX (Price: XXX)
                    <small className="my-auto"> by User X</small>
                  </div>
                  <div className="col-3 row justify-content-end m-0 p-0">
                    <i className="fa-solid fa-circle-minus my-auto d-flex"></i>
                  </div>
                </li>
              </ul>
              <div className="row justify-content-center mt-3">
                <div className="col-6">
                  <button className="btn btn-danger font-weight-bold d-flex mx-auto">
                    REJECT ALL
                  </button>
                </div>
                <div className="col-6">
                  <button className="btn btn-success font-weight-bold d-flex mx-auto">
                    ALLOW ALL
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="col-12 col-md-12 col-lg-4 h3 m-0 p-0 p-2" id="cr">
            <div className="summary-grid p-3">
              <div className="h3 text-center font-weight-bold mb-3">
                Contact Request
              </div>
              <ul className="h5 col-12 detail-column">
                <li className="row mx-auto justify-content-between py-2">
                  <div className="col-9 m-0 p-0">
                    Why Website So Slow?
                    <small className="my-auto"> by John Smith</small>
                  </div>
                  <div className="col-3 row justify-content-end m-0 p-0">
                    <i className="fa-solid fa-circle-exclamation my-auto d-flex"></i>
                  </div>
                </li>
                <li className="row mx-auto justify-content-between py-2">
                  <div className="col-9 m-0 p-0">
                    Why Website So Slow?
                    <small className="my-auto"> by John Smith</small>
                  </div>
                  <div className="col-3 row justify-content-end m-0 p-0">
                    <i className="fa-solid fa-circle-exclamation my-auto d-flex"></i>
                  </div>
                </li>
                <li className="row mx-auto justify-content-between py-2">
                  <div className="col-9 m-0 p-0">
                    Why Website So Slow?
                    <small className="my-auto"> by John Smith</small>
                  </div>
                  <div className="col-3 row justify-content-end m-0 p-0">
                    <i className="fa-solid fa-circle-exclamation my-auto d-flex"></i>
                  </div>
                </li>
              </ul>
              <div className="row justify-content-center mt-3">
                <div className="col-6">
                  <button className="btn btn-warning font-weight-bold d-flex mx-auto">
                    REMIND ME
                  </button>
                </div>
                <div className="col-6">
                  <button className="btn btn-primary font-weight-bold d-flex mx-auto">
                    READ ALL
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="col-12 col-md-12 col-lg-4 h3 m-0 p-0 p-2" id="nov">
            <div className="summary-grid p-3">
              <div className="h3 text-center font-weight-bold mb-3">
                Number Of Visitors
              </div>
              <ul className="h5 col-12 detail-column">
                <li className="row mx-auto justify-content-between py-2">
                  <div className="col-9 m-0 p-0">
                    Direct Access
                    <small className="my-auto"> (Website)</small>
                  </div>
                  <div className="col-3 row justify-content-end m-0 p-0">
                    <i className="fa-solid fa-eye ml-2 my-auto">
                      <small className="ml-1">390</small>
                    </i>
                  </div>
                </li>
                <li className="row mx-auto justify-content-between py-2">
                  <div className="col-9 m-0 p-0">
                    Social Media
                    <small className="my-auto"> (FB, IG, PIN)</small>
                  </div>
                  <div className="col-3 row justify-content-end m-0 p-0">
                    <i className="fa-solid fa-eye ml-2 my-auto">
                      <small className="ml-1">460</small>
                    </i>
                  </div>
                </li>
                <li className="row mx-auto justify-content-between py-2">
                  <div className="col-9 m-0 p-0">
                    Google Ads
                    <small className="my-auto"> (SEO & SEM)</small>
                  </div>
                  <div className="col-3 row justify-content-end m-0 p-0">
                    <i className="fa-solid fa-eye ml-2 my-auto">
                      <small className="ml-1">999</small>
                    </i>
                  </div>
                </li>
              </ul>
              <div className="row justify-content-center mt-3">
                <div className="col-6">
                  <button className="btn btn-warning font-weight-bold d-flex mx-auto">
                    SEE DETAIL
                  </button>
                </div>
                <div className="col-6">
                  <button className="btn btn-dark font-weight-bold d-flex mx-auto">
                    ANAZLYZE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
