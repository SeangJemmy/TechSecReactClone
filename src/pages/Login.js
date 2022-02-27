import "../App.css";
import SetRouteTitle from "../components/SetRouteTitle";
import React, { useReducer } from "react";

function LoginReducer(state, action) {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.field]: action.value,
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
        initialState,
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
      pass: "admin123",
    },
  ];
  const [state, dispatch] = useReducer(LoginReducer, initialState);
  const { username, password, error, isLoading, isLoggedIn, isRem } = state;
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "login" });
    setTimeout(() => {
      if (
        e.target.elements.username.value === userPass[0].user &&
        e.target.elements.password.value === userPass[0].pass
      ) {
        dispatch({ type: "success" });
        console.log("Success");
        return;
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
    console.log(isRem);
    if (isRem) {
      dispatch({ type: "logout-rem" });
      return;
    }
    dispatch({ type: "logout" });
  };

  return (
    <div className="container-fluid m-3">
      <div className="row">
        {isLoggedIn ? (
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 mx-auto text-center">
            <h1>
              Welcome <i>{username}</i>!
            </h1>
            <button className="btn btn-lg btn-secondary" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="col-10 col-sm-6 col-md-4 col-lg-4 col-xl-2 mx-auto text-center">
            <form onSubmit={loginHandler}>
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
                <a href="/forgotpassword">Forgot password?</a>
                <p>
                  Not a member? <a href="/signup">Sign up</a>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
