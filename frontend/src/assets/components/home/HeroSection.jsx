import React from "react";
import heroBg from "../../images/hotel4.webp";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <>
      <div
        className="hero relative overflow-hidden bg-no-repeat bg-cover w-full inset-0 z-0 py-5 sm: my-10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "42rem",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black bg-opacity-60">
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-3xl font-bold font-serif md:text-5xl xl:text-7xl sm:text-3xl tracking-tight mb-12">
                Your Gateway to Exceptional <br />
                <span>Hotel Experiences </span>
              </h1>
              <Link to={"/hotelsprovider"}>
                <button
                  type="button"
                  className="inline-block px-7 py-3 border-2 border-[#5aa1c2] text-white font-medium text-sm leading-snug uppercase  rounded-lg hover:bg-[#5aa1c2] focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Get started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
