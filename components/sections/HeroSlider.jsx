import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import Slide from "../shared/Slide";

const slides = [
  {
    id: 1,
    title: "Welcome to Uniqueit",
    image: "https://i.ibb.co/jG2Yxq3/banner-watch.jpg",
    desc: "Renewed world of possibilities with InnovateTech Solutions",
  },
  {
    id: 2,
    title: "Best Brand Here",
    image: "https://i.ibb.co/BwfrbBn/banner-headphone.jpg",
    desc: "Renewed world of possibilities with InnovateTech Solutions",
  },
];
const AutoplaySlider = withAutoplay(AwesomeSlider);

function HeroSlider() {
  return (
    <div>
      {" "}
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={1000}
      >
        {slides.map((slide) => (
          <Slide key={slide.id} slide={slide}></Slide>
        ))}
      </AutoplaySlider>
    </div>
  );
}

export default HeroSlider;
