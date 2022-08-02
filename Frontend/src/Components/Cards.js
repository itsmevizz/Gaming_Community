import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { getCommunities } from "../redux/features/CommunitySlice"
import { getMembers } from "../redux/features/MembersSlice"
import { motion } from "framer-motion"
function CommunityCard(props) {
  const Navigate = useNavigate()
  const data = props.data
  const Showchat = () => {
    Navigate("/GroupChat")

  };

  const img = [
    {
      img: `url("../Image/5c443b39f87cd3b4520ef78679a3eb957d1eae2d_the-witcher-2019-most-beautiful-games.avif")`
    },
    { img: `url("../Image/10927348.jpg")` },
    { img: `url("../Image/wp2637598.jpg")` },
    { img: `url("../Image/ekLR4no6adtCNHNuLV3cc3.jpg")` },
  ];
  return (
    <div className={``}>
      {
        props.loading ? <div className='mt-[25%] grid place-content-center'>
          <div class=" spinner-border animate-spin inline-block w-10 h-10 border-4 rounded-full text-red-600 ml-5 mb-2">
          </div>
          <div className='text-xl font-poppins animate-pulse'>
            <span>Loading...</span>
          </div>
        </div>
          :
          <div className="flex flex-wrap m-3 ">
            {data?.map((info, index) => {
              return (
                <motion.div className={`w-full sm:w-1/2  ${props.members ? "md:w-1/6" : "md:w-1/4"} flex flex-col p-3 duration-100`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
                    <div
                      key={index}
                      className={`bg-cover bg-center ${props.members ? "h-40" : "h-60"}`}
                      style={ { backgroundImage: `${info.img}` }}
                    >  
                    <span>{`${info.Name? info.Name : ""}`}</span>
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <div className={` justify-around grid ${props.members ? "grid-cols-1" : "grid-cols-2"} place-content-center text-center mb-1`}>
                        {props.members ?
                          <div>
                            50
                            <p className="text-xs lg:text-base">Followers</p>
                          </div>
                          :
                          <>
                            <div>
                              {`${info.Members?.length}`}
                              <p className="text-xs lg:text-base">Members</p>
                            </div>
                            <div>
                              50
                              <p className="text-xs lg:text-base">Online</p>
                            </div>
                          </>
                        }

                      </div>
                      <div className="border-t text-center grid place-items-center">
                        <button onClick={() => props.myGroup ? Showchat() : ''} className={`w-full sm:w-1/2 md:w-1/2 ${props.myGroup ? "h-7" : "h-10"} mt-4 uppercase text-white bg-orange-500 rounded-3xl font-poppins text-xs lg:text-sm font-medium transition hover:shadow-lg hover:scale-105  hover:text-red-200 hover:duration-700 ease-in-out`}>
                          {props.members ? "Follow" : props.myGroup ? "View" : "Join Group"}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
      }
    </div>
  );
}

export default CommunityCard;
