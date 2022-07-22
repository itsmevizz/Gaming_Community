import React, { useEffect, useRef, useState } from "react";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { login } from "../redux/features/authSlice";
// import Dark from "./darkMode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AuthanticationForm() {
  const navigation = useNavigate()
  const userData = localStorage.getItem("user");
  const {loading,error} = useSelector((state)=>({...state.auth}))
  useEffect(() => {
    // if (userData) {
    //   navigation('/')
    // }
    inputRef.current.focus();
    document.title = "Login";
    error && alert(error)
  }, [navigation, userData, error]);
  const dispatch = useDispatch()
  const [isPasswordShow, setPasswordShow] = useState(true);
  const inputRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, serEmailErr] = useState("");
  const [passErr, setPassErr] = useState(" ");

  const validEmail = () => {
    if (email === "" || /^\s*$/.test(email)) {
      serEmailErr("*Required");
    } else if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      serEmailErr("Email Invalid");
    } else {
      serEmailErr("");
    }
  };
  const validPassword = () => {
    if (password === " " || /^\s*$/.test(password)) {
      setPassErr("*Required");
    } else if (password.length < 3) {
      setPassErr("Password atleast 3");
    } else {
      setPassErr("");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (emailErr || passErr) {
      validEmail();
      validPassword();
    } else {
      dispatch(login({ email, password, navigation, toast }))
    }
  };
  const showPass = () => {
    isPasswordShow ? setPasswordShow(false) : setPasswordShow(true);
  };

  return (
    <div className="">
      <div
        class="max-h-full h-full bg-cover bg-center lg:h-screen lg:flex lg:w-full overflow-hidden "
        style={{ backgroundImage: `url("../Image/bg-first-screen.jpg")` }}
      >
        <div className="pt-1 m-auto ">
          <div className="text-center lg:text-left  lg:ml-[-150px]">
            <div class="text-white my-20 mb-[-70px] text-lg font-mono md:my-44 lg:my-72 lg:mx-40 lg:text-4xl">
              {/* <img
                src="assets/img/logo-big.png"
                alt="logo"
                class="animation-navspinv"
              /> */}
              <span>TeamHost</span>
              <h1 className="">Join now and play mighty games!</h1>
            </div>
          </div>
        </div>
        <div className="pb-[60px] lg:mr-10 ">
          <div className="shadow-lg box-border content-center relative w-full max-w-[530px] rounded-xl bg-white my-28 mx-auto lg:mx- dark:bg-[#0c1826]">
            {error ? <div className="text-center p-2 w-full h-10 bg-red-600 rounded-xl rounded-b-md opacity-70 " ><p className=" text-white font-mono font-semibold">{error}</p></div> : ""}
            <h1 className=" pt-[55px] text-orange-400  flex justify-center leading-relaxed font-bold dark:text-[#d6d6d6] text-3xl font-adelia text-center">
              Login
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
              <form onSubmit={submitHandler}>
                <div className="flex-col text-center">
                  <span className="text-red-500 text-sm">{emailErr}</span>
                  <br />
                  <input
                    className="bg-gray-100 outline-none mb-4 rounded-lg h-11 w-[300px] sm:w-[400px] pl-2 text-black text-sm leading-none font-sans hover:outline-orange-400 dark:bg-[#1a2634] dark:text-gray-200"
                    type="text"
                    placeholder=" Email"
                    ref={inputRef}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    onKeyUp={() => {
                      validEmail();
                    }}
                  />
                  <input
                    className="bg-gray-100 outline-none relative rounded-lg h-11 w-[300px] sm:w-[400px]  pl-2 text-black text-sm leading-none font-sans hover:outline-orange-400 dark:bg-[#1a2634] dark:text-white"
                    type={isPasswordShow ? "password" : "text"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    onKeyUp={() => {
                      validPassword();
                    }}
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
                  <br />
                  <span className="text-red-500 text-sm">{passErr}</span>
                  <br />
                </div>
                <div className="flex justify-center">
                  <button className="bg-orange-100 shadow-lg shadow-orange-100 text-orange-600 w-[300px] sm:w-[400px]  m-auto mb-5 mt-4 h-10 rounded-lg text-center hover:bg-orange-400 hover:text-white dark:bg-orange-600 dark:shadow-orange-700 dark:text-white">
                    Login
                  </button>
                </div>
                <div className="text-center mb-8 mt-3 text-sm hover:text-red-400">
                  <a href="01_login-in.html">Forgotten password?</a>
                </div>
                <div className="flex justify-center">
                  <hr className="w-[80%] dark:border-gray-700" />
                </div>
                <div className="text-center mt-5 text-sm h-10 flex justify-center">
                  <span>Don’t have an account? </span>
                  <div>
                    <span className="cursor-pointer hover:text-red-500 ml-2">
                      <Link className="txt2 ms-1" to={"/Signup"}>
                        Register
                      </Link>
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
