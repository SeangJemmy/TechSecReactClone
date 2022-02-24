import React, { useContext, useEffect, useState } from "react";
import "../App.css";

import ProductItemMap from "./ProductItemMap";
import { ListContext } from "../contexts/ProductItemsContext";

function AppleProduct() {
  const { productData } = useContext(ListContext);
  const [productDataUpdate, setProductDataUpdate] = useState(productData);
  const selectedBrand = "apple";
  const selectedCategory = "phone";

  // useEffect(() => {
  //   setProductDataUpdate(productData);
  // }, [productData]);

  return (
    <>
      <div className="m-3">
        <ProductItemMap
          data={productData?.filter((item) => {
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
