import { useLoaderData } from "react-router-dom";
import Products from "../sections/Products";
import PromoSlider from "../sections/PromoSlider";

function AllProducts() {
  const loaderProducts = useLoaderData();
  const promoSlides = loaderProducts
    ? loaderProducts.filter((loaderProduct, ind) => ind < 3)
    : [];
  console.log(promoSlides);

  return (
    <main>
      <PromoSlider promoSlides={promoSlides}></PromoSlider>
      <Products loadProducts={loaderProducts ? loaderProducts : []}></Products>
    </main>
  );
}

export default AllProducts;
