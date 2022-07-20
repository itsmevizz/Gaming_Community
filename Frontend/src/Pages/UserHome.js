import React, { useEffect } from 'react'
import Carousel from '../Components/Carousel'
import CommunityCard from '../Components/CommunityCard'
import HomeNavBar from '../Components/HomeNavBar'
import HomeSidePannel from '../Components/HomeSidePannel'
import NewsArchive from '../Components/NewsArchive'

function UserHome() {
  useEffect(()=>{
   document.title = "Home";
  },[])
  return (
    <div>
      <HomeNavBar/>
      <HomeSidePannel />
      <div className=' lg:flex lg:flex-col select-none'>
      <Carousel values={"w-[60%] md:w-2/3 lg:w-2/5 flex flex-col left-[50%]  lg:left-[16%] mx-32 sm:mx-36 md:mx-44 lg:mx-[20%] mt-14"}/>
      <NewsArchive values={"w-[60%] md:w-2/3 lg:w-2/6 flex flex-col left-[45%] sm:left-[20%] md:left-[18%] lg:left-[63%] m-auto -mx-14 sm:mx-[0] lg:-my-[265px] relative"}/>
      </div>
      <div className='w-4/5 left-[12%] my-2 lg:left-[16%] ml-9  absolute select-none'>
        <h1 className="uppercase  ml-10 mt-1 font-mono font-medium -mb-6 text-sm lg:text-xl relative upperca">Communities</h1>
          <CommunityCard/>
        </div>

    </div>
  )
}

export default UserHome