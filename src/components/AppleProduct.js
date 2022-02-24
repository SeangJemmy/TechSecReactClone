import React from "react";
import "../App.css";
import ProductItemMap from "./ProductItemMap";

function AppleProduct(props) {
  const selectedBrand = "apple";
  const selectedCategory = "phone";

  return (
    <>
      <div className="m-3">
        <ProductItemMap
          data={props.data?.filter((item) => {
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
