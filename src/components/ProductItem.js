import React, { useState } from "react";
import "../App.css";
import ProductItemData from "../data/productitems.json";
import SearchIcon from "@mui/icons-material/Search";

function ProductItem() {
  const [category_name, setCatName] = useState("Product");
  const [CatData, setCat] = useState(ProductItemData);
  const [searchInp, setSearchInp] = useState("");

  const filterResult = (e) => {
    var catVal = e.target.value;
    if (catVal != "all") {
      const result = ProductItemData.filter((curCat) => {
        return curCat.product_category === catVal;
      });
      setCat(result);
      setCatName(catVal);
    } else {
      setCatName("Product");
      setCat(ProductItemData);
    }
  };

  return (
    <>
      <div className="p-0 m-3">
        <div className="container dropdown text-center m-0 p-0 mx-auto">
          <form className="row m-0 p-0 justify-content-center mx-auto">
            <div className="m-0 p-0 col-11 col-md-2 col-lg-2">
              <select
                className="searchCat form-control m-0 col-4 col-md-12 my-2 text-left mx-auto"
                onChange={filterResult}
              >
                <option value="all" defaultValue>
                  All
                </option>
                <option value="phone">Phone</option>
                <option value="tablet">Tablet</option>
                <option value="laptop">Laptop</option>
                <option value="charger">Charger</option>
              </select>
            </div>
            <input
              className="form-control col-11 col-md-7 my-2 mx-md-2"
              type="search"
              onChange={(event) => {
                setSearchInp(event.target.value);
              }}
              placeholder="Enter product name..."
              aria-label="Search"
            />
          </form>
        </div>
        <h2 className="font-weight-bold text-center mt-4 text-capitalize">
          Showing All Available {category_name}
        </h2>
        <hr className="product-hr" />
        <div className="container m-0 p-0 mx-auto">
          <div className="row mx-auto p-0 m-0 justify-content-center">
            {CatData.filter((val) => {
              if (searchInp == "") {
                return val;
              } else if (
                val.product_name.toLowerCase().includes(searchInp.toLowerCase())
              ) {
                return val;
              }
            }).map((post, index) => {
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
