import "../App.css";
import SetRouteTitle from "../components/SetRouteTitle";
import { Link } from "react-router-dom";
import React, { useReducer } from "react";

function LoginReducer(state, action) {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case "ensure-username": {
      return {
        ...state,
        username: action.name,
      };
    }
    case "login": {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case "success": {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        password: "",
      };
    }
    case "error": {
      return {
        ...state,
        error: "Incorrect Username or Password",
        isLoading: false,
        password: "",
      };
    }
    case "logout": {
      return {
        ...initialState,
      };
    }
    case "logout-rem": {
      return {
        ...state,
        isLoggedIn: false,
      };
    }

    default:
      break;
  }
  return state;
}

const initialState = {
  username: "",
  password: "",
  error: "",
  isLoading: false,
  isLoggedIn: false,
  isRem: false,
};

function Login() {
  SetRouteTitle("TechSec ~ Login");
  const userPass = [
    {
      user: "admin",
      email: "admin@techsec.cf",
      pass: "admin123",
    },
  ];
  const [state, dispatch] = useReducer(LoginReducer, initialState);
  const { username, password, error, isLoading, isLoggedIn, isRem } = state;
  const lowerCase = (props) => {
    return props.toString().toLowerCase();
  };

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "login" });
    setTimeout(() => {
      if (
        lowerCase(e.target.elements.username.value) === userPass[0].user ||
        lowerCase(e.target.elements.username.value) === userPass[0].email
      ) {
        if (e.target.elements.password.value === userPass[0].pass) {
          dispatch({ type: "ensure-username", name: `${userPass[0].user}` });
          dispatch({ type: "success" });
          console.log("Success");
          return;
        }
      }
      dispatch({ type: "error" });
    }, 3000);
  };

  const handleInput = (e) => {
    dispatch({
      type: "field",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleChecked = (e) => {
    dispatch({
      type: "field",
      field: e.target.name,
      value: e.target.checked,
    });
  };

  const handleLogout = () => {
    if (isRem) {
      dispatch({ type: "logout-rem" });
      return;
    }
    dispatch({ type: "logout" });
  };

  return (
    <div className="m-3">
      <div className="container-fluid">
        <div className="row">
          {isLoggedIn ? (
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 mx-auto text-center">
              <h1>
                Welcome <span className="h1 text-primary">{username}</span>!
              </h1>
              <button
                className="btn btn-lg btn-secondary"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="col-10 col-sm-6 col-md-4 col-lg-4 col-xl-2 mx-auto text-center">
              <form onSubmit={loginHandler}>
                <div className="p-3">
                  <Link className="logo" to="/">
                    <img
                      alt=""
                      className="mt-3 mb-3"
                      loading="lazy"
                      src="./images/logo.svg"
                      height="auto"
                    />
                  </Link>
                </div>

                <input
                  type="text"
                  name="username"
                  className="form-control mb-1"
                  placeholder="Username / Email"
                  required
                  onChange={handleInput}
                  value={username}
                />

                <input
                  name="password"
                  value={password}
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  minLength="8"
                  required
                  onChange={handleInput}
                />
                {error && <small className="text-danger">{error}</small>}
                <div className="checkbox mt-1">
                  <label>
                    <input
                      type="checkbox"
                      name="isRem"
                      defaultChecked={isRem}
                      onChange={handleChecked}
                    />{" "}
                    Remember me
                  </label>
                </div>
                <div className="mt-2">
                  <button
                    type="submit"
                    className="btn btn-lg btn-block btn-primary"
                    disabled={isLoading}
                  >
                    {isLoading ? "Logging in..." : "Login"}
                  </button>
                </div>
                <div className="mt-1 mb-4">
                  <Link to="/forgotpassword">Forgot password?</Link>
                  <p>
                    Not a member? <Link to="/signup">Sign up</Link>
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
