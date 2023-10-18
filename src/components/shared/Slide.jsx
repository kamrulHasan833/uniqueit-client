import PropTypes from "prop-types";

function Slide({ slide }) {
  const { title, image, desc } = slide;
  console.log(slide);
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h1 className="text-4xl lg:7xl font-bold ">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}

Slide.propTypes = {
  slide: PropTypes.object,
};

export default Slide;
