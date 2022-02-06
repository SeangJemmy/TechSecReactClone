import "../App.css";
import $ from "jquery";

function Contact() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycby75WYTTkujAfBz8-m6PewwIVClpquBQBzpZNJ7kFb3YfjhV8oZWS9LSgWWo4tOefTF/exec";
  const form = document.forms["techsec-form"];

  const handleSubmit = (e) => {
    e.preventDefault();
    $("#submit-date").val(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
    );

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        console.log("Successfully submited!", response);
        alert("Successfully submited your contact information!");
        $("#techsec-form").trigger("reset");
      })
      .catch((error) => {
        console.error("Error!", error.message);
        alert("Error submitting your contact information!");
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 mx-auto text-center">
          <form name="techsec-form" id="techsec-form" onSubmit={handleSubmit}>
            <div>
              <h2 className="mt-4 mb-4">Contact Us</h2>
            </div>

            <label htmlFor="fullname" className="sr-only">
              Full name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="form-control mb-1"
              placeholder="Full Name*"
              minLength="5"
              required
              autoFocus
            />

            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="form-control mb-1"
              placeholder="Username"
              minLength="5"
            />

            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control mb-1"
              placeholder="Email Address*"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              required
            />

            <select
              className="form-control mb-1"
              id="preference"
              name="preference"
              required
            >
              <option value="customer">Customer</option>
              <option value="supplier">Supplier</option>
              <option defaultValue="guest">Guest</option>
            </select>

            <textarea
              className="form-control text-left"
              id="description"
              name="description"
              rows="7"
              defaultValue=""
              placeholder="Describe your concerns*"
              required
            ></textarea>

            <div className="checkbox mt-2 mb-1">
              <label>
                <input type="checkbox" value="agree" required /> I'm not a
                robot*
              </label>
            </div>
            <input name="submit-date" id="submit-date" className="d-none" />
            <div className="mt-1 mb-4">
              <button type="submit" className="btn btn-lg btn-block btn-info">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
