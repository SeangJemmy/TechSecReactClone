import React, { useEffect, useContext } from "react";
import "../App.css";
import SetRouteTitle from "../components/SetRouteTitle";
import AppleProduct from "../components/AppleProduct";
import { ListContext } from "../contexts/ProductItemsContext";

function Home() {
  SetRouteTitle("TechSec ~ We Got What You Need");
  const { productData, setPD } = useContext(ListContext);

  useEffect(() => {
    setPD(productData);
  }, [productData]);

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
      <h2 className="font-weight-bold text-center mt-4 mb-3">
        Apple iPhones On Sale
      </h2>
      <AppleProduct data={productData} />
    </div>
  );
}

export default Home;
