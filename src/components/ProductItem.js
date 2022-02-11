import React, { useState } from "react";
import "../App.css";
import ProductItemData from "../data/productitems.json";
import SearchIcon from "@mui/icons-material/Search";

function ProductItem() {
  const [CatData, setCat] = useState(ProductItemData);

  const filterResult = (e) => {
    if (e.target.value == "all") {
      setCat(ProductItemData);
    } else {
      const result = ProductItemData.filter((curCat) => {
        return curCat.product_category === e.target.value;
      });
      setCat(result);
    }
  };

  return (
    <>
      <div className="p-0 m-3">
        <div className="container dropdown text-center m-0 p-0 mx-auto">
          <form className="row m-0 p-0 justify-content-center mx-auto">
            <div className="m-0 p-0 col-11 col-md-2 col-lg-2">
              <select
                className="m-0 btn btn-primary col-4 col-md-12 my-2"
                onChange={filterResult}
              >
                <option className="text-left" value="all" defaultValue>
                  All
                </option>
                <option className="text-left" value="phone">
                  Phone
                </option>
                <option className="text-left" value="tablet">
                  Tablet
                </option>
                <option className="text-left" value="charger">
                  Charger
                </option>
              </select>
            </div>
            <input
              className="form-control col-9 col-md-7 my-2 mr-2 mx-md-2"
              type="search"
              placeholder="Enter product name"
              aria-label="Search"
            />
            <button className="btn btn-success col-2 my-2" type="submit">
              <SearchIcon className="d-flex mx-auto" />
            </button>
          </form>
        </div>
      </div>
      <div className="m-3">
        <div className="container m-0 p-0 mx-auto">
          <div className="row mx-auto p-0 m-0 justify-content-center">
            {CatData.map((post, index) => {
              return (
                <div className="col-12 col-md-3 p-2 m-0" key={post.product_id}>
                  <div className="card border border-secondary">
                    <img
                      className="card-img-top border-secondary border-bottom"
                      src={post.image}
                      alt=""
                    />
                    <div className="card-body">
                      <h6 className="font-weight-bold card-title text-center">
                        {post.product_name}
                      </h6>
                      <h4 className="font-weight-bold card-title text-center text-danger">
                        <small>
                          <del>${post.product_price}</del>
                        </small>{" "}
                        ${post.product_discount_price}
                      </h4>
                      <div className="text-center">
                        <a
                          href="#"
                          className="btn btn-warning btn-sm mx-1 my-1"
                        >
                          <i className="fa fa-shopping-cart"></i>Add to Cart
                        </a>
                        <a
                          href="#"
                          className="btn btn-warning btn-sm mx-1 my-1"
                        >
                          <i className="fa fa-eye"></i>Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
