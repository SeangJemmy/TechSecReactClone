import "../App.css";
import FilterMenu from "../components/FilterMenu";
import SetRouteTitle from "../components/SetRouteTitle";
import React from "react";
import { GetProductData } from "../contexts/ProductItemsContext";

function Product() {
  SetRouteTitle("TechSec ~ Products");
  const { productData } = GetProductData();

  if (productData == []) {
    window.location.reload();
  }

  return (
    <div className="m-3">
      <FilterMenu data={productData} />
    </div>
  );
}

export default Product;
