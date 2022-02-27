import "../App.css";
import FilterMenu from "../components/FilterMenu";
import SetRouteTitle from "../components/SetRouteTitle";
import React from "react";
import { GetProductData } from "../contexts/ProductItemsContext";

function Product() {
  SetRouteTitle("TechSec ~ Products");
  const { productData } = GetProductData();

  if (productData === []) {
    window.location.reload();
  }

  return (
    <div className="m-3">
      {productData === [] ? (
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
        <FilterMenu data={productData} />
      )}
    </div>
  );
}

export default Product;
