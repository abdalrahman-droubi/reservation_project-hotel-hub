import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LocationMenue from "../HotelDetails/LocationMenu";
import RatingMenu from "../HotelDetails/RatingMenu";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    const { value } = event.target;
    onSearch(value);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        data-aos="fade-up"
        className="homeSection filter-bar flex flex-col sm:flex-row items-center justify-center mx-auto max-w-4xl bg-black z-10 px-4 shadow-md bg-opacity-90	"
        style={{
          position: "absolute",
          top: "30rem",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
        }}
      >
        <div className="flex flex-col sm:flex-row  md:flex-row  items-center space-y-4 md:space-y-0 md:space-x-4 sm:space-y-0 sm:space-x-4 p-5">
          <div className="w-full sm:w-full">
            <RatingMenu />
          </div>
          <div className="w-full sm:w-full">
            <LocationMenue />
          </div>
          <div className="w-full sm:w-full">
            <TextField
              onChange={handleInputChange}
              className="text-white bg-white rounded-xl"
              id="outlined-basic"
              label="Search"
              variant="outlined"
              size="small"
              fullWidth
              InputProps={{
                endAdornment: <SearchIcon />,
              }}
            />
          </div>
        </div>

        {/* <button
          onClick={handleCheckAvailability}
          className="bg-[#5aa1c2] hover:bg-[#4d89a5] text-white py-5 px-4 mt-4 sm:mt-0 h-full mr-5  rounded-lg"
        >
          Check Availability
        </button> */}
      </div>
    </>
  );
};

export default SearchBar;