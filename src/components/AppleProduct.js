import React, { useState, useEffect } from "react";
import "../App.css";
import api from "../api/axios";
import ProductItemMap from "./ProductItemMap";

function AppleProduct() {
  const [ProductItemData, setPID] = useState([]);
  const selectedBrand = "apple";
  const selectedCategory = "phone";

  async function fetchData() {
    try {
      const res = await api.get(``);
      setPID(res.data.productitems);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="m-3">
        <ProductItemMap
          data={ProductItemData?.filter((item) => {
            return (
              item.product_category === selectedCategory &&
              item.product_brand === selectedBrand
            );
          })}
        />
      </div>
    </>
  );
}

export default AppleProduct;
