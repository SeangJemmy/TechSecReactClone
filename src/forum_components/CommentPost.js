import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function CommentPost() {
  const [isShowComment, setIsShowComment] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="m-3">
      <div className="ml-2 p-0 my-3">
        <Link
          to="/forum/latestnews"
          className="d-flex text-primary font-weight-bold back-btn"
        >
          <i className="fa-solid fa-arrow-left mr-1 my-auto h3"></i>
          <span className="text-left h3 my-auto">Back</span>
        </Link>
      </div>
      <div className="container border border-secondary bg-light">
        <div className="row d-flex justify-content-left ml-1">
          <div className="col-12 m-0 my-3">
            <img
              loading="lazy"
              src="./images/deal.png"
              alt=""
              className="rounded float-start forum-post-circle mx-2"
            />
            <span className="font-weight-bold h5 mx-2">Username</span>
            <span className="text-center mx-2 font-italic">
              Posted on: 23/07/2022
            </span>
          </div>
        </div>
        <div className="row d-flex justify-content-left mx-auto px-2">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </div>
        <div className="row m-0 p-0 my-3 px-2">
          <div className="col-6 col-md-4 col-lg-3 m-0 p-1">
            <img
              loading="lazy"
              src="./images/stress.png"
              alt=""
              className="col-12 m-0 p-0 border border-secondary"
            />
          </div>
          <div className="col-6 col-md-4 col-lg-3 m-0 p-1">
            <img
              loading="lazy"
              src="./images/stress.png"
              alt=""
              className="col-12 m-0 p-0 border border-secondary"
            />
          </div>
        </div>
        <div className="container m-0 p-0">
          <div
            className={`${
              isShowComment ? "border-bottom" : ""
            } row m-0 mt-3 p-0 border-top border-secondary post-footer-banner p-1`}
          >
            <div className="col-4 col-md-4 text-center p-1">
              <i className="fa-solid fa-thumbs-up mr-1"></i>
              <span>Like</span>
            </div>
            <div
              className="col-4 col-md-4 text-center p-1"
              onClick={() => setIsShowComment(!isShowComment)}
            >
              <i className="fa-solid fa-comment mr-1"></i>
              <span>Comment</span>
            </div>
            <div className="col-4 col-md-4 text-center p-1">
              <i className="fa-solid fa-share mr-1"></i>
              <span>Share</span>
            </div>
          </div>
        </div>

        {isShowComment && (
          <>
            <div className="container m-0 p-0">
              <div className="row my-3">
                <form
                  className="col-12 row mx-auto justify-content-center"
                  onSubmit={handleSubmit}
                >
                  <img
                    src="./images/deal.png"
                    alt=""
                    className="profile-small col- m-0 mr-2"
                  />
                  <div className="col-10 col-lg-11 p-0 comment-wrap">
                    <button className="btn send-comment-btn btn-primary d-flex m-0 p-0">
                      <i className="fa-solid fa-arrow-right p-auto m-auto"></i>
                    </button>
                    <input
                      type="text"
                      className="form-control comment-post m-0"
                      id="comment"
                      aria-describedby="comment"
                      placeholder="Write a comment..."
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="m-3">
              <div className="container border border-secondary border-round">
                <div className="row m-0 p-0">
                  <div className="col-12 col-md-4 m-0 p-0">
                    <img
                      loading="lazy"
                      src="./images/deal.png"
                      alt=""
                      className="rounded float-start profile-small m-2"
                    />
                    <span className="m-2">Username</span>
                    <span className="text-center mx-2 font-italic">
                      24/07/2022
                    </span>
                  </div>
                </div>
                <div className="row m-0 p-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <div className="row m-0 mt-2 p-0 border-top border-secondary post-footer-banner p-1">
                  <div className="col-6 text-center p-1">
                    <i className="fa-solid fa-thumbs-up mr-1"></i>
                    <span>Like</span>
                  </div>
                  <div className="col-6 text-center p-1">
                    <i className="fa-solid fa-comment mr-1"></i>
                    <span>Reply</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default CommentPost;
