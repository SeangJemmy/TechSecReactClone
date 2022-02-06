import "../App.css";

function Login() {
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
            <label for="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="form-control mb-1"
              placeholder="Email Address"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              required
              autofocus
            />

            <label for="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              minlength="8"
              required
            />
            <div className="checkbox mt-1">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <div className="mt-2">
              <button
                type="submit"
                className="btn btn-lg btn-block btn-primary"
              >
                Login
              </button>
            </div>
            <div className="mt-1 mb-4">
              <a href="/fpass">Forgot password?</a>
              <p>
                Not a member? <a href="/signup">Sign up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
