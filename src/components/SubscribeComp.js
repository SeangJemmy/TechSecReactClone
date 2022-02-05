import React, { Component } from "react";
import "../App.css";
import {
  Navbar,
  Nav,
  NavDropdowwn,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import $ from "jquery";

function valEmail(email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test(email);
}

function SubscribeComp() {
  const subemailform = document.forms["subscribe-email-form"];
  const subemailURL =
    "https://script.google.com/macros/s/AKfycbyzrgLU9rhsxo7GxFsUpXCi6P6ASil8RJk_GsWFo3sNPMNOocIhwbKLYmw8s-3wyQE/exec";

  const handleSubmit = (e) => {
    e.preventDefault();
    var subEm = $("#subscribe-email").val();
    if (!subEm || !valEmail(subEm)) {
      alert("You need to enter a valid email address!");
    } else {
      fetch(subemailURL, { method: "POST", body: new FormData(subemailform) })
        .then((response) => console.log("Success!", response))
        .catch((error) => console.error("Error!", error.message));
      alert(
        `You have successfully subscribed to our newsletter using email:\n - ${subEm}\n\nThank you for joining our service!\n~ TecSec`
      );
      $("#subscribe-email").val("");
    }
  };

  return (
    <form
      className="form-inline my-2"
      name="subscribe-email-form"
      onSubmit={handleSubmit}
    >
      <div className="container my-3">
        <div className="row mx-auto justify-content-center">
          <input
            name="subscribe-email"
            id="subscribe-email"
            className="form-control col-9 col-md-6"
            type="email"
            placeholder="Email"
            aria-label="Email"
          />
          <button
            className="btn btn-warning col-2 col-md-1 col-lg-1 ml-1"
            type="submit"
            id="subscribeEmail"
          >
            <img src="./images/arrow-filled.png" width="15px" />
          </button>
        </div>
      </div>
    </form>
  );
}

export default SubscribeComp;
