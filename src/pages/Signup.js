import "../App.css";
import SetRouteTitle from "../components/SetRouteTitle";

function Signup() {
  SetRouteTitle("TechSec ~ Sign Up");
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 col-sm-6 col-md-4 col-lg-4 col-xl-2 mx-auto text-center">
          <form>
            <div className="p-3">
              <a className="logo" href="./">
                <img
                  alt=""
                  className="mt-3 mb-3"
                  loading="lazy"
                  src="./images/logo.svg"
                  height="auto"
                />
              </a>
            </div>
            <div>
              <h4 className="font-weight-normal mb-3">Sign Up</h4>
            </div>

            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control mb-1"
              placeholder="Username"
              minLength="5"
              required
              autoFocus
            />

            <div className="font-weight-bold">
              <label className="mr-3">
                <input
                  name="type"
                  type="radio"
                  id="customer"
                  value="Customer"
                  readOnly
                  defaultChecked
                />{" "}
                Customer
              </label>

              <label>
                <input
                  name="type"
                  type="radio"
                  id="supplier"
                  value="Supplier"
                />{" "}
                Supplier
              </label>
            </div>

            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="form-control mb-1"
              placeholder="Email Address"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              required
            />

            <label htmlFor="cemail" className="sr-only">
              Confirm email address
            </label>
            <input
              type="cemail"
              id="cemail"
              className="form-control mb-1"
              placeholder="Confirm Email Address"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              required
            />

            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control mb-1"
              placeholder="Password"
              minLength="8"
              required
            />

            <label htmlFor="cpassword" className="sr-only">
              Confirm Password
            </label>
            <input
              type="cpassword"
              id="cpassword"
              className="form-control mb-1"
              placeholder="Confirm Password"
              minLength="8"
              required
            />

            <div className="checkbox mt-2 mb-3">
              <label>
                <input type="checkbox" value="agree" required /> I agree to the
                <a href="/termsofservice"> Terms of Service</a> &{" "}
                <a href="/privacypolicy">Privacy Policy</a>.
              </label>
            </div>
            <div className="mt-1">
              <button
                type="submit"
                className="btn btn-lg btn-block btn-success"
              >
                Sign Up
              </button>
            </div>
            <div className="mt-1 mb-4">
              Already have an account? <a href="/login"> Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
