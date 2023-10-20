import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SectionWrapper from "../layout/SectionWrapper";

function Slide({ slide }) {
  const { title, image, desc } = slide;

  return (
    <div className=" relative">
      <div>
        <img src={image} alt="" />
      </div>
      <SectionWrapper>
        <div className="absolute top-1/2 -translate-y-1/2 pl-6 md:pl-10 xl:pl-0 z-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-secondary 2xl:text-7xl font-bold max-w-32 max-w-xs md:max-w-full mb-0 md:mb-2">
            {title}
          </h1>
          <p className="max-w-[200px] md:max-w-xs lg:max-w-full lg:text-center">
            {desc}
          </p>
          <div className="mt-6 md:mt-10 text-center">
            <Link
              to="/products/all"
              className="text-white font-bold px-3 md:px-6 py-2 md:py-3 bg-primary hover:bg-secondary rounded-md mt-6"
            >
              All Product
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

Slide.propTypes = {
  slide: PropTypes.object,
};

export default Slide;
