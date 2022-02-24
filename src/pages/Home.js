import React from "react";
import "../App.css";
import SetRouteTitle from "../components/SetRouteTitle";
import AppleProduct from "../components/AppleProduct";
import { GetProductData } from "../contexts/ProductItemsContext";

function Home() {
  SetRouteTitle("TechSec ~ We Got What You Need");
  const { productData } = GetProductData();

  if (productData == []) {
    window.location.reload();
  }

  return (
    <div>
      <div className="container m-0 p-0 mx-auto">
        <img
          className="image-fluid"
          alt=""
          width="100%"
          height="100%"
          src="https://techsec.cf/images/banner.jpg"
        />
      </div>
      <h2 className="font-weight-bold text-center mt-4 mb-3 text-uppercase">
        APPLE IPHONES ON SALE
      </h2>

      {productData == [] ? (
        <div className="m-3 row">
          <button
            className="mb-4 d-flex btn btn-lg btn-primary mx-auto"
            onClick={() => {
              window.location.reload();
            }}
          >
            Reload Data
          </button>
        </div>
      ) : (
        <AppleProduct data={productData} />
      )}
    </div>
  );
}

export default Home;
