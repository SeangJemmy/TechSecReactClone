import React, { useState } from "react";
import "../App.css";

function SupplierPost() {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState("");

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    const fileURL = URL.createObjectURL(selectedFile);
    setFile(fileURL);
  };

  const handleDelete = (e) => {
    setFile("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  return (
    <div className="m-3 my-5">
      <form
        className="container justify-content-center"
        onSubmit={handleSubmit}
      >
        <div className="row jemmy my-4">
          <div className="h3 font-weight-bold text-center col my-auto">
            Supplier Product detail
          </div>
        </div>

        <div className="row justify-content-center jemmy my-3">
          <label
            htmlFor="title"
            className="col-4 col-md-2 col-lg-2 m-0 my-auto"
          >
            Product Title
          </label>
          <div className="col-8 col-md-6 col-lg-5 m-0 p-0 my-auto">
            <input
              required
              type="text"
              className="form-control m-0"
              id="title"
              placeholder="Enter prodcut name..."
            />
          </div>
        </div>

        <div className="row justify-content-center jemmy my-3">
          <label htmlFor="cate" className="col-4 col-md-2 col-lg-2 m-0 my-auto">
            Product Category
          </label>
          <div className="col-8 col-md-6 col-lg-5 m-0 p-0 my-auto">
            <select required className="custom-select m-0" id="cate">
              <option value="">Choose...</option>
              <option value="1">Phone</option>
              <option value="2">Tablet</option>
              <option value="3">Laptop</option>
              <option value="4">Accessories</option>
              <option value="5">Others</option>
            </select>
          </div>
        </div>

        <div className="row justify-content-center jemmy my-3">
          <label
            htmlFor="brand"
            className="col-4 col-md-2 col-lg-2 m-0 my-auto"
          >
            Product Brand
          </label>
          <div className="col-8 col-md-6 col-lg-5 m-0 p-0 my-auto">
            <select required className="custom-select m-0" id="brand">
              <option value="">Choose...</option>
              <option value="1">Apple</option>
              <option value="2">Huawei</option>
              <option value="3">Samsung</option>
              <option value="4">Microsoft</option>
              <option value="5">Dell</option>
              <option value="6">Sony</option>
              <option value="7">HP</option>
              <option value="8">Others</option>
            </select>
          </div>
        </div>

        <div className="row justify-content-center jemmy my-3">
          <label
            htmlFor="price"
            className="col-4 col-md-2 col-lg-2 m-0 my-auto"
          >
            Product Price
          </label>
          <div className="col-8 col-md-6 col-lg-5 m-0 p-0 my-auto">
            <input
              required
              type="number"
              className="form-control m-0"
              id="price"
              placeholder="Enter product price..."
            />
          </div>
        </div>

        <div className="row justify-content-center jemmy my-3">
          <label
            htmlFor="supname"
            className="col-4 col-md-2 col-lg-2 m-0 my-auto"
          >
            Supplier Name
          </label>
          <div className="col-8 col-md-6 col-lg-5 m-0 p-0 my-auto">
            <input
              required
              type="text"
              className="form-control m-0"
              id="supname"
              placeholder="Enter your full name..."
            />
          </div>
        </div>

        <div className="row justify-content-center jemmy my-3">
          <label
            htmlFor="suppref"
            className="col-4 col-md-2 col-lg-2 m-0 my-auto"
          >
            Supplier Preference
          </label>
          <div className="col-8 col-md-6 col-lg-5 m-0 p-0 my-auto">
            <select required className="custom-select m-0" id="suppref">
              <option value="">Choose...</option>
              <option value="1">Agent</option>
              <option value="2">Seller</option>
            </select>
          </div>
        </div>

        <div className="row justify-content-center jemmy my-3">
          <label
            htmlFor="website"
            className="col-4 col-md-2 col-lg-2 m-0 my-auto"
          >
            Source Website
          </label>
          <div className="col-8 col-md-6 col-lg-5 m-0 p-0 my-auto">
            <input
              required
              type="text"
              className="form-control m-0"
              id="website"
              placeholder="Example: https://techsec.cf"
            />
          </div>
        </div>

        <div className="row justify-content-center jemmy my-3">
          <label
            htmlFor="swebsite"
            className="col-4 col-md-2 col-lg-2 m-0 my-auto"
          >
            Social Source
          </label>
          <div className="col-8 col-md-6 col-lg-5 m-0 p-0 my-auto">
            <input
              required
              type="text"
              className="form-control m-0"
              id="swebsite"
              placeholder="Example: https://facebook.com/techsec"
            />
          </div>
        </div>

        <div className="row justify-content-center jemmy my-3">
          <label htmlFor="detail" className="col-4 col-md-2 col-lg-2 m-0 mt-1">
            Product Detail
          </label>
          <div className="col-8 col-md-6 col-lg-5 m-0 p-0 my-auto">
            <textarea
              required
              className="form-control m-0"
              id="detail"
              placeholder="Enter Your Product Name"
              rows="3"
            ></textarea>
          </div>
        </div>

        <div className="row justify-content-center jemmy my-3">
          <label htmlFor="none" className="col-4 col-md-2 col-lg-2 m-0 mt-1">
            Image File
          </label>
          <div className="col-8 col-md-6 col-lg-5 m-0 p-0 my-auto">
            {file ? (
              <div className="col-12 mx-auto m-0 p-0">
                <img
                  className="col-12 mx-auto m-0 p-0"
                  alt="uploaded"
                  src={file}
                />
                <i
                  className="fa-solid fa-xmark image-delete"
                  onClick={handleDelete}
                ></i>
              </div>
            ) : (
              <div className="m-0 p-0 d-flex">
                <input
                  className="d-none"
                  accept="image/*"
                  id="img"
                  type="file"
                  required
                  onChange={handleImageChange}
                />
                <label htmlFor="img" className="m-0 p-0">
                  <i className="fa fa-image h3 d-flex image-upload-button m-0 p-0"></i>
                </label>
                <small className="d-flex m-0 p-1 ml-2 font-italic">
                  Prefered Size: 600x600 pixels
                </small>
              </div>
            )}
          </div>
        </div>

        <div className="row jemmy my-4">
          <input
            type="submit"
            className="btn btn-primary col-4 col-md-3 col-lg-2 mx-auto"
            value={!isLoading ? "Submit" : "Submitting..."}
            disabled={isLoading}
          />
        </div>
      </form>
    </div>
  );
}
export default SupplierPost;
