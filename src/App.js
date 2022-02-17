import "./App.css";
import SetRouteTitle from "./components/SetRouteTitle";
import NavbarComp from "./components/NavbarComp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterComp from "./components/FooterComp";
import About from "./pages/About";
import "./main";
import Forum from "./pages/Forum";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Fpass from "./pages/Fpass";
import Faq from "./pages/Faq";
import Pp from "./pages/Pp";
import Tos from "./pages/Tos";
import Tracking from "./pages/Tracking";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import { useEffect, useState } from "react";
import AppleProduct from "./components/AppleProduct";

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <Router>
      <NavbarComp />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/product"
          element={
            <>
              <Product />
            </>
          }
        />
        <Route path="/forum" element={<Forum />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<Fpass />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacypolicy" element={<Pp />} />
        <Route path="/termsofservice" element={<Tos />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <FooterComp />
      {showButton && (
        <button onClick={scrollToTop} className="myBtn">
          <img
            className="UpArrow_style"
            alt=""
            src="images/Up-Arrow.svg"
            width="30"
          />
        </button>
      )}
    </Router>
  );
}

const Home = () => {
  SetRouteTitle("TechSec ~ We Got What You Need");
  return (
    <div>
      <h2 className="font-weight-bold text-center mt-4 mb-3">
        Apple iPhones On Sale
      </h2>
      <AppleProduct />
    </div>
  );
};

const Error404 = () => {
  SetRouteTitle("TechSec ~ Page Not Found");
  return (
    <div className="m-3 row">
      <a className="mx-auto mt-4" href="./">
        <img
          alt=""
          className="img-fluid"
          loading="lazy"
          src="./images/error.png"
        />
      </a>

      <h1 className="col-12 font-weight-bold text-center my-4 text-danger">
        Error 404 - Page Not Found
      </h1>
      <button
        className="mb-4 d-flex btn btn-lg btn-primary mx-auto"
        onClick={() => {
          window.location.href = "./";
        }}
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default App;
