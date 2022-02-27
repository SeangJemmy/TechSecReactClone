import "../App.css";
import React, { useState } from "react";

import SetRouteTitle from "../components/SetRouteTitle";

function PostForm() {
  SetRouteTitle("TechSec ~ Posting");
  const [file, setFile] = useState([]);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files;
    var fileList = [];
    for (var i = 0; i < selectedFile.length; i++) {
      fileList.push({
        name: selectedFile[i].name,
        url: URL.createObjectURL(selectedFile[i]),
        file: selectedFile[i],
      });
    }
    setFile(fileList);
  };

  const handleRemoveItem = (i) => {
    const temp = [...file];
    temp.splice(i, 1);
    setFile(temp);
  };

  const xChange = (e) => {
    setFile([]);
  };

  const submitPostHandler = (e) => {
    e.preventDefault();
    var status = document.getElementById("submitpost-label");
    status.innerHTML = "Posting...";
    setTimeout(() => {
      alert("Successfully Posted!");
      status.innerHTML = "Post";
      e.target.reset();
      setFile([]);
    }, 3000);
  };

  return (
    <div className="m-3">
      <form className="container mx-auto" onSubmit={submitPostHandler}>
        <div className="row mx-auto justify-content-center mb-3">
          <div className="col-12 col-md-6 mx-auto justify-content-center row my-1">
            <label className="my-auto col-6 col-md-6 h4 font-weight-bold text-left pl-0 text-lg-center">
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
            className="form-control col-12"
            type="text"
            placeholder="Post Title..."
            aria-label="title"
            required
          />
        </div>
        <div className="row mx-auto justify-content-center my-2">
          <textarea
            className="form-control col-12"
            placeholder="Write something..."
            rows="5"
            required
          ></textarea>
        </div>
        <div className="m-0 p-0 row mx-auto">
          {file.length !== 0 &&
            file.map((d, i) => {
              return (
                <div className="m-0 p-1 col-6 col-md-4 col-lg-3 my-1" key={i}>
                  <div className="m-0 p-0 f-img-container border border-secondary">
                    <img className="col-12 m-0 p-0 " alt={d.name} src={d.url} />
                    <i
                      className="fa-solid fa-xmark image-delete"
                      onClick={() => {
                        handleRemoveItem(i);
                      }}
                    ></i>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="row mx-auto justify-content-between my-2 col-12 p-0">
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
            {file.length !== 0 && (
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
            id="submitpost-label"
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
