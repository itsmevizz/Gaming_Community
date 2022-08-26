import React, { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import {ReactFlvPlayer} from 'react-flv-player'
import OBSWebSocket from 'obs-websocket-js';
function Streams({ streams }) {
  const obs = new OBSWebSocket();
  const [video, setVideo] = useState();
  const window = useRef(null);
  useEffect(() => {
    // console.log(streams);
    console.log(obs, " 0077");
  }, []);
  const watchStream = async (key) => {
    setVideo(`http://localhost:8000/live/${key}.flv`)
    console.log(video);
  };

  return (
    <div className="w-[80%] mx-20 lg:mx-72">
      <div class=" p-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-5">
        {streams.map((item, key) => {
          return (
            <div
              onClick={() => watchStream(item.publisher?.stream)}
              key={key}
              class="rounded overflow-hidden shadow-lg cursor-pointer select-none"
            >
              <div className="absolute text-white text-sm bg-opacity-90 w-auto pl-1 pr-1 text-center grid place-content-center m-2 h-5 rounded bg-red-600">
                Live
              </div>
              <img
                class="w-full"
                src="../Image/ekLR4no6adtCNHNuLV3cc3.jpg"
                alt="Live"
              />
              <div class="px-1 py-2">
                <div class="font-bold text-sm mb-2">Grand Theft Auto V</div>
                <p class="text-gray-700 text-base"></p>
              </div>
              <div class="px-1 pt-1 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                  {item.publisher?.stream}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div >
          {video ? (
            <div className="w-[900px] border-2">
              <ReactFlvPlayer url={`${video}`} isMuted={true} autoPlay={true} muted={true} controls={true}/>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Streams;
