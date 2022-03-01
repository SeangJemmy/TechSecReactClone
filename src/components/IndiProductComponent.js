import "../App.css";
import SetRouteTitle from "../components/SetRouteTitle";

function IndiProductComponent(props) {
  SetRouteTitle(props.data.product_name + " ~ TechSec");
  return (
    <div className="m-3 my-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 my-3">
            <img
              src={props.data?.image}
              alt=""
              className="d-flex img-fluid border border-secondary"
            />
          </div>
          <div className="col-12 col-md-6 p-3 mt-3">
            <div className="h2 text-center font-weight-bold">
              {props.data?.product_name}
            </div>
            <hr className="border border-dark m-0 p-0 d-flex"></hr>
            <div className="h3 text-center my-3 mt-4 font-weight-bold text-danger">
              {props.data?.product_discount_price ===
              props.data?.product_price ? (
                <>${props.data?.product_discount_price}</>
              ) : (
                <>
                  <small>
                    <del>${props.data?.product_price}</del>
                  </small>
                  &nbsp;${props.data?.product_discount_price}
                </>
              )}
            </div>
            <div className="h5 text-center my-3">
              Seller:{" "}
              <a href="" className="">
                Supplier_Name
              </a>
            </div>
            <div className="row justify-content-center my-3 mb-4">
              <button className="btn btn-warning d-flex mr-2">
                <div>
                  <i className="fa-solid fa-star m-0 p-0"></i>
                  &ensp;Favorite
                </div>
              </button>

              <button className="btn btn-primary d-flex">
                {" "}
                <div>
                  <i className="fa-solid fa-comment m-0 p-0"></i>
                  &ensp;Contact
                </div>
              </button>
            </div>

            <div className="container-fluid">
              <div className="row product-tabs-container">
                <ul
                  className="nav nav-tabs product-tabs"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item d-flex">
                    <a
                      className="nav-link active"
                      id="detail-tab"
                      data-toggle="tab"
                      href="#detail"
                      role="tab"
                      aria-controls="detail"
                      aria-selected="true"
                    >
                      Details
                    </a>
                  </li>
                  <li className="nav-item d-flex">
                    <a
                      className="nav-link"
                      id="ratings-tab"
                      data-toggle="tab"
                      href="#ratings"
                      role="tab"
                      aria-controls="ratings"
                      aria-selected="false"
                    >
                      Ratings
                    </a>
                  </li>
                  <li className="nav-item d-flex">
                    <a
                      className="nav-link"
                      id="suggestions-tab"
                      data-toggle="tab"
                      href="#suggestions"
                      role="tab"
                      aria-controls="suggestions"
                      aria-selected="false"
                    >
                      Suggestions
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content py-3 row" id="myTabContent">
                <div
                  className="tab-pane fade show active p-0 m-0"
                  id="detail"
                  role="tabpanel"
                  aria-labelledby="detail-tab"
                >
                  Product details:
                  <p></p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <div
                  className="tab-pane fade p-0 m-0"
                  id="ratings"
                  role="tabpanel"
                  aria-labelledby="ratings-tab"
                >
                  User: 5 stars
                  <p></p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <div
                  className="tab-pane fade p-0 m-0"
                  id="suggestions"
                  role="tabpanel"
                  aria-labelledby="suggestions-tab"
                >
                  My Suggestions is that...
                  <p></p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndiProductComponent;
