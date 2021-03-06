import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { ScrollToZero } from "./ScrollToTop";

function ProductItemMap(props) {
  const [dataP, setData] = useState(props.data);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  return (
    <>
      <div className="container m-0 p-0 mx-auto">
        <div className="row mx-auto p-0 m-0">
          {dataP?.map((item) => {
            return (
              <div
                className="col-6 col-md-6 col-lg-4 col-xl-3 p-1 m-0"
                key={item.product_id}
              >
                <div className="card border border-secondary">
                  <img
                    className="card-img-top border-secondary border-bottom img-100"
                    src={item.image}
                    alt=""
                    loading="lazy"
                  />
                  <div className="card-body px-0">
                    <div className="h6 font-weight-bold card-title text-center px-1">
                      {item.product_name}
                    </div>
                    <div className="h5 font-weight-bold card-title text-center text-danger">
                      {item.product_discount_price === item.product_price ? (
                        <>${item.product_discount_price}</>
                      ) : (
                        <>
                          <small>
                            <del>${item.product_price}</del>
                          </small>
                          &nbsp;${item.product_discount_price}
                        </>
                      )}
                    </div>
                    <div className="text-center">
                      <a href="#" className="btn btn-warning btn-sm mx-1 my-1">
                        <i className="fa-solid fa-bookmark mr-2"></i>Save
                      </a>
                      <Link
                        to={`/product/${
                          item.product_id
                        }/${item.product_name.replaceAll(" ", "-")}`}
                        id={item.product_id}
                        className="btn btn-warning btn-sm mx-1 my-1"
                        onClick={ScrollToZero}
                      >
                        <i className="fa-solid fa-circle-exclamation mr-2"></i>
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductItemMap;
