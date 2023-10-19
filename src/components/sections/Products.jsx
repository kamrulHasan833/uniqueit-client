import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SectionWrapper from "../layout/SectionWrapper";
import Product from "../shared/Product";
import SectionHeader from "../shared/SectionHeader";
function Products({ loadProducts }) {
  const [products, setProducts] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        const homeProducts =
          loadProducts && loadProducts.length > 0
            ? loadProducts.filter((p, id) => id < 8)
            : data.filter((p, id) => id < 8);

        const commonProducts =
          loadProducts && loadProducts.length > 0 ? loadProducts : data;

        pathname === "/"
          ? setProducts(homeProducts)
          : setProducts(commonProducts);
      })
      .catch((err) => console.log(err));
  }, [loadProducts, pathname]);

  return (
    <section>
      <SectionWrapper>
        <SectionHeader>All Products</SectionHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
        </div>
        <div className="text-center mt-10 md:mt-14">
          {pathname === "/" && (
            <Link className="btn btn-primary bg-primary" to="/products/all">
              Explore More
            </Link>
          )}
        </div>
      </SectionWrapper>
    </section>
  );
}

Products.propTypes = {
  loadProducts: PropTypes.node,
};
export default Products;
