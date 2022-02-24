import React, { createContext, useState, useEffect } from "react";
import api from "../api/axios";

export const ListContext = createContext({
  productData: [],
  setPD: (data) => {},
});

export const ListContextProvider = ({ children }) => {
  const [productData, setPD] = useState([]);

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
