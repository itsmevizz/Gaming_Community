import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { getGroupChat } from "../redux/features/GroupMessage";
import { joinToCommunity } from "../redux/features/JoinCommunity";
import { toast, ToastContainer } from "react-toastify";
import { FollowUser } from "../redux/features/FollowUser";
import { refreshCommunities } from "../redux/features/CommunitySlice";
import { refreshMembers } from "../redux/features/MembersSlice";
import { unFollowUser } from "../redux/features/unFollowUser";
function CommunityCard(props) {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { status, loading, error } = useSelector((state) => ({
    ...state.joinCommunity,
  }));
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const data = props.data;
  const toastId = useRef(1);

  useEffect(() => {
    if (!toast.isActive(toastId.current) && loading) {
      toastId.current = toast.info(
        "Loading...",
        { autoClose: false },
        { toastId: toastId.current }
      );
    } else if (toast.isActive(toastId.current) && status) {
      toastId.current = toast.update(
        toastId.current,
        { type: toast.TYPE.SUCCESS, autoClose: 1000, render: "Success..." },
        { toastId: toastId.current }
      );
    } else if (toast.isActive(toastId.current) && error) {
      toastId.current = toast.update(
        toastId.current,
        { type: toast.TYPE.ERROR, autoClose: 1000, render: error },
        { toastId: toastId.current }
      );
    }
  }, [status, loading, error]);
  const Showchat = (id) => {
    dispatch(getGroupChat(id));
    Navigate(`/GroupChat?id=${id}`);
  };

  const joinGroup = (data) => {
    dispatch(
      joinToCommunity({
        data,
        userData: {
          UserName: user?.name,
          UserId: user?._id,
        },
      })
    ).then(() => {
      dispatch(refreshCommunities());
    });
  };

  const followUser = (id, name) => {
    dispatch(FollowUser({ id: id, userName: name })).then(() => {
      dispatch(refreshMembers());
    });
  };

  const unFollow = (details, id) => {
    const data = { ...details, _id: id };
    dispatch(unFollowUser(data)).then(() => {
      dispatch(refreshMembers());
    });
  };

  return (
    <div className={``}>
      <ToastContainer
        limit={1}
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      {props.loading ? (
        <div className="mt-[25%] grid place-content-center">
          <div className=" spinner-border animate-spin inline-block w-10 h-10 border-4 rounded-full text-red-600 ml-5 mb-2"></div>
          <div className="text-xl font-poppins animate-pulse">
            <span>Loading...</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap m-3 ">
          {data?.map((info, index) => {
            return props.myGroup ? (
              `${info.Members?.filter((D) => D.UserId === user?._id)}` ? (
                <motion.div
                  key={index}
                  className={`w-full sm:w-1/2  ${
                    props.members ? "md:w-1/6" : "md:w-1/4"
                  } flex flex-col p-3 duration-100`}
                  // initial={{ scale: .5 }}
                  // animate={{ scale: 1 }}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
                    <div
                      className={`bg-cover bg-center ${
                        props.members ? "h-40" : "h-60"
                      }`}
                      style={{
                        backgroundImage: `url("../Image/ekLR4no6adtCNHNuLV3cc3.jpg")`,
                      }}
                    >
                      <span className="font-semibold text-sm text-white ml-2">{`${
                        info.Name ? info.Name : info.name ? info.name : ""
                      }`}</span>
                    </div>

                    <div className="p-4 flex-1 flex flex-col">
                      <div
                        className={` justify-around grid ${
                          props.members ? "grid-cols-1" : "grid-cols-2"
                        } place-content-center text-center mb-1`}
                      >
                        {props.members ? (
                          <div>
                            {info.Followers?.length}
                            <p className="text-xs lg:text-base">Followers</p>
                          </div>
                        ) : (
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
                        )}
                      </div>
                      <div className="border-t text-center grid place-items-center">
                        <button
                          onClick={() =>
                            props.myGroup
                              ? Showchat(info?._id)
                              : info.Members?.filter(
                                  (D) => D.UserId === user?._id
                                )
                              ? Showchat(info?._id)
                              : joinGroup(info?._id)
                          }
                          className={`w-full sm:w-1/2 md:w-1/2 ${
                            props.myGroup ? "h-7" : "h-10"
                          } mt-4 uppercase text-white bg-orange-500 rounded-3xl font-poppins text-xs lg:text-sm font-medium transition hover:shadow-lg hover:scale-105  hover:text-red-200 hover:duration-700 ease-in-out`}
                        >
                          {props.members
                            ? "Follow"
                            : props.myGroup
                            ? "View"
                            : `${info.Members?.filter(
                                (D) => D.UserId === user?._id
                              )}`
                            ? "View"
                            : "Join"}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                ""
              )
            ) : props.members || props.community ? (
              info?._id === user?._id ? (
                " "
              ) : (
                <motion.div
                  key={index}
                  className={`w-full sm:w-1/2  ${
                    props.members ? "md:w-1/6" : "md:w-1/4"
                  } flex flex-col p-3 duration-100`}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
                    <div
                      className={`bg-cover bg-center ${
                        props.members ? "h-40" : "h-60"
                      }`}
                      style={{
                        backgroundImage: `url("../Image/ekLR4no6adtCNHNuLV3cc3.jpg")`,
                      }}
                    >
                      <span className="font-semibold text-sm text-white ml-2">{`${
                        info.Name ? info.Name : info.name ? info.name : ""
                      }`}</span>
                    </div>

                    <div className="p-4 flex-1 flex flex-col">
                      <div
                        className={` justify-around grid ${
                          props.members ? "grid-cols-1" : "grid-cols-2"
                        } place-content-center text-center mb-1`}
                      >
                        {props.members ? (
                          <div>
                            {info.Followers?.length}
                            <p className="text-xs lg:text-base">Followers</p>
                          </div>
                        ) : (
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
                        )}
                      </div>
                      <div className="border-t text-center grid place-items-center">
                        <button
                          key={index}
                          onClick={() =>
                            props.myGroup
                              ? Showchat(info?._id)
                              : props.members
                              ? `${info.Followers?.filter(
                                  (D) => D.uid === user?._id
                                )}`
                                ? unFollow(
                                    info.Followers?.filter(
                                      (U) => U.uid === user?._id
                                    ),
                                    info._id
                                  )
                                : followUser(info?._id, info.name)
                              : `${info.Members?.filter(
                                  (D) => D.UserId === user?._id
                                )}`
                              ? Showchat(info?._id)
                              : joinGroup(info?._id)
                          }
                          className={`w-full sm:w-1/2 md:w-1/2 ${
                            props.myGroup ? "h-7" : "h-10"
                          }  mt-4 uppercase text-white bg-orange-500 rounded-3xl font-poppins text-xs lg:text-sm font-medium transition hover:shadow-lg hover:scale-105  hover:text-red-200 hover:duration-700 ease-in-out`}
                        >
                          {props.members
                            ? `${info.Followers?.filter(
                                (D) => D.uid === user?._id
                              )}`
                              ? "Unfollow"
                              : "Follow"
                            : props.myGroup
                            ? "View"
                            : `${info.Members?.filter(
                                (D) => D.UserId === user?._id
                              )}`
                            ? "View"
                            : "Join"}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            ) : (
              ""
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CommunityCard;
