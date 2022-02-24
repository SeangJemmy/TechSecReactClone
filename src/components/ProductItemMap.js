import React, { useState, useEffect } from "react";
import "../App.css";

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
                className="col-12 col-md-6 col-lg-4 col-xl-3 p-2 m-0"
                key={item.product_id}
              >
                <div className="card border border-secondary">
                  <img
                    className="card-img-top border-secondary border-bottom"
                    src={item.image}
                    alt=""
                    loading="lazy"
                    width="100%"
                    height="100%"
                  />
                  <div className="card-body px-0">
                    <div className="h6 font-weight-bold card-title product-title text-center">
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
                        <i className="fa-solid fa-shopping-cart mr-2"></i>Add to
                        Cart
                      </a>
                      <a href="#" className="btn btn-warning btn-sm mx-1 my-1">
                        <i className="fa-solid fa-circle-exclamation mr-2"></i>
                        Details
                      </a>
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
