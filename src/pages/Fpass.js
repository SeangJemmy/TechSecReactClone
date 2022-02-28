import "../App.css";
import SetRouteTitle from "../components/SetRouteTitle";
import { Link } from "react-router-dom";

import React, { useReducer } from "react";

function ForgotPassReducer(state, action) {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case "requesting": {
      return {
        ...state,
        isLoading: true,
        error_msg: "",
        success_msg: "",
      };
    }
    case "success": {
      return {
        ...initialState,
        success_msg: "Successfully sent a reset password link",
      };
    }
    case "error": {
      return {
        ...state,
        isLoading: false,
        error_msg: "Email not found!",
      };
    }
    default:
      break;
  }
  return state;
}

const initialState = {
  email: "",
  isLoading: false,
  success_msg: "",
  error_msg: "",
  robotChecked: false,
};

function Fpass() {
  SetRouteTitle("TechSec ~ Forgot Password");

  const lowerCase = (props) => {
    return props.toString().toLowerCase();
  };

  const userPass = [
    {
      user: "admin",
      email: "admin@techsec.cf",
      pass: "admin123",
    },
  ];

  const [state, dispatch] = useReducer(ForgotPassReducer, initialState);

  const { email, isLoading, success_msg, error_msg, robotChecked } = state;

  const handleChecked = (e) => {
    dispatch({
      type: "field",
      field: e.target.name,
      value: e.target.checked,
    });
  };

  const handleReset = (e) => {
    e.preventDefault();
    dispatch({ type: "requesting" });
    setTimeout(() => {
      if (lowerCase(e.target.elements.email.value) === userPass[0].email) {
        console.log("Requested password reset!");
        dispatch({ type: "success" });
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

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 col-sm-6 col-md-4 col-lg-4 col-xl-2 mx-auto text-center">
          <form onSubmit={handleReset}>
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
              <h4 className="font-weight-normal mb-3">Forgot Password</h4>
            </div>

            <input
              type="email"
              name="email"
              id="email"
              value={email}
              className="form-control mb-1"
              placeholder="Email Address"
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              required
              onChange={handleInput}
            />
            <small className="text-danger">{error_msg}</small>
            <small className="text-success">{success_msg}</small>

            <div className="checkbox mt-2">
              <label>
                <input
                  type="checkbox"
                  name="robotChecked"
                  checked={robotChecked}
                  onChange={handleChecked}
                  required
                />{" "}
                I'm not a robot
              </label>
            </div>
            <div className="mt-1">
              <button
                type="submit"
                className="btn btn-lg btn-block btn-primary"
                disabled={isLoading}
              >
                {isLoading ? "Resetting..." : "Reset"}
              </button>
            </div>
            <div className="mt-1 mb-4">
              Back to <Link to="/login"> Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Fpass;
