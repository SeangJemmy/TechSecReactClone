import React, { useState } from "react";
import "../App.css";
import ProductItemData from "../data/productitems.json";

function AppleProduct() {
  return (
    <>
      <div className="m-3">
        <div className="container m-0 p-0 mx-auto">
          <div className="row mx-auto p-0 m-0 justify-content-center">
            {ProductItemData.map((post, index) => {
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

export default AppleProduct;
