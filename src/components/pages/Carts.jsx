import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import SectionWrapper from "../layout/SectionWrapper";
import NoDataInfo from "../sections/NoDataInfo";
import Cart from "../shared/Cart";

function Carts() {
  const newProducts = useLoaderData();
  const [products, setProducts] = useState(newProducts);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "If you wanna delete this product, click Ok!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://uniqueit-server.vercel.app/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const updateProduct = products.filter(
                (product) => product._id !== id
              );

              Swal.fire({
                icon: "success",
                title: "You have deleted product successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              setProducts(updateProduct);
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };
  return (
    <SectionWrapper>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-10 md:mt-14 mb-6">
        My Cart Products
      </h3>

      {products && products.length > 0 ? (
        <div className="min-h-screen grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-3">
          {products.map((cart) => (
            <Cart key={cart._id} cart={cart} handleDelete={handleDelete}></Cart>
          ))}{" "}
        </div>
      ) : (
        <NoDataInfo>No product added</NoDataInfo>
      )}
    </SectionWrapper>
  );
}

export default Carts;
