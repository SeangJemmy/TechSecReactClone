import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import SetRouteTitle from "../components/SetRouteTitle";

function ForumPost() {
  SetRouteTitle("Forum ~ Demo Post");
  const postArray = [
    {
      status: "fa-fire-flame-curved",
      subject: "Testing heading XYZ",
      username: "User",
      views: "5000",
      replies: "50",
      last_reply: "12-Dec-2021",
    },
    {
      status: "fa-check",
      subject: "Testing heading XYZ",
      username: "User-A",
      views: "5000",
      replies: "50",
      last_reply: "12-Dec-2021",
    },
    {
      status: "fa-question",
      subject: "Testing heading XYZ",
      username: "User-B",
      views: "5000",
      replies: "50",
      last_reply: "12-Dec-2021",
    },
    {
      status: "fa-thumbs-up",
      subject: "Testing heading XYZ",
      username: "User-C",
      views: "5000",
      replies: "50",
      last_reply: "12-Dec-2021",
    },
    {
      status: "fa-face-smile-beam",
      subject: "Testing heading XYZ",
      username: "User-D",
      views: "5000",
      replies: "50",
      last_reply: "12-Dec-2021",
    },
  ];

  return (
    <div className="m-3">
      <div className="container-fluid">
        <div className="row m-0 p-0">
          <div className="col-12 row justify-content-center m-0 p-0 my-3">
            <Link
              to="/forum"
              className="h3 d-flex text-primary font-weight-bold"
            >
              Forum
            </Link>
            <div className="h3 d-flex mx-3 font-weight-bold">&gt;&gt;</div>
            <div className="h3 d-flex font-weight-bold">Demo Post</div>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-hover forum-table">
            <thead>
              <tr className="text-center bg-primary text-white">
                <th scope="col">#</th>
                <th scope="col">Subject</th>
                <th scope="col">
                  <small className="font-weight-bold">Replies/Views</small>
                </th>
                <th scope="col">
                  <small className="font-weight-bold">Last Reply</small>
                </th>
              </tr>
            </thead>
            <tbody className="f-table-body bg-white">
              {postArray.map((d, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <i className={`fa-solid ${d.status} h3`}></i>
                    </td>
                    <td>
                      <p className="font-weight-bold">
                        <Link to="/forum/latestnews/post">{d.subject}</Link>
                      </p>
                      <p>
                        <small>by {d.username}</small>
                      </p>
                    </td>
                    <td>
                      {d.replies} <strong>/</strong> {d.views}
                    </td>
                    <td>{d.last_reply}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div id="pagination-post" className="pagination">
          Pages:&ensp;
          <Link to="#">1</Link>&ensp;
          <Link to="#">2</Link>&ensp;
          <Link to="#">3</Link>&ensp;
        </div>
      </div>
    </div>
  );
}
export default ForumPost;
