import React, { useState, useEffect } from "react";
import "../App.css";
import ProductItemMap from "./ProductItemMap";

function FilterMenu(props) {
  const [list, setList] = useState(props.data);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [catName, setCatName] = useState("Product");
  const [brandName, setBrandName] = useState("All");

  const [selectedSort, setSelectedSort] = useState("default");
  const [searchInput, setSearchInput] = useState("");

  const handleSelectCategory = (event) =>
    setSelectedCategory(event.target.value);

  const handleSelectSort = (event) => setSelectedSort(event.target.value);
  const handleSelectBrand = (event) => setSelectedBrand(event.target.value);

  const applyFilters = () => {
    let updatedList = props.data;

    // Category Filter
    if (selectedCategory) {
      if (selectedCategory != "all") {
        updatedList = updatedList.filter(
          (item) => item.product_category === selectedCategory
        );
        setCatName(selectedCategory);
      } else {
        setCatName("Product");
      }
    }

    // Brand Filter
    if (selectedBrand) {
      if (selectedBrand != "all") {
        updatedList = updatedList.filter(
          (item) => item.product_brand === selectedBrand
        );
        setBrandName(selectedBrand);
      } else {
        setBrandName("All");
      }
    }

    // Sorting Filter
    if (selectedSort) {
      if (selectedSort == "asc") {
        updatedList = updatedList.sort((a, b) =>
          a.product_name.toLowerCase() > b.product_name.toLowerCase() ? 1 : -1
        );
      }
      if (selectedSort == "desc") {
        updatedList = updatedList.sort((a, b) =>
          a.product_name.toLowerCase() < b.product_name.toLowerCase() ? 1 : -1
        );
      }
      if (selectedSort == "default") {
        updatedList = updatedList.sort((a, b) =>
          a.product_id > b.product_id ? 1 : -1
        );
      }
      if (selectedSort == "recent") {
        updatedList = updatedList.sort((a, b) =>
          a.product_id < b.product_id ? 1 : -1
        );
      }
      if (selectedSort == "high") {
        updatedList = updatedList.sort(
          (a, b) => b.product_discount_price - a.product_discount_price
        );
      }
      if (selectedSort == "low") {
        updatedList = updatedList.sort(
          (a, b) => a.product_discount_price - b.product_discount_price
        );
      }
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.product_name
            .toLowerCase()
            .search(searchInput.toLowerCase().trim()) !== -1
      );
    }

    // Verified Products Only
    updatedList = updatedList.filter(
      (item) => item.product_verified === "true"
    );

    setList(updatedList);
  };

  useEffect(() => {
    applyFilters();
  }, [props.data, selectedCategory, selectedBrand, selectedSort, searchInput]);

  return (
    <>
      <form className="container m-0 p-0 justify-content-center mx-auto">
        <div className="row mx-auto justify-content-center my-2">
          <div className="col-12 col-lg-4 mx-auto justify-content-center row my-1">
            <label className="my-auto col-5 col-lg- h5 font-weight-bold text-left pl-0 text-lg-center">
              {" "}
              Category:{" "}
            </label>
            <select
              className="searchCat btn m-0 col-5 col-lg- text-left"
              onChange={handleSelectCategory}
              value={selectedCategory}
            >
              <option value="all">All</option>
              <option value="phone">Phone</option>
              <option value="tablet">Tablet</option>
              <option value="laptop">Laptop</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>

          <div className="col-12 col-lg-4 mx-auto justify-content-center row my-1">
            <label className="my-auto col-5 col-lg- h5 font-weight-bold text-left pl-0 text-lg-center">
              {" "}
              Brand:{" "}
            </label>
            <select
              className="searchBrand btn m-0 col-5 col-lg- text-left"
              onChange={handleSelectBrand}
              value={selectedBrand}
            >
              <option value="all">All</option>
              <option value="apple">Apple</option>
              <option value="samsung">Samsung</option>
              <option value="huawei">Huawei</option>
              <option value="microsoft">Microsoft</option>
              <option value="dell">Dell</option>
              <option value="sony">Sony</option>
              <option value="hp">HP</option>
            </select>
          </div>

          <div className="col-12 col-lg-4 mx-auto justify-content-center row my-1">
            <label className="my-auto col-5 col-lg- h5 font-weight-bold text-left pl-0 text-lg-center">
              {" "}
              Sort:{" "}
            </label>
            <select
              className="searchSort btn m-0 col-5 col-lg- text-left"
              onChange={handleSelectSort}
              value={selectedSort}
            >
              <option value="default">Default</option>
              <option value="recent">Recent</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
              <option value="high">Highest</option>
              <option value="low">Lowest</option>
            </select>
          </div>
        </div>

        <div className="row justify-content-center align-items-center mx-auto my-2">
          <input
            className="form-control col-11"
            type="search"
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Enter product name..."
            aria-label="Search"
          />
        </div>
      </form>

      <h2 className="font-weight-bold text-center mt-4 text-capitalize">
        Showing {brandName} Available {catName}
      </h2>

      <hr className="product-hr" />

      <ProductItemMap data={list} />
    </>
  );
}

export default FilterMenu;
