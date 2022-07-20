import React, { useEffect } from 'react'
import Carousel from '../Components/Carousel'
import CommunityCard from '../Components/CommunityCard'
import HomeNavBar from '../Components/HomeNavBar'
import HomeSidePannel from '../Components/HomeSidePannel'

function UserHome() {
  useEffect(()=>{
   document.title = "Home";
  },[])
  return (
    <div>
      <HomeNavBar/>
      <HomeSidePannel />
      <Carousel values={"w-[60%] md:w-2/3 lg:w-2/5 flex flex-col left-[50%]  lg:left-[16%] mx-32 sm:mx-36 md:mx-44 lg:mx-[20%] mt-16"}/>
    </div>
  )
}

export default UserHome