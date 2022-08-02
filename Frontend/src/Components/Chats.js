import React, { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { getCommunities } from "../redux/features/CommunitySlice"
import { useSelector, useDispatch } from "react-redux"

function Chats(props) {
  const dispatch = useDispatch()
  const [message, setMessage] = useState("")
  const [file, setFile] = useState('')
  const { communities } = useSelector((state) => ({ ...state.communities }))
  const { groupChat } = useSelector((state) => ({ ...state.groupChat }))
  useEffect(() => {
    dispatch(getCommunities())
    console.log(groupChat);
  }, [groupChat])

  const sendMessage = (e) => {
    e.preventDefault()
  }


  return (
    <div className=" w-[70%] shadow-2xl">
      <div className="  grid place-content-center justify-start border mt-2  h-12 bg-white shadow-lg border-l-0 border-r-0 dark:bg-gray-600">
        <h1 className="text-black dark:text-white font-medium pl-5 font-mono">
          <span className="font-extrabold text-lg font-mono"># </span>
          {props.personal ? "Chat" : `${groupChat?.CommunityName ? groupChat.CommunityName : 'Community Name'}`}
        </h1>
      </div>
      <div className="">
        <div className="h-[650px] bg-white bottom-0 relative dark:bg dark:bg-[#393b40] !overflow-y-scroll overflow-x-hidden">
          {groupChat?.Messages.map((message, index) => {
            return (
              <div key={index} className=" bottom-0 sm:pl-8 dark:text-white p-3 m-2 flex w-[99%] hover:shadow-sm hover:bg-slate-300 rounded-lg hover:bg-opacity-50">
                <div className="w-8 mt-2 mr-2 sm:visible invisible">
                  <img className="rounded-full" src="../Image/img_avatar.png" alt="" />
                </div>
                <div className="">
                  <h1 className="text-base font-semibold font-some">{message.User.Name}</h1>
                  <p className=" text-sm font-light">{message.Message}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="h-16 bg-white border dark:bg-[#3a3f45] border-l-0 border-r-0 ">
          <div className=" text-center mt-3 flex">
            <form className="flex w-full" onSubmit={sendMessage} >
              <div className="grid place-content-center mr-2 ml-2  dark:text-gray-200">
                <button className="text-2xl">
                  <IoMdAddCircle />
                </button>
                <input className="absolute block w-5 opacity-0" type="file" />
              </div>
              <input
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value)
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
