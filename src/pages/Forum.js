import "../App.css";
import SetRouteTitle from "../components/SetRouteTitle";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Forum() {
  const navigate = useNavigate();
  const [layout, setLayout] = useState([
    {
      f_id: "f1",
      f_title: "Latest News",
      f_theme: "bg-warning",
      f_title_icon: "fa-solid fa-newspaper",
      f_body_heading: "Posts from the administrators",
      f_body_icon: "fa-solid fa-comments",
      f_body_description:
        "Messages related to the website from the website administrator.",
      f_total_posts: "24",
      f_total_topics: "12",
      f_latest_post_author: "Admin",
      f_latest_post_author_link: "#",
      f_latest_post_content_link: "#",
      f_latest_post_date: "12 Dec 2021",
    },
    {
      f_id: "f2",
      f_title: "Customer",
      f_theme: "bg-primary text-white",
      f_title_icon: "fa-solid fa-users",
      f_body_heading: "Posts from the customers",
      f_body_icon: "fa-solid fa-comments",
      f_body_description:
        "Thanks for providing good platform for buying affordable products!",
      f_total_posts: "24",
      f_total_topics: "12",
      f_latest_post_author: "Anonymous",
      f_latest_post_author_link: "#",
      f_latest_post_content_link: "#",
      f_latest_post_date: "31 Dec 2021",
    },
    {
      f_id: "f3",
      f_title: "Supplier",
      f_theme: "bg-primary text-white",
      f_title_icon: "fa-solid fa-archive",
      f_body_heading: "Posts from the suppliers",
      f_body_icon: "fa-solid fa-comments",
      f_body_description:
        "Thanks for providing good platform for selling products!",
      f_total_posts: "24",
      f_total_topics: "12",
      f_latest_post_author: "Anonymous",
      f_latest_post_author_link: "#",
      f_latest_post_content_link: "#",
      f_latest_post_date: "31 Dec 2021",
    },
    {
      f_id: "f4",
      f_title: "Product",
      f_theme: "bg-primary text-white",
      f_title_icon: "fa-solid fa-newspaper",
      f_body_heading: "Posts about the products",
      f_body_icon: "fa-solid fa-comments",
      f_body_description:
        "More poducts need to be added to your platform! We support your website! Thank you!",
      f_total_posts: "24",
      f_total_topics: "12",
      f_latest_post_author: "Anonymous",
      f_latest_post_author_link: "#",
      f_latest_post_content_link: "#",
      f_latest_post_date: "31 Dec 2021",
    },
  ]);

  SetRouteTitle("TechSec ~ Forum");

  return (
    <div className="m-3">
      <div className="dropdown text-center create-forum-post container my-4">
        <button
          className="btn btn-success"
          type="button"
          onClick={() => {
            navigate("/forum-post");
          }}
        >
          + Create Post Demo
        </button>
      </div>
      <div id="forum-container" className="container-fluid p-0 m-0">
        {layout?.map((data) => {
          return (
            <div key={data.f_id}>
              <div className="container border border-dark m-0 p-0 mx-auto">
                <div className="row p-0 m-0 border-bottom border-dark">
                  <div id={data.f_id} className="col-12 p-0 m-0">
                    <h2
                      className={`${data.f_theme} p-2 m-0 d-flex justify-content-center`}
                    >
                      <i
                        className={`d-flex my-auto mr-3 ${data.f_title_icon}`}
                      ></i>
                      {data.f_title}
                    </h2>
                  </div>
                </div>
                <div className="row p-3 m-0">
                  <div className="col-12 col-md-6 col-lg-8 m-0 p-0 mb-3">
                    <div className="wrap-col">
                      <h4 className="text-center">
                        <i className={`${data.f_body_icon}`}></i>&nbsp;
                        <a href="forumpages/Adminposts.html">
                          {data.f_body_heading}
                        </a>
                      </h4>
                      <p className="m-0">
                        &emsp;&emsp;{data.f_body_description}
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-3 col-lg-2 m-0 p-0">
                    <div className="wrap-col wrap-border text-center">
                      <div className="m-0 p-0">
                        <i className="fa-regular fa-clipboard mb-2"></i>&emsp;
                        {data.f_total_posts} Posts
                        <br />
                        <i className="fa-regular fa-lightbulb"></i>&emsp;
                        {data.f_total_topics} Topics
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-3 col-lg-2 m-0 p-0 text-center">
                    <div className="wrap-col">
                      <div className="m-0">
                        <b>
                          <a
                            id="forum-alink"
                            href={data.f_latest_post_content_link}
                          >
                            Last post
                          </a>
                        </b>
                        &nbsp;by
                        <br />
                        <i className="fa-solid fa-user mr-2"></i>
                        <a href={data.f_latest_post_author_link}>
                          {data.f_latest_post_author}
                        </a>
                        <br />
                        on <small>{data.f_latest_post_date}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="forum-hr" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forum;
