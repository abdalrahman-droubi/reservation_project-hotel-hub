import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import bookingImg from "../../images/booking1.png";
import dealesImg from "../../images/handshake.png";
import customerImg from "../../images/satisfaction.png";

const FeaturesSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container mx-auto m py-12 mb-4">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 m-5">
          <h2
            data-aos="fade-up"
            className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
          >
            Our Services
          </h2>
        </div>
        <div className="grid gap-8 row-gap-10 lg:grid-cols-3">
          <div
            data-aos="fade-up-right"
            className="max-w-md sm:mx-auto sm:text-center rounded-tl-full rounded-tr-full rounded-br-full rounded-r shadow-xl p-3 border border-gray"
          >
            <div className="flex items-center justify-center w-16 h-16  rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <img src={bookingImg} alt="" />
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              {" "}
              Easy Search and Booking
            </h6>
            <p className="mb-3 text-sm text-gray-900 p-4">
              A flower in my garden, a mystery in my panties. Heart attack never
              stopped old Big Bear. I didn't even know we were calling him Big
              Bear.
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="max-w-md sm:mx-auto sm:text-center rounded-tl-full rounded-tr-full rounded-br-full rounded-r shadow-xl p-3 border border-gray"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <img src={dealesImg} alt="" />
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Exclusive Deals and Discounts
            </h6>
            <p className="mb-3 text-sm text-gray-900 p-4">
              Rough pomfret lemon shark plownose chimaera southern sandfish
              kokanee northern sea robin Antarctic cod. Yellow-and-black
              triplefin gulper South American
            </p>
          </div>
          <div
            data-aos="fade-up-left"
            className="max-w-md sm:mx-auto sm:text-center rounded-tl-full rounded-tr-full rounded-br-full rounded-r shadow-xl p-3 border border-gray"
          >
            <div className="flex items-center justify-center w-16 h-16  rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <img src={customerImg} alt="" />
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Customer Support and Assistance
            </h6>
            <p className="mb-3 text-sm text-gray-900 p-4">
              A slice of heaven. O for awesome, this chocka full cuzzie is as
              rip-off as a cracker. Meanwhile, in behind the bicycle shed,
              Hercules Morse, as big as a horse
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default FeaturesSection;
