import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import SectionWrapper from "../layout/SectionWrapper";

function UpdateProduct() {
  const loadProduct = useLoaderData();
  const { _id, name, imageURL, price, type, brand, rating } = loadProduct;

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;

    const imageURL = form.image.value;
    const type = form.type.value;
    const price = parseFloat(form.price.value);
    const brand = form.brand.value;
    const rating = parseFloat(form.rating.value);
    const product = {
      name,

      imageURL,
      type,
      brand,
      rating,
      price,
    };

    fetch(`https://uniqueit-server.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "You have updated product successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "No field to update.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <SectionWrapper>
      <div className="hero mt-10 md:mt-15">
        <div className="w-full ">
          <div className="text-center lg:text-left mb-5 md:mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Update Product
            </h1>
            <p className="mt-2 pb-6">
              Please update a product by fill in the flowing fields.
            </p>
          </div>
          <div className=" w-full border  bg-base-100">
            <form className=" p-6 " onSubmit={handleUpdateProduct}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* left */}
                <div className="  space-y-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text"> Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Product Name"
                      className="input input-bordered"
                      name="name"
                      defaultValue={name}
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text"> Price ($)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Product Price"
                      className="input input-bordered"
                      name="price"
                      defaultValue={price}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text"> Rating </span>
                    </label>
                    <input
                      type="text"
                      defaultValue={rating}
                      placeholder="Product Rating"
                      className="input input-bordered"
                      name="rating"
                      required
                    />
                  </div>
                </div>
                {/* rigth */}
                <div className=" flex-wrap space-y-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text"> Image URL</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Product image"
                      className="input input-bordered"
                      name="image"
                      defaultValue={imageURL}
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text"> Type</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Product type"
                      className="input input-bordered"
                      name="type"
                      defaultValue={type}
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text"> Brand</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Brand name"
                      className="input input-bordered"
                      name="brand"
                      defaultValue={brand}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-control mt-6 text-center flex items-center">
                <button className="btn w-1/4 btn-primary  hover:btn">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
export default UpdateProduct;
