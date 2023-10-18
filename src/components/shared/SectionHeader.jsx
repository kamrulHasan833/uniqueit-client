import PropTypes from "prop-types";

function SectionHeader({ children }) {
  return (
    <div className="pt-10 md:pt-24 pb-6 md:pb-12">
      <h1 className="text-4xl lg:text-5xl text-title-color font-semibold">
        {children}
      </h1>
    </div>
  );
}

SectionHeader.propTypes = {
  children: PropTypes.string,
};

export default SectionHeader;
