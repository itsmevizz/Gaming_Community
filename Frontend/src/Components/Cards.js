import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { login } from "../redux/features/authSlice";
import { show, hide } from "../redux/features/CommunityChat"
function CommunityCard(props) {
  const dispatch = useDispatch()
  const { value } = useSelector((state) => state.groupChat)

  const Showchat = () => {
    value ? dispatch(hide()) : dispatch(show())
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
      <div className="flex flex-wrap m-3 ">
        {img.map((url, index) => {
          return (
            <div className={`w-full sm:w-1/2  ${props.members ? "md:w-1/6" : "md:w-1/4"} flex flex-col p-3 duration-500`}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
                <div
                  key={index}
                  className={`bg-cover bg-center ${props.members ? "h-40" : "h-60"}`}
                  style={{ backgroundImage: `${url.img}` }}
                ></div>
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
                          50
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CommunityCard;
