import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../contexts/authContext";
import SectionWrapper from "../layout/SectionWrapper";

function ProductDetails() {
  const product = useLoaderData();
  const { imageURL, name, description, price, type, brand, rating } = product;
  const navigate = useNavigate();
  const { user } = useAuth();
  const email = user.email ? user.email : null;
  const [brands, setBrands] = useState(null);
  useEffect(() => {
    const loadBrand = async () => {
      const res = await fetch(`http://localhost:5000/brands`);

      const data = await res.json();
      setBrands(data);
    };

    loadBrand();
  }, []);
  const handleAddToCart = (e) => {
    e.preventDefault();
    const form = e.target;
    const quantity = parseInt(form.quantity.value);
    const cardProduct = {
      imageURL,
      name,
      description,
      price,
      type,
      brand,
      rating,
      quantity,
      username: email,
    };
    if (email) {
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cardProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "Product have been added  successfully.",
              icon: "success",
              confirmButtonColor: "#22015B",
              confirmButtonText: "Go On",
            }).then((result) => {
              if (result.isConfirmed) {
                navigate(`/carts/${email}`);
              }
            });
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <section>
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 ">
          <div className=" ">
            <img src={imageURL} alt="" />
          </div>
          <div>
            <h3 className="tex-lg md:text-xl font-bold text-title-color ">
              {name}
            </h3>
            <div className="flex justify-between mb-1">
              <p className="font-semibold text-lg text-ash">${price}</p>{" "}
              <p className="font-semibold text-lg text-ash">
                ({rating} review)
              </p>
            </div>
            <p>{description}</p>
            <div className="flex gap-3 content-baseline mt-5 mb-5">
              {brands &&
                brands.length > 0 &&
                brands.map((brand, ind) => (
                  <a
                    key={ind}
                    className=" w-7 sm:w-10 bg-ash bg-opacity-20 rounded-full cursor-pointer hover:scale-110 "
                  >
                    <img
                      src={
                        brand.image.dark ? brand.image.dark : brand.image.light
                      }
                      alt=""
                      className="rounded-full"
                    />
                  </a>
                ))}
            </div>
            <div>
              <h4 className="font-semibold text-lg text-ash">Brand: {brand}</h4>
              <h4 className="font-semibold text-lg text-ash">Type: {type}</h4>
            </div>
            <form className=" space-y-5" onSubmit={handleAddToCart}>
              <div>
                {" "}
                <input
                  className="border-2 border-primary px-1 py-1 md:px-3 md:py-3 rounded-full w-24 md:w-28 focus:outline-none font-bold text-center mt-5"
                  type="number"
                  name="quantity"
                  defaultValue={1}
                />
              </div>
              <div className="text-center">
                <input
                  type="submit"
                  value="Add to Cart"
                  className="px-5 py-2 md:px-7 md:py-4 bg-primary hover:bg-secondary rounded-full text-white text-sm md:text-base cursor-pointer"
                />
              </div>
            </form>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}

export default ProductDetails;
