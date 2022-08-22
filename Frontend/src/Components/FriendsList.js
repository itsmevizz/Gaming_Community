import React, { useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import {getPersonalMsg} from "../redux/features/getPersonalMsg"
import {useDispatch, useSelector} from 'react-redux'
function FriendsList({friends}) {
  const {personalChat} = useSelector((state) => ({ ...state.newPersonalMessage }));
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch()
  const query = new URLSearchParams(window.location.search);
  const channelId = query.get('id')
  useEffect(()=>{
    console.log(personalChat,"Datataaaa");
    dispatch(getPersonalMsg(channelId))
  },[personalChat])
  const friend = (id) => {
    setSearchParams(`?id=${id}`)
    dispatch(getPersonalMsg(id))
  }
  return (
    <div>
      <div className="w-[80px] ml-10 lg:w-[250px] h-[500px] bg-white border shadow-2xl">
        <div className="h-full bg-white bottom-0 relative dark:bg dark:bg-[#36393f] !overflow-y-scroll overflow-x-hidden">
          {friends?.Following.map((item, index)=>{
          return (
          <div key={index}  onClick={() => { friend(item.uid) }} className={`${channelId === item.uid? "bg-slate-600 bg-opacity-40" : ""} bottom-0 pl-0 lg:pl-8 mt-3 dark:text-white m-2 flex  lg:w-[95%] p-1 hover:shadow-sm cursor-pointer hover:bg-slate-400 hover:bg-opacity-40 rounded-2xl `}>
            <div className="lg:w-10">
              <img
                className="rounded-full"
                src="../Image/img_avatar.png"
                alt=""
              />
            </div>
            <div className="">
              <h1 className="text-base my-2 ml-2 font-semibold invisible lg:visible">{item.UserName}</h1>
            </div>
          </div>
          )
          })}
        </div>
        
      </div>
    </div>
  );
}

export default FriendsList;
