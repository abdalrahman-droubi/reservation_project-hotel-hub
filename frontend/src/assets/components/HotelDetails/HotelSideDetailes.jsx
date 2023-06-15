import React from "react";

function HotelSideDetailes() {
  return (
    <div>
      <div class="lg:sticky lg:top-0">
        <form class="space-y-4 lg:pt-8">
          <fieldset>
            <legend class="text-3xl font-bold text-[#3e311f] mb-4">
              Royal Hotel
            </legend>
            <div class="rounded border  bg-blue p-4">
              <img src="https://i.pinimg.com/564x/be/76/8f/be768fa1e98ef40648a0c26185768b01.jpg" />
              <p class="text-sm">
                <span class="block text-lg"> Price Per Night </span>

                <p class=" text-lg mt-1 inline-block underline"> 100 jd </p>
              </p>
            </div>
          </fieldset>

          <fieldset>
            <legend class="text-lg  font-bold">Classic room</legend>

            <div class="rounded border bg-blue p-4">
              <div class="overflow-x-auto">
                <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                  <thead class="ltr:text-left rtl:text-right">
                    <tr>
                      <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Room Details
                      </th>

                      <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Classic room
                      </th>
                    </tr>
                  </thead>

                  <tbody class="divide-y divide-gray-200">
                    <tr>
                      <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Beds:
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        4
                      </td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Floor Area
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        19m<sup>2</sup>
                      </td>
                    </tr>

                    <tr>
                      <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Max Guests
                      </td>

                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        7
                      </td>
                    </tr>

                    <tr>
                      <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        Max Children
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        3
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className=" divide-y-2 divide-gray-200">
                  <p className="text-bold text-lg mt-4 text-left  ">
                    Additional Features
                  </p>
                  <ul className="text-left list-disc list-inside ">
                    <li>Free Wifi</li>
                    <li>Balcony with sea view</li>
                    <li>Cable TV service</li>
                    <li>Air conditioning</li>
                  </ul>
                </div>
              </div>
            </div>
          </fieldset>

          <button
            type="submit"
            class="w-full rounded  px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#3e311f] border border-blue hover:shadow-lg hover:shadow-blue "
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default HotelSideDetailes;
