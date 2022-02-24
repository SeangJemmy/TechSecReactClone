import React, { useContext } from "react";
import "../App.css";

import ProductItemMap from "./ProductItemMap";
import { ListContext } from "../contexts/ProductItemsContext";

function AppleProduct() {
  const { productData } = useContext(ListContext);
  const selectedBrand = "apple";
  const selectedCategory = "phone";

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
