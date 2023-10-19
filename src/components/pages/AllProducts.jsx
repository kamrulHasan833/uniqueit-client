import { useLoaderData } from "react-router-dom";
import Products from "../sections/Products";

function AllProducts() {
  const loaderProducts = useLoaderData();
  return (
    <main>
      <Products loadProducts={loaderProducts}></Products>
    </main>
  );
}

export default AllProducts;
