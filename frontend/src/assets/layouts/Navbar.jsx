import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function handleLogout() {
    localStorage.clear();
    props.forceUpdate();
  }
  return (
    <div>
      {" "}
      <nav className="bg-[#8dbbd0]  fixed w-full z-20 top-0 left-0 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a to="https://flowbite.com/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              HotelHub
            </span>
          </a>
          <div className="flex md:order-2">
            {props.userName ? (
              <>
                <div className="relative">
                  <button
                    id="dropdownInformationButton"
                    data-dropdown-toggle="dropdownInformation"
                    className="text-white bg-[#5aa1c2] hover:bg-[#4e94b5] focus:ring-4 focus:outline-none focus:ring-[#5aa1c2]-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                    type="button"
                    onClick={toggleDropdown}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>{" "}
                    <svg
                      className="w-4 h-4 ml-2"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {/* Dropdown menu */}
                  {showDropdown && (
                    <div
                      id="dropdownInformation"
                      className="z-10 w-auto bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600 absolute top-10 left-0"
                    >
                      <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div>{props.userName}</div>
                        <div className="font-medium truncate">
                          {props.userEmail}
                        </div>
                      </div>
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownInformationButton"
                      >
                        <li>
                          <Link
                            to="userprofile"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Profil page
                          </Link>
                        </li>
                      </ul>
                      <div className="py-2" onClick={handleLogout}>
                        <Link
                          to="/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Sign out
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <Link to={"/login/guest"}>
                <button
                  type="button"
                  className="text-white bg-[#5aa1c2] hover:bg-[#4e94b5] focus:ring-4 focus:outline-none focus:ring-[#5aa1c2]-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#5aa1c2]-600 dark:hover:bg-[#5aa1c2]-700 dark:focus:ring-[#5aa1c2]-800"
                >
                  Login
                </button>
              </Link>
            )}
            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbarMenu"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            id="navbarMenu"
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                    location.pathname === "/" ? "text-[#355e71]" : "text-black"
                  } hover:text-[#355e71] active:text-[#355e71]`}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/hotelsprovider"
                  className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                    location.pathname === "/hotelsprovider"
                      ? "text-[#355e71]"
                      : "text-black"
                  } hover:text-[#355e71] active:text-[#355e71]`}
                >
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                    location.pathname === "/aboutus"
                      ? "text-[#355e71]"
                      : "text-black"
                  } hover:text-[#355e71] active:text-[#355e71]`}
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  to="/contactus"
                  className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                    location.pathname === "/contactus"
                      ? "text-[#355e71]"
                      : "text-black"
                  } hover:text-[#355e71] active:text-[#355e71]`}
                >
                  Get in Touch
                </Link>
              </li>
              {!props.userName && (
                <li>
                  <Link
                    to="/providerlogin"
                    className={`block py-2 pl-3 pr-4 rounded md:p-0 ${
                      location.pathname === "/providerlogin"
                        ? "text-[#355e71]"
                        : "text-black"
                    } hover:text-[#355e71] active:text-[#355e71]`}
                  >
                    Add Your Hotel
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
