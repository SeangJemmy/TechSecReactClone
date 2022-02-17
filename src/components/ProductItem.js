import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

function ProductItem() {
  const url = "https://seangjemmy.github.io/TechSecAPI/db.json";
  const [ProductItemData, setPID] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [catName, setCatName] = useState("Product");
  const [brandName, setBrandName] = useState("All");
  const [list, setList] = useState(ProductItemData);
  const [selectedSort, setSelectedSort] = useState("default");
  const [searchInput, setSearchInput] = useState("");

  const handleSelectCategory = (event) =>
    setSelectedCategory(event.target.value);

  const handleSelectSort = (event) => setSelectedSort(event.target.value);
  const handleSelectBrand = (event) => setSelectedBrand(event.target.value);

  const applyFilters = () => {
    let updatedList = ProductItemData;

    // Category Filter
    if (selectedCategory) {
      if (selectedCategory != "all") {
        updatedList = updatedList.filter(
          (item) => item.product_category === selectedCategory
        );
        setCatName(selectedCategory);
      } else {
        updatedList = ProductItemData;
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
    axios.get(url).then((res) => {
      setPID(res.data.productitems);
    });
  }, []);

  useEffect(() => {
    applyFilters();
  }, [
    ProductItemData,
    selectedCategory,
    selectedBrand,
    selectedSort,
    searchInput,
  ]);

  return (
    <>
      <div className="p-0 m-3">
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
              >
                <option value="all" defaultValue>
                  All
                </option>
                <option value="phone">Phone</option>
                <option value="tablet">Tablet</option>
                <option value="laptop">Laptop</option>
                <option value="charger">Charger</option>
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
              >
                <option value="all" defaultValue>
                  All
                </option>
                <option value="apple">Apple</option>
                <option value="samsung">Samsung</option>
                <option value="huawei">Huawei</option>
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
              >
                <option value="default" defaultValue>
                  Default
                </option>
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
        <div className="container m-0 p-0 mx-auto">
          <div className="row mx-auto p-0 m-0 justify-content-center">
            {list.map((item, index) => {
              return (
                <div className="col-12 col-md-3 p-2 m-0" key={item.product_id}>
                  <div className="card border border-secondary">
                    <img
                      className="card-img-top border-secondary border-bottom"
                      src={item.image}
                      alt=""
                      loading="lazy"
                    />
                    <div className="card-body">
                      <h6 className="font-weight-bold card-title text-center">
                        {item.product_name}
                      </h6>
                      <h4 className="font-weight-bold card-title text-center text-danger">
                        <small>
                          <del>${item.product_price}</del>
                        </small>{" "}
                        ${item.product_discount_price}
                      </h4>
                      <div className="text-center">
                        <a
                          href="#"
                          className="btn btn-warning btn-sm mx-1 my-1"
                        >
                          <i className="fa fa-shopping-cart mr-2"></i>Add to
                          Cart
                        </a>
                        <a
                          href="#"
                          className="btn btn-warning btn-sm mx-1 my-1"
                        >
                          <i className="fa fa-eye mr-2"></i>Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
