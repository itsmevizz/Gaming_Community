import React from "react";
import Chats from "../Components/Chats";
import FriendsList from "../Components/FriendsList";
import HomeNavBar from "../Components/HomeNavBar";
import HomeSidePannel from "../Components/HomeSidePannel";

function Chat() {
  return (
    <div>
      <HomeNavBar />
      <HomeSidePannel />
      <div className="flex justify-center ml-[20%] mt-1">
        <div className="mr-5 mt-14">
        <FriendsList/>
        </div>
        <div className="w-[100%]">
        <Chats personal={true} />
        </div>
      </div>
    </div>
  );
}

export default Chat;
