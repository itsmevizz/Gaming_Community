import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from '../Components/Carousel'
import CommunityCard from '../Components/Cards'
import HomeNavBar from '../Components/HomeNavBar'
import HomeSidePannel from '../Components/HomeSidePannel'
import NewsArchive from '../Components/NewsCarousel'
import { useSelector, useDispatch } from "react-redux"
import { motion } from 'framer-motion'
import {getCommunities} from "../redux/features/CommunitySlice"

function UserHome() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => ({ ...state.auth }))
  const {communities, loading} = useSelector((state)=>({...state.communities}))
  const Navigation = useNavigate()
  const {status} = useSelector((state)=>({...state.joinCommunity}))


  useEffect(() => {
    dispatch(getCommunities())
    document.title = "Home";
  },[status, dispatch ])
  return (
    <div className='select-none'>
      <HomeNavBar />
      <HomeSidePannel animate={{}} />
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{type:"spring" , delay:.2 }}
      >
        <div className=' lg:flex lg:flex-col'>
          <Carousel values={"w-[60%] md:w-2/3 lg:w-2/5 flex flex-col left-[50%]  lg:left-[16%] mx-32 sm:mx-36 md:mx-44 lg:mx-[20%] mt-14 duration-500"} />
          <NewsArchive values={"w-[60%] md:w-2/3 lg:w-2/6 flex flex-col   mx-[30%] md:mx-[20%] lg:mx-[62%] lg:-my-[265px] duration-500 relative"} carousel={true} />
        </div>
        <div className='w-[70%] mx-[23%] sm:mx-[20%] md:mx-[20%] lg:mx-[19%] mt-2 duration-500 '>
          <h1 className="uppercase  ml-10 mt-1 font-mono font-medium -mb-6 text-sm lg:text-xl upperca">Communities</h1>
          <CommunityCard myGroup={false} data={communities} loading={loading} />
        </div>
      </motion.div>
    </div>
  )
}

export default UserHome