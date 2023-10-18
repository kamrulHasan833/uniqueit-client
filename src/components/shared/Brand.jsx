import PropTypes from "prop-types";

function Brand({ brand: newbrand }) {
  const { brand, image } = newbrand;
  return (
    <div className=" cursor-pointer group">
      <div className="rounded-full bg-primary bg-opacity-5 ">
        <img
          src={image.dark ? image.dark : image.light}
          alt=""
          className="rounded-full  group-hover:scale-125 transition-all"
        />
      </div>
      <h3 className="text-xl font-semibold text-titile-color text-center mt-2 uppercase">
        {brand}
      </h3>
    </div>
  );
}

Brand.propTypes = {
  brand: PropTypes.object,
};

export default Brand;
