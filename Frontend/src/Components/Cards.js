import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { motion } from "framer-motion"
import { getGroupChat } from '../redux/features/GroupMessage'
import { joinToCommunity } from '../redux/features/JoinCommunity'
function CommunityCard(props) {
  const { user } = useSelector((state) => ({ ...state.auth }))
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const data = props.data
  var myId = null

  console.log(props);

  const Showchat = (id) => {
    dispatch(getGroupChat(id))
    Navigate(`/GroupChat?id=${id}`)
  };

  const joinGroup = (data) => {
    dispatch(joinToCommunity({
      data,
      userData: {
        UserName: user?.name,
        UserId: user?._id,
      }
    }))
  }

  return (
    <div className={``}>
      {
        props.loading ? <div className='mt-[25%] grid place-content-center'>
          <div className=" spinner-border animate-spin inline-block w-10 h-10 border-4 rounded-full text-red-600 ml-5 mb-2">
          </div>
          <div className='text-xl font-poppins animate-pulse'>
            <span>Loading...</span>
          </div>
        </div>
          :
          <div className="flex flex-wrap m-3 ">
            {data?.map((info, index) => {
              //   { props.myGroup && `${info.Members?.filter((D) => D.UserId === user?._id)}`? 
              //  }
              return (
                <motion.div key={index} className={`w-full sm:w-1/2  ${props.members ? "md:w-1/6" : "md:w-1/4"} flex flex-col p-3 duration-100`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
                    <div
                      className={`bg-cover bg-center ${props.members ? "h-40" : "h-60"}`}
                      style={{ backgroundImage: `url("../Image/ekLR4no6adtCNHNuLV3cc3.jpg")` }}
                    >
                      <span className="font-semibold text-sm text-white ml-2">{`${info.Name ? info.Name : info.name ? info.name : ""}`}</span>
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

                        <button onClick={() => props.myGroup ? Showchat(info?._id) : info.Members?.filter((D) => D.UserId === user?._id) ? Showchat(info?._id) : joinGroup(info?._id)} className={`w-full sm:w-1/2 md:w-1/2 ${props.myGroup ? "h-7" : "h-10"} mt-4 uppercase text-white bg-orange-500 rounded-3xl font-poppins text-xs lg:text-sm font-medium transition hover:shadow-lg hover:scale-105  hover:text-red-200 hover:duration-700 ease-in-out`}>
                          {props.members ? "Follow" : props.myGroup ? "View" : `${info.Members?.filter((D) => D.UserId === user?._id)}` ? "View" : "Join"}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
      }
    </div>
  );
}

export default CommunityCard;
