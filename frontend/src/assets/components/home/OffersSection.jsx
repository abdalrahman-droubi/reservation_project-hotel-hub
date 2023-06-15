import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import offerImg1 from "../../images/hotel60.jpeg";
import offerImg2 from "../../images/hotel8.jpeg";
import { Link } from "react-router-dom";

const OffersSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="mt-40">
        <h2 class="font-sans text-4xl font-bold text-center text- black mb-8">
          Special Offers
        </h2>

        <div className=" flex justify-center">
          <div class="lg:col-span-3 mb-16 w-fu flex">
            <div class="relative mt-4 ">
              <div className="carousel w-full">
                <div
                  id="slide1"
                  className="carousel-item relative h-[30rem] w-full "
                >
                  <img
                    src="https://i.pinimg.com/564x/70/bc/bf/70bcbf6ef289fb683e2d1af11827a7a8.jpg"
                    className="w-full bg-cover"
                  />
                  <div className="layer"></div>
                  <div class="absolute inset-x-[15%] hidden text-center text-white md:block mb-24 index">
                    <div
                      data-aos="fade-right"
                      class="flex justify-between max-w-5xl "
                    >
                      <div class="w-1/2 p-16">
                        <img src={offerImg1} alt="Hotel 1" class="rounded-lg" />
                      </div>
                      <div class="w-1/2 px-8 pt-44">
                        <h3 class="text-xl font-bold mb-4 text-white">
                          Luxury Resort Package
                        </h3>
                        <p class="text-white mb-4">
                          Experience the ultimate luxury at our beachfront
                          resort. Enjoy stunning views, world-class amenities,
                          and personalized service.
                        </p>
                        <a
                          href="#"
                          className="inline-block px-7 py-3 border-2 border-[#5aa1c2] text-white font-medium text-sm leading-snug uppercase  rounded-lg hover:bg-[#5aa1c2] focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a
                      href="#slide4"
                      className="btn btn-circle bg-gray-900 hover:bg-gray-800 border border-black text-white hover:border-black"
                    >
                      ❮
                    </a>
                    <a
                      href="#slide2"
                      className="btn btn-circle bg-gray-900 hover:bg-gray-800 border border-black text-white hover:border-black"
                    >
                      ❯
                    </a>
                  </div>
                </div>
                <div
                  id="slide2"
                  className="carousel-item relative  h-[30rem] w-full"
                >
                  <img
                    src="https://i.pinimg.com/564x/70/bc/bf/70bcbf6ef289fb683e2d1af11827a7a8.jpg"
                    className="w-full bg-cover"
                  />
                  <div className="layer"></div>
                  <div class="absolute inset-x-[15%] hidden text-center text-white md:block mb-24 index">
                    <div
                      data-aos="fade-right"
                      class="flex justify-between max-w-5xl "
                    >
                      <div class="w-1/2 p-16">
                        <img src={offerImg2} alt="Hotel 1" class="rounded-lg" />
                      </div>
                      <div class="w-1/2 px-8 pt-44">
                        <h3 class="text-xl font-bold mb-4 text-white">
                          City Getaway Deal
                        </h3>
                        <p class="text-white mb-4">
                          Discover the vibrant city life with our exclusive city
                          getaway deal. Stay at our centrally located hotel and
                          explore popular attractions.
                        </p>
                        <a
                          href="#"
                          className="inline-block px-7 py-3 border-2 border-[#5aa1c2] text-white font-medium text-sm leading-snug uppercase  rounded-lg hover:bg-[#5aa1c2] focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a
                      href="#slide1"
                      className="btn btn-circle bg-gray-900 hover:bg-gray-800 border border-black text-white hover:border-black"
                    >
                      ❮
                    </a>
                    <a
                      href="#slide3"
                      className="btn btn-circle bg-gray-900 hover:bg-gray-800 border border-black text-white hover:border-black"
                    >
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffersSection;
