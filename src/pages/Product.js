import "../App.css";
import FilterMenu from "../components/FilterMenu";
import SetRouteTitle from "../components/SetRouteTitle";
import api from "../api/axios";
import React, { useEffect, useState } from "react";

function Product() {
  SetRouteTitle("TechSec ~ Products");

  const [ProductItemData, setPID] = useState([]);

  async function fetchData() {
    try {
      const res = await api.get(``);
      setPID(res.data.productitems);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="m-3">
      <FilterMenu data={ProductItemData} />
    </div>
  );
}

export default Product;
