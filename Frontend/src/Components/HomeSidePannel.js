import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GrGroup } from "react-icons/gr";
import { BsChatLeft } from "react-icons/bs";
import { TiGroupOutline } from "react-icons/ti";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaNetworkWired } from "react-icons/fa";
import { GiNewspaper } from "react-icons/gi";
import { MdOutlineLiveTv } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";
import CommunityCard from "./CommunityCard";

function HomeSidePannel() {

  const Main = [
    { title: "Community", icon: <FaNetworkWired />, select:false },
    { title: "Members", icon: <HiOutlineUserGroup />, select:false },
    { title: "News", icon: <GiNewspaper />, select:false  },
    { title: "Streams", icon: <MdOutlineLiveTv />, select:false  },
  ];
  const Account = [
    { title: "My Group", icon: <GrGroup />, select:false  },
    { title: "Chat", icon: <BsChatLeft /> , select:false },
    { title: "Friends", icon: <TiGroupOutline />, select:false  },
    { title: "Profile", icon: <CgProfile />, select:false  },
  ];
  const select = (selectedTab) => {
    Main.map((items)=>{
      if (items.title === selectedTab.title) {
        items.select = true
      }
      return items
    })
  }; 

  return (
    <div className="select-none ">
      <div className="m-0 p-0  overflow-x-hidden overflow-y-clip h-auto lg:h-auto w-[100px] duration-300 lg:w-[250px] fixed bg-white shadow-2xl">
        <div className="lg:ml-8 scale-y-0 lg:scale-y-100 -mt-4 text-3xl font-poppins font-bold  duration-500 fixed">
          TEAMHOST
        </div>
        <div className="flex h-screen ">
          <ul className="text-black text-xl  my-5 lg:my-[40px] duration-500 ">
            <li className="ml-10 lg:flex font-sans mt-5 mb-5 text-sm hover:text-orange-400  invisible lg:visible">
              <AiOutlineHome className="text-2xl mr-2 mt-[-3px] !scale-100 lg:!scale-100 !visible md:lg:visible" />
              Home
            </li>
            <li className="ml-7 mb-4 lg:ml-10 text-xl font-mono">Main</li>

            {Main.map((value, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    !value.select &&
                    " w-[240px] hover:bg-orange-300 hover:rounded-full hover:rounded-l-none hover:h-12 hover:mb-2 hover:pt-2 duration-200"
                  }`}
                  value={value.select}
                  onClick={() => select(value)}
                >
                  <li
                    className={`${
                      value.select &&
                      " h-11 lg:w-[200px] bg-orange-300 rounded-full rounded-l-none bottom-0 lg:border-l-8 border-orange-500 lg:pt-3 lg:pl-7"
                    } ${
                      value.select ? "" : "lg:ml-8 pt-2"
                    }  mb-5  flex font-sans text-sm invisible hover:text-orange-400 duration-300 lg:visible cursor-pointer`}
                  >
                    <span
                      className={`text-2xl mr-2 mt-[-5px] ml-8 lg:ml-0 visible md:lg:visible ${
                        value.select &&
                        "w-10 lg:w-6 text-orange-600 lg:text-orange-500 lg:h-0 h-10 pt-2 lg:pt-0 lg:pl-0 pl-2  bg-orange-300"
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
            <li className="ml-2 lg:ml-10 mb-4  text-lg font-mono lg-pl-4 lg:text-xl">
              Accounts
            </li>
            {Account.map((value, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    !value.select &&
                    " w-[240px] hover:bg-orange-300 hover:rounded-full hover:rounded-l-none hover:h-12 hover:mb-2 hover:pt-2 duration-200"
                  }`}
                  onClick={() => select(index)}
                >
                  <li
                    className={`${
                      value.select &&
                      " h-12 lg:w-[200px] bg-orange-300 rounded-full rounded-l-none bottom-0 lg:border-l-8 border-orange-500 lg:pt-4 lg:pl-7"
                    } ${
                      value.select ? "" : "lg:ml-8 pt-2"
                    }  mb-6  flex font-sans text-sm invisible hover:text-orange-400 duration-300 lg:visible cursor-pointer `}
                  >
                    <span
                      className={`text-2xl mr-2 mt-[-5px] ml-8 lg:ml-0 visible md:lg:visible ${
                        value.select &&
                        "w-10 lg:w-6 text-orange-600 lg:text-orange-500 lg:h-0 h-10 pt-2 lg:pt-0 lg:pl-0 pl-2  bg-orange-300"
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
        </div>
      </div>
    </div>
  );
}

export default HomeSidePannel;
