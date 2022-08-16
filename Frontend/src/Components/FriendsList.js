import React from "react";

function FriendsList() {
  return (
    <div>
      <div className="w-[80px] ml-10 lg:w-[250px] h-[500px] bg-white border shadow-2xl">
        <div className="h-full bg-white bottom-0 relative dark:bg dark:bg-[#36393f] !overflow-y-scroll overflow-x-hidden">
          <div className=" bottom-0 pl-0 lg:pl-8 mt-3 dark:text-white m-2 flex w-full hover:shadow-sm">
            <div className="lg:w-10">
              <img
                className="rounded-full"
                src="../Image/img_avatar.png"
                alt=""
              />
            </div>
            <div className="">
              <h1 className="text-base my-2 ml-2 font-semibold invisible lg:visible">Sabari</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendsList;
