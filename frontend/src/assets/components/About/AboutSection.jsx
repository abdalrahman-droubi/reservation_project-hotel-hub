import f1 from "../../images/f-services.jpg.webp";
import f2 from "../../images/f-services-2.jpg.webp";
import Icon from "@mdi/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { mdiStarCircleOutline, mdiBed } from "@mdi/js";
import { Link } from "react-router-dom";

const AboutSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div>
        <div className="AboutSection-80 flex flex-row-reverse lg:w-4/5 sm:w-full  mx-auto m-32">
          <div
            className="R lg:w-1/2 md:w-11/12 sm:w-11/12"
            data-aos="fade-left"
          >
            <h5>ABOUT US</h5>
            <h1>Unwind A Hotel Booking Agency</h1>
            <p>
              Welcome to HotelHub , your trusted companion for hassle-free hotel
              reservations. At HotelHub, we are passionate about making your
              travel experiences unforgettable. Our mission is to provide you
              with a seamless and convenient platform to discover and book the
              perfect accommodations for your trips.
            </p>
            <Link
              to={"/hotelsprovider"}
              className="inline-block px-7 py-3 border-2 border-[#5aa1c2] text-white font-medium text-sm leading-snug uppercase  rounded-lg hover:bg-[#5aa1c2] focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            >
              Book Your Room Now
            </Link>
          </div>
          <div
            className="L flex justify-center me-10 lg:w-1/2 md:w-11/12 sm:w-11/12"
            data-aos="fade-right"
          >
            <div className="LL sm:w-11/12 me-3 ">
              <div className="LLT mb-5 text-center py-5">
                <div className="LLT-Icon">
                  <Icon
                    path={mdiBed}
                    className="inline-block color-[red]"
                    size={2}
                  />
                </div>
                <h3 className="text-2xl py-3">Cozy Room</h3>
                <p className="text-gray-500">
                  {" "}
                  is more than just a hotel; it is an inviting retreat that
                  embraces warmth, comfort, and tranquility.
                </p>
              </div>
              <div className="LLB">
                <div className="LLB-img">
                  <img src={f1} alt="f1" />
                </div>
              </div>
            </div>
            <div className="LR sm:w-11/12">
              <div className="LRB">
                <div className="LRT-img">
                  <img src={f2} alt="f2" />
                </div>
              </div>
              <div className="LRT flex flex-col mt-5 text-center py-5">
                <div className="LRB-Icon text-center">
                  <Icon
                    path={mdiStarCircleOutline}
                    className="inline-block"
                    size={2}
                  />
                </div>
                <h3 className="text-2xl py-3 ">Special Offers</h3>
                <p className="text-gray-500">
                  Discover our irresistible Special Offers, exclusively curated
                  for guests of our booking hotel website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
