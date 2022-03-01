import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import SetRouteTitle from "../components/SetRouteTitle";
import { GetProductData } from "../contexts/ProductItemsContext";
import { ScrollToZero } from "../components/ScrollToTop";
import IndiProductComponent from "./IndiProductComponent";

const ErrorProduct = () => {
  SetRouteTitle("TechSec ~ Product Not Found");
  const navigate = useNavigate();
  return (
    <div className="m-3 row">
      <a className="mx-auto mt-4" href="./">
        <img
          alt=""
          className="img-fluid"
          loading="lazy"
          src="../images/error.png"
          width="100%"
          height="100%"
        />
      </a>

      <h1 className="col-12 font-weight-bold text-center my-4 text-danger">
        Error - Product Not Found
      </h1>
      <button
        className="mb-4 d-flex btn btn-lg btn-primary mx-auto"
        onClick={() => {
          navigate("/product");
        }}
      >
        Back To Product Page
      </button>
    </div>
  );
};

function IndividualProduct() {
  const location = useLocation();
  const pathList = location.pathname.split("/");
  const { productData } = GetProductData();
  const filteredProduct = productData.filter((item) => {
    return (
      item.product_id === pathList[2] &&
      pathList[3] &&
      item.product_name === pathList[3].replaceAll("-", " ")
    );
  });

  useEffect(() => {
    ScrollToZero();
  }, []);

  return (
    <>
      {filteredProduct.length !== 0 ? (
        <>
          <IndiProductComponent data={filteredProduct[0]} />
        </>
      ) : (
        <div>
          <ErrorProduct />
        </div>
      )}
    </>
  );
}

export default IndividualProduct;
