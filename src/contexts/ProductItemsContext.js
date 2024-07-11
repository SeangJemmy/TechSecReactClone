import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../api/axios";

const ListContext = createContext({
  productData: [],
  setPD: () => {},
});

export function GetProductData() {
  return useContext(ListContext);
}

export const ListContextProvider = ({ children }) => {
  const [productData, setPD] = useState([]);

 useEffect(() => {
    fetch('/db.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPD(data.productitems);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        alert(
          `There was a problem retrieving data from the server. Try reloading your browser! Error: ${error.message}`
        );
      });
  }, []);
  
  // useEffect(() => {
  //   api
  //     .get()
  //     .then((res) => {
  //       setPD(() => res.data.productitems);
  //       console.log("API Responded: " + Date());
  //     })
  //     .catch((er) => {
        // alert(
        //   `There was a problem retreiving data from api server. Try reloading your browser! ~TechSec\nError Code: ${er}`
        // );
  //       console.log(er);
  //     });
  // }, []);

  return (
    <ListContext.Provider value={{ productData, setPD }}>
      {children}
    </ListContext.Provider>
  );
};
