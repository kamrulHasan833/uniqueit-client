import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Poduct({ product }) {
  const { name, description, imageURL, brand, rating, price, type } = product;
  console.log(name, description, imageURL, brand, rating, price, type);
  return (
    <div className="flex flex-col group cursor-pointer">
      <div className=" shadow-lg mb-3 relative overflow-hidden group-last:">
        <img
          src={imageURL}
          alt=""
          className="group-hover:scale-125 transition"
        />
        <div className=" absolute top-0 left-0 group-hover:w-full group-hover:h-full bg-black bg-opacity-10 "></div>
      </div>
      <div className=" flex-grow  mb-6">
        <h3 className="font-bold text-title-color text-lg ">
          {name.length > 20 ? name.slice(0, 20) + "..." : name}
        </h3>

        <div className="flex justify-between text-gray-600 font-medium mb-1 capitalize">
          <p>Brand: {brand}</p>
          <p>${price}</p>
        </div>

        <div>
          <p className=" text-gray-600 font-medium ">({rating} reviews)</p>{" "}
        </div>
      </div>
      <div className="flex  gap-2">
        <Link className="btn-primary bg-transparent text-primary hover:bg-primary border border-primary hover:border-primary hover:text-white text-sm md:text-base px-2 md:px-5 py-1 md:py-2 rounded-md ">
          Details
        </Link>
        <Link className="btn-primary bg-transparent border border-secondary hover:border-secondary hover:bg-secondary text-secondary hover:text-white text-sm md:text-base px-2 md:px-3 py-1 md:py-2 rounded-md">
          Update
        </Link>
      </div>
    </div>
  );
}

Poduct.propTypes = {
  product: PropTypes.object,
};

export default Poduct;
