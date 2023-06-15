import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [newUser, setNewUSer] = useState({
    name: "",
    email: "",
    password: "",
    type: "client",
  });
  const [error, seterror] = useState("");
  const [confirmPassword, setConfirmpass] = useState("");

  function validateEmail(newUser) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(newUser.email);
  }

  function validatePassword(newUser) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(newUser.password);
  }
  function validateConfirmPassword(confirmPassword, newUser) {
    if (confirmPassword != newUser.password) return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:5500/api/users", newUser).then((res) => {
      res.data.error == "email already exists try another one"
        ? seterror("email already exists try another one")
        : seterror("");
      if (res.data == true) return navigate("/login/guest");
    });
  }

  function handleCallBackResponse(response) {
    console.log("Encoded JWT: " + response.credential);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "7253351254-sqamgnt7l36cs9op6he04hoaena21vqd.apps.googleusercontent.com",
      callback: handleCallBackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <main className="w-full h-screen flex flex-col items-center justify-cente sm:px-4 mb-32 mt-28">
      <div className="w-full space-y-6 sm:max-w-md">
        <div className="max-w-sm w-full text-black border-2 border-gray-200 bg-white shadow p-5 py-6 sm:p-6 sm:rounded-lg ">
          <form className="space-y-5" onSubmit={(e) => handleSubmit(e)}>
            <div className="text-center pb-8">
              <span className="font-bold text-4xl">
                Sign<span className="text-[#5aa1c2] font-bolder">up</span>{" "}
              </span>
            </div>
            <div
              id="signInDiv"
              className="w-full max-w-full flex justify-center"
            ></div>
            <div>
              <label
                htmlFor="name"
                className={`block mb-2 text-sm font-medium `}
              >
                Full name
              </label>
              <input
                type="text"
                id="name"
                required
                className={` w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border shadow-sm rounded-lg`}
                placeholder="Enter your name !"
                name="name"
                value={newUser.name}
                onChange={(e) => {
                  setNewUSer({ ...newUser, [e.target.name]: e.target.value });
                }}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className={`block mb-2 text-sm font-medium`}
              >
                Email
              </label>
              <input
                placeholder="Enter your email !"
                type="email"
                id="email"
                required
                className={`w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border shadow-sm rounded-lg`}
                name="email"
                value={newUser.email}
                onChange={(e) => {
                  setNewUSer({ ...newUser, [e.target.name]: e.target.value });
                }}
              />
              {!validateEmail(newUser) && newUser.email !== "" && (
                <p className="text-red-600">
                  Please enter a valid email address.
                </p>
              )}
              <span className="text-red-600">{error}</span>
            </div>
            <div>
              <label
                htmlFor="password"
                className={`block mb-2 text-sm font-medium`}
              >
                Password
              </label>
              <input
                placeholder="Enter your Password !"
                id="password"
                type="password"
                required
                className={`w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border shadow-sm rounded-lg`}
                name="password"
                value={newUser.password}
                onChange={(e) => {
                  setNewUSer({ ...newUser, [e.target.name]: e.target.value });
                }}
              />
              {!validatePassword(newUser) && newUser.password !== "" && (
                <p className="text-red-600">
                  Please enter a password that is at least 8 characters long and
                  contains at least one lowercase letter, one uppercase letter,
                  and one number.
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className={`block mb-2 text-sm font-medium`}
              >
                Confirm password
              </label>
              <input
                placeholder="Enter your Password !"
                id="confirmPassword"
                type="password"
                className={`w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border shadow-sm rounded-lg`}
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmpass(e.target.value);
                }}
              />
              {validateConfirmPassword(confirmPassword, newUser) &&
                confirmPassword !== "" && (
                  <p className="text-red-600">
                    The passwords you entered do not match. Please try again.
                  </p>
                )}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 mb-2 text-white font-medium bg-[#4e94b5] hover:bg-white hover:text-black border hover:border-black rounded-lg duration-150"
            >
              Create account
            </button>
          </form>
          <div className="mt-5">
            <p className="text-center">
              Already have an account?
              <span className="ml-1">
                <Link
                  to={"/login/guest"}
                  className=" font-medium text-[#4e94b5] hover:text-black hover:underline transition"
                >
                  Login
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
