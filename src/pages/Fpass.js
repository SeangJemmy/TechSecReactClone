import "../App.css";
import SetRouteTitle from "../components/SetRouteTitle";

function Fpass() {
  SetRouteTitle("TechSec ~ Forgot Password");
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
              <h4 className="font-weight-normal mb-3">Forgot Password</h4>
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
              autoFocus
            />

            <div className="checkbox mt-2">
              <label>
                <input type="checkbox" value="notrobot" required /> I'm not a
                robot
              </label>
            </div>
            <div className="mt-1">
              <button
                type="submit"
                className="btn btn-lg btn-block btn-primary"
              >
                Reset
              </button>
            </div>
            <div className="mt-1 mb-4">
              Back to <a href="/login"> Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Fpass;
