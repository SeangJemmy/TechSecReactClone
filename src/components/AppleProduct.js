import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

function AppleProduct() {
  const url = "https://seangjemmy.github.io/TechSecAPI/db.json";
  const [ProductItemData, setPID] = useState([]);
  const selectedBrand = "apple";
  const selectedCategory = "phone";

  useEffect(() => {
    axios.get(url).then((res) => {
      setPID(res.data.productitems);
    });
  }, []);

  return (
    <>
      <div className="m-3">
        <div className="container m-0 p-0 mx-auto">
          <div className="row mx-auto p-0 m-0 justify-content-center">
            {ProductItemData.filter((item) => {
              return (
                item.product_category === selectedCategory &&
                item.product_brand === selectedBrand
              );
            }).map((post, index) => {
              return (
                <div className="col-12 col-md-3 p-2 m-0" key={post.product_id}>
                  <div className="card border border-secondary">
                    <img
                      className="card-img-top border-secondary border-bottom"
                      src={post.image}
                      alt=""
                      width="100%"
                    />
                    <div className="card-body">
                      <div className="h6 font-weight-bold card-title text-center">
                        {post.product_name}
                      </div>
                      <div className="h4 font-weight-bold card-title text-center text-danger">
                        <small>
                          <del>${post.product_price}</del>
                        </small>{" "}
                        ${post.product_discount_price}
                      </div>
                      <div className="text-center">
                        <a
                          href="#"
                          className="btn btn-warning btn-sm mx-1 my-1"
                        >
                          <i className="fa fa-shopping-cart mr-2"></i>Add to
                          Cart
                        </a>
                        <a
                          href="#"
                          className="btn btn-warning btn-sm mx-1 my-1"
                        >
                          <i className="fa fa-eye mr-2"></i>Details
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

export default AppleProduct;
