import { useLoaderData } from "react-router-dom";
import HotDeal from "../sections/HotDeal";
import NoDataInfo from "../sections/NoDataInfo";
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
      {promoSlides && promoSlides.length > 0 ? (
        <PromoSlider promoSlides={promoSlides}></PromoSlider>
      ) : (
        <HotDeal></HotDeal>
      )}
      {loaderProducts && loaderProducts.length === 0 ? (
        <NoDataInfo>No Product Found! </NoDataInfo>
      ) : !loaderProducts ? (
        <Products loadProducts={[]}></Products>
      ) : (
        <Products loadProducts={loaderProducts}></Products>
      )}
    </main>
  );
}

export default AllProducts;
