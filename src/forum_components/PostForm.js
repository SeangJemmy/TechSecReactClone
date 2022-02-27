import "../App.css";
import React, { useState } from "react";

import SetRouteTitle from "../components/SetRouteTitle";

function PostForm() {
  SetRouteTitle("TechSec ~ Posting");
  const [file, setFile] = useState("");
  const [checkFile, setCheck] = useState(false);
  const [prev, setPrev] = useState("");
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    const filePreview = URL.createObjectURL(selectedFile);
    setPrev(filePreview);
    setCheck(true);
  };
  const xChange = (e) => {
    setFile("");
    setCheck(false);
  };
  return (
    <div className="m-3">
      <form className="container mx-auto">
        <div className="row mx-auto justify-content-center">
          <div className="col-12 col-md-6 mx-auto justify-content-center row my-1">
            <label className="my-auto col-5 col-md-6 h3 font-weight-bold text-left pl-0 text-lg-center">
              POST TO:
            </label>
            <select className="btn btn-primary m-0 col-5 col-md-6 text-left">
              <option value="news">NEWS</option>
              <option value="customers">CUSTOMERS</option>
              <option value="suppliers">SUPPLIERS</option>
              <option value="products">PRODUCTS</option>
            </select>
          </div>
        </div>
        <div className="row justify-content-center align-items-center mx-auto my-2">
          <input
            className="form-control col-10"
            type="text"
            placeholder="Post Title..."
            aria-label="title"
          />
        </div>
        <div className="row mx-auto justify-content-center my-2">
          <textarea
            className="form-control col-10"
            placeholder="Write something..."
            rows="5"
          ></textarea>
        </div>

        {file && (
          <div className="row mx-auto justify-content-center">
            <img className="col-10 m-0 p-0" alt={file.name} src={prev} />
          </div>
        )}

        <div className="row mx-auto justify-content-between my-2 col-10 p-0">
          <div className="d-flex m-0 p-0">
            <input
              className="forum-img-upload"
              type="file"
              accept="image/*"
              name="upload_img"
              id="upload_img"
              multiple
              onChange={handleImageChange}
            />
            <label
              htmlFor="upload_img"
              className="d-transparent d-flex my-auto"
            >
              <i className="fa fa-images h3 d-flex image-upload-button"></i>
            </label>
            {checkFile && (
              <>
                <input
                  className="forum-img-upload"
                  type="button"
                  id="x-btn"
                  onClick={xChange}
                />
                <label
                  htmlFor="x-btn"
                  className="d-transparent d-flex my-auto ml-3 text-danger"
                >
                  <i className="fa-solid fa-x h3 d-flex x-upload-button"></i>
                </label>
              </>
            )}
          </div>
          <input
            className="forum-img-upload"
            type="submit"
            value="Post"
            id="submitpost"
          />
          <label
            htmlFor="submitpost"
            className="btn btn-success col-5 col-md-4 col-lg-3"
          >
            Post
          </label>
        </div>
      </form>
    </div>
  );
}
export default PostForm;
