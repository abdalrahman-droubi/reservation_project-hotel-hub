import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hotel1 from "../../images/hotelBg.jpeg";
import { useParams } from "react-router-dom";
import { FaBed, FaHome } from "react-icons/fa";
import { BiMoney } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Recommended = () => {
  const [hotel, setHotel] = useState([]);
  const navigat = useNavigate();
  const { id } = useParams();
  const [showFullDescription, setShowFullDescription] = useState(
    new Array(hotel.length).fill(false)
  );
  useEffect(() => {
    axios
      .get(`http://localhost:5500/hotels`)
      .then((response) => {
        const firstThreeHotels = response.data.slice(0, 3); // Extract the first three hotels
        setHotel(firstThreeHotels);
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [id]);

  useEffect(() => {
    AOS.init();
  }, []);

  function handleClick(id) {
    navigat(`/hoteldetails/${id}`);
    console.log(id);
  }

  const toggleDescription = (index) => {
    const updatedDescription = [...showFullDescription];
    updatedDescription[index] = !updatedDescription[index];
    setShowFullDescription(updatedDescription);
  };
  return (
    <>
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex justify-center">
          <h1 className="font-sans text-4xl font-bold mt-40">
            Homes guests love
          </h1>
        </div>
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-4 m-12 mx-auto">
            {hotel.map((hotel, index) => (
              <div className="max-w-2xl mx-auto">
                <div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 ">
                  <img
                    className="rounded-t-lg max-h-56 w-[400px] "
                    src={hotel.imagehotel}
                    alt=""
                    width={"100%"}
                    style={{
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <div className="p-5">
                    <a href="#">
                      <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                        {hotel.hotel_name}
                      </h5>
                    </a>
                    <h5 className="mt-4 text-gray-700 text-md cursor-pointer mb-8">
                      {showFullDescription[index] ? (
                        <span>{hotel.descriptions}</span>
                      ) : (
                        <span>{hotel.descriptions.substring(0, 100)}</span>
                      )}
                      {!showFullDescription[index] && (
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault(); // Prevent the default link behavior
                            toggleDescription(index);
                          }}
                          className="read-more p-2 text-blue-500"
                        >
                          Read More
                        </a>
                      )}
                    </h5>

                    <button
                      class="cta"
                      onClick={() => handleClick(hotel.hotel_id)}
                    >
                      <span class="hover-underline-animation"> book now </span>
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommended;
