import "../App.css";
import SetRouteTitle from "../components/SetRouteTitle";

function Tracking() {
  SetRouteTitle("TechSec ~ Track Product");
  (function (e, t, n) {
    var r,
      i = e.getElementsByTagName(t)[0];
    if (e.getElementById(n)) return;
    r = e.createElement(t);
    r.id = n;
    r.src = "//button.aftership.com/all.js";
    i.parentNode.insertBefore(r, i);
  })(document, "script", "aftership-jssdk");

  return (
    <>
      <h1 className="mt-3 mb-3 text-center">Track Your Order</h1>

      <div className="d-flex justify-content-center mb-4 overwiteafter">
        <div id="as-root"></div>
        <div
          className="as-track-button"
          data-size="large"
          data-domain="track.aftership.com"
        ></div>
      </div>
    </>
  );
}

export default Tracking;
