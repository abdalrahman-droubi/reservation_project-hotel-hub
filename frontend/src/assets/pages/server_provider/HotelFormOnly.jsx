import axios from "axios";
import React, { useState } from "react";
import Swal from 'sweetalert2/src/sweetalert2.js'

const HotelFormOnly = (props) => {
  const [hotelName, setHotelName] = useState("");
  const [phonNumber, setPhonNumber] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  ///////////////////////////////////////////////////////////////////////////////////////
  let [base64code, setbase64code] = useState();
  const onChange = e => {
    const files = e.target.files;
    const file = files[0];
    getBase64(file);
    // console.log(base64code);
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
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  function handleSubmitt(e) {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: "Please review and confirm the information you have provided",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, create'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Done!',
          'Your hotels had been created.',
          'success'
        )
        axios
          .post("http://localhost:5500/hotels", {
            hotel_name: hotelName,
            phoneHotel: phonNumber,
            imageHotel: base64code,
            descriptions: description,
            city: city,
            stars: rating,
            user_id: props.userid
          })
          .then(function (response) {
            props.forceUpdate()
          })
          .catch(function (error) { });
      }
    })
  }
  return (
    <section class="max-w-4xl p-6 mx-auto bg-white border-2 rounded-md shadow-md  ">
      <h1 class="text-xl font-bold text-black capitalize dark:text-black">
        Hotel details
      </h1>
      <form onSubmit={handleSubmitt}>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label class="text-black dark:text-gray-200" for="username">
              Hotel name
            </label>
            <input
              id="username"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-[#5c97b3] dark:focus:border-[#5c97b3] focus:outline-none focus:ring"
              value={hotelName}
              onChange={handlehotelNameChange}
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
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-[#5c97b3] dark:focus:border-[#5c97b3] focus:outline-none focus:ring"
              value={city}
              onChange={handleCityChange}
            >
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
              value={description}
              onChange={handleDescriptionChange}
              id="textarea"
              type="textarea"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-[#5c97b3] dark:focus:border-[#5c97b3] focus:outline-none focus:ring"
            ></textarea>
          </div>
          <div>
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
                    for="file-uploadd"
                    class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span class="">Upload a file</span>
                    <img src={`data:image;base64${base64code}`} width={"100px"} />
                    <input
                      onChange={onChange}
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
        </div>

        <div class="flex justify-end mt-6">
          <button
            type="submit"
            class="px-6 py-2 leading-5 text-black transition-colors duration-200 transform bg-[#5c97b3] rounded-md hover:bg-[#5188a1] focus:outline-none focus:bg-gray-600"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default HotelFormOnly;
