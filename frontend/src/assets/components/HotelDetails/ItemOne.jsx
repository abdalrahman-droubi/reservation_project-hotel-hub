import React from "react";
import { MdHotel } from "react-icons/md";
function ItemOne() {
  return (
    <div>
      <section class="bg-white">
        <section class="bg-white">
          <div class="mx-auto max-w-screen-xl px-4  sm:px-6  lg:px-8">
            <div class="mx-auto max-w-3xl text-center">
              <h2 class="text-3xl font-bold  text-[#3e311f] sm:text-4xl">
                Choose your Room Right Now
              </h2>
            </div>

            <div class="mt-8 sm:mt-12">
              <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <a
                  class="block rounded-xl  border border-blue p-4 shadow-sm hover:border-[ #f4cc94] hover:ring-1 hover:ring-[ #f4cc94] focus:outline-none focus:ring"
                  href="/accountant"
                >
                  <span class="inline-block rounded-lg bg-gray-50 p-3">
                    <MdHotel
                      style={{
                        color: "#c5a880",
                        width: "2rem",
                        height: "2rem",
                      }}
                    />
                  </span>

                  <h2 class="mt-2 font-bold text-blue	no-underline">
                    Classic Room
                  </h2>

                  <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-blue">
                    120 JD per night
                  </p>
                </a>

                <a
                  class="block rounded-xl border border-blue p-4 shadow-sm hover:border-[ #f4cc94] hover:ring-1 hover:ring-[ #f4cc94] focus:outline-none focus:ring"
                  href="/accountant"
                >
                  <span class="inline-block rounded-lg  p-3">
                    <MdHotel
                      style={{
                        color: "#c5a880",
                        width: "2rem",
                        height: "2rem",
                      }}
                    />
                  </span>

                  <h2 class="mt-2 text-blue font-bold">Twin Room</h2>

                  <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-blue">
                    190 jd per night{" "}
                  </p>
                </a>

                <a
                  class="block rounded-xl border border-blue p-4 shadow-sm hover:border-[ #f4cc94] hover:ring-1 hover:ring-[ #f4cc94] focus:outline-none focus:ring"
                  href="/accountant"
                >
                  <span class="inline-block rounded-lg bg-gray-50 p-3">
                    <MdHotel
                      style={{
                        color: "#c5a880",
                        width: "2rem",
                        height: "2rem",
                      }}
                    />
                  </span>

                  <h2 class="mt-2 font-bold text-blue">Family suit</h2>

                  <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-blue">
                    500jd per night
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default ItemOne;
