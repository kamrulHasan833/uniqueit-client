import SectionWrapperBig from "../layout/SectionWrapperBig";
import Slider from "../shared/Slider";

const slides = [
  {
    id: 1,
    title: "Welcome to Uniqueit",
    image: "https://i.ibb.co/S3sVwHB/banner-watch1.jpg",
    desc: "Renewed world of possibilities with InnovateTech Solutions",
  },
  {
    id: 2,
    title: "Best Brand Here",
    image: "https://i.ibb.co/4sCGfH8/banner-phone.jpg",
    desc: "Renewed world of possibilities with InnovateTech Solutions",
  },
];

function HeroSlider() {
  return (
    <SectionWrapperBig>
      <Slider grow="flex-grow " slides={slides}></Slider>
    </SectionWrapperBig>
  );
}

export default HeroSlider;
