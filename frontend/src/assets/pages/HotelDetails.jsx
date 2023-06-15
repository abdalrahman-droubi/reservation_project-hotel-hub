import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBed, FaHome } from "react-icons/fa";
import { BiMoney } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa"; // Import the star icon from react-icons

import axios from "axios";
function HotelDetails(props) {
  const [roomList, setRoom] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [hotelId, setHotelId] = useState();
  const navigat = useNavigate();
  // const filteredRooms = roomList.filter((room) => room.hotel_id === id);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5500/hotels/${id}`)
      .then((response) => {
        setHotel(response.data);
        setHotelId(response.data[0].hotel_id);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [id]);
  useEffect(() => {
    if (hotelId) {
      axios
        .get(`http://localhost:5500/rooms/${hotelId}`)
        .then((response) => {
          setRoom(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [hotelId]);

  function handleBookClick(id) {
    props.userType == "guest"
      ? navigat(`/login/${hotelId}`)
      : navigat(`/payment/${id}`);
    console.log(hotelId);
  }
  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} className="inline text-yellow-400" />);
    }
    return stars;
  };
  return (
    <>
      <div>
        <div className="bg-black p-8 sm:p-12 md:p-16 lg:p-20 mb-8 sm:mb-16 md:mb-24">
          <div className="max-w-6xl p-6 mx-auto bg-black rounded-md mt-8 sm:mt-12">
            {hotel.map((hotel) => (
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div className="flex flex-col leading-normal p-4 sm:p-6 md:p-8 lg:p-10">
                  <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-100 dark:text-white mb-6 sm:mb-8 md:mb-10">
                    {hotel.hotel_name}
                  </h2>
                  <p className="text-base sm:text-lg text-gray-100 dark:text-gray-400">
                    {hotel.descriptions}
                  </p>
                  <p className="text-base sm:text-lg text-gray-100 dark:text-gray-400 mt-8">
                    {hotel.city}
                  </p>
                  <div>{renderRatingStars(hotel.stars)}</div>
                </div>

                <img
                  className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-auto rounded-xl"
                  src={hotel.imagehotel}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg w-full flex justify-center mt-32 sm:mt-32 md:mt-20 lg:mt-5  ">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2  gap-32 m-12 mx-auto">
            {roomList.map((room) => (
              <div class="max-w-sm mx-auto bg-white px-6 pt-6 pb-2 rounded-xl shadow-xl shadow-black-200 transform hover:scale-105 transition duration-500">
                <h1 class="mb-3 text-xl font-bold text-[#89a7b5] uppercase">
                  {room.room_type}
                </h1>
                <div class="relative w-full rounded-xl">
                  <div class="w-full rounded-xl">
                    {/* <Carousel/> */}
                    <img
                      class="rounded-xl max-h-48 w-[400px] "
                      src={room.room_img}
                      alt="Colors"
                    />
                  </div>
                  <p class="absolute top-0 bg-[#8dbbd0] text-gray-800 font-semibold py-4 px-3 rounded-br-lg rounded-tl-lg">
                    {room.price} JOD per night
                  </p>
                </div>
                <div class="my-4">
                  <div class="flex space-x-1 items-center">
                    <BiMoney class="h-6 w-6 text-[#89a7b5] mb-1.5" />
                    <p>{room.price} jod per night</p>
                  </div>
                  <div class="flex space-x-1 items-center">
                    <FaBed class="h-6 w-6 text-[#89a7b5] mb-1.5" />
                    <p>Number of beds: {room.number_of_beds} beds</p>
                  </div>
                  <div class="flex space-x-1 items-center">
                    <BsPeopleFill class="h-6 w-6 text-[#89a7b5] mb-1.5" />
                    <p>Max_Guest: {room.number_of_guests}</p>
                  </div>
                  <div class="flex space-x-1 items-center">
                    <FaHome class="h-6 w-6 text-[#89a7b5] mb-1.5" />
                    <p>
                      Floor Area: {room.floor_area}m<sup>2</sup>
                    </p>
                  </div>
                  <hr className="mt-4" />
                  <h5 class="mt-4 text-gray-800 text-md cursor-pointer">
                    Feauture: {room.descriptions}
                  </h5>
                  <button
                    onClick={() => handleBookClick(room.room_id)}
                    class="mt-4 text-xl w-full text-black  border-2 border-black bg-white hover:bg-black hover:text-white py-2 rounded-xl shadow-lg"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelDetails;
