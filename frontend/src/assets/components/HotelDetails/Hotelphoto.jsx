import React from "react";
import heroBg from "../../images/hotel4.webp";
const HeroSection = () => {
  return (
    <div className="">
      {" "}
      <div
        class="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "500px",
          backgroundAttachment: "fixed",
        }}
      >
        <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed bg-black bg-opacity-60">
          <div class="flex justify-center items-center h-full">
            <div class="text-center text-white px-6 md:px-12">
              <h1 class="text-3xl md:text-4xl xl:text-5xl tracking-tight mb-12 font-bold font-serif">
                PICK YOUR HOTEL RIGHT NOW
              </h1>
              <p>
                Here Are the Best Hotels In Town,we bring for you the best
                offer,lowest price and the best places to make your experience
                the best
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
