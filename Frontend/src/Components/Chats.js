/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { getCommunities } from "../redux/features/CommunitySlice";
import { useSelector, useDispatch } from "react-redux";
import { newCommunityMessage } from "../redux/features/SendGroupMessageSlice";
import { getGroupChat } from "../redux/features/GroupMessage";
import { io } from "socket.io-client";
import { format } from "timeago.js";
function Chats(props) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");
  const { communities } = useSelector((state) => ({ ...state.communities }));
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { communityChat } = useSelector((state) => ({ ...state.newMessage }));
  const query = new URLSearchParams(window.location.search);
  const channelId = query.get("id");
  const scrollRef = useRef();
  var socket
  useEffect(() => {
    socket= io("ws://localhost:3006");
    socket.emit("setup",user?._id)
    socket.on('connected',()=>{
      // alert("connected")
    })
  }, []);

  
    useEffect(()=>{
      const query = new URLSearchParams(window.location.search);
      const channelId = query.get("id");
      socket?.emit("JoinCommunity", channelId)
      console.log("user joind", channelId);
    },[channelId])

  useEffect(()=>{
    const query = new URLSearchParams(window.location.search);
    const channelId = query.get("id");
    socket?.on("messageReceived",(info)=>{
      if(channelId === info.channel ){
        // Give Notification
        console.log("User is in same channel", channelId, "Socket :", info.channel);
        dispatch(getGroupChat(info.channel));
      }else{
        console.log("Other channel")
      }
    })
  })

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [props.chat]);

  useEffect(() => {
    setMessage("");
  }, [communityChat]);

  useEffect(() => {
    if (window.location.pathname === "/GroupChat" && channelId) {
      dispatch(getGroupChat(channelId));
    }
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [channelId, communityChat, dispatch]);

  const sendMessage = (e) => {
    socket= io("ws://localhost:3006");
    e.preventDefault();
    dispatch(
      newCommunityMessage({
        channelId,
        msg: {
          User: {
            Name: user.name,
            uid: user._id,
          },
          Message: message,
          Time: Date.now(),
        },
      })
    );
    socket.emit("NewMessage",{
      sender:user._id,
      channel:channelId
    })
    
  };

  return (
    <div className=" w-[70%] shadow-2xl">
      <div className="  grid place-content-center justify-start border mt-2  h-12 bg-white shadow-lg border-l-0 border-r-0 dark:bg-gray-600">
        <h1 className="text-black dark:text-white font-medium pl-5 font-mono">
          <span className="font-extrabold text-lg font-mono"># </span>
          {props.personal
            ? "Chat"
            : `${
                props.chat?.CommunityName
                  ? props.chat.CommunityName
                  : "Community Name"
              }`}
        </h1>
      </div>
      <div className="">
        <div
          ref={scrollRef}
          className="h-[650px] bg-white bottom-0 relative dark:bg dark:bg-[#393b40] !overflow-y-scroll overflow-x-hidden"
        >
          {props?.chat?.Messages.map((message, index) => {
            return (
              <div key={index} ref={scrollRef}>
                <div className=" bottom-0 sm:pl-8 dark:text-white p-3 m-2 flex w-[99%] hover:shadow-sm hover:bg-slate-300 rounded-lg hover:bg-opacity-50">
                  <div className="w-8 mt-2 mr-2 sm:visible invisible">
                    <img
                      className="rounded-full"
                      src="../Image/img_avatar.png"
                      alt=""
                    />
                  </div>
                  <div className=" w-[99%]">
                    <h1 className="text-sm font-semibold font-Roboto">
                      {message?.User.Name}
                    </h1>
                    <div className="flex justify-between">
                      <p className=" text-sm font-light">{message?.Message}</p>
                      <span className="text-xs justify-end">
                        {format(message?.Time)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="h-16 bg-white border dark:bg-[#3a3f45] border-l-0 border-r-0 ">
          <div className=" text-center mt-3 flex">
            <form className="flex w-full" onSubmit={sendMessage}>
              <div className="grid place-content-center mr-2 ml-2  dark:text-gray-200">
                <button className="text-2xl">
                  <IoMdAddCircle />
                </button>
                <input className="absolute block w-5 opacity-0" type="file" />
              </div>
              <input
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="w-[90%] dark:bg-[#36393f] dark:border-[#4f5156] dark:text-white text= rounded h-9 bg-slate-100 outline-gray-400 border pl-5"
                type="text"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chats;
