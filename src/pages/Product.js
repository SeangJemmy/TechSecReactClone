import "../App.css";
import FilterMenu from "../components/FilterMenu";
import SetRouteTitle from "../components/SetRouteTitle";
import React, { useContext, useState, useEffect } from "react";
import { ListContext } from "../contexts/ProductItemsContext";

function Product() {
  SetRouteTitle("TechSec ~ Products");
  const { productData } = useContext(ListContext);
  const [productDataUpdate, setProductDataUpdate] = useState(productData);
  useEffect(() => {
    setProductDataUpdate(productData);
  }, [productData, productDataUpdate]);

  return (
    <div className="m-3">
      <FilterMenu data={productData} />
    </div>
  );
}

export default Product;
