import "../App.css";
import ProductItem from "../components/ProductItem";
import SetRouteTitle from "../components/SetRouteTitle";

function Product() {
  SetRouteTitle("TechSec ~ Products");
  return (
    <>
      <ProductItem />
    </>
  );
}

export default Product;
