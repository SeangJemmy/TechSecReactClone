import "../App.css";
import $ from "jquery";
import SetRouteTitle from "../components/SetRouteTitle";
import { useState } from "react";

function Contact() {
  SetRouteTitle("TechSec ~ Contact Us");

  const [pvalue, setPValue] = useState("");
  const [isSubmitting, setSubmit] = useState(false);

  const handlePValue = (event) => setPValue(event.target.value);

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbycquZa6k1H3NoqsgmqXWv0PljHtVWyzG_63_ST4TEElzb6YPI2rJuHn6EmkRk9pnWP/exec";
  const form = document.forms["techsec-form"];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isSubmitting) {
      setSubmit((prev) => true);
      $("#submitdate").val(
        new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
      );

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          setTimeout(() => {
            $("#techsec-form").trigger("reset");
            console.log("Successfully submited!", response);
            alert("Successfully submited your contact information!");
            setSubmit((prev) => false);
          }, 3000);
        })
        .catch((error) => {
          console.error("Error!", error.message);
          alert("There was an error submitting your contact information!");
          setSubmit((prev) => false);
        });

      return;
    }

    alert("Your information is being submitted! Please stand by...");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 mx-auto text-center">
          <form name="techsec-form" id="techsec-form" onSubmit={handleSubmit}>
            <div>
              <h2 className="mt-4 mb-4">Contact Us</h2>
            </div>

            <label className="sr-only">Full name</label>
            <input
              name="Fullname"
              type="text"
              id="fullname"
              className="form-control mb-1"
              placeholder="Full Name*"
              minLength="5"
              required
            />

            <label className="sr-only">Username</label>
            <input
              name="Username"
              type="text"
              id="username"
              className="form-control mb-1"
              placeholder="Username"
              minLength="5"
            />

            <label className="sr-only">Email address</label>
            <input
              name="Email"
              type="email"
              id="email"
              className="form-control mb-1"
              placeholder="Email Address*"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              required
            />

            <select
              name="Preference"
              className="form-control mb-1"
              id="preference"
              onChange={handlePValue}
              value={pvalue}
              required
            >
              <option value="">Select Your Preference</option>
              <option value="guest">Guest</option>
              <option value="customer">Customer</option>
              <option value="supplier">Supplier</option>
            </select>

            <textarea
              name="Description"
              className="form-control text-left"
              id="description"
              rows="7"
              defaultValue=""
              placeholder="Describe your concerns*"
              required
            ></textarea>

            <div className="checkbox mt-2 mb-1">
              <label>
                <input
                  name="Notrobot"
                  id="notrobot"
                  type="checkbox"
                  value="Agree"
                  required
                />{" "}
                I'm not a robot*
              </label>
            </div>
            <input name="Submitdate" id="submitdate" className="d-none" />
            <div className="mt-1 mb-4">
              <input
                name="submitbtn"
                id="submitbtn"
                type="submit"
                className="btn btn-lg btn-block btn-info"
                value={isSubmitting ? "Submitting..." : "Submit"}
                disabled={isSubmitting}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
