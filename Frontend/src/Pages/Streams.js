import React, { useEffect, useState } from "react";
import HomeNavBar from "../Components/HomeNavBar";
import HomeSidePannel from "../Components/HomeSidePannel";
import StreamCard from "../Components/StreamCard";
import axios from "axios";
import Button from "../Components/Button";

function Streams() {
  const [state, setState] = useState([])

  useEffect(()=>{
    getLiveStreams()
  },[])


  const getLiveStreams = () => {
    axios.get("http://127.0.0.1:8000/api/streams").then((res) => {
      let streams = res.data;
      if (typeof (res.data.live !== {})) {
        getStreamsInfo(res.data.live);  
      }
    });
  };

  const getStreamsInfo = (live_streams) => {
    const arr = Object.values(live_streams)
    setState(Object.values(live_streams))
    // axios
    //   .get("/streams/info", {
    //     params: {
    //       streams: live_streams,
    //     },
    //   })
    //   .then((res) => {
    //     setState(
    //       {
    //         live_streams: res.data,
    //       },
    //       () => {
    //         console.log(state);
    //       }
    //     );
    //   });
  };

  return (
    <div>
      <HomeNavBar />
      <HomeSidePannel />
      <Button/>
      <StreamCard streams={state}/>
    </div>
  );
}

export default Streams;
