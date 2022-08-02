import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GrGroup } from "react-icons/gr";
import { BsChatLeft } from "react-icons/bs";
import { TiGroupOutline } from "react-icons/ti";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaNetworkWired } from "react-icons/fa";
import { GiNewspaper } from "react-icons/gi";
import { MdOutlineLiveTv } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function HomeSidePannel(props) {
  const navigate = useNavigate();
  const Main = [
    { title: "Community", icon: <FaNetworkWired />, link: "/Community" },
    { title: "Members", icon: <HiOutlineUserGroup />, link: "/Members" },
    { title: "News", icon: <GiNewspaper />, link: "/News" },
    { title: "Streams", icon: <MdOutlineLiveTv />, link: "/Streams" },
  ];
  const Account = [
    { title: "My Group", icon: <GrGroup />, link: "/MyGroup" },
    { title: "Chat", icon: <BsChatLeft />, link: "/Chat" },
    // { title: "Friends", icon: <TiGroupOutline />, link: "/Friends" },
    { title: "Profile", icon: <CgProfile />, link: "/Profile" },
  ];

  const Goto = (link) => {
    navigate(link);
  };

  return (
    <motion.div
      className="select-none "
      // initial={{ x: -400 }}
      // animate={{ x: -0 }}
      // transition={{ delay: .5, type:'tween' }}
    >
      <div className="m-0 p-0  overflow-x-hidden overflow-y-clip h-auto lg:h-auto w-[100px] duration-300 lg:w-[250px] fixed bg-white shadow-2xl dark:bg-[#1a2634] dark:text-white">
        <motion.div className="lg:ml-8 scale-y-0 lg:scale-y-100 -mt-4 text-3xl font-poppins font-bold  duration-500 fixed">
          TEAMHOST
        </motion.div>
        <div className="flex h-screen ">
          {window.location.pathname === "/GroupChat" ? (
            <ul className="text-black text-xl  my-5 lg:my-[40px] duration-500">
              {[...Array(10)].map((list, index) => {
                return (
                    <li key={index} className="text-base font-extrabold pl-5 pt-3 pb-3 ml-4 rounded-md hover:bg-slate-300 hover:bg-opacity-50 w-[220px] "> <span className="text-xl text-gray-500">#</span> Test Community</li>
                )
                
              })}
            </ul>
          ) : (
            <ul className="text-black text-xl  my-5 lg:my-[40px] duration-500 ">
              <li
                className="ml-10 lg:flex font-sans mt-5 mb-5 text-sm hover:text-orange-400  invisible lg:visible  dark:text-white dark:hover:text-orange-400"
                onClick={() => navigate("/")}
              >
                <AiOutlineHome className="text-2xl mr-2 mt-[-3px] !scale-100 lg:!scale-100 !visible md:lg:visible" />
                Home
              </li>
              <li className="ml-7 mb-4 lg:ml-10 text-xl font-mono  dark:text-white">
                Main
              </li>

              {Main.map((value, index) => {
                return (
                  <div
                    key={index}
                    className={
                      window.location.pathname === value.link
                        ? ""
                        : " w-[240px] hover:bg-orange-300 hover:rounded-full hover:rounded-l-none hover:h-12 hover:mb-2 hover:pt-2 duration-200 dark:hover:bg-orange-500"
                    }
                    onClick={() => Goto(value.link)}
                  >
                    <li
                      className={`${
                        window.location.pathname === value.link
                          ? " h-12 lg:w-[240px] bg-orange-300 rounded-full rounded-l-none bottom-0 lg:border-l-8 border-orange-500 lg:pt-3 lg:pl-7  dark:text-white"
                          : " dark:text-white "
                      } ${
                        window.location.pathname === value.link
                          ? ""
                          : "lg:ml-8 pt-2"
                      }  mb-5  flex font-sans text-sm invisible hover:text-orange-400 duration-300 lg:visible cursor-pointer`}
                    >
                      <span
                        className={`text-2xl mr-2 mt-[-5px] ml-8 lg:ml-0 visible md:lg:visible ${
                          window.location.pathname === value.link
                            ? "w-10 lg:w-6 text-orange-600 lg:text-orange-500 lg:h-0 h-10 pt-2 lg:pt-0 lg:pl-0 pl-2  bg-orange-300"
                            : ""
                        } ${
                          value.select ? "" : " pl-2"
                        } lg:bg-inherit lg:rounded-none  rounded-full`}
                      >
                        {value.icon ? value.icon : ""}
                      </span>
                      {value.title}{" "}
                    </li>
                  </div>
                );
              })}
              <li className="ml-2 lg:ml-10 mb-4  text-lg font-mono lg-pl-4 lg:text-xl dark:text-white">
                Accounts
              </li>
              {Account.map((value, index) => {
                return (
                  <div
                    key={index}
                    className={
                      window.location.pathname === value.link
                        ? ""
                        : " w-[240px] hover:bg-orange-300 hover:rounded-full hover:rounded-l-none hover:h-12 hover:mb-2 hover:pt-2 duration-200 dark:hover:bg-orange-500"
                    }
                    onClick={() => Goto(value.link)}
                  >
                    <li
                      className={`${
                        window.location.pathname === value.link
                          ? " h-12 lg:w-[240px] bg-orange-300 rounded-full rounded-l-none bottom-0 lg:border-l-8 border-orange-500 lg:pt-4 lg:pl-8  dark:text-white"
                          : " dark:text-white "
                      } ${
                        window.location.pathname === value.link
                          ? ""
                          : "lg:ml-8 pt-2"
                      }  mb-5  flex font-sans text-sm invisible hover:text-orange-400 duration-300 lg:visible cursor-pointer`}
                    >
                      <span
                        className={`text-2xl mr-2 mt-[-5px] ml-8 lg:ml-0 visible md:lg:visible ${
                          window.location.pathname === value.link
                            ? "w-10 lg:w-6 text-orange-600 lg:text-orange-500 lg:h-0 h-10 pt-2 lg:pt-0 lg:pl-0 pl-2  bg-orange-300"
                            : ""
                        } ${
                          value.select ? "" : " pl-2"
                        } lg:bg-inherit lg:rounded-none  rounded-full`}
                      >
                        {value.icon ? value.icon : ""}
                      </span>
                      {value.title}{" "}
                    </li>
                  </div>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default HomeSidePannel;
