import React, { useEffect } from "react";
import Chats from "../Components/Chats";
import FriendsList from "../Components/FriendsList";
import HomeNavBar from "../Components/HomeNavBar";
import HomeSidePannel from "../Components/HomeSidePannel";
import { useDispatch, useSelector } from "react-redux";
import { getFollowers } from "../redux/features/getFollowers";

function Chat() {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { friends } = useSelector((state) => ({ ...state.friends }));
  const { PersonalMessage } = useSelector((state) => ({ ...state.personal }));
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(user, "User 007");
    dispatch(getFollowers());
  }, []);
  return (
    <div>
      <HomeNavBar />
      <HomeSidePannel />
      <div className="flex justify-center ml-[20%] mt-1">
        <div className="mr-5 mt-14">
          <FriendsList friends={friends} />
        </div>
        <div className="w-[100%]">
          <Chats  personal={true} chat={PersonalMessage} />
        </div>
      </div>
    </div>
  );
}

export default Chat;
