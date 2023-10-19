import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PromoSlide({ promoSlide }) {
  const { name, price, rating } = promoSlide;
  const discount = rating * 5;
  const priceAfterDiscount = price - price * (discount / 100);

  return (
    <div className=" relative">
      <div className="flex py-10 md:py-0">
        <div className=" flex-shrink">
          <img src={promoSlide.imageURL} alt="" className="w-full" />
        </div>
        <div className="absolute top-6 right-6  lg:static  flex-grow ">
          <h3 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-secondary mb-1 sm:mb-2">
            {discount}% OFF{" "}
          </h3>

          <div className="flex gap-2 sm:gap-3 lg:gap-6  mt-3">
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold text-red-600 line-through ">
              ${price}{" "}
            </p>
            <span className="text-sm sm:text-base md:text-lg lg:text-2xl font-bold  text-gray-700">
              ${priceAfterDiscount}
            </span>
          </div>
          <div className="mt-5 md:mt-10">
            <Link className="text-sm sm:text-base  px-3 py-2 md:px-6 md:py-4 rounded-md bg-primary hover:bg-secondary text-white mt-5 md:mt-10">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

PromoSlide.propTypes = {
  promoSlide: PropTypes.object,
};

export default PromoSlide;
