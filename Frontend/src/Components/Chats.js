import React from "react";
import { IoMdAddCircle } from "react-icons/io";

function Chats(props) {
  return (
    <div className=" w-[70%] shadow-2xl ">
      <div className="  grid place-content-center justify-start border mt-2  h-12 bg-white shadow-lg border-l-0 border-r-0 dark:bg-gray-600">
        <h1 className="text-black dark:text-white font-medium pl-5 font-mono">
         {props.personal? "Chat" : "# Community Name" } 
        </h1>
      </div>
      <div className="">
        <div className="h-[650px] bg-white bottom-0 relative dark:bg dark:bg-[#36393f] !overflow-y-scroll overflow-x-hidden">
            <div className=" bottom-0 sm:pl-8 mb-5 dark:text-white m-2 flex w-full hover:shadow-sm ">
            <div className="w-8 mt-2 mr-2 sm:visible invisible">
              <img className="rounded-full" src="../Image/img_avatar.png" alt="" />
            </div>
            <div className="">
              <h1 className="text-base font-semibold font-some">Vishnu s kumar</h1>
              <p className=" text-sm font-light">Hello</p>
            </div>
          </div>
          <div className=" bottom-0 sm:pl-8 dark:text-white m-2 flex w-full hover:shadow-sm">
            <div className="w-8 mt-2 mr-2 sm:visible invisible">
              <img className="rounded-full" src="../Image/img_avatar.png" alt="" />
            </div>
            <div className="">
              <h1 className="text-base font-semibold font-some">Sabari</h1>
              <p className="text-sm font-light">Hi</p>
            </div>
          </div>
        </div>
        <div className="h-16 bg-white border dark:bg-[#3a3f45] border-l-0 border-r-0 ">
          <div className=" text-center mt-3 flex">
            <div className="grid place-content-center mr-2 ml-2  dark:text-gray-200">
              <button className="text-2xl">
                <IoMdAddCircle />
              </button>
              <input className="absolute block w-5 opacity-0" type="file" />
            </div>
            <input
              className="w-[90%] dark:bg-[#36393f] dark:border-[#4f5156] dark:text-white text= rounded h-9 bg-slate-100 outline-gray-400 border pl-5"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chats;
