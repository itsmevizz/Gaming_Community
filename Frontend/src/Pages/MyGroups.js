import React, { useEffect, useState } from "react";
import CommunityCard from "../Components/Cards";
import HomeNavBar from "../Components/HomeNavBar";
import HomeSidePannel from "../Components/HomeSidePannel";
import CreationForm from "../Components/CreationForm";
import Chat from "../Components/Chats";
import { useSelector } from "react-redux";

function MyGroups() {
  const [addCommunity, showAddCommunity] = useState(false);
  const { value } = useSelector((state) => state.groupChat);
  const add = () => {
    addCommunity ? showAddCommunity(false) : showAddCommunity(true);
  };

  return (
    <div>
      <HomeNavBar />
      <HomeSidePannel />
      
      {value ? (
        <div className="flex justify-center ml-16">
          <Chat />
        </div>
      ) : (
        <div>
            {addCommunity ? (
        <div
          className={`w-[30%] mx-[23%] sm:mx-[20%] md:mx-[20%] mt-5 lg:mx-[19%] duration-500`}
        >
          <button
            type="button"
            class="bg-white rounded-md p-2 ml-5 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={add}
          >
            <span class="sr-only">Close menu</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <CreationForm />
        </div>
      ) : (
        <div
          onClick={add}
          className="w-[40%] lg:w-[30%] mx-[28%] sm:mx-[24%] md:mx-[22%] lg:mx-[20%] mt-5 duration-500"
        >
          <button className="w-full sm:w-1/2 md:w-1/2 h-10 mt-4 uppercase text-white bg-orange-500 dark:bg-orange-600 rounded-3xl font-poppins text-xs lg:text-sm font-medium transition hover:shadow-lg hover:scale-105  hover:text-red-200 hover:duration-700 ease-in-out">
            Create Community
          </button>
        </div>
      )}

      <div className="w-[70%] mx-[23%] sm:mx-[20%] md:mx-[20%] lg:mx-[19%] mt-2 duration-500">
        <div className=" font-mono font-semibold text-xl pl-8 -mb-1 mt-5">
          My Communitys
        </div>
        <CommunityCard myGroup={true} />
      </div>
        </div>
      )}
    </div>
  );
}

export default MyGroups;
