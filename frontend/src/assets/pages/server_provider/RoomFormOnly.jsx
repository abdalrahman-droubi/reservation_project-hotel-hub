import axios from "axios";
import React, { useEffect, useState, useReducer } from "react";
import { FaStar } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import Swal from 'sweetalert2/src/sweetalert2.js'

const RoomhtmlFormOnly = (props) => {
  const [roomType, setRoomType] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [price, setPrice] = useState("");
  const [bedNumber, setBedNumber] = useState("");
  const [roomArea, setRoomArea] = useState("");
  const [description, setDescription] = useState("");
  const [guests, setGuests] = useState("");
  const [reducer, htmlForceUpdate] = useReducer((x) => x + 1, 0);
  const [roomData, setRoomData] = useState([]);
  const [hotelData, sethotelData] = useState([]);
  const [hotelId, setHotelId] = useState()
  const [run, setRun] = useState(false)

  ///////////////////////////////////////////////////////////////////////////////////////
  const [base64code, setbase64code] = useState();
  const onChange = e => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
    console.log(base64code);
  };
  const onLoad = fileString => {

    setbase64code(fileString);
  };
  const getBase64 = file => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };
  ///////////////////////////////////////////////////////////////////////////////////////

  const handleRoomTypeChange = (e) => {
    setRoomType(e.target.value);
  };
  const handleRoomNumberChange = (e) => {
    setRoomNumber(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleBedNumberChange = (e) => {
    setBedNumber(e.target.value);
  };
  const handleRoomAreaChange = (e) => {
    setRoomArea(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} className="inline text-yellow-400" />);
    }
    return stars;
  };
  // ----------------show hotel----------------- 
  useEffect(() => {
    axios.get(`http://localhost:5500/rooms/hotelrooms/${props.userid}`).then((res) => {
      setHotelId(res.data[0].hotel_id)
      sethotelData(res.data[0])
      console.log(res.data);
    });
  }, [run])
  let [base64codeh, setbase64codeh] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [hotelName, setHotelName] = useState();
  const [phonNumber, setPhonNumber] = useState();
  const [city, setCity] = useState();
  const [descriptionh, setDescriptionh] = useState();
  const [rating, setRating] = useState(renderRatingStars());
  const handleTogglePopup = () => {
    setShowPopup(!showPopup);
    setbase64codeh(hotelData.imagehotel)
    setHotelName(hotelData.hotel_name)
    setPhonNumber(hotelData.phonehotel)
    setCity(hotelData.city)
    setDescriptionh(hotelData.descriptions)
    setRating(hotelData.stars)
  };

  const handleSavePopup = (event) => {
    event.preventDefault();
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your edit has been saved',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      axios.put(`http://localhost:5500/hotels/${hotelId}`, { base64codeh, hotelName, phonNumber, city, descriptionh, rating })
        .then((res) => {
          console.log(res.data);
        });
      setShowPopup(false);
    }).then(() => {
      setRun(!run)
    })
  };
  console.log(hotelName);
  console.log(city);
  console.log(descriptionh);
  const handleRatingChange = (value) => {
    setRating(value);
  };
  const handlehotelNameChange = (e) => {
    setHotelName(e.target.value);
  };

  const handlePhonNumberChange = (e) => {
    setPhonNumber(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleDescriptionhChange = (e) => {
    setDescriptionh(e.target.value);
  };

  const onChangeh = e => {
    const files = e.target.files;
    const file = files[0];
    getBase64h(file);
    // console.log(base64code);
  };
  const onLoadh = fileString => {

    setbase64code(fileString);
  };
  const getBase64h = file => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoadh(reader.result);
    };
  };
  // ------------------send rooms---------------
  const handleSubmit = (e) => {
    e.preventDefault();
    // e.target.reset();
    axios
      .post("http://localhost:5500/rooms", {
        room_type: roomType,
        number_of_room: roomNumber,
        price: price,
        number_of_beds: bedNumber,
        floor_area: roomArea,
        descriptions: description,
        room_img: [base64code],
        hotel_id: hotelId,
        number_of_guests: guests
      })
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    htmlForceUpdate();
  }
  // ----------------show rooms----------------- 
  useEffect(() => {
    if (hotelId)
      axios.get(`http://localhost:5500/rooms/provider/${hotelId}`).then((res) => {
        setRoomData(res.data);
        // console.log(roomData);
      });
  }, [reducer, hotelId]);

  const deleteRoom = async (id) => {
    try {
      await axios.delete(`http://localhost:5500/rooms/${id}`);
      console.log("Room deleted successfully");
      setRoomData(roomData.filter((room) => room.room_id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  const editRoom = async (id) => {
    try {
      axios.put(`http://localhost:5500/rooms/${roomData.id}`, {
        roomType: editedRoomType,
        roomNumber: editedRoomNumber,
        roomImage: base64code,
        price: editedPrice,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* -----------------------------------------------hotel----------------------------- */}
      <div className="card card-side bg-base-100 shadow-2xl max-w-4xl p-6 mx-auto">
        <figure><img src={hotelData.imagehotel} alt="hotel" className="w-72 h-64" /></figure>
        <div className="card-body w-1/2">
          <div className="flex justify-between">
            <h2 className="card-title">{hotelData.hotel_name}</h2>
            <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700 gap-1">
              {hotelData.is_accept ? <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="-ms-1 me-1.5 h-4 w-4 text-green-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="whitespace-nowrap text-sm">accept</p>
              </>
                : <>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="-ms-1 me-1.5 h-4 w-4 text-red-800">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="whitespace-nowrap text-sm">Not accept</p>
                </>}
            </span>
          </div>
          <p>{renderRatingStars(hotelData.stars)}</p>
          <p>{hotelData.city}</p>
          <p>{hotelData.descriptions}</p>
          <div className="card-actions justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded "
              onClick={handleTogglePopup}
            >
              Edit <FiEdit className="inline-block" />
            </button>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-xl font-bold mb-4">Edit Hotel</h2>
            <form onSubmit={handleSavePopup}>
              <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label class="text-black dark:text-gray-200" for="username">
                    Hotel name
                  </label>
                  <input
                    value={hotelName}
                    onChange={handlehotelNameChange}
                    id="username"
                    type="text"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-[#5c97b3] dark:focus:border-[#5c97b3] focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label class="text-black dark:text-gray-200" for="password">
                    Phone Number
                  </label>
                  <input
                    value={phonNumber}
                    onChange={handlePhonNumberChange}
                    id="phonnumber"
                    type="tel"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-[#5c97b3] dark:focus:border-[#5c97b3] focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label
                    class="text-black dark:text-gray-200"
                    for="passwordConfirmation"
                  >
                    City
                  </label>
                  <select
                    value={city}
                    onChange={handleCityChange}
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-[#5c97b3] dark:focus:border-[#5c97b3] focus:outline-none focus:ring">
                    <option>Amman</option>
                    <option>As-Salt</option>
                    <option>Irbid</option>
                    <option>Aqaba</option>
                    <option>Jerash</option>
                    <option>Ajloun</option>
                  </select>
                </div>

                <div>
                  <label
                    class="text-black dark:text-gray-200"
                    for="passwordConfirmation"
                  >
                    Description
                  </label>
                  <textarea
                    value={descriptionh}
                    onChange={handleDescriptionhChange}
                    id="textarea"
                    type="textarea"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-[#5c97b3] dark:focus:border-[#5c97b3] focus:outline-none focus:ring"
                  ></textarea>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">{rating} Stars</span>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <button
                      key={value}
                      type="button"
                      className={`text-xl ${value <= rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                      onClick={() => handleRatingChange(value)}
                    >
                      &#9733;
                    </button>
                  ))}
                </div>
                <div>
                  <label class="block text-sm font-medium text-black">
                    Image
                  </label>
                  <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div class="space-y-1 text-center">
                      <svg
                        class="mx-auto h-12 w-12 text-black"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div class="flex text-sm text-gray-600">
                        <label
                          for="file-uploadd"
                          class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span class="">Upload a file</span>
                          {/* <img src={`data:image;base64${base64codeh}`} width={"100px"} /> */}
                          <input
                            onChange={onChangeh}
                            id="file-uploadd"
                            name="file-upload"
                            type="file"
                            class="sr-only"
                            accept="image/*"
                          />
                        </label>
                      </div>
                      <p class="text-xs text-black">PNG, JPG, GIF</p>
                    </div>
                  </div>
                </div>
                <div></div>
                <div class="flex justify-end mt-6">
                  <button
                    type="submit"
                    class="px-6 py-2 leading-5 text-black transition-colors duration-200 transform bg-[#5c97b3] rounded-md hover:bg-[#5188a1] focus:outline-none focus:bg-gray-600"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* -----------------------------------------------rooms----------------------------- */}
      <section class="max-w-4xl p-6 mx-auto bg-white rounded-md border-2  shadow-md  mt-20">
        <h2 class="text-lg font-bold text-black capitalize dark:text-black">
          Room details
        </h2>
        <form >
          <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label class="text-black dark:text-gray-200" htmlFor="roomType">
                Room type
              </label>
              <select
                name="roomType"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-[#5c97b3] dark:focus:border-[#5c97b3] focus:outline-none focus:ring"
                value={roomType}
                onChange={handleRoomTypeChange}
              >
                <option value="single">Single</option>
                <option value="double">Double</option>
              </select>
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-[#5c97b3] dark:focus:border-[#5c97b3] focus:outline-none focus:ring"
                type="number"
                id="price"
                value={price}
                onChange={handlePriceChange}
                step="0.01"
                min="0"
              />
            </div>

            <div>
              <label
                class="text-black dark:text-gray-200"
                htmlFor="numberOfRooms"
              >
                Number of Room
              </label>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-[#5c97b3] dark:focus:border-[#5c97b3] focus:outline-none focus:ring"
                type="number"
                id="numberOfRooms"
                min={1}
                value={roomNumber}
                onChange={handleRoomNumberChange}
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200" htmlFor="maxGuest">
                Max guest
              </label>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-[#5c97b3] dark:focus:border-[#5c97b3] focus:outline-none focus:ring"
                type="number"
                id="maxGuest"
                min={1}
                value={guests}
                onChange={handleGuestsChange}
              />
            </div>
            <div>
              <label class="text-black dark:text-gray-200" htmlFor="Beds">
                Beds
              </label>
              <input
                id="Beds"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-[#5c97b3] dark:focus:border-[#5c97b3] focus:outline-none focus:ring"
                type="number"
                min={1}
                value={bedNumber}
                onChange={handleBedNumberChange}
              />
            </div>
            <div className="mt-3">
              <label class="text-black dark:text-gray-200" htmlFor="floorArea">
                floor area
              </label>
              <input
                id="floorArea"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-[#5c97b3] dark:focus:border-[#5c97b3] focus:outline-none focus:ring"
                type="number"
                min={1}
                value={roomArea}
                onChange={handleRoomAreaChange}
              />
            </div>

            <div>
              <label
                class="text-black dark:text-gray-200"
                htmlFor="passwordConfirmation"
              >
                Description
              </label>
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                id="textarea"
                type="textarea"
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-[#5c97b3] dark:focus:border-[#5c97b3] focus:outline-none focus:ring"
              ></textarea>
            </div>
            <div>
              <label class="block text-sm font-medium text-black">Image</label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 text-black"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span class="">Upload a file</span>
                      {/* {base64code && ( */}
                      {/* base64code.map((ele) => { */}
                      <img
                        src={`data:image;base64${base64code}`}
                        width={"100px"}
                      />
                      {/* }) */}

                      {/* )} */}
                      <input
                        onChange={onChange}
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        class="sr-only"
                        accept="image/*"
                        multiple
                      />
                    </label>
                  </div>
                  <p class="text-xs text-black">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              class="px-6 py-2 leading-5 text-black transition-colors duration-200 transhtmlForm bg-[#5c97b3] rounded-md hover:bg-[#5188a1] focus:outline-none focus:bg-gray-600"
            >
              Add
            </button>
          </div>
        </form>
      </section>
      <div className="card-container max-w-4xl p-6 mx-auto mt-20 grid  lg:grid-cols-2 gap-6 sm:grid-cols-1">
        {roomData.map((room) => (
          <div
            className="card bg-white p-4 rounded-md border-2 my-2"
            key={room.room_id}
          >
            <img
              src={room.room_img}
              alt="Room"
              className="w-full h-64 mb-4 rounded-lg"
            />
            <h2 className="text-xl font-bold mb-2">
              Room Type: {room.room_type}
            </h2>
            <p className="text-gray-700 mb-2">
              Number of Room: {room.number_of_room}
            </p>

            <p className="text-gray-700">Price: {room.price}</p>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => deleteRoom(room.room_id)}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md mr-2"
              >
                Delete
              </button>
              <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RoomhtmlFormOnly;
