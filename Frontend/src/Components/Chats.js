/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { getCommunities } from "../redux/features/CommunitySlice";
import { useSelector, useDispatch } from "react-redux";
import { newCommunityMessage } from "../redux/features/SendGroupMessageSlice";
import { newPersonalMessage } from "../redux/features/SendePersonalMsg";
import { getGroupChat } from "../redux/features/GroupMessage";
import {getPersonalMsg} from "../redux/features/getPersonalMsg"
import { io } from "socket.io-client";
import { format } from "timeago.js";
function Chats(props) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");
  const { communities } = useSelector((state) => ({ ...state.communities }));
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { communityChat } = useSelector((state) => ({ ...state.newMessage }));
  const { friends } = useSelector((state) => ({ ...state.friends }));
  const {personalChat} = useSelector((state) => ({ ...state.newPersonalMessage }));
  const query = new URLSearchParams(window.location.search);
  const channelId = query.get("id");
  const scrollRef = useRef();
  var socket;
  useEffect(() => {
    socket = io("ws://localhost:3006");
    socket.emit("setup", user?._id);
    socket.on("connected", () => {
      // alert("connected")
    });
  }, []);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const channelId = query.get("id");
    const PersonalId = props.chat?._id
    if (props.personal) {
      socket?.emit("JoinPersonalChat", PersonalId);
    } else {
      socket?.emit("JoinCommunity", channelId);
      console.log("user joind", channelId);
    }
  }, [channelId]);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const channelId = query.get("id");
    if (props.personal) {
      socket?.on("messageReceived", (info) => {
        console.log(info.channel,"Info channel", user._id,"User Id");
        if (channelId === info.sender) {
          // Give Notification
          console.log(
            "User is in same channel",
            channelId,
            "Socket :",
            info.channel
          );
          dispatch(getPersonalMsg(channelId))
        } else {
          console.log("Other channel");
        }
      });
    } else {
      socket?.on("messageReceived", (info) => {
        if (channelId === info.channel) {
          // Give Notification
          console.log(
            "User is in same channel",
            channelId,
            "Socket :",
            info.channel
          );
          dispatch(getGroupChat(info.channel));
        } else {
          console.log("Other channel");
        }
      });
    }
  });

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [props.chat]);

  useEffect(() => {
    setMessage("");
  }, [communityChat]);

  useEffect(() => {
    if (window.location.pathname === "/GroupChat" && channelId) {
      dispatch(getGroupChat(channelId));
    } else {
      console.log("Personal Chat");
    }
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [channelId, communityChat, dispatch]);

  const sendMessage = async (e) => {
    socket = io("ws://localhost:3006");
    e.preventDefault();
    const [Name] = await friends?.Following?.filter(
      (data) => data.uid === channelId
    );
    if (props.personal) {
      setMessage("");
      dispatch(
        newPersonalMessage({
          Sender: { Name: user.name, Id: user._id },
          Recever: { Name: Name.UserName, Id: Name.uid },
          Messages: [
            {
              UserName: user.name,
              UserId: user._id,
              Message: message,
              Time: Date.now(),
            },
          ],
        })
      )
      socket.emit("NewMessage", {
        sender: user._id,
        channel: channelId,
      });
    } else {
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
      socket.emit("NewMessage", {
        sender: user._id,
        channel: channelId,
      });
    }
  };

  return (
    <div className=" w-[70%] shadow-2xl ">
      <div className="  grid place-content-center justify-start border mt-2  h-12 bg-white shadow-lg border-l-0 border-r-0 dark:bg-gray-600">
        <h1 className="text-black dark:text-white font-medium pl-5 font-mono">
          <span className="font-extrabold text-lg font-mono"># </span>
          {props.personal
            ? friends?.Following?.map((data) =>
                data.uid === channelId ? data.UserName : ""
              )
            : `${
                props.chat?.CommunityName
                  ? props.chat.CommunityName
                  : "Community Name"
              }`}
        </h1>
      </div>
      <div className="top-0 right-0 left-0 bottom-0">
        <div
          ref={scrollRef}
          className="max-h-[700px] min-h-[500px] bg-white bottom-0 relative dark:bg dark:bg-[#393b40] !overflow-y-scroll overflow-x-hidden"
        >
          {props?.chat?.Messages?.map((message, index) => {
            return (
              <div key={index} ref={scrollRef}>
                <div
                  className={`bottom-0 sm:pl-8 dark:text-white p-3 m-2 flex w-[99%] hover:shadow-sm   hover:bg-slate-300 rounded-lg hover:bg-opacity-50 `}
                >
                  <div
                    className={`w-8  sm:visible invisible ${
                      (message.UserId || message.User?.uid) === user?._id
                        ? "order-2"
                        : "mt-1 mr-3"
                    } `}
                  >
                    <img
                      className={`rounded-full  ${
                        (message.UserId || message.User?.uid) === user?._id
                          ? ""
                          : ""
                      } `}
                      src="../Image/img_avatar.png"
                      alt=""
                    />
                  </div>
                  <div
                    className={` w-[99%] text-justify ${
                      (message.UserId || message.User?.uid) === user?._id
                        ? " mr-3 mt-1"
                        : ""
                    } `}
                  >
                    <div className={`flex ${(message.UserId || message.User?.uid) === user?._id ? "justify-end" : "" } `}>
                      <div>

                      <p
                        className={`text-sm font-light min-w-[100px] max-w-[300px] text-justify p-3 ${
                          (message.UserId || message.User?.uid) === user?._id
                            ? "order-2  mr-2  bg-[#128C7E] bg-opacity-60 rounded-2xl text-end text-white"
                            : " bg-[#075E54] opacity-90 text-white rounded-2xl"
                        }`}
                      >
                        <h1
                          className={`text-sm font-semibold font-Roboto pb-2  ${
                            (message.UserId || message.User?.uid) === user?._id
                              ? " order-2 text-end mb-1 text-black"
                              : ""
                          }`}
                        >
                          {props.personal
                            ? message.UserName
                            : message.User?.Name}
                        </h1>
                        {message?.Message}
                      </p>
                      <span className={`text-xs`}>
                        {format(message?.Time)}
                      </span>
                      </div>
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
