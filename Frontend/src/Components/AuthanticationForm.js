import React, { useState } from "react";
import "../index.css";
// import Dark from "./darkMode";

function AuthanticationForm() {
  const [password, setPasswordShow] = useState(true);
  const [signup, isSignUp] = useState(false);
  const Register = () => {
    signup ? isSignUp(false) : isSignUp(true);
  };
  const showPass = () => {
    password ? setPasswordShow(false) : setPasswordShow(true);
  };

  return (
    <div className="">
      <div
        class="h-full bg-cover bg-left lg:h-screen lg:flex lg:w-full "
        style={{ backgroundImage: `url("../Image/bg-first-screen.jpg")` }}
      >
        <div className="pt-1 m-auto ">
          <div className="text-center lg:text-left">
            <div class="text-white my-20 mb-[-70px] text-sm font-mono md:my-44 lg:my-72 lg:mx-40 lg:text-4xl">
              <img
                src="assets/img/logo-big.png"
                alt="logo"
                class="animation-navspinv"
              />
              <span>TeamHost</span>
              <h1 className="text-xs">Join now and play mighty games!</h1>
            </div>
          </div>
        </div>
        <div className="pb-10">
          <div className="shadow-lg box-border content-center relative w-full max-w-[530px] ml-auto p-[60px 50px] rounded-xl bg-white my-48 mx-auto lg:mx-40 dark:bg-[#0c1826]">
            <h1 className=" pt-[55px] text-orange-400  flex justify-center leading-relaxed font-bold dark:text-[#d6d6d6] text-3xl font-adelia text-center">
              {signup ? "SignUp" : "Login"}
            </h1>
            <div className="content-center flex justify-center mb-[20px] pt-[20px] ">
              <ul className="content-center flex align-middle justify-center m-0 p-0 list-none [&>*]:m-5">
                <li>
                  <a href="http://www.google.com">
                    <img
                      src="../../Icon/google.svg"
                      className="w-12"
                      alt="google"
                    />
                  </a>
                </li>
                <li>
                  <a href="http://www.facebook.com">
                    <img
                      src="../../Icon/facebook.svg"
                      className="w-12"
                      alt="facebook"
                    />
                  </a>
                </li>
                <li>
                  <a href="http://www.twitter.com">
                    <img
                      src="../../Icon/twitter.svg"
                      className="w-12"
                      alt="twitter"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-[#6C6C6C] font-normal font-mono text-lg">
              <div className=" text-[#6C6C6C] text-lg mb-8 font-normal flex justify-center leading-relaxed font-mono text-center">
                <hr className="w-[30%] m-auto dark:border-gray-700" />
                <span>or with Email</span>
                <hr className="w-[30%] m-auto dark:border-gray-700" />
              </div>
              <form action="#!">
                <div className="flex-col text-center">
                  <input
                    className="mb-4 bg-gray-100 outline-none rounded-lg h-11 w-[300px] sm:w-[400px] pl-1 text-black text-sm leading-none font-sans hover:outline-orange-400 dark:bg-[#1a2634] dark:text-gray-200"
                    type="text"
                    placeholder=" Email"
                  />
                  {signup ? (
                    <input
                      className="bg-gray-100 mb-4 outline-none rounded-lg h-11 w-[300px] sm:w-[400px]  pl-1 text-black text-sm leading-none font-sans hover:outline-orange-400 dark:bg-[#1a2634] dark:text-gray-200"
                      type="text"
                      placeholder=" Username"
                    />
                  ) : (
                    ""
                  )}

                  <input
                    className="bg-gray-100 outline-none relative rounded-lg h-11 w-[300px] sm:w-[400px]  pl-1 text-black text-sm leading-none font-sans hover:outline-orange-400 dark:bg-[#1a2634] dark:text-white"
                    type={password ? "password" : "text"}
                    placeholder="Password"
                  />
                  <label
                    for="checked-toggle"
                    class="inline-flex absolute mt-4 mx-[-50px] items-center cursor-pointer"
                  >
                    <input
                      id="checked-toggle"
                      type="checkbox"
                      class="sr-only peer"
                      onClick={showPass}
                    />
                    <div class="w-10 h-3 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-2 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div className="flex justify-center">
                  <button className="bg-orange-100 shadow-lg shadow-orange-100 text-orange-600 w-[300px] sm:w-[400px]  m-auto mb-5 mt-4 h-10 rounded-lg text-center hover:bg-orange-400 hover:text-white dark:bg-orange-600 dark:shadow-orange-700 dark:text-white">
                    {signup ? "Register" : "Login"}
                  </button>
                </div>
                <div className="text-center mb-8 mt-3 text-sm hover:text-red-400">
                  <a href="01_login-in.html">
                    {" "}
                    {signup ? "" : "Forgotten password?"}
                  </a>
                </div>
                <div className="flex justify-center">
                  <hr className="w-[80%] dark:border-gray-700" />
                </div>
                <div className="text-center mt-5 text-sm h-10 flex justify-center">
                  <span>Don’t have an account? </span>
                  <div onClick={Register}>
                    <span className="cursor-pointer hover:text-red-500 ml-2">
                      {signup ? " Login" : " Register"}
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthanticationForm;
