import React, { createContext, useState, useEffect } from "react";
import api from "../api/axios";

export const ListContext = createContext({
  productData: null,
  setPD: (data) => {},
});

export const ListContextProvider = ({ children }) => {
  const [productData, setPD] = useState(
    null
    //   [
    //   {
    //     product_id: "001",
    //     product_name: "Reload Your Browser",
    //     product_category: "phone",
    //     product_price: "0",
    //     product_discount_price: "0",
    //     image: "./logo512.png",
    //     product_brand: "apple",
    //     product_verified: "true",
    //   },
    // ]
  );

  useEffect(() => {
    api
      .get(``)
      .then((res) => {
        setPD(res.data.productitems);
      })
      .catch((er) => console.log(er));
  }, []);

  return (
    <ListContext.Provider value={{ productData, setPD }}>
      {children}
    </ListContext.Provider>
  );
};
