import "./App.css";
import NavbarComp from "./components/NavbarComp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FooterComp from "./components/FooterComp";
import About from "./pages/About";
import "./main";
import Forum from "./pages/Forum";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Fpass from "./pages/fpass";
import Faq from "./pages/Faq";
import Pp from "./pages/Pp";
import Tos from "./pages/Tos";
import Tracking from "./pages/Tracking";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import { useEffect, useState } from "react";

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
    <>
      <Router>
        <NavbarComp />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/fpass" element={<Fpass />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/pp" element={<Pp />} />
          <Route path="/tos" element={<Tos />} />
          <Route path="/tracking" element={<Tracking />} />
        </Routes>
        <FooterComp />
      </Router>

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
    </>
  );
}

const Home = () => (
  <div className="m-3">
    <h2 className="font-weight-bold text-center mt-4 mb-3">
      Apple iPhones On Sale
    </h2>
    <Product />
  </div>
);

export default App;
