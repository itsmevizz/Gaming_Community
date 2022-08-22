import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCommunity } from "../redux/features/CreateCommunitySlice";
import { refreshCommunities } from "../redux/features/CommunitySlice"

function NormalForm() {
  const [CommunityName, setCommunityName] = useState("");
  const [Topic, setTopic] = useState("");
  const [Description, setDescription] = useState("");
  const dispatch = useDispatch();
  const hangleSubimission = (e) => {
    e.preventDefault();
    const data = {
      Name:CommunityName,
      Topic:Topic,
      Description:Description,
    };
    dispatch(createCommunity(data)).then(()=>{
      dispatch(refreshCommunities())
      setCommunityName("")
      setTopic("")
      setDescription("")
    })
  };
  return (
    <div>
      <form onSubmit={hangleSubimission}>
        <div className=" ">
          <div className="w-[250px] lg:w-[90%] ml-5 pb-5 pt-5">
            <div class="mb-2">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Community Name
              </label>
              <input
                value={CommunityName}
                onChange={(e) => {
                  setCommunityName(e.target.value);
                }}
                type="text"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
            </div>
            <div class="mb-2">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Topic
              </label>
              <input
                value={Topic}
                type="text"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                onChange={(e) => {
                  setTopic(e.target.value);
                }}
              />
            </div>
            <div class="mb-2">
              <label
                for="repeat-password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Description
              </label>
              <textarea
                value={Description}
                type="text"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
            <div>
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                for="file_input"
              >
                Upload file
              </label>
              <input
                type="file"
                class="block w-full mb-2 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal text-xs rounded-lg  px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create New Community
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NormalForm;
