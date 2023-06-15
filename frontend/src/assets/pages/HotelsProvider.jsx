import React from "react";
import "../css/bookingbutton.css";
import HotelPhoto from "../components/HotelDetails/Hotelphoto";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/home/SearchBar";
import { FaStar } from "react-icons/fa"; // Import the star icon from react-icons
import { Link, useLocation, useNavigate } from "react-router-dom";

function HotelsProvider() {
  const [hotelList, setHotelList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigat = useNavigate();

  const getHotels = async () => {
    try {
      const response = await axios.get("http://localhost:5500/hotels");
      console.log(response.data);

      const filteredHotels = response.data.filter((hotel) => {
        const hotelName = hotel.hotel_name.toLowerCase();
        const searchQueryLower = searchQuery.toLowerCase();
        return hotelName.startsWith(searchQueryLower);
      });

      setHotelList(filteredHotels);
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} className="inline text-yellow-400" />);
    }
    return stars;
  };

  useEffect(() => {
    getHotels();
  }, [searchQuery]);

  function handleClick(id) {
    navigat(`/hoteldetails/${id}`);
    console.log(id);
  }
  return (
    <div>
      <HotelPhoto />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mt-8 flex items-center justify-between">
            <div className="flex rounded border border-gray-100"></div>
            <form className="flex-col  items-center">
              <SearchBar onSearch={setSearchQuery} />
            </form>
          </div>

          <div
            data-aos="fade-up"
            className="rounded-lg w-full dark:bg-gray-800 flex justify-center mt-32 sm:mt-32 md:mt-20 lg:mt-5  "
          >
            <div className="max-w-5xl ">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-4">
                {hotelList.map((hotel) => (
                  <div
                    className="max-w-2xl mx-auto m-8"
                    key={hotel.hote_id}
                    m-4
                  >
                    <div className="bg-white shadow-md  rounded-lg max-w-sm dark:bg-gray-800">
                      <div className="">
                        <img
                          className="rounded-t-lg max-h-48 w-[400px] "
                          src={hotel.imagehotel}
                          alt=""
                          width={"100%"}
                          style={{
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                          }}
                        />
                      </div>

                      <div className="p-5">
                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                          {hotel.hotel_name}
                        </h5>
                        <p className="p-2 font-normal text-gray-700 mb-3 dark:text-gray-400 my-3 bourder-2 rounded-3xl bg-blue-50 inline-block">
                          {hotel.city}
                        </p>
                        <br />
                        <div>{renderRatingStars(hotel.stars)}</div>

                        <div className="mt-5">
                          <div>
                            <button
                              class="cta"
                              onClick={() => handleClick(hotel.hotel_id)}
                            >
                              <span class="hover-underline-animation">
                                {" "}
                                book now{" "}
                              </span>
                              <svg
                                viewBox="0 0 46 16"
                                height="10"
                                width="30"
                                xmlns="http://www.w3.org/2000/svg"
                                id="arrow-horizontal"
                              >
                                <path
                                  transform="translate(30)"
                                  d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                                  data-name="Path 10"
                                  id="Path_10"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HotelsProvider;
