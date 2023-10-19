import { useEffect, useState } from "react";
import SectionWrapper from "./SectionWrapper";

function Footer() {
  const [brands, setBrands] = useState(null);
  useEffect(() => {
    const loadBrand = async () => {
      const res = await fetch(`http://localhost:5000/brands`);

      const data = await res.json();
      setBrands(data);
    };

    loadBrand();
  }, []);
  return (
    <footer className="bg-primary" data-aos="fade-up">
      <SectionWrapper>
        <div className="footer p-10 bg-primary text-white mt-10 md:mt-20 justify-center md:justify-between">
          <nav data-aos="fade-up">
            <header className="footer-title text-xl">Brands</header>
            {brands &&
              brands.length > 0 &&
              brands.map((brand, ind) => (
                <a key={ind} className="link link-hover capitalize">
                  {brand.brand}
                </a>
              ))}
          </nav>
          <nav data-aos="fade-up">
            <header className="footer-title text-xl">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav data-aos="fade-up">
            <header className="footer-title text-xl ">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form data-aos="fade-up">
            <header className="footer-title text-xl">Dealership</header>
            <div className="grid grid-cols-6 gap-3">
              {brands &&
                brands.length > 0 &&
                brands.map((brand, ind) => (
                  <a
                    key={ind}
                    className=" w-7 bg-white rounded-full bg-opacity-70 cursor-pointer hover:scale-110 "
                  >
                    <img
                      src={
                        brand.image.dark ? brand.image.dark : brand.image.light
                      }
                      alt=""
                      className="rounded-full"
                    />
                  </a>
                ))}
            </div>
          </form>
        </div>
      </SectionWrapper>
    </footer>
  );
}

export default Footer;
