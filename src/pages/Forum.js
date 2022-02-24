import "../App.css";
import SetRouteTitle from "../components/SetRouteTitle";

function Forum() {
  SetRouteTitle("TechSec ~ Forum");
  return (
    <div className="m-3">
      <div className="dropdown text-center create-forum-post container my-4">
        <button
          className="btn btn-success dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          + Create Post&ensp;
        </button>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">
            Create a post in the customer
          </a>

          <a className="dropdown-item" href="#">
            Create a post in the supplier
          </a>

          <a className="dropdown-item" href="#">
            Create a post in the product
          </a>
        </div>
      </div>
      <div id="forum-container" className="container-fluid p-0 m-0">
        <div className="container border border-dark m-0 p-0 mx-auto">
          <div className="row p-0 m-0 border-bottom border-dark">
            <div id="latest-news" className="col-12 p-0 m-0">
              <h2 className="bg-warning p-2 m-0 d-flex justify-content-center">
                <i className="fa-solid fa-newspaper d-flex my-auto mr-3"></i>
                Latest News
              </h2>
            </div>
          </div>
          <div className="row p-3 m-0">
            <div className="col-12 col-md-6 col-lg-8 m-0 p-0 mb-3">
              <div className="wrap-col">
                <h4 className="text-center">
                  <i className="fa-solid fa-comments"></i>&nbsp;
                  <a href="forumpages/Adminposts.html">
                    Posts from the administrators
                  </a>
                </h4>
                <p className="m-0">
                  &emsp;&emsp;Messages related to the website from the website
                  administrator.
                </p>
                <ul className="m-0">
                  <li>Website maintanence news</li>
                  <li>Changes to the website</li>
                  <li>Incoming message from the website administrator</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-2 m-0 p-0">
              <div className="wrap-col wrap-border text-center">
                <div className="m-0 p-0">
                  <i className="fa-regular fa-clipboard mb-2"></i>&emsp;24 Posts
                  <br />
                  <i className="fa-regular fa-lightbulb"></i>&emsp;12 Topics
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-2 m-0 p-0 text-center">
              <div className="wrap-col">
                <div className="m-0">
                  <b>
                    <a id="forum-alink" href="#">
                      Last post
                    </a>
                  </b>
                  &nbsp;by
                  <br />
                  <i className="fa-solid fa-user mr-2"></i>
                  <a href="#">Admin</a>
                  <br />
                  on <small>12 Dec 2021</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="forum-hr" />
        <div className="container border border-dark m-0 p-0 mx-auto">
          <div className="row p-0 m-0 border-bottom border-dark">
            <div id="customer" className="col-12 p-0 m-0">
              <h2 className="bg-primary p-2 m-0 d-flex justify-content-center text-white">
                <i className="fa-solid fa-users d-flex my-auto mr-3"></i>
                Customer
              </h2>
            </div>
          </div>
          <div className="row p-3 m-0">
            <div className="col-12 col-md-6 col-lg-8 m-0 p-0 mb-3">
              <div className="wrap-col">
                <h4 className="text-center">
                  <i className="fa-solid fa-comments"></i>&nbsp;
                  <a href="forumpages/Customerpost.html">
                    Posts from the customers
                  </a>
                </h4>
                <p className="m-0">
                  &emsp;&emsp;Thanks for providing good platform for buying
                  affordable products!
                </p>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-2 m-0 p-0">
              <div className="wrap-col wrap-border text-center">
                <div className="m-0 p-0">
                  <i className="fa-regular fa-clipboard mb-2"></i>&emsp;24 Posts
                  <br />
                  <i className="fa-regular fa-lightbulb"></i>&emsp;12 Topics
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-2 m-0 p-0 text-center">
              <div className="wrap-col">
                <div className="m-0">
                  <b>
                    <a id="forum-alink" href="#">
                      Last post
                    </a>
                  </b>
                  &nbsp;by
                  <br />
                  <i className="fa-solid fa-user mr-2"></i>
                  <a href="#">Anonymous</a>
                  <br />
                  on <small>31 Dec 2021</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="forum-hr" />
        <div className="container border border-dark m-0 p-0 mx-auto">
          <div className="row p-0 m-0 border-bottom border-dark">
            <div id="supplier" className="col-12 p-0 m-0">
              <h2 className="bg-primary p-2 m-0 d-flex justify-content-center text-white">
                <i className="fa-regular fa-handshake d-flex my-auto mr-3"></i>
                Supplier
              </h2>
            </div>
          </div>
          <div className="row p-3 m-0">
            <div className="col-12 col-md-6 col-lg-8 m-0 p-0 mb-3">
              <div className="wrap-col">
                <h4 className="text-center">
                  <i className="fa-solid fa-comments"></i>&nbsp;
                  <a href="forumpages/Supplierpost.html">
                    Posts from the suppliers
                  </a>
                </h4>
                <p className="m-0">
                  &emsp;&emsp;Thanks for providing good platform for selling
                  products!
                </p>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-2 m-0 p-0">
              <div className="wrap-col wrap-border text-center">
                <div className="m-0 p-0">
                  <i className="fa-regular fa-clipboard mb-2"></i>&emsp;24 Posts
                  <br />
                  <i className="fa-regular fa-lightbulb"></i>&emsp;12 Topics
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-2 m-0 p-0 text-center">
              <div className="wrap-col">
                <div className="m-0">
                  <b>
                    <a id="forum-alink" href="#">
                      Last post
                    </a>
                  </b>
                  &nbsp;by
                  <br />
                  <i className="fa-solid fa-user mr-2"></i>
                  <a href="#">Anonymous</a>
                  <br />
                  on <small>31 Dec 2021</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="forum-hr" />
        <div className="container border border-dark m-0 p-0 mx-auto">
          <div className="row p-0 m-0 border-bottom border-dark">
            <div id="product" className="col-12 p-0 m-0">
              <h2 className="bg-primary p-2 m-0 d-flex justify-content-center text-white">
                <i className="fa-solid fa-archive d-flex my-auto mr-3"></i>
                Product
              </h2>
            </div>
          </div>
          <div className="row p-3 m-0">
            <div className="col-12 col-md-6 col-lg-8 m-0 p-0 mb-3">
              <div className="wrap-col">
                <h4 className="text-center">
                  <i className="fa-solid fa-comments"></i>&nbsp;
                  <a href="forumpages/Productpost.html">
                    Posts about the products
                  </a>
                </h4>
                <p className="m-0">
                  &emsp;&emsp;More poducts need to be added to your platform! We
                  support your website! Thank you!
                </p>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-2 m-0 p-0">
              <div className="wrap-col wrap-border text-center">
                <div className="m-0 p-0">
                  <i className="fa-regular fa-clipboard mb-2"></i>&emsp;24 Posts
                  <br />
                  <i className="fa-regular fa-lightbulb"></i>&emsp;12 Topics
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-2 m-0 p-0 text-center">
              <div className="wrap-col">
                <div className="m-0">
                  <b>
                    <a id="forum-alink" href="#">
                      Last post
                    </a>
                  </b>
                  &nbsp;by
                  <br />
                  <i className="fa-solid fa-user mr-2"></i>
                  <a href="#">Anonymous</a>
                  <br />
                  on <small>31 Dec 2021</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="forum-hr" />
      </div>
    </div>
  );
}

export default Forum;
