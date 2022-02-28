import "../App.css";
import SetRouteTitle from "../components/SetRouteTitle";
import { Link, useNavigate } from "react-router-dom";
import React, { useReducer } from "react";
import { GetUserInfo } from "../contexts/LoginInfoContext";

function SignupReducer(state, action) {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case "signup": {
      return {
        ...state,
        isLoading: true,
        username_error: "",
        email_error: "",
        password_error: "",
      };
    }
    case "unmatch-email": {
      return {
        ...state,
        isLoading: false,
        email_error: "Confirmation email not match",
      };
    }
    case "unmatch-password": {
      return {
        ...state,
        isLoading: false,
        password_error: "Confirmation password not match",
      };
    }
    case "username-exist": {
      return {
        ...state,
        isLoading: false,
        username_error: "Username existed",
      };
    }
    case "email-exist": {
      return {
        ...state,
        isLoading: false,
        email_error: "Email existed",
      };
    }
    case "signup-success": {
      return {
        ...initialState,
        isSignedup: true,
      };
    }

    default:
      break;
  }
  return state;
}

const initialState = {
  username: "",
  email: "",
  confirm_email: "",
  password: "",
  confirm_password: "",
  username_error: "",
  email_error: "",
  password_error: "",
  isLoading: false,
  isAgree: false,
  isSignedup: false,
  prefName: "Customer",
};

function Signup() {
  SetRouteTitle("TechSec ~ Sign Up");
  const navigate = useNavigate();

  const lowerCase = (props) => {
    return props.toString().toLowerCase();
  };

  const { userPass } = GetUserInfo();

  const [state, dispatch] = useReducer(SignupReducer, initialState);

  const {
    username,
    email,
    confirm_email,
    password,
    confirm_password,
    username_error,
    email_error,
    password_error,
    isLoading,
    isAgree,
    isSignedup,
    prefName,
  } = state;

  const checkInfo = (e) => {
    if (e.target.elements.username.value === userPass[0].user) {
      return dispatch({ type: "username-exist" });
    }

    if (
      lowerCase(e.target.elements.email.value) !==
      lowerCase(e.target.elements.confirm_email.value)
    ) {
      return dispatch({ type: "unmatch-email" });
    }

    if (lowerCase(e.target.elements.email.value) === userPass[0].email) {
      return dispatch({ type: "email-exist" });
    }

    if (
      e.target.elements.password.value !==
      e.target.elements.confirm_password.value
    ) {
      return dispatch({ type: "unmatch-password" });
    }
    console.log("Successfully Signed Up!");
    console.log(state);
    dispatch({ type: "signup-success" });
    return;
  };

  const signupHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "signup" });
    setTimeout(() => {
      checkInfo(e);
    }, 3000);
  };

  const handleInput = (e) => {
    dispatch({
      type: "field",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleRadio = (e) => {
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

  return (
    <div className="m-3">
      <div className="container-fluid">
        <div className="row">
          {isSignedup ? (
            <div className="col-12 col-sm-10 col-md-8 mx-auto text-center">
              <h1>Successfully signed up!</h1>
              <button
                className="btn btn-lg btn-primary mt-3"
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Go to Dashboard
              </button>
            </div>
          ) : (
            <div className="col-10 col-sm-6 col-md-4 col-lg-4 col-xl-2 mx-auto text-center">
              <form onSubmit={signupHandler}>
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
                <div>
                  <h4 className="font-weight-normal mb-3">Sign Up</h4>
                </div>

                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Username"
                  minLength="5"
                  required
                  value={username}
                  onChange={handleInput}
                />

                <small className="text-danger"> {username_error} </small>

                <div className="font-weight-bold mt-2">
                  <label className="mr-3">
                    <input
                      name="prefName"
                      type="radio"
                      id="customer"
                      value="Customer"
                      defaultChecked
                      onChange={handleRadio}
                    />{" "}
                    Customer
                  </label>

                  <label>
                    <input
                      name="prefName"
                      type="radio"
                      id="supplier"
                      value="Supplier"
                      onChange={handleRadio}
                    />{" "}
                    Supplier
                  </label>
                </div>

                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control mb-1"
                  placeholder="Email Address"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  required
                  value={email}
                  onChange={handleInput}
                />

                <input
                  type="cemail"
                  id="cemail"
                  name="confirm_email"
                  className="form-control"
                  placeholder="Confirm Email Address"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  required
                  value={confirm_email}
                  onChange={handleInput}
                />

                <small className="text-danger">{email_error}</small>

                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control my-1"
                  placeholder="Password"
                  minLength="8"
                  required
                  value={password}
                  onChange={handleInput}
                />

                <input
                  type="password"
                  id="cpassword"
                  name="confirm_password"
                  className="form-control"
                  placeholder="Confirm Password"
                  minLength="8"
                  required
                  value={confirm_password}
                  onChange={handleInput}
                />

                <small className="text-danger">{password_error}</small>

                <div className="checkbox mt-2 mb-3">
                  <label>
                    <input
                      type="checkbox"
                      name="isAgree"
                      checked={isAgree}
                      onChange={handleChecked}
                      required
                    />{" "}
                    I agree to the
                    <Link to="/termsofservice"> Terms of Service</Link> &{" "}
                    <Link to="/privacypolicy">Privacy Policy</Link>.
                  </label>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-lg btn-block btn-success"
                    disabled={isLoading}
                  >
                    {isLoading ? `Signing up as ${prefName}...` : "Sign Up"}
                  </button>
                </div>
                <div className="mt-1 mb-4">
                  Already have an account? <Link to="/login"> Login</Link>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Signup;
