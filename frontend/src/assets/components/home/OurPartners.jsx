import React from "react";
import logo1 from "../../images/logo1.jpg";
import logo2 from "../../images/logo2.jpg";
import logo3 from "../../images/logo3.jpg";
import logo4 from "../../images/logo4.jpg";

const OurPartners = () => {
  return (
    <div>
      <section class="bg-white dark:bg-gray-900">
        <div class="pb-12 lg:pb-12 mx-auto max-w-screen-xl px-4">
          <h2 class="mb-2 lg:mb-16 font-sans text-4xl font-bold text-center text-gray-900 dark:text-white md:text-4xl">
            Our Partners
          </h2>
          <div class="grid grid-cols-1 gap-8 text-gray-500 sm:gap-1 md:grid-cols-2 lg:grid-cols-4 dark:text-gray-400">
            <a href="#" class="flex justify-center items-center">
              <img
                className="w-32 rounded-full border-2"
                src={logo1}
                alt="logo1"
              />
            </a>
            <a href="#" class="flex justify-center items-center">
              <img
                className="w-32 rounded-full border-2"
                src={logo2}
                alt="logo1"
              />
            </a>
            <a href="#" class="flex justify-center items-center">
              <img
                className="w-32 rounded-full border-2"
                src={logo3}
                alt="logo1"
              />
            </a>

            <a href="#" class="flex justify-center items-center">
              <img
                className="w-32 rounded-full border-2"
                src={logo4}
                alt="logo1"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPartners;
