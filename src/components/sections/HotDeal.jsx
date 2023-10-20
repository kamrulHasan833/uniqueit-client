import { CiDiscount1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import SectionWrapper from "../layout/SectionWrapper";
import SectionWrapperBig from "../layout/SectionWrapperBig";

function HotDeal() {
  return (
    <section>
      <SectionWrapperBig>
        <SectionWrapper>
          <div className="flex items-start gap-3  mb-6 md:mb-12 mt-12 md:mt-24">
            {" "}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-title-color">
              Hot Deals{" "}
            </h3>
            <span>
              <CiDiscount1 className="text-3xl md:text-4xl lg:text-5xl rounded-full hover:text-secondary hover:bg-white text-white bg-secondary"></CiDiscount1>
            </span>
          </div>
        </SectionWrapper>

        <div className="bg-[url('https://i.ibb.co/D5FfdwK/hot-deal.jpg')] bg-cover  py-20 md:py-28 lg:py-40 w-full ">
          <SectionWrapper>
            <p className="text-lg md:text-2xl text-gray-600 mb-4">
              {"Don't Miss"}
            </p>
            <h3 className="text-3xl md:text-5xl lg-text-6xl font-bold text-secondary mb-6 ">
              20 to 30% Off
            </h3>
            <p className="max-w-[500px] mb-10">
              {"Don't"} wait any longer! Upgrade your mobile experience with the
              [Phone Model] from [Mobile Phone Company]. Get in touch with us
              today to order your new smartphone or visit our website for more
              information. This hot deal is too good to pass up!
            </p>
            <div>
              <Link to="/products/all" className="btn btn-primary bg-primary">
                Get Now
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </SectionWrapperBig>
    </section>
  );
}

export default HotDeal;
