import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SectionWrapper from "../layout/SectionWrapper";
import Product from "../shared/Product";
import SectionHeader from "../shared/SectionHeader";

function Products() {
  const [products, setProducts] = useState(null);
  const loadProduct = useLoaderData();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) =>
        loadProduct ? setProducts(loadProduct) : setProducts(data)
      )
      .catch((err) => console.log(err));
  }, [loadProduct]);
  return (
    <section>
      <SectionWrapper>
        <SectionHeader>All Products</SectionHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7">
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
        </div>
      </SectionWrapper>
    </section>
  );
}

export default Products;
