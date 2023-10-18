import { useEffect, useState } from "react";
import SectionWrapper from "../layout/SectionWrapper";
import Brand from "../shared/Brand";
import SectionHeader from "../shared/SectionHeader";

function Brands() {
  const [brands, setBrands] = useState(null);
  useEffect(() => {
    const loadBrand = async () => {
      const res = await fetch(`http://localhost:5173/brands.json`);
      const data = await res.json();
      setBrands(data);
    };

    loadBrand();
  }, []);

  return (
    <SectionWrapper>
      <SectionHeader>Brands</SectionHeader>

      <div className="grid grid-cols-3  md:grid-cols-6 gap-6 ">
        {brands &&
          brands.length > 0 &&
          brands.map((brand, ind) => <Brand key={ind} brand={brand}></Brand>)}
      </div>
    </SectionWrapper>
  );
}

export default Brands;
