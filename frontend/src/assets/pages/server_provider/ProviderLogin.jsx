import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  const navigate = useNavigate();
  const [user, setUSer] = useState({
    email: '',
    password: '',
  })
  const [emailerror, setemailerror] = useState('')
  const [passworderror, setpassworderror] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:5500/api/auth/login', user)
      .then((res) => {
        if (res.data.error == 'Email is incorrect' || res.data.error == "incorrect password") {
          res.data.error == 'Email is incorrect' ? setemailerror('Email is incorrect') : setemailerror('');
          res.data.error == "incorrect password" ? setpassworderror("incorrect password") : setpassworderror('');
        } else {
          localStorage.setItem('token', JSON.stringify(res.data));
          props.forceUpdate()
          return navigate('/providerprofile')
        }
      })

  }
  return (
    <>
      <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
        <div className="w-full space-y-6 sm:max-w-md">
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <div className="max-w-sm w-full text-black space-y-5 bg-white shadow p-5 py-6 sm:p-6 sm:rounded-lg ">
              <div className="text-center pb-8">
                <span className="font-bold text-4xl">
                  Log<span className="text-[#5aa1c2] font-bolder">in</span>{" "}
                </span>
              </div>
              <div>
                <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border border-black rounded-lg text-sm font-medium hover:bg-black hover:text-white duration-150">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_17_40)">
                      <path
                        d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                        fill="#34A853"
                      />
                      <path
                        d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                        fill="#EA4335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_17_40">
                        <rect width="48" height="48" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Continue with Google
                </button>
              </div>
              <feConvolveMatrix className="space-y-5 ">
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium mt-12"
                  >
                    Email Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="your email"
                    className={`w-full mt-2 px-3 text-black py-2 bg-transparent outline-none border shadow-sm rounded-lg`}
                    name="email"
                    value={user.email}
                    onChange={(e) => {
                      setUSer({ ...user, [e.target.name]: e.target.value });
                    }}
                  />
                  <span className="text-red-600">{emailerror}</span>
                </div>
                <div>
                  <label
                    for="password"
                    className={`block mb-2 text-sm font-medium`}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="password"
                    id="password"
                    className={`w-full mt-2 px-3 py-2 text-black bg-transparent outline-none border shadow-sm rounded-lg`}
                    name="password"
                    value={user.password}
                    onChange={(e) => {
                      setUSer({ ...user, [e.target.name]: e.target.value });
                    }}
                  />
                  <span className="text-red-600">{passworderror}</span>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white font-medium bg-[#4e94b5] hover:bg-white hover:text-black border hover:border-black rounded-lg duration-150"
                >
                  Sign in
                </button>
              </feConvolveMatrix>

              <p className="text-center">
                Don't have an account?
                <span className="ml-1">
                  <Link
                    to={"/providersignup"}
                    className="font-medium text-[#4e94b5] hover:text-black hover:underline transition"
                  >
                    Sign up
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
