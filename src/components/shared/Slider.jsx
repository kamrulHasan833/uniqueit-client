import PropTypes from "prop-types";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import Slide from "./Slide";

function Slider({ slides }) {
  return (
    <Swiper
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={0}
      slidesPerView={1}
      navigation={true}
      pagination={true}
      modules={[Navigation, Autoplay, Pagination]}
      className={`w-full rounded-lg `}
    >
      {slides.length > 0 &&
        slides.map((slide, ind) => (
          <SwiperSlide key={ind}>
            <Slide slide={slide}></Slide>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
Slider.propTypes = {
  slides: PropTypes.array,
  onSlideChange: PropTypes.func,
  grow: PropTypes.node,
};
export default Slider;
