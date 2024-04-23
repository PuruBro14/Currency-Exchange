import React, { useState } from "react";
import HeaderBanner from "./assets/images/HeaderBanner.jpg";
import "./assets/css/home.css";
import Contactus from "../ContactUs/Contactus";
import { ContentSlider } from "../CurrencyRate/CurrencyRate";
import { HomeLocation } from "../Location/Location";
import WhyRemiwire from "../WhyRemiwire/WhyRemiwire";
import Ourservies from "../OurServices/Ourservies";
import AboutUs from "../AboutUs/AboutUs";
import TestimonialsSlider from "../Testimonials/Testimonials";
import HowTransferMoney from "../HowTransferMoney/HowTransferMoney";
import Convert from "./Convert";
import Send from "./Send";
import Charts from "./Charts";
import Alerts from "./Alerts";

const homeServices = [
  {
    id: 1,
    name: "Convert",
  },
  {
    id: 2,
    name: "Send",
  },
  {
    id: 3,
    name: "Charts",
  },
  {
    id: 4,
    name: "Alerts",
  },
];

const Home = () => {
  const [activeMenu, setActiveMenu] = useState(1);

  const handleButtonClick = (active) => {
    setActiveMenu(active);
  };

  return (
    <div className=" w-screen">
      {/* image one  */}
      <div className="relative min-h-[1400px]">
        <img src={HeaderBanner} alt="home-banner" className="w-full" />
        <div className="absolute top-[10%] md:top-[15%] left-[5%]  w-[40%] p-10 text-white bg-[#d40511]">
          <h1 className="text-xl md:text-4xl w-[100%]">
            Trusted Global Currency Converter & Money Transfers
          </h1>
          <p className="mt-4 w-[90%]">
            Best source for currency conversion, sending money online and
            tracking exchange rates
          </p>
        </div>

        <div className="w-full absolute  top-[20%] md:top-[50%] md:left-[5%] md:w-11/12 md:mx-auto  ">
          <div className="bg-white shadow-[0_0_20px_0] shadow-[#F0F0F0] object-cover">
            <div className="flex flex-col md:flex-row justify-center">
              {homeServices?.map((ele, index) => {
                return (
                  <div
                    key={index}
                    md={6}
                    className={`${
                      activeMenu === ele?.id
                        ? "convertdiv active"
                        : "convertdiv"
                    } md:text-center relative pl-3 md:pl-0 w-[100%] md:w-[25%]`}
                    onClick={() => handleButtonClick(ele?.id)}
                  >
                    {ele?.name}
                  </div>
                );
              })}
            </div>
            {activeMenu === 1 ? (
              <Convert />
            ) : activeMenu === 2 ? (
              <Send />
            ) : activeMenu === 3 ? (
              <Charts />
            ) : (
              <Alerts />
            )}
          </div>
        </div>
      </div>
      <div>
        <ContentSlider />
      </div>

      <div className="my-6 bg-[#10122B]">
        <HomeLocation />
      </div>

      <div>
        <WhyRemiwire />
      </div>

      <div>
        <Ourservies />
      </div>

      <div className="bg-[#f2f2f2] py-2 pb-10">
        <AboutUs />
      </div>

      {/* <div>
        <TestimonialsSlider />
      </div> */}

      <div className="bg-[#f2f2f2]">
        <div className="lg:h-[10px] my-14"></div>
        <HowTransferMoney />
      </div>

      <div>
        <Contactus />
      </div>
    </div>
  );
};

export default Home;
