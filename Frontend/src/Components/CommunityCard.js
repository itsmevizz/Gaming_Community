import React from "react";

function CommunityCard(props) {
  console.log(props.values);
  return (
    <div className={``}>
      
        <div className="flex flex-wrap m-3">
          <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col p-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
              <div
                className="bg-cover bg-center h-60"
                style={{ backgroundImage: `url("../Image/10927348.jpg")` }}
              ></div>
              <div className="p-4 flex-1 flex flex-col">
                <div className=" justify-around grid grid-cols-2 place-content-center text-center mb-5">
                  <div>
                    50
                    <p className="text-xs lg:text-base">Members</p>
                  </div>
                  <div>
                    50
                    <p className="text-xs lg:text-base">Online</p>
                  </div>
                </div>
                <div className="border-t text-center grid place-items-center">
                  <button className="w-full sm:w-1/2 md:w-1/2 h-10 mt-4 uppercase text-white bg-orange-500 rounded-3xl font-poppins text-xs lg:text-sm font-medium transition hover:shadow-lg hover:scale-105  hover:text-red-200 hover:duration-700 ease-in-out  ">
                    Join Group
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col p-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
              <div
                className="bg-cover bg-center h-60"
                style={{ backgroundImage: `url("../Image/10927348.jpg")` }}
              ></div>
              <div className="p-4 flex-1 flex flex-col">
                <div className=" justify-around grid grid-cols-2 place-content-center text-center mb-5">
                  <div>
                    50
                    <p className="text-xs lg:text-base">Members</p>
                  </div>
                  <div>
                    50
                    <p className="text-xs lg:text-base">Online</p>
                  </div>
                </div>
                <div className="border-t text-center grid place-items-center">
                  <button className="w-full sm:w-1/2 md:w-1/2 h-10 mt-4 uppercase text-white bg-orange-500 rounded-3xl font-poppins text-xs lg:text-sm font-medium transition hover:shadow-lg hover:scale-105  hover:text-red-200 hover:duration-700 ease-in-out  ">
                    Join Group
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col p-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
              <div
                className="bg-cover bg-center h-60"
                style={{ backgroundImage: `url("../Image/10927348.jpg")` }}
              ></div>
              <div className="p-4 flex-1 flex flex-col">
                <div className=" justify-around grid grid-cols-2 place-content-center text-center mb-5">
                  <div>
                    50
                    <p className="text-xs lg:text-base">Members</p>
                  </div>
                  <div>
                    50
                    <p className="text-xs lg:text-base">Online</p>
                  </div>
                </div>
                <div className="border-t text-center grid place-items-center">
                  <button className="w-full sm:w-1/2 md:w-1/2 h-10 mt-4 uppercase text-white bg-orange-500 rounded-3xl font-poppins text-xs lg:text-sm font-medium transition hover:shadow-lg hover:scale-105  hover:text-red-200 hover:duration-700 ease-in-out  ">
                    Join Group
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col p-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
              <div
                className="bg-cover bg-center h-60"
                style={{ backgroundImage: `url("../Image/10927348.jpg")` }}
              ></div>
              <div className="p-4 flex-1 flex flex-col">
                <div className=" justify-around grid grid-cols-2 place-content-center text-center mb-5">
                  <div>
                    50
                    <p className="text-xs lg:text-base">Members</p>
                  </div>
                  <div>
                    50
                    <p className="text-xs lg:text-base">Online</p>
                  </div>
                </div>
                <div className="border-t text-center grid place-items-center">
                  <button className="w-full sm:w-1/2 md:w-1/2 h-10 mt-4 uppercase text-white bg-orange-500 rounded-3xl font-poppins text-xs lg:text-sm font-medium transition hover:shadow-lg hover:scale-105  hover:text-red-200 hover:duration-700 ease-in-out  ">
                    Join Group
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default CommunityCard;
