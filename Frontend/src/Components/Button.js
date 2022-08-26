import React from 'react'
import OBSWebSocket from 'obs-websocket-js';
import axios from 'axios';

function Button() {


    const startStream =async()=>{
        // 'rtmp://127.0.0.1:1935/live
       const streams = axios.create({
            baseURL:'http://localhost:8000'
        }) 
        const response = await streams.get("/live/9849.flv","Helloscuo");
        console.log(response);
    }
  return (
    <div onClick={()=>startStream()} className='w-[80%] mx-20 lg:mx-72 mt-5'>
        <div className='h-10 w-[120px] text-center grid place-content-center rounded-2xl bg-orange-400 cursor-pointer shadow-xl border-1'>
           <p className=' font-serif font-bold'>
             Start Stream
            </p>
        </div>
    </div>
  )
}

export default Button