import React, { useEffect, useState } from "react";
import CommunityCard from "../Components/Cards";
import HomeNavBar from "../Components/HomeNavBar";
import HomeSidePannel from "../Components/HomeSidePannel";
import CreationForm from "../Components/CreationForm";
import Chat from "../Components/Chats";
import { useDispatch, useSelector } from "react-redux"
import { getCommunities } from '../redux/features/CommunitySlice'
import {getMyCommuniries} from "../redux/features/MyCommunitiesSlice"
import { motion, AnimatePresence } from 'framer-motion'
function MyGroups() {
  const dispatch = useDispatch()
  const {user} = useSelector((state)=>({...state.auth}))
  const { groupChat } = useSelector((state) => ({ ...state.groupChat }))
  // const { members, loading } = useSelector((state) => ({ ...state.members }))
  const { communities, loading } = useSelector((state) => ({ ...state.communities }))
  useEffect(() => {
    dispatch(getMyCommuniries(user?._id))
  }, [])
  const [addCommunity, showAddCommunity] = useState(false);
  const add = () => {
    addCommunity ? showAddCommunity(false) : showAddCommunity(true);
  };

  return (
    <div>
      <HomeNavBar />
      <HomeSidePannel />
      <div>
        {addCommunity ? (
          <AnimatePresence>
            <motion.div
              className={`w-[30%] mx-[23%] sm:mx-[20%] md:mx-[20%] mt-5 lg:mx-[19%] duration-500`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
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
            </motion.div>
          </AnimatePresence>
        ) : (
          window.location.pathname !== "/GroupChat" ?
            <div
              onClick={add}
              className="w-[40%] lg:w-[30%] mx-[28%] sm:mx-[24%] md:mx-[22%] lg:mx-[20%] mt-5 duration-500"
            >
              <button className="w-full sm:w-1/2 md:w-1/2 h-10 mt-4 uppercase text-white bg-orange-500 dark:bg-orange-600 rounded-3xl font-poppins text-xs lg:text-sm font-medium transition hover:shadow-lg hover:scale-105  hover:text-red-200 hover:duration-700 ease-in-out">
                Create Community
              </button>
            </div> 
            :
            ""
        )}

        {window.location.pathname === "/GroupChat" ? <motion.div className="flex justify-center ml-16"
          initial={{ x: 200 }}
          animate={{ x: 0 }}
        >
          <Chat chat={groupChat}/>
        </motion.div> :
          <div className="w-[70%] mx-[23%] sm:mx-[20%] md:mx-[20%] lg:mx-[19%] mt-2 duration-500">
            <div className=" font-mono font-semibold text-xl pl-8 -mb-1 mt-5">
              My Communitys
            </div>
            <CommunityCard myGroup={true} data={communities} loading={loading}/>

          </div>
        }
      </div>
    </div>
  );
}

export default MyGroups;
